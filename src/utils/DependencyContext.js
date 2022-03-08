import React, {createContext, useContext} from 'react';

const DepsContext = createContext({});

// Custom Hooks for consume DepsContext
export const useDeps = () => {
    return useContext(DepsContext);
}

//DepProvider Composition
const DepProvider = ({children, services}) => {
    return (
        <DepsContext.Provider value={services}>
            {children}
        </DepsContext.Provider>
    )
}

export default DepProvider;
