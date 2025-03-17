import { sva } from "@/styled-system/css";

export const PlayBarStyles = sva({
    slots: ['bar', 'text', 'text2', 'PlayButtonsContainer'],
    base: {
        bar: {
            height: '5%',
            width: '100%',
            backgroundColor: 'black',
            borderRadius: '5px',
            position: 'fixed',
            bottom: '0',




        },
        text: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px'

        },
        PlayButtonsContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3.75%'


        }


    }
})