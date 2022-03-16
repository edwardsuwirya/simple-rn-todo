import React, {createContext, useContext} from "react";
import {DEFAULT_DARK_COLOR_THEME} from "../styles/appstyle";

const ThemeContext = createContext(
     DEFAULT_DARK_COLOR_THEME
)

export const useTheme = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({children, theme}) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;
