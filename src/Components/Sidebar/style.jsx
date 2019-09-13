import { css } from 'glamor';

const style = css({
    width: '70%',
    height: '100vh',
    background: '#fff',
    zIndex: 99,
    '@media screen and (min-width:1024px)': {
        width: '20%',
        background: '#fff',
        zIndex: 99,
    },
});

export default style;