import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setTime(new Date());
  }

  return (
    <div>
      <h1>Reloj en Tiempo Real</h1>
      <h2>La hora actual es: {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
