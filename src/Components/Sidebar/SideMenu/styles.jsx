import { css } from 'glamor';

const styles = open => css({
    width: '90%',
    display: open,
    '@media screen and (min-width:1024px)': {
        display: 'inline-block'
    },
});

export default styles;