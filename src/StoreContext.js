import React from "react";
import store from "./redux/redux-store";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.Children}
        </StoreContext.Provider>
    )
}

export default StoreContext;