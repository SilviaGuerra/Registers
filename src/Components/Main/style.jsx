import { css } from 'glamor';

const style = css({
    width: '100%',
    minHeight: '100vh',
    background: '#F4F7FE',
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: '70px 10px',
    '@media screen and (min-width:1024px)': {
        width: '100%',
        // zIndex: 1
    },
});

export default style;
