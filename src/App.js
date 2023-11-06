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
  }

  return (
    <div className="App">
        {
          tg.MainButton.show()
        }
      <RequestList />
      <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}

export default App;
