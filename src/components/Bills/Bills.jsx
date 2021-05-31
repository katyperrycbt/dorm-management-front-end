import { useState, useEffect } from 'react';
import BillTabs from './BillTabs/BillTabs';

import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';

import useStyles from './styles';
import ResidentBill from './ResidenceBill/Alter';
import UnpaidBill from './UnpaidBill/Alter';
import UtilityBill from './UtilityBill/Alter';

import { STUDENT_SEE_BILLS, SET_LINEAR, SET_SNACK } from '../../constants/constants';
import { see } from '../../actions/student.see';
import { useDispatch, useSelector } from 'react-redux';


const Bills = () => {
    const history = useHistory();
    const profile = JSON.parse(localStorage.getItem('user'));
    const classes = useStyles();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        dispatch({
            type: SET_SNACK, data: {
                open: true,
                msg: 'Loading...'
            }
        });
        dispatch(see(STUDENT_SEE_BILLS)).then((rs) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Done!'
                }
            });
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        })
    }, [dispatch])

    const bills = useSelector((state) => state.studentSee);

    if (!profile) {
        history.push('/');
        return <></>;
    }

    const sampleBill1 = {
        'Receipt Number': '43936',
        'Semester': 'Full year',
        'Duration': '2020 - 2021',
        'Created On': '28/08/2020',
        'Cashier': 'Nong Thi Linh',
        'Total': 563220,
        'Payment status': 'Paid',
        'Content': 'Health Insurance'
    }

    const header = `Bill ID: ${sampleBill1['Receipt Number']}, 
        Total: ${sampleBill1['Total'].toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}, 
        ${sampleBill1['Semester']}(${sampleBill1['Duration']})`;

    const bill1 = [{
        'header': header,
        'details': sampleBill1
    }];

    const sampleBill2 = {
        'Month/Year': '3/2021',
        'Record Date': '30/03/2021',
        'Power Consumption': '',
        'Last recorded number (power)': '6039 Kwh',
        'Recent recorded number (power)': '6213 Kwh',
        'Difference (power)': '174 Kwh',
        'Total (power)': 351600,
        'Water Consumption (water)': '',
        'Last recorded number (water)': '6039 Kwh',
        'Recent recorded number (water)': '6213 Kwh',
        'Difference (water)': '174 Kwh',
        'Total (water)': 351600,
        'Total': 417420,
        'Payment status': 'Paid',
        'Notes': ''
    }

    const header2 = `${sampleBill2['Month/Year']}, ${sampleBill2['Total'].toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}, ${sampleBill2['Payment status']}`;

    const bill2 = [{
        'header': header2,
        'details': sampleBill2
    }];

    const sampleBill3 = {}
    const header3 = '';
    const bill3 = [];

    return <Container maxWidth='md' className={classes.root}>
        <BillTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 0 && <ResidentBill billList={bill1} />}
        {activeTab === 1 && <UtilityBill billList={bill2} />}
        {activeTab === 2 && <UnpaidBill billList={bill3} />}
    </Container>;
}

export default Bills;