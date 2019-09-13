import { css } from 'glamor';

const styles = css({
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (min-width:1024px)': {
        display: 'flex',
        flexFlow: 'row wrap'
    },
});

export default styles;