import {css} from 'glamor';

const style = css({
    width: '90%',
    margin: '15px 10px 10px',
    padding: '20px 10px',
    background: '#fff',
    boxShadow: '-2px 3px 5px 4px rgba(0, 0, 0, 0.19)',
    ' h5': {
        color: '#464343',
        borderBottom: '1px solid #9E9E9E',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 700
    },
    ' .card': {
        '&__amount': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            paddingTop: 15, 
            ' > div': {
                width: '50%',
            },
            ' > div > h6': {
                fontSize: 14,
                paddingTop: '3px'
            },
            ' span': {
                fontSize: 16,
                fontWeight: 700
            },
            ' > div > p': {
                fontSize: 13
            },
            ' > div > p:nth-child(2)': {
                color: '#c3b9bb'
            }
        },
        '&__status': {
            display: 'flex',
            ' span': {
                fontSize: 12,
                paddingLeft: 23
            },
            ' span:nth-child(1)': {
                width: '80px',
                height: '35px',
                background: '#e29494',
                borderRadius: '20px',
                color: '#de4040',
                fontSize: '14px',
                padding: '6px 10px',
                textTransform: 'capitalize',
            },  
        },
        '&__order': {
            display: 'flex',
            alignItems: 'center',
            paddingTop: 30,
            ' > div': {
                width: '50%',
            },
            ' > div > h6': {
                fontSize: 14,
            },
            ' span': {
                fontSize: 10
            },
            ' a':{
                display: 'block',
                textAlign: 'right',
                fontSize: 12
            }
        },
    },
    '@media screen and (min-width:1024px)': {
        width: '48%'
    },
});

export default style;