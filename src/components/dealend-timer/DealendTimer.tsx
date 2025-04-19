import { useCallback, useEffect, useState } from "react";

const DealendTimer = () => {
  // Set the future date 30 days from now only once
  const [futureDate] = useState(() => {
    const now = new Date().getTime();
    return new Date(now + 26 * 24 * 60 * 60 * 1000).getTime();
  });

  // Function to calculate the time left until the future date
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = futureDate - now;
  
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [futureDate]);

  // Initialize state with the calculated time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Set up an interval to update the time left every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <>
      <div className="dealend-timer" id="dealend">
        <div className="dealend-timer">
          <div className="time-block">
            <div className="time">{timeLeft.days}</div>
            <span className="day">Days</span>
          </div>
          <div className="time-block">
            <div className="time">{timeLeft.hours}</div>
            <span className="dots">:</span>
          </div>
          <div className="time-block">
            <div className="time">{timeLeft.minutes}</div>
            <span className="dots">:</span>
          </div>
          <div className="time-block">
            <div className="time">{timeLeft.seconds}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealendTimer;
