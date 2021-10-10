import React from 'react';
import {StepItem} from "./StepItem";

export const Steps = ({ headline, description, steps }) => {
    return (
        <div className="how-to-play">
            <div className="how-to-headline">
                <h2 className="headline">{headline}</h2>
                <span className="description">{description}</span>
            </div>
            <div className="steps">
                {steps.map(step => <StepItem key={step.id} {...step} />)}
            </div>
        </div>
    );
};