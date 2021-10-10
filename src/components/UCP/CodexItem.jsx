import React from 'react';
import {Link} from "react-router-dom";

export const CodexItem = ({ headline, text }) => {
    return (
        <Link to="#" className="block fullblock-anchor">
            <span className="block-headline">{headline}</span>
            <p className="block-text">{text}</p>
            <span className="block-link">Перейти</span>
        </Link>
    );
};