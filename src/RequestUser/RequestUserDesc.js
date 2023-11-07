import React from 'react';
import { useParams } from 'react-router-dom';
import RequestDescriptionForm from './RequestDescriptionForm';

const requestList = [
    { id: 1, subject: 'Тема 1', description: 'Описание 1', dialog: 'Пользователь: *Существует*\nОператор: *Существует*' },
    { id: 2, subject: 'Тема 2', description: 'Описание 2', dialog: 'Пользователь: *Существует*\nОператор: *Существует*' },
    { id: 3, subject: 'Тема 3', description: 'Описание 3', dialog: 'Пользователь: *Существует*\nОператор: *Существует*' },
];

const RequestUserDesc = () => {
    const { id } = useParams();
    const request = requestList.find((item) => item.id === parseInt(id, 10));

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
