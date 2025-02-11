import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import { useState, useEffect } from 'react';

function App() {
  let currentPositionIndex = 0;
  let currentTitleColor = 0;
  let titleColors = [
    "#42c58a",
    "#4ec7f3",
    "#DC143C"
  ];
  let positions = [
    "Software Developer",
    "A/B Tester",
    "Full Stack Developer",
    "Database Engineer",
    "Backend Developer",
    "Frontend Developer"
  ];

  const [titlePosition, setPosition] = useState(positions[currentPositionIndex]);
  const [change, setChange] = useState(true);
  const [titleColor, setTitleColor] = useState(titleColors[currentTitleColor]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPositionIndex == positions.length - 1) {
        currentPositionIndex = 0;
      }
      setPosition(positions[currentPositionIndex++]);


      if (currentTitleColor == titleColors.length) {
        currentTitleColor = 0;
      }
      setTitleColor(titleColors[currentTitleColor++]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const changeStage = () => {
      setChange(true);
      setTimeout(() => {
        setChange(false);
      }, 1100);
    };
    changeStage()
  }, [titlePosition])

  return (
    <div className='intro'>
      <div className='mydata'>
        <div>
          Manjot Singh
        </div>
        <div className={change ? 'fadein' : 'flip'}>
          <div className='titleText' style={{ background: titleColor }}>
            {titlePosition}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
