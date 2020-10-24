import moment from 'moment';
import React from 'react';
import { useState } from 'react';

const Break = () => {
    // use 300 seconds to represent 5 min. Use moment later 
    const [breakLength, setBreakLength] = useState(300);

    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60

        if (newBreakLength < 0) {
            setBreakLength(0)
        } else {
            setBreakLength(newBreakLength)
        }
    };

    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60);
    };

    const breakLengthInMinutes = moment.duration(breakLength, 's').minutes()

    return (
        <div>
            <p id="break-label">Break</p>
            <p id="break-length">{breakLengthInMinutes}</p>
            <button id="break-decreament" onClick={decrementBreakLengthByOneMinute}>-</button>
            <button id="break-increament" onClick={incrementBreakLengthByOneMinute}>+</button>
        </div>
    );
}

export default Break
