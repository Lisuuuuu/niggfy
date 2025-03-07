import { sva } from "@/styled-system/css";


export const ProgressBarStyles = sva({
    slots: ['progress', 'dot'],

    base: {
        progress: {
            width: '500px',
            height: '5px',
            backgroundColor: '#202020',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',

            '&:hover': {
                backgroundColor: '#00ff3c',
                '& .dot': {

                },
            }
        },
        dot: {
            height: '14px',
            width: '14px',
            borderRadius: '10px',
            backgroundColor: 'white',
            top: '40px',
            position: 'absolute',


            '&:hover': {
                cursor: 'pointer',
            },


        }

    }
})