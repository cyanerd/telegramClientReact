import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RequestDescriptionForm from './RequestDescriptionForm';
import { useTelegram } from "../Hooks/useTelegram";
import axios from 'axios';

const requestList = [
    { id: 1, subject: 'Тема 1', description: 'Описание 1', dialog: 'Пользователь: *Существует*\nОператор: *Существует*', adres: 'Адрес 1', nicknameUser: 'Пользователь' },
    { id: 2, subject: 'Тема 2', description: 'Описание 2', dialog: 'Пользователь: *Существует*\nОператор: *Существует*', adres: 'Адрес 2', nicknameUser: 'Пользователь' },
    { id: 3, subject: 'Тема 3', description: 'Описание 3', dialog: 'Пользователь: *Существует*\nОператор: *Существует*', adres: 'Адрес 3', nicknameUser: 'Пользователь' },
];

const RequestListDesc = () => {
    const { tg, queryId } = useTelegram();
    const { id } = useParams();
    const navigate = useNavigate();

    const request = requestList.find((item) => item.id === parseInt(id, 10));
    const [reqLL, setReqLL] = useState([]);
    const [dataArray, setDataArray] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/mes/${id}`);
                setReqLL(response.data);

                // Пример создания массива объектов с полными данными
                const dataArray = response.data.map(item => ({
                    dialog: item.dialog,
                    userRequestId: item.userRequestId,
                    status: item.status,
                    description: item.description,
                    subject: item.subject,
                    username: item.username,
                    address: item.address
                }));

                console.log('Full Data Array:', dataArray[0]);
                setDataArray(dataArray);
            } catch (error) {
                console.error('Ошибка при получении данных о заявке:', error);
            }
        };

        fetchData();
    }, [id]);
    const MainBut = () => {
        tg.BackButton.show()
        if(request.status =! "В работе"){
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Взять в работу`
            });
        }
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

    return (
        <div>
            {dataArray.length > 0 ? (
                <RequestDescriptionForm
                    request={{
                        dialog: dataArray[0].dialog,
                        userRequestId: dataArray[0].userRequestId,
                        status: dataArray[0].status,
                        description: dataArray[0].description,
                        subject: dataArray[0].subject,
                        username: dataArray[0].username,
                        address: dataArray[0].address,
                    }}
                />
            ) : (
                <div>Загрузка данных...</div>
            )}
        </div>
    );
};

export default RequestListDesc;
