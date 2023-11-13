/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './components/header';
import Counting from './components/counting';

function App() {
  const students = ['Sakti', 'Kusuma', 'Aji'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header name="Pa Dhika" />
      <ul>
        {
          students.map((student) => (
            <li key={student}>{student}</li>
          ))
        }
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
      <br />
      <br />
      <Counting />
    </>
  )
}

export default App
