import react from 'react';

import './App.css'
import Hello from './hello';
import Wrapper from './Wrapper';

export default function App() {
  const name = 'react'
  const style = {
    backgroundColor: "black",
    color: 'aqua',
    fontsize: 24,
    padding: '1rem'
  }
  return (
    <Wrapper>
      {/* 주석은 화면에 보이지 않습니디 */}
      <Hello name="react" color="red" isSpecial /* true로 간주*/ />
      <Hello/>
      <Hello color="blue"/>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}
