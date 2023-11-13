import React from 'react';
import './RequestDescriptionForm.css';
import { useTelegram } from "../Hooks/useTelegram";

const RequestDescriptionForm = ({ request }) => {

    const { tg } = useTelegram();

    const Onclose = () => {
        tg.close()
        console.log('dsds')
    }

    return (
        <div className="request-description-form">
            <h2>Описание заявки</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Никенейм пользователя</label>
                    <input type="text" id="username" name="username" value={request.username} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Тема заявки</label>
                    <input type="text" id="subject" name="subject" value={request.subject} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Адрес</label>
                    <textarea type="text" id="address" name="address" value={request.address} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Описание</label>
                    <textarea type="text" id="description" name="description" value={request.description} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="dialog">Диалог с оператором</label>
                    <textarea type="text" id="dialog" name="dialog" value={request.dialog} readOnly />
                </div>
                <button onClick={Onclose}> Закрыть заявку</button>
            </form>
        </div>
    );
};

export default RequestDescriptionForm;