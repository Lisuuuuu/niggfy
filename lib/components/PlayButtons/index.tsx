

'use client'
import { useState } from 'react';
import { ButtonsStyles } from './styles';
import { Icon } from '@tabler/icons-react';


interface PlayButtonProps extends React.HTMLAttributes<HTMLDivElement>{
    icon : Icon;
    green ?: boolean;
}
export default function PlayButton({icon: Icon , green ,  ...props} : PlayButtonProps){

    const classes = ButtonsStyles();

    return(
        <div className={classes.button} {...props}>

            <Icon color = {green ? '#00ff3c' : 'white'} >

            </Icon>

        </div>

    )
}