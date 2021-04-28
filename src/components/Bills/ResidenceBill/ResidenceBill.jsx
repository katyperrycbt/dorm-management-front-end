import SnippetBill from '../SnippetBill/SnippetBill';

import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TocIcon from '@material-ui/icons/Toc';

const ResidenceBill = () => {

    //get details from Redux
    //now, I just test with my sample first
    const sampleBill = {
        'Receipt Number': [ConfirmationNumberIcon, '43936'],
        'Semester': [CalendarTodayIcon, 'Full year'],
        'Duration': [ScheduleIcon, '2020 - 2021'],
        'Created On': [EventAvailableIcon, '28/08/2020'],
        'Cashier': [FingerprintIcon, 'Nong Thi Linh'],
        'Total': [MonetizationOnIcon, 563220],
        'Payment status': [CheckCircleIcon, 'Paid'],
        'Content': [TocIcon, 'Health Insurance']
    }

    const header = [`Receipt Number: ${sampleBill['Receipt Number'][1]}`, sampleBill['Total'][1].toLocaleString('it-IT', {style : 'currency', currency : 'VND'}), `${sampleBill['Semester'][1]}(${sampleBill['Duration'][1]})`, sampleBill['Payment status'][1]];

    const residentList = [{
        'header': header,
        'details': sampleBill
    }];
    return <SnippetBill residentList={residentList} color1='#009688' color2='#ffeb3b' color3='blue'/>
}

export default ResidenceBill;