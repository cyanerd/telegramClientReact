import './RequestList.css'
import React, { useEffect } from 'react';
import { useTelegram } from "../Hooks/useTelegram";
import { Link } from 'react-router-dom';
const requestList = [
  { id: 1, subject: 'Заявка 1', nicknameUser: 'Пользователь 1', address: 'Адрес 1', status: 'В ожидании' },
  { id: 2, subject: 'Заявка 2', nicknameUser: 'Пользователь 2', address: 'Адрес 2', status: 'В обработке' },
  { id: 3, subject: 'Заявка 3', nicknameUser: 'Пользователь 3', address: 'Адрес 3', status: 'В ожидании' },
  { id: 1, subject: 'Заявка 1', nicknameUser: 'Пользователь 1', address: 'Адрес 1', status: 'В обработке' },
  { id: 2, subject: 'Заявка 2', nicknameUser: 'Пользователь 2', address: 'Адрес 2', status: 'В ожидании' },
  { id: 1, subject: 'Заявка 1', nicknameUser: 'Пользователь 3', address: 'Адрес 1', status: 'В ожидании' },
  { id: 2, subject: 'Заявка 2', nicknameUser: 'Пользователь 1', address: 'Адрес 2', status: 'В обработке' },
  { id: 3, subject: 'Заявка 3', nicknameUser: 'Пользователь 2', address: 'Адрес 3', status: 'В ожидании' },
  { id: 1, subject: 'Заявка 1', nicknameUser: 'Пользователь 3', address: 'Адрес 1', status: 'В обработке' },
  { id: 2, subject: 'Заявка 2', nicknameUser: 'Пользователь 2', address: 'Адрес 2', status: 'В ожидании' },
  { id: 1, subject: 'Заявка 1', nicknameUser: 'Пользователь 3', address: 'Адрес 1', status: 'В ожидании' },
  { id: 2, subject: 'Заявка 2', nicknameUser: 'Пользователь 1', address: 'Адрес 2', status: 'В обработке' },
  { id: 3, subject: 'Заявка 3', nicknameUser: 'Пользователь 2', address: 'Адрес 3', status: 'В ожидании' },
  { id: 1, subject: 'Заявка 1', nicknameUser: 'Пользователь 3', address: 'Адрес 1', status: 'В обработке' },
  { id: 2, subject: 'Заявка 2', nicknameUser: 'Пользователь 1', address: 'Адрес 2', status: 'В ожидании' },
];

const RequestUserList = () => {
  const { tg, queryId } = useTelegram();

  const MainBut = () => {
    tg.MainButton.hide();
    tg.BackButton.hide()
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
        <div className="header-item">Никнейм пользователя</div>
        <div className="header-item">Тема заявки</div>
        <div className="header-item">Статус заявки</div>
      </div>
      {requestList.map((request) => (
        <Link to={`/requestsOperator/${request.id}`} key={request.id} className="request-link">
          <div className="request-item">
            <div className="request-id">{request.id}</div>
            <div className="request-nicknameUser">{request.nicknameUser}</div>
            <div className="request-subject">{request.subject}</div>
            <div className="request-status">{request.status}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RequestUserList;