import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Если вы хотите, чтобы ваше приложение работало в автономном режиме и загружалось быстрее, вы можете изменить
// отменить регистрацию () для регистрации () ниже. Обратите внимание, что это связано с некоторыми подводными камнями.
// Узнайте больше о работниках сферы обслуживания: http://bit.ly/CRA-PWA
serviceWorker.unregister();
