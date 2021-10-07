import React from 'react';

export const Codex = () => {
    return (
        <div className="landing-block__mid ucp">
            <div className="rule-blocks">
                <div className="column">
                    <a href="/" className="block fullblock-anchor">
                        <span className="block-headline">История игрового мира</span>
                        <p className="block-text">На данной странице вы сможете узнать историю игрового мира (Lore), в ней
                            рассказывается о том, где происходят действия, повествуются интересные игровые моменты и
                            значимые ситуации.</p>
                        <span className="block-link">Перейти</span>
                    </a>
                    <a href="/" className="block fullblock-anchor">
                        <span className="block-headline">Взаимодействие с полицией</span>
                        <p className="block-text">Как правильно вести себя с полицией и в различных ситуациях.</p>
                        <span className="block-link">Перейти</span>
                    </a>
                </div>
                <div className="column">
                    <a href="/" className="block fullblock-anchor">
                        <span className="block-headline">Общее положение</span>
                        <p className="block-text">На данной странице Вы сможете ознакомиться со спорными ситуациями и найти
                            для себя ответы перед прохождением теста.</p>
                        <span className="block-link">Перейти</span>
                    </a>
                    <a href="/" className="block fullblock-anchor">
                        <span className="block-headline">Нормативные акты</span>
                        <p className="block-text">Свод законов, которые должен соблюдать любой гражданин живущий в городе
                            Лос Сантос и его округе.</p>
                        <span className="block-link">Перейти</span>
                    </a>
                </div>
            </div>
        </div>
    );
};