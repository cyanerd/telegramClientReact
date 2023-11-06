import { useEffect } from 'react';
import './App.css';
import RequestList from './RequestOperator/RequestList';
import Button from '../src/components/Button/Button'

const tg = window.Telegram.WebApp

function App() {

  useEffect(()=>{
    tg.ready()
  }, [])

  const onClose = () =>{
    tg.close()
  }

  return (
    <div className="App">
      <RequestList/>
      <Button onClick={onClose}></Button>
      <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default App;
