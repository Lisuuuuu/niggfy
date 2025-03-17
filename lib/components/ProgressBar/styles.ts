import { sva } from "@/styled-system/css";



export const ProgressBarStyles = sva({
    slots: ['progress', 'dot', 'time', 'container'],





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

            _hover: {
                '--dot-display': 'block',
                _before: {
                    backgroundColor: '#00ff3c'
                },
                cursor: 'pointer',

            }

        },

        dot: {
            height: '14px',
            width: '14px',
            borderRadius: '10px',
            backgroundColor: 'white',
            position: 'absolute',
            display: 'var(--dot-display, none)',
            transform: 'translate(-50%, -50%)',
            top: '50%'





        },
        time: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
            fontSize: 'sm',
        },
        container: {

            width: '100%',
            maxWidth: '500px',

            margin: '0 auto',
        },


    }
})