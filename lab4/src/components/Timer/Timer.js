import { useEffect, useState } from "react";
import './Timer.css';

function Timer() {
    const [isActive, setIsActive] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval = null;
        let localSeconds = seconds;
        let localMinutes = minutes;
        if (isActive) {
          interval = setInterval(() => {
            if (localSeconds > 0) {
                localSeconds = localSeconds - 1;
                setSeconds(localSeconds);
            }
            if (localSeconds == 0 || localSeconds < 0) {
                if (localMinutes > 0) {
                    setSeconds(60);
                    localSeconds = 60;
                    localMinutes = localMinutes - 1;
                    setMinutes(localMinutes);
                }
                else {
                    setIsActive(false);
                    clearInterval(interval);
                }
            }
          }, 10);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
    }, [isActive]);

    function ShowTimer() {
        document.querySelector("#timer").style.display = "flex";
    }

    return (
        <div>
            <div className="timer">
                <button onClick={ShowTimer}>Timer</button>
                <div id="timer">
                    <input type="text" id="minuts-input" value={minutes} onChange={(event) => setMinutes(event.target.value)}/>
                    <span id="delimeter">:</span>
                    <input type="text" id="seconds-input" value={seconds} onChange={(event) => setSeconds(event.target.value)}/>
                    <button onClick={() => setIsActive(true)}> Start timer </button>
                    <button onClick={() => setIsActive(false)}> Stop timer </button>
                </div>
            </div>
        </div>
    )
};

export default Timer;