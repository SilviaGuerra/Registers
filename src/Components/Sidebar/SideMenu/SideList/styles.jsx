import { css } from 'glamor';

const styles = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 10px',
    ' .sideItem': {
        '&__list': {
            paddingLeft: '10px',
            transform: 'translate(17%, 0%)',
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
    },
    '@media screen and (min-width:1024px)': {
        ' .sideItem__list': {
            transform: 'translate(12%, 0%)',
        }
    },
});

export default styles;