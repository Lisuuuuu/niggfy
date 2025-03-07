import { PlaylistBarStyles } from "./styles";
import { IconBooks } from "@tabler/icons-react";
import  Playlist from '../Playlist';
export default function PlaylistBar(){
    const classes = PlaylistBarStyles();
    return(
        <div className={classes.bar}>
            <div className={classes.titletext}>
            <IconBooks/> Library
            </div>
            <Playlist
            author="Author"
            cover="https://niggafart.com/niggatwerk.gif"
            title="My Playlist"
            type="Playlist"
            />
            
        </div>
    )
}