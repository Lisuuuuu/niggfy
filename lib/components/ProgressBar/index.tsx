'use client';
import { ProgressBarStyles } from './styles';
import { useState, useEffect } from 'react';

export default function ProgressBar() {




    const classes = ProgressBarStyles();
    const [position, setPosition] = useState(1584);

    return (
        <div onClick={(position) =>
            setPosition(position.clientX)
        }>

        <div className={classes.progress}>
            
        </div>
        <div className={classes.dot}
        style={{
            left: position,
            
        }}>

        </div>
        </div>

    )
}