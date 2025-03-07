
import { sva } from "@/styled-system/css";

export const PlaylistBarStyles = sva({
    slots: ['bar', 'titletext'],
    base: {
        bar: {
            backgroundColor: "#202020",
            width: '10%',
            height: '100vh',
            borderRadius: '5px',
        },
        titletext: {
            color: '#404040',
            fontSize: '20px',
            fontWeight: 600,
            display: 'flex',
            padding: '10px',
            alignItems: 'center',
        }

    }

});


