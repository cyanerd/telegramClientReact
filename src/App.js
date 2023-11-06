import { useEffect } from 'react';
import './App.css';
import RequestList from './RequestOperator/RequestList';
import Button from '../src/components/Button/Button'

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
    {
      tg.MainButton.tg.MainButton.show()
    }
  }

  return (
    <div className="App">
      <RequestList></RequestList>
      <Button onClick={onClose}>нажми</Button>
      <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default App;
