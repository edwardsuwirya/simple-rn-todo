import React from "react";
import {Provider} from "react-redux";
import App from "./App";
import configureStore from "./store/store";

const AppContainer = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default AppContainer;
