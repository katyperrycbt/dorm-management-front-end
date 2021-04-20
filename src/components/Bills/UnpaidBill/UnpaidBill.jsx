import SnippetBill from '../SnippetBill/SnippetBill';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import SignalCellularNoSimOutlinedIcon from '@material-ui/icons/SignalCellularNoSimOutlined';


const UnpaidBill = () => {
    const classes = useStyles();
    /** Kiet + Tam please note: 
     * combine unpaid of UNPAID residence bills AND  utility bills, 
     *      if any, then show out in this tab
     * if not, display alternative result kind of 'No data', 
     * NOTICE of the component errors (if you pass an error objects).
    */

    //something like this: 
    const condition = false; // Assume there is NO UNPAID BILL
    const sampleUnpaidBill = condition ? ['something else'] : [];

    if (!sampleUnpaidBill.length) {
        return <Paper className={classes.root}>
            <Typography variant="h4" className={classes.typo}>
                <SignalCellularNoSimOutlinedIcon className={`${classes.large}`} />
                No Data</Typography>
        </Paper>
    }

    const header = ['value1', 'value2', 'value3', 'value4'];

    const residentList = [{
        'header': header,
        'details': sampleUnpaidBill

    }];


    return <SnippetBill residentList={residentList} color1='#009688' color2='#ffeb3b' color3='blue' />
}

export default UnpaidBill;
