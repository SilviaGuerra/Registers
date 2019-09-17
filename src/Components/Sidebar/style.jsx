import { css } from 'glamor';

const style = (widthSideBar, logo) => css({
    width: widthSideBar,
    height: '100vh',
    zIndex: 99,
    ' > div:nth-child(1)': {
        margin: '15px',
        display: 'inline-flex'
    },
    ' > svg': {
        display: logo,
        margin: '15px',
        width: '50%',
    },
    '@media screen and (min-width:1024px)': {
        width: '30%',
        ' > div:nth-child(1)': {
            background: '#fff',
            display: 'none'
        },
        ' > svg': {
            display: 'inline',
            width: 130,
            height: 60
        }
    },
});

export default style;