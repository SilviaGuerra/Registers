import { css } from 'glamor';

const style = css({
    width: '0%', //va a cambiar a 20%
    height: '100vh',
    zIndex: 99,
    ' > div:nth-child(1)': {
        margin: '15px'
    },
    '@media screen and (min-width:1024px)': {
        width: '20%',
        background: 'green',
        // zIndex: 3,
        ' > div:nth-child(1)': {
            background: '#fff',
            display: 'none'
        },
    },
});

export default style;