import { makeStyles } from '@mui/styles';

export const useModalStyles = makeStyles({
    box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: '#fff',
        border: '2px solid #000',
        boxShadow: 24,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    itemKey: {
        fontWeight:'bold'
    }
});
