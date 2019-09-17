import { css} from 'glamor';

const style = (declinedbkg) => css({
    padding: '40px 13px',
    ' td:nth-child(3)': {
        display: 'flex',
        ' span': {
            fontSize: 12,
            paddingLeft: 23
        },
        ' span:nth-child(1)': {
            width: '80px',
            height: '35px',
            background: declinedbkg,
            borderRadius: '20px',
            color: '#de4040',
            fontSize: '14px',
            padding: '6px 10px',
            textTransform: 'capitalize',
        }, 
    },

    '@media screen and (min-width:1024px)': {
        padding: '72px 40px'
    },
});

export default style;
