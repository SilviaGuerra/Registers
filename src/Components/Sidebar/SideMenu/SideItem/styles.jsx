import { css } from 'glamor';

const styles = display => css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '10px',
    ' .sideItem': {
        '&__title': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ' > svg': {
                width: '20px',
                height: '20px',
            },
            ' > h6': {
                fontSize: '11px',
                paddingLeft: '10px',
                paddingTop: '10px'
            }
        },
    },
    ' > div:nth-child(2)': {
        display: display,
        // visibility: 'hidden'
    }
});

export default styles;