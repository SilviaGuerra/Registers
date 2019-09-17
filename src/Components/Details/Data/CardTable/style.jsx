import {css} from 'glamor';

const style = css({
    width: '90%',
    height: '100%',
    margin: '15px 20px 10px',
    padding: '20px 10px',
    background: '#fff',
    boxShadow: '-2px 3px 5px 4px rgba(0, 0, 0, 0.19)',
    ' nav > a': {
        width: '33%',
        fontSize: '10px',
        wordWrap: 'break-word',
    },
    ' .table thead th, td': {
        fontSize: 10,
        padding: 10
    },
    ' svg': {
        width: 25,
        height: 25
    },
    ' .nav-link': {
        padding: '.5rem 10px',
    },
    ' .table__status': {
        background: '#e29494',
        borderRadius: '20px',
        color: '#de4040',
        fontSize: '10px',
        padding: '4px 3px',
        textTransform: 'capitalize',
    }
});

export default style;