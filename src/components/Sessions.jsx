import moment from 'moment';
import React from 'react';
import { useState } from 'react';

const Session = () => {
    // use 300 seconds to represent 5 min. Use moment later 
    const [sessionLength, setSessionLength] = useState(60 * 25);

    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60

        if (newSessionLength < 0) {
            setSessionLength(0)
        } else {
            setSessionLength(newSessionLength)
        }
    };

    const incrementSessionLengthByOneMinute = () => {
        setSessionLength(sessionLength + 60);
    };

    const sessionLengthInMinutes = moment.duration(sessionLength, 's').minutes()

    return (
        <div>
            <p id="session-label">Session</p>
            <p id="session-length">{sessionLengthInMinutes}</p>
            <button id="session-decreament" onClick={decrementSessionLengthByOneMinute}>-</button>
            <button id="session-increament" onClick={incrementSessionLengthByOneMinute}>+</button>
        </div>
    );
}

export default Session
