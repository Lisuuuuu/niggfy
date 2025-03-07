'use client'
import { PlayBarStyles } from './styles';
import PlayButton from '../PlayButtons';
import ProgressBar from '../ProgressBar';
import { IconArrowsShuffle2, IconPlayerSkipBackFilled, IconPlayerSkipForwardFilled,IconPlayerPauseFilled , IconPlayerPlayFilled, IconRepeat, IconRepeatOnce, Icon } from '@tabler/icons-react';
import { PlayerContext } from '@/lib/providers/PlayerProvider';
import { useContext } from 'react';



export default function PlayBar(){
    const classes = PlayBarStyles();
    const [playerInfo, setPlayer] = useContext(PlayerContext);

    return(
        <div className={classes.bar}>
            <div className  = {classes.PlayButtonsContainer}>

               <PlayButton icon={IconArrowsShuffle2} green={playerInfo.shuffle} onClick={() => setPlayer((p) => ({...p, shuffle: !p.shuffle }))} />
               <PlayButton icon = {IconPlayerSkipBackFilled}/>
               <PlayButton icon = {playerInfo.playing ? IconPlayerPlayFilled : IconPlayerPauseFilled} onClick={() => setPlayer((p) => ({...p, playing: !p.playing }))} />
                <PlayButton icon = {IconPlayerSkipForwardFilled}/>
                <PlayButton icon = {playerInfo.repeat == 'whole' ? IconRepeatOnce : IconRepeat} green = {playerInfo.repeat != "none" } onClick={() => setPlayer((p) => ({...p, repeat: p.repeat == 'none' ? 'one' : p.repeat == 'one' ? 'whole' : 'none'}))}/>
            </div>
            <div className={classes.text}>
                <ProgressBar/>
            </div>
        </div>
    )
}