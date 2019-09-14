import { css } from 'glamor';

const style = widthSideBar => css({
    width: widthSideBar,
    height: '100vh',
    zIndex: 99,
    ' > div:nth-child(1)': {
        margin: '15px'
    },
    '@media screen and (min-width:1024px)': {
        width: '30%',
        // zIndex: 3,
        ' > div:nth-child(1)': {
            background: '#fff',
            display: 'none'
        },
    },
});

export default style;