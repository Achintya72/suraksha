"use client";
import { createContext, useState } from "react";

const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [items, changeItems] = useState({});

    const addItem = (itemName, quantity, price) => {
        let item = items[itemName] ?? { quantity: 0, price: price};
        item.quantity += quantity;
        changeItems(prev => {
            prev[itemName] = item;
            return {...prev};
        });
        console.log(items);
    }

    const removeItem = (itemName, quantity, price) => {
        let item = items[itemName] ?? { quantity: quantity, price: price};
        item.quantity -= quantity;
        changeItems(prev => {
            prev[itemName] = item;
            return {...prev};
        })
    }


    const getTotalItems = () => {
        let count = 0;
        Object.keys(items).forEach(key => {
            count += items[key].quantity;
        })
        return count;
    }

    return (
        <StoreContext.Provider value={{addItem, removeItem, getTotalItems, items, changeItems}}>
            {children}
        </StoreContext.Provider>
    )
}

export {
    StoreContext as default,
    StoreContextProvider
}