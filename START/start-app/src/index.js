import React from 'react';
import ReactDOM from 'react-dom';

// 컴포넌트 import
import App from './App';
import { Header, Footer } from './Header';

// 메인 화면에서 App 컴포넌트 렌더링
// deprecated : 더 이상 권장하지 않는 문법
// ReactDOM.render(<App />, document.getElementById('root') )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header />
    <App />
     <Footer />
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
