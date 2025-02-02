import { sva } from "@/styled-system/css";

export const playlistStyles = sva({
    slots: ['container', 'image', 'title', 'author', 'coverContainer', 'playButton'],
    base: {
        container: {
            alignItems: 'center',
            display: "flex",
            gap: "10px",
            padding: '10px',
            cursor: "pointer",
            borderRadius: '10px',
            '&:hover': {
                backgroundColor: '#121212',
            },
            '&:hover [data-playbutton]': {
                opacity: 1,
            }
        },
        image: {
            width: '50px',
            height: '50px',
            borderRadius: '5px'
        },
        title: {
            fontSize: '15px',
            fontWeight: 600
        },
        author: {
            fontSize: '13px',
            opacity: 0.8
        },
        coverContainer: {
            position: 'relative',
        },
        playButton: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '0px',
            top: '0px',
            right: '0px',
            bottom: '0px',
            backgroundColor: '#00000050',
            borderRadius: '5px',
            opacity: 0,
        }
    }
});