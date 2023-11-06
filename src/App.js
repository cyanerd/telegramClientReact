import { useEffect } from 'react';
import './App.css';
import RequestList from './RequestOperator/RequestList';
import Button from '../src/components/Button/Button'
import RequestUserList from './RequestUser/RequestUserList';

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <RequestUserList />
      <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default App;
