import React from 'react';
import {CodexItem} from "./CodexItem";
import {codexBlocks} from './const'

export const Codex = () => {
    return (
        <div className="landing-block__mid ucp">
            <div className="rule-blocks">
                {codexBlocks.map(item =>
                    <CodexItem key={item.id} headline={item.headline} text={item.text} />
                )}
            </div>
        </div>
    );
};