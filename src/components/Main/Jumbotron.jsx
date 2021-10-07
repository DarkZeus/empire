import React from 'react';


export const Jumbotron = ({ children }) => {
    return (
        <div>
            <div className="landing-block__header">
                {children}
            </div>
        </div>
    );
};