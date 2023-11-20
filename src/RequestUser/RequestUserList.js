import './RequestUserList.css'
import React, { useEffect,useState } from 'react';
import { useTelegram } from "../Hooks/useTelegram";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const RequestUserList = () => {
  const { tg, queryId } = useTelegram();
  const {id} = useParams()

  const MainBut = () => {
    tg.MainButton.show();
    tg.BackButton.hide()
    tg.MainButton.setParams({
      text: `Создать заявку`
    });
  }

  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/reqUser/${id}`);
        setDataArray(response.data.map(item => ({
          id: item.id,
          status: item.status,
          messageReq: item.messageReq,
          username: item.username,
          category: item.category
        })));
      } catch (error) {
        console.error('Ошибка при получении данных о заявке:', error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    console.log(id)
    MainBut();
  }, []);

  return (
    <div className="request-list">
      <div className="request-header">
        <div className="header-item">ID</div>
        <div className="header-item">Тема заявки</div>
        <div className="header-item">Статус заявки</div>
      </div>
      {dataArray.length > 0 ? (
        dataArray.map((request) => (
          <Link to={`/requests/${request.id}`} key={request.id} className="request-link">
            <div className="request-item">
              <div className="request-id">{request.id}</div>
              <div className="request-subject">{request.category}</div>
              <div className="request-status">{request.status}</div>
            </div>
          </Link>
        ))
      ) : (
        <div>Загрузка данных...</div>
      )}
    </div>
  );
};

export default RequestUserList;