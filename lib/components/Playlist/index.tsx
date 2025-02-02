import { playlistStyles } from "./styles";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

export type PlaylistProps = {
    cover: string;
    title: string;
    author: string;
}

export default function Playlist({ cover, title, author }: PlaylistProps) {
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
                <div className={classes.author}>{author}</div>
            </div>
        </div>
    )
}