// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

import { Component } from 'react';
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';

// function App() {
//   return (
//     <div className="wrapper">
//       <Header />
//       <Body />
//     </div>
//   );
// }

// export default App;

class App extends Component {
  handleButtonClick = () => {
    throw new Error('Тестовая ошибка');
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Body />
        </div>
        <button onClick={this.handleButtonClick}>Генерировать ошибку</button>
      </div>
    );
  }
}

export default App;
