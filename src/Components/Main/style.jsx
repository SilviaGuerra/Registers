import { css } from 'glamor';

const style = css({
    minHeight: '100vh',
    background: '#F4F7FE',
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: '0 10px',
    '@media screen and (min-width:1024px)': {
        width: '80%'
    },
});

export default style;
