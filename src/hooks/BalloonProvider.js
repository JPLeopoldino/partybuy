import React, { createContext, useContext, useState } from 'react';

const BalloonContext = createContext();

const BalloonProvider = ({ children }) => {

    const [selected, setSelected] = useState(1);

    return(
        <BalloonContext.Provider
            value={{
                selected,
                setSelected,
            }}
        >
            {children}
        </BalloonContext.Provider>
    )
}

const useBalloon = () => {
    const context = useContext(BalloonContext);
    
    return context;
};

export { useBalloon, BalloonProvider };