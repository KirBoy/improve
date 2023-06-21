import React, {useState} from 'react';

export const Test = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(prevState => prevState + 1)
    }
    return (
        <div>
            {count}
            <button onClick={onClick}>x</button>
        </div>
    );
};
