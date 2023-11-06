import './RequestList.css'
import React, { useEffect } from 'react';
import { useTelegram } from "../Hooks/useTelegram";

const requestList = [
    { id: 1, subject: 'Заявка 1', address: 'Адрес 1', status: 'В ожидании' },
    { id: 2, subject: 'Заявка 2', address: 'Адрес 2', status: 'В обработке' },
    { id: 3, subject: 'Заявка 3', address: 'Адрес 3', status: 'Завершено' },
    // Добавьте больше заявок по вашему усмотрению
];

const RequestList = () => {
    const { tg, queryId } = useTelegram();

    const MainBut = () => {
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: `Оставить заявку`
        });
    }

    useEffect(() => {
        MainBut(); 
    }, []);

    return (
        <div className="request-list">
            <div className="request-header">
                <div className="header-item">ID</div>
                <div className="header-item">Тема заявки</div>
                <div className="header-item">Адрес</div>
                <div className="header-item">Статус заявки</div>
            </div>
            {requestList.map((request) => (
                <div className="request-item" key={request.id}>
                    <div className="request-id">{request.id}</div>
                    <div className="request-subject">{request.subject}</div>
                    <div className="request-address">{request.address}</div>
                    <div className="request-status">{request.status}</div>
                </div>
            ))}
        </div>
    );
};

export default RequestList;

