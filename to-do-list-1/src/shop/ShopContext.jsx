import { createContext, useContext } from "react";
import { v4 } from "uuid";

export const ShopContext = createContext();

export const useShopReducer = (state, action) => {
    switch (action.type) {
        case "ADD_SHOP":
            return [...state, {id: v4(), day: action.payload.title, shopping: []}]
    
        default:
            return state;
    }
}

export const ProviderShopContext = ({ children }) => {
    
    const [shops, dispatch] = useContext(useShopReducer, [])

    return (
        <ShopContext.Provider value={{shops, dispatch}}>
            {children}
        </ShopContext.Provider>
    )
}
