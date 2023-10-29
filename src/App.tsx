import { Component } from 'react';
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import ErrorBoundary from './components/error/errorBoundary';
import ErrorButton from './components/error/btn';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <div className="wrapper">
            <Header />
            <Body />
            <ErrorButton />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
