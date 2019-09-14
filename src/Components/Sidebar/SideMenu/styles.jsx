import { css } from 'glamor';

const styles = (open) => css({
    width: '90%',
    transform: open,
    display: 'none'
});

export default styles;