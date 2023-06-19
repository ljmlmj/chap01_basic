// 'react' 패키지에 React를 가져오는 구문
// 리액트 컴포넌트를 작성할 때 필요한 기능을 가져오기 위한 import문입니다.
// React는 리액트 라이브러리의 핵심 기능을 포함하는 객체입니다.
// 이를 사용하여 리액트 컴포넌트를 작성하고, JSX를 렌더링하고, 
// 기타 리액트 관련 기능을 활용할 수 있습니다.
import React from 'react';
// node_modules 폴더에서 'react' 패키지의 ReactDOM 객체를 가져오는 구문입니다.
// ReactDOM은 React 애플리케이션을 실제 DOM에 랜더링하는 역할
import ReactDOM from 'react-dom/client';
// 현재 폴더의 'index.css' 파일을 가져오는 구문
import './index.css';
// './App' 파일에서 App 컴포넌트(App.js 파일)를 가져오는 구문 
import App from './App';
import reportWebVitals from './reportWebVitals'; // 성능측정 도구[불필요]

/*
  index.js
    : React 애플리케이션의 진입성(entry point)
*/
// 파라미터로 주어진 돔 노드를 루트로 생성하고 해당 요소에 
// 리액트 컴포넌트를 랜더링 할 준비를 한다.
// 여기서 "root"는 id="root"인 DOM 요소를 말함.
const root = ReactDOM.createRoot(document.getElementById('root'));
// 리액트 컴포넌트를 DOM(실제 브라우저 DOM)으로 랜더링함.
// App 컴포넌트를 루트에 랜더링 한다.
root.render(
  // React.StrictMode : 코드가 잘못되었는지 판단하여 오류 메시지 보여주는 컴포넌트
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 위의 두 줄을 줄여서 다음과 같이 사용 가능
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
