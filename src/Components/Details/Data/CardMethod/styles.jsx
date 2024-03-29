import {css} from 'glamor';

const styles = css({
    width: '90%',
    margin: '15px 20px 10px',
    background: '#fff',
    boxShadow: '-2px 3px 5px 4px rgba(0, 0, 0, 0.19)',
    position: 'relative',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    ' h5': {
        color: '#464343',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 700,
        padding: '20px 10px 0',
    },
    ' .card': {
        '&__divisor': {
            position: 'absolute',
            top: 45,
            left: 10,
            width: '95%',
            borderBottom: '1px solid #9E9E9E'
        },
        '&__bank': {
            padding: '20px 10px',
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            ' p': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            ' svg': {
                width: 50,
                height: 50
            }
        },
        '&__creditCard': {
            height: '200px',
            background: '#111b3a',
            color: '#fff',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            ' > div:nth-child(1)': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '35px 0 0',
                ' > p:nth-child(1)': {
                    display: 'flex',
                    alignItems: 'center'
                }
            },
            ' > div:nth-child(2)': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '22px 10px 0',
                ' p': {
                    textAlign: 'left',
                    margin: 0,
                    fontSize: 14
                },
                ' span': {
                    fontSize: 16
                }
            }
        }
    },
    '@media screen and (min-width:1024px)': {
        width: '25%'
    },
});

export default styles;