import { css } from 'glamor';

const styles = (display) => css({
    display: display,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 10px',
    ' .sideItem': {
        '&__list': {
            paddingLeft: '10px',
            transform: 'translate(27%, 0%)',
            listStyleType: 'none',
            ' > li': {
                padding: '5px 0px',
                fontSize: '14px',
                ' > a': {
                    color: '#828181',
                    textDecoration: 'none',
                }
            }
        }
    }
});

export default styles;