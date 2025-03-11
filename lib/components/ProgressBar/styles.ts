import { sva } from "@/styled-system/css";



export const ProgressBarStyles = sva({
    slots: ['progress', 'dot', 'group'],


    //backgroundColor: '#00ff3c'


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

            _before: {
                content: "''",
                height: '4px',
                backgroundColor: 'white',
                display: 'block',
                borderRadius: '5px',
                position: 'absolute',
                left: '0',
                top: '0',
                width: 'var(--progress-width)',

            },

            '&:hover [data-dot]': {
                display: 'block',
            }

        },

        dot: {
            height: '14px',
            width: '14px',
            borderRadius: '10px',
            backgroundColor: 'white',

            position: 'absolute',
            display: 'none',






        },


    }
})