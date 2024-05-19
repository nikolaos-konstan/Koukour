import { useState, useEffect } from "react";
import image from "../public/image.png";
import "./App.css";

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-06-12`) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen text-2xl bg-yellow-200 text-black space-y-4">
      <div className="p-4 bg-red-200 rounded w-64 text-center text-4xl">
        <span className="font-bold">Koukouri's νόστιμον ἦμαρ</span>
      </div>
      {timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? (
        <div className="p-4 bg-red-200 rounded w-64 text-center text-4xl">
          <span className="font-bold">Welcome!</span>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-4">
          <div className="p-4 bg-red-200 rounded w-32 h-24 flex flex-col justify-center items-center">
            <div>{timeLeft.days}</div>
            <div>
              <span className="font-bold">Days</span>
            </div>
          </div>
          <div className="p-4 bg-red-200 rounded w-32 h-24 flex flex-col justify-center items-center">
            <div>{timeLeft.hours}</div>
            <div>
              <span className="font-bold">Hours</span>
            </div>
          </div>
          <div className="p-4 bg-red-200 rounded w-32 h-24 flex flex-col justify-center items-center">
            <div>{timeLeft.minutes}</div>
            <div>
              <span className="font-bold">Minutes</span>
            </div>
          </div>
          <div className="p-4 bg-red-200 rounded w-32 h-24 flex flex-col justify-center items-center">
            <div>{timeLeft.seconds}</div>
            <div>
              <span className="font-bold">Seconds</span>
            </div>
          </div>
        </div>
      )}
      <img src={image} alt="Descriptive text" />
    </div>
  );
}

export default App;
