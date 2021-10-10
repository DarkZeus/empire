import React from 'react';
import {ComparisonItem} from "./ComparisonItem";


export const Comparison = ({ comparisonArray }) => {
    return (
        <>
            <div className="comparison">
                {comparisonArray.map(platform =>
                    <ComparisonItem key={platform.id} {...platform}  />
                )}
            </div>
        </>
    );
};