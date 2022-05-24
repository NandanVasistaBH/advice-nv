import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
  let [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const url = 'https://api.adviceslip.com/advice';
  const nextAdvice = () => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        const data = res.data.slip.advice;
        setAdvice(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  useEffect(() => {
    nextAdvice();
  }, []);
  return (
    <div className="main">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{advice}</h1>
          <button onClick={nextAdvice}>NEXT</button>
        </>
      )}
    </div>
  );
};

export default App;
