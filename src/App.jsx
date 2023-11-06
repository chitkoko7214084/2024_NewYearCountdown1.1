import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import { startCountdown } from './countdown.js';

const Wrapper = styled.div`
  position: relative;

  
  /* other styles can be added here */
`;


const Content = styled.div`
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 40%;
  top: 100px;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: none;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
`;


export default function App() {
  useEffect(() => {
    // Set the target date for New Year's Eve (December 31st of the current year at 23:59:59)
    const targetDate = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59).getTime();
    startCountdown(targetDate, 'countdown'); // 'countdown' is the elementId where the countdown will be displayed
  }, []); // Run the effect only once when the component mounts

  return (
    <Wrapper>
      <Spline className="spline" scene="https://prod.spline.design/EXYCl6DB9Q695yc2/scene.splinecode" />
      <Content>
     <h1>New Year Countdown</h1>
        <div id="countdown"></div>
      </Content>
    </Wrapper>
  );
}
