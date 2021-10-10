import React from 'react';

export const LightBlock = ({headline = '', description = '', children, addClassNames = ''}) => {
    return (
        <div className={`landing-block__mid ${addClassNames}`}>
            {headline &&
            <div className="light_block_header">
                <h2 className="headline">{headline}</h2>
                <p className="description">{description}</p>
            </div>
            }

            {children}
        </div>
    );
};