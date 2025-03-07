import { playlistStyles } from "./styles";
import { IconPlayerPlayFilled, IconPointFilled } from "@tabler/icons-react";


export type PlaylistProps = {
    cover: string;
    title: string;
    author: string;
    type: string;
}

export default function Playlist({ cover, title, author, type}: PlaylistProps) {
    const classes = playlistStyles();
    return (
        <div className={classes.container}>
            <div className={classes.coverContainer}>
                <img src={cover} className={classes.image} />
                <div className={classes.playButton} data-playbutton>
                    <IconPlayerPlayFilled />
                </div>
            </div>
            <div>
                <div className={classes.title}>{title}</div>
                <div className={classes.author}>
                    {type} <IconPointFilled size={20} /> {author}
                    </div>
            </div>
        </div>
    )
}