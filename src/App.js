import logo from './logo.svg';
import './App.css';

function App() {

  // jsx에 들어갈 변수 선언과 값 할당
  const name = "마이크";
  const person = {
    name : "길동",
    age : 20
  }
  return (
    <>
      {/* App.css 파일에 있는 App 이라는 클래스 속성을 나타냄 */}
      <div className="App">
        <h1>안녕하세요.</h1>
        <h2>나의 첫번째 리액트 앱</h2>
        <button
          onClick={() => {
            console.log("버튼클릭");
          }}
        >
          Click me
        </button>

        <input type="text" placeholder="텍스트를 입력하세요." />
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="App">
        <h1 style={{ color: "#f0f", backgroundColor: "green" }}>하이 제인</h1>
        <h1 style={{ color: "#ff0", backgroundColor: "blue" }}>하이 {name} </h1>
        <h1 style={{ color: "#0ff", backgroundColor: "red" }}>
          연산결과 {3 + 5}
        </h1>
      </div>
      {/* {중괄호} 안에 컴포넌트에서 할당한 변수 값을 출력한다. */}
      <div className='App'>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
      </div>
    </>
  );
}

/* 
  App 컴포넌트를 이 파일의 기본 반환 값으로 한다.
  이렇게 내보낸 컴포넌트는 다른 컴포넌트에서 import해서 사용할 수 있다.
*/
export default App;
