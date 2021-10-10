import React from 'react';

export const StepItem = ({ id, headline, description }) => {
    return (
        <div className="step">
            <p className="square"><span>{id}</span></p>
            <span className="text-headline">{headline}</span>
            <p className="text-description">{description}</p>
        </div>
    );
};