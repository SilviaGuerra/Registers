import {css} from 'glamor';

const styles = css({
    padding: '80px 0px',
    ' .nav > a': {
        background: 'transparent !important',
        borderColor: 'transparent !important',
        color: '#51565c'
    },
    ' a:focus': {
        borderBottom: '1px solid red',
    }
});

export default styles;