import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    const [innerMaterial, setInnerMaterial] = useState("inner1");
    const [OuterMaterial, setOuterMaterial] = useState("Outer1");

    return (
        <CustomizationContext.Provider
          value={{
            innerMaterial,
            setInnerMaterial,
            OuterMaterial,
            setOuterMaterial,
        }}
        >
          {props.children}
        </CustomizationContext.Provider>
      );
    };

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
};