import React from "react";

const Overlay = ({children}) => (
    <div className='overlay'>
        <div className='overlay-inner'>
            {children}
        </div>
    </div>
);

export default Overlay;