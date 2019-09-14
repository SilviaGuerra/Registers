import {css} from 'glamor';

const styles = css({
    position: 'fixed',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 1,
    ' > div': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10px 0',
        ' img': {
            width: '25px',
            borderRadius: '25px'
        },
        ' p': {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 10,
            fontSize: 10,
            marginTop: 0,
            marginBottom: 0
        }
    },
    ' .btn-primary': {
        background: 'transparent',
        borderColor: 'transparent',
        color: '#000'
    },
    ' .btn-primary:hover': {
        background: 'transparent',
        borderColor: 'transparent',
        color: '#000'
    },
    '@media screen and (min-width:1024px)': {
        width: '100%',
        zIndex: 2
    },
});

export default styles;