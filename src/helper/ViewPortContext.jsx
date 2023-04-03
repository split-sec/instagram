import { createContext, useEffect, useState } from "react";

export const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(undefined);
  const [height, setHeight] = useState(undefined);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log('width is: ', width);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};




























// import { createContext, useState, useEffect, useContext } from "react";

// const ViewPortContext = createContext();

// export function useWidth() {
//   return useContext(widthContext);
// }

// export const ViewportProvider = ({ children }) => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   const handleWindowResize = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//     console.log(window.innerWidth);
//   }

//   useEffect(() => {
//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//         window.removeEventListener("resize", handleWindowResize);
//         console.log('EXITED');
//     }
//   }, []);

//   return (
//     <ViewPortContext.Provider value={{ width, height }}>
//       { children }
//     </ViewPortContext.Provider>
//   );
// };