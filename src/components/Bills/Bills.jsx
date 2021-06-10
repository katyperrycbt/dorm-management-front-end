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

const formatDate = (date) => {
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
}

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

    console.log('all bills', bills);

    if (!profile) {
        history.push('/');
        return <></>;
    }

    const residenceBill = bills[0];
    console.log('residence bill', residenceBill)
    const utilityBill = bills[1];
    console.log('utility bill', utilityBill)

    let bill1 = [];
    let bill2 = [];
    let bill3 = [];


    if (residenceBill !== undefined) {
        for (let i = 0; i < residenceBill.length; i++) {
            const tempHeader = `Bill ID: ${residenceBill[i]['receipt']}, 
            Total: ${residenceBill[i]['total'].toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}, 
            ${residenceBill[i]['semester']}(${residenceBill[i]['duration']})`;

            const tempDetails = {
                'Receipt Number': residenceBill[i]?.receipt ? residenceBill[i].receipt : 'Not found',
                'Semester': residenceBill[i]?.semester ? residenceBill[i].semester : 'Not found',
                'Duration': residenceBill[i]?.duration ? residenceBill[i].duration : 'Not found',
                'Created On': residenceBill[i]?.createOn ? residenceBill[i].createOn : 'Not found',
                'Cashier': residenceBill[i]?.cashier?.name ? residenceBill[i].cashier.name : 'Not found',
                'Total': residenceBill[i]?.total ? residenceBill[i].total : 'Not found',
                'Payment status': residenceBill[i]?.paymentstatus === true ? 'Paid' : 'Unpaid',
                'Content': residenceBill[i]?.content ? residenceBill[i].content : 'Not found'
            }

            bill1.push({ 'header': tempHeader, 'details': tempDetails });

            if (residenceBill[i]?.paymentstatus !== null && residenceBill[i].paymentstatus === false) {
                const tempHeaderr = `Type: Resident Bill`;
                bill3.push({
                    'header': tempHeaderr,
                    'details': tempDetails
                })
            }
        }
    }

    if (utilityBill !== undefined) {
        for (let i = 0; i < utilityBill.length; i++) {
            const total = (utilityBill[i].power.recentrecord - utilityBill[i].power.lastrecord)/100*3000 + (utilityBill[i].water.recentrecord - utilityBill[i].water.lastrecord)*10000;
            
            const totalPower = (utilityBill[i].power.recentrecord - utilityBill[i].power.lastrecord)/100*3000;
            const totalWater = (utilityBill[i].water.recentrecord - utilityBill[i].water.lastrecord)*10000;

            const tempHeader = `${utilityBill[i]['createAt'] ? formatDate(new Date(utilityBill[i]['createAt'])) : 'Not found'}, 
                ${total ? total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) : 'Not found'}, 
                ${utilityBill[i]['paymentstatus'] ?  'Paid' : 'Unpaid'}`;

            const tempDetails = {
                'Month/Year': utilityBill[i]?.createdAt ? formatDate(new Date(utilityBill[i]['createAt'])) : 'Not found',
                'Record Date':  utilityBill[i]?.recorddate ?  formatDate(new Date(utilityBill[i]['recorddate'])) : 'Not found',
                'Power Consumption': '',
                'Last recorded number (power)': utilityBill[i]?.power?.lastrecord ? utilityBill[i]?.power?.lastrecord : 'Not found',
                'Recent recorded number (power)': utilityBill[i]?.power?.recentrecord ? utilityBill[i]?.power?.recentrecord : 'Not found',
                'Difference (power)': (utilityBill[i]?.power?.recentrecord && utilityBill[i]?.power?.lastrecord) 
                        ? (utilityBill[i]?.power?.recentrecord - utilityBill[i]?.power?.lastrecord) : 'Not found',
                'Total (power)': totalPower ? totalPower : 'Not found',
                'Water Consumption (water)': '',
                'Last recorded number (water)': utilityBill[i]?.water?.lastrecord ? utilityBill[i]?.water?.lastrecord : 'Not found',
                'Recent recorded number (water)': utilityBill[i]?.water?.recentrecord ? utilityBill[i]?.water?.recentrecord : 'Not found',
                'Difference (water)': '174 Kwh',
                'Total (water)': totalWater ? totalWater : 'Not found',
                'Total': total ? total: 'Not found',
                'Payment status': utilityBill[i]['paymentstatus'] ?  'Paid' : 'Unpaid',
                'Notes': utilityBill[i]['note'] ? utilityBill[i]['note'] : 'Not found'
            }

            bill2.push({
                'header': tempHeader,
                'details': tempDetails
            });

            if (utilityBill[i]?.paymentstatus !== null && utilityBill[i].paymentstatus === false) {
                const tempHeaderr = `Type: Utility Bill`;
                bill3.push({
                    'header': tempHeaderr,
                    'details': tempDetails
                })
            }
        }
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


    if (bill1.length === 0) {
        bill1 = [{
            'header': header,
            'details': sampleBill1
        }];
    }

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

    if (bill2.length === 0) {
        bill2 = [{
            'header': header2,
            'details': sampleBill2
        }];
    }

    return <Container maxWidth='md' className={classes.root}>
        <BillTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 0 && <ResidentBill billList={bill1} />}
        {activeTab === 1 && <UtilityBill billList={bill2} />}
        {activeTab === 2 && <UnpaidBill billList={bill3} />}
    </Container>;
}

export default Bills;