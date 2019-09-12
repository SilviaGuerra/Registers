import {css} from 'glamor';

const styles = css({
    width: '90%',
    margin: '15px 10px 10px',
    padding: '20px 10px',
    background: '#fff',
    boxShadow: '-2px 3px 5px 4px rgba(0, 0, 0, 0.19)',
    ' h5': {
        color: '#464343',
        borderBottom: '1px solid #9E9E9E',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 700
    },
    ' div': {
        padding: '10px 2px',
    },
    '@media screen and (min-width:1024px)': {
        width: '20%'
    },
});

export default styles;