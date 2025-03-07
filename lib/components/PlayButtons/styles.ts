import { sva } from "@/styled-system/css";

export const ButtonsStyles = sva({
    slots:['button'],
    base: {
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '90px',
            

            '&:hover': {
                scale: '1.1',
                cursor: 'pointer',
            }

        },
    }

})