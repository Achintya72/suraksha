"use client";
import { createContext, useState } from "react";

const StoreContext = createContext(null);

const plushies = ["elephant", 'giraffe', 'rhino', 'panda', 'deer', 'cheetah'];

const StoreContextProvider = ({ children }) => {
    const [items, changeItems] = useState({});

    const addItem = (itemName, quantity, price) => {
        let item = items[itemName] ?? { quantity: 0, price: price };
        item.quantity += quantity;
        changeItems(prev => {
            prev[itemName] = item;
            return { ...prev };
        });
        console.log(items);
    }

    const removeItem = (itemName, quantity, price) => {
        let item = items[itemName] ?? { quantity: quantity, price: price };
        item.quantity -= quantity;
        changeItems(prev => {
            if (item.quantity == 0) {
                delete prev[itemName];
            }
            else {
                prev[itemName] = item;
            }
            return { ...prev };
        })
    }

    const getTotalCost = () => {
        let cost = 0;
        Object.keys(items).map(key => {
            cost += items[key].quantity * items[key].price;
        });
        return cost;
    }

    const getItemName = (itemId) => {
        if (itemId == "donation") return "Donation";
        if (plushies.includes(itemId)) return "Suraksha " + itemId[0].toUpperCase() + itemId.slice(1) + " Plushie";
        if (itemId == "galaAdult") return "Suraksha Gala Adult Ticket";
        if (itemId == "galaChild") return "Suraksha Gala Child Ticket";
        else return itemId[0].toUpperCase() + itemId.slice(1) + " Adoption";
    }

    const getTotalItems = () => {
        let count = 0;
        Object.keys(items).forEach(key => {
            count += items[key].quantity;
        })
        return Math.round(count * 100) / 100;
    }

    const clearCart = () => {
        changeItems({});
    }

    const data = {
        addItem,
        getItemName,
        removeItem,
        getTotalItems,
        items,
        changeItems,
        getTotalCost,
        clearCart
    }

    return (
        <StoreContext.Provider value={data}>
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreContext as default,
    StoreContextProvider
}