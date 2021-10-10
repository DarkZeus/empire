import React from 'react';

export const ComparisonItem = ({ headline, points }) => {
    return (
        <div className="comparison__item">
            <span className="headline">{headline}</span>
            <ul className="points-list">
            {points.map((point, index) =>
                <li className="points-list__item" key={index}>
                    <p>{point}</p>
                </li>
            )}
            </ul>
        </div>
    );
};