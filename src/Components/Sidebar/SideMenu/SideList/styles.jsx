import { css } from 'glamor';

const styles = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    ' .sideItem': {
        '&__list': {
            paddingLeft: '10px',
            transform: 'translate(27%, 0%)',
            ' > li': {
                padding: '10px 0px',
                ' > a': {
                    color: '#828181',
                    textDecoration: 'none',
                }
            }
        }
    }
});

export default styles;