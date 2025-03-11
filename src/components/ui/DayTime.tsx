"use client";
import { useState, useEffect } from 'react';

const DayTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };

  const date = currentTime.toLocaleString('en-US', options).replace("at", "")
  const [datePart, timePart] = date.split(',');
  const formattedDate = datePart.split(' ').map(part => part.toUpperCase()).join(' ')
  const formattedTime = timePart.trim().replace(/:/g, ' ')

  return (
    <div className="text-xs uppercase">
      {formattedDate} {formattedTime}
    </div>
  );
};

export default DayTime;
