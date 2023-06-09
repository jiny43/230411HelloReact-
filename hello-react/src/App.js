import logo from './logo.svg';
import './App.css';

//app 이라는 컴포넌트를 만들어준다. = 함수 컴포넌트
//프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하고 있는
//내용을 나타낸다.
//함수에서 반환하는 내용을 보면 마치 html을 작성한 것 같지만 이 코드는 html도 아니고
//문자열 템플릿도 아니고, 이런 코드를 JSX라고 부른다.

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App(){
//   return (
//     <div>
//       Hello <b>react</b>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div>
//     <h1>리액트 안녕!</h1>
//     <h2>잘 작동하니?</h2>
//     </div>
//   )
// }
// import { Fragment } from 'react';

// function App(){
//   return(
//     <Fragment>
//       <h1>리액트야 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </Fragment>
//   )
// }
// function App(){
//   const name = '리액트';
//   return(
//     <>
//     <h1>{name}
//     </h1>
//     </>)
// }
// function App(){
//   const name = '리액트';
//   return <div> {name ==='리액트' &&<h1>리액트입니다</h1>}</div>;
// }

// function App(){
//   const name = '리액트';
//   return (
//     <div 
//     style={{
//       //background-color 는 -가 사라지고 카멜 표기법으로 작성됩니다.
//       backgroundColor:'black',
//       color:'aqua',
//       fontSize:'48px',
//       fontWeight:'bold',
//       padding:16 //단위를 생략하면 바로 px로 지정됩니다. 
//     }}
//     >
//       {name}
//       </div>
//   );
// }
import'./App.css';

function App(){
  const name = '리액트';
  return<div className='react'>{name}</div>
}

export default App;


