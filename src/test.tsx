import React, {useState} from 'react';
import classes from './ab.modules.scss';
import './styles.scss'
export const Test = () => {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(prevState => prevState + 1)
    }
    return (
        <div className={classes.div}>
            {count}
            <button className={'button'} onClick={onClick}>x</button>
        </div>
    );
};
