import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Изменение импорта
import RequestDescriptionForm from './RequestDescriptionForm';
import { useTelegram } from "../Hooks/useTelegram";

const requestList = [
    { id: 1, subject: 'Тема 1', description: 'Описание 1', dialog: 'Пользователь: *Существует*\nОператор: *Существует*', adres: 'Адрес 1' },
    { id: 2, subject: 'Тема 2', description: 'Описание 2', dialog: 'Пользователь: *Существует*\nОператор: *Существует*', adres: 'Адрес 2' },
    { id: 3, subject: 'Тема 3', description: 'Описание 3', dialog: 'Пользователь: *Существует*\nОператор: *Существует*', adres: 'Адрес 3' },
];

const RequestUserDesc = () => {
    const { tg, queryId } = useTelegram();
    const { id } = useParams();
    const navigate = useNavigate(); 

    const request = requestList.find((item) => item.id === parseInt(id, 10));

    const MainBut = () => {
        tg.MainButton.hide();
        tg.BackButton.show()
    }

    useEffect(() => {
        const handleBackButton = () => {
            navigate(-1); 
        };
        MainBut();
        tg.BackButton.onClick(handleBackButton);
        return () => {
            tg.BackButton.offClick(handleBackButton);
        };
    }, [navigate]);

    if (!request) {
        return <div>Заявка не найдена</div>;
    }

    return (
        <div>
            <RequestDescriptionForm request={request} />
        </div>
    );
};

export default RequestUserDesc;
