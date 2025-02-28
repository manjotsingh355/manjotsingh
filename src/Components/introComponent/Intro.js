import './Intro.css';
import { useState, useEffect } from 'react';
import Logo from "../logoComponent/Logo"
import linkedingLogo from "../../assets/logos/icons8-linkedin.svg"
import githubLogo from "../../assets/logos/icons8-github-logo.svg"
import resumeLogo from "../../assets/logos/icons8-file.svg"
import arrowDown from "../../assets/logos/arrow_down.svg"
import resumeDoc from "../../assets/documents/Manjot_Singh_Resume.pdf"

function Intro(){
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
        <div className='logoArea'>
            <Logo logo={linkedingLogo} href="https://www.linkedin.com/in/manjotsingh355/"/>
            <Logo logo={githubLogo} href="https://github.com/manjotsingh355"/>
            <Logo logo={resumeLogo} href={resumeDoc}/>
            <Logo logo={arrowDown}/>
        </div>
      </div>
    </div>
  );
}

export default Intro;