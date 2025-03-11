'use client';

import { ProgressBarStyles } from './styles';
import { useState, useEffect } from 'react';


export default function ProgressBar() {




    const classes = ProgressBarStyles();
    const [position, setPosition] = useState(0);
    const handleClick = (event: React.MouseEvent) => {

        setPosition(event.clientX - 1350);
    };

    return (
    <div className={classes.group}>
    <div onClick={handleClick}>

        <div className={classes.progress}
        style = {{
            '--progress-width': (position) + 'px',
        } as React.CSSProperties}>

                

        <div className={classes.dot}
        style={{
             left: position,
                
        }}>

        </div>
        </div>
    </div>
    </div>


    )
}