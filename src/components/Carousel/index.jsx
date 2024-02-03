"use client";

import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useState, Children, useEffect, useRef } from "react";

// export function Carousel({children}) {
//     const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
//     const items = Children.toArray(children);

//     // we want the scope to be always to be in the scope of the array so that the carousel is endless
//     const indexInArrayScope =
//       ((activeIndex % items.length) + items.length) % items.length;

//     // so that the carousel is endless, we need to repeat the items twice
//     // then, we slice the the array so that we only have 3 items visible at the same time
//     const visibleItems = [...items, ...items].slice(
//       indexInArrayScope,
//       indexInArrayScope + 3
//     );
//     const handleClick = (newDirection) => {
//       setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
//     };

//     return (
//       <>
//         <div className={styles.wrapper}>
//           {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
//           <AnimatePresence mode="popLayout" initial={false}>
//             {visibleItems.map((item, index) => {
//               // The layout prop makes the elements change its position as soon as a new one is added
//               // The key tells framer-motion that the elements changed its position
//               return (
//                 <motion.div
//                   key={index}
//                   layout
//                   custom={{
//                     direction,
//                     position: () => {
//                       if (item === visibleItems[0]) {
//                         return "left";
//                       } else if (item === visibleItems[1]) {
//                         return "center";
//                       } else {
//                         return "right";
//                       }
//                     }
//                   }}
//                   variants={variants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{ duration: 1 }}
//                 >
//                   {item}
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//         <div className="buttons">
//           <motion.button
//             whileTap={{ scale: 0.8 }}
//             onClick={() => handleClick(-1)}
//           >
//             ◀︎
//           </motion.button>
//           <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
//             ▶︎
//           </motion.button>
//         </div>
//       </>
//     );
//   }

//   const variants = {
//     enter: ({ direction }) => {
//       return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
//     },
//     center: ({ position, direction }) => {
//       return {
//         scale: position() === "center" ? 1 : 0.7,
//         x: 0,
//         zIndex: getZIndex({ position, direction }),
//         opacity: 1
//       };
//     },
//     exit: ({ direction }) => {
//       return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
//     }
//   };

//   function getZIndex({ position, direction }) {
//     const indexes = {
//       left: direction > 0 ? 2 : 1,
//       center: 3,
//       right: direction > 0 ? 1 : 2
//     };
//     return indexes[position()];
//   }

export default function Carousel({ children }) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  const updateWidth = () => {
    setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();

    return () => window.removeEventListener('resize', updateWidth);

  }, []);


  return (
    <motion.div className={styles.wrapper} ref={containerRef}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={styles.container}>
        {children}
      </motion.div>
    </motion.div>
  )
}