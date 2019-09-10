import { css } from 'glamor';

const styles = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    ' .sideItem': {
        '&__title': {
            display: 'flex',
            alignItems: 'center',
            ' > h6': {
                paddingLeft: '10px'
            }
        },
    }
});

export default styles;