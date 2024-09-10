import logo from './logo.svg';
import './App.css';
import React from 'react';
import Carousel from './components/Carousel';

function App() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkJpLxzPPSn0dI-eR42FZrHMIRFZXKi93oA&s+1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywB7RVsd4rYYPoxETBhnXXej1in6rtobxKg&s+2',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlneHwZOqEEenUdxtH3CAowbL467mNdrmTw&s+3',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjhpRGUdhcnTgTd7PzP_-9mbAieIUYL9w_g&s+4'
  ];

  return (
    <div className="App">
      <h1>Popular Car</h1>
      <Carousel images={images} />
    </div>
  );
}

export default App;
