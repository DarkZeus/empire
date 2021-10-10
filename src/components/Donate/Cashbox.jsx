import React, {useState} from 'react';
import Select from 'react-select'
import {servers, customStyles} from "./const";

export const Cashbox = () => {
    const [server, setServer] = useState('')

    return (
        <div className="cashbox">
            <span className="cashbox-header"><strong>Внимание!</strong> Сохраняйте скриншот чека после оплаты</span>
            <div className="cashbox-body">
                <div className="custom-select">
                    <Select
                        options={servers}
                        styles={customStyles}
                        placeholder="Выберите Ваш сервер"
                        onChange={e => setServer(e.value)}
                    />
                </div>
                <div className="cashbox__input">
                    <label>
                        <div className="cashbox__input-label">
                            <i class="las la-hashtag" />
                        </div>
                        <input type="text" placeholder="Ник или номер аккаунта" id="nickname" className="server-input"/>
                    </label>
                </div>
                <div className="cashbox__input">
                    <label>
                        <div className="cashbox__input-label">
                            <i class="las la-money-bill" />
                        </div>
                        <input type="type" placeholder="Сумма" id="currency" className="server-input"/>
                    </label>
                </div>
                <input type="button" value="Продолжить" className="btn rounded danger"/>
            </div>
        </div>
    );
};