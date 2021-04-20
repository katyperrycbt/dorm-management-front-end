import SnippetBill from '../SnippetBill/SnippetBill';

import EventIcon from '@material-ui/icons/Event';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import InvertColorsOutlinedIcon from '@material-ui/icons/InvertColorsOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import PauseCircleOutlineOutlinedIcon from '@material-ui/icons/PauseCircleOutlineOutlined';
import SwapVerticalCircleOutlinedIcon from '@material-ui/icons/SwapVerticalCircleOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import NotesOutlinedIcon from '@material-ui/icons/NotesOutlined';

const UtilityBill = () => {

    const sampleBill = {
        'Month/Year': [EventIcon, '3/2021'],
        'Record Date': [EventAvailableIcon, '30/03/2021'],
        'Power Consumption': [OfflineBoltOutlinedIcon, ''],
        'Last recorded number (power)': [PlayCircleFilledWhiteOutlinedIcon, '6039 Kwh'],
        'Recent recorded number (power)': [PauseCircleOutlineOutlinedIcon, '6213 Kwh'],
        'Difference (power)': [SwapVerticalCircleOutlinedIcon, '174 Kwh'],
        'Total (power)': [MonetizationOnOutlinedIcon, 351600],
        'Water Consumption (water)': [InvertColorsOutlinedIcon, ''],
        'Last recorded number (water)': [PlayCircleFilledWhiteOutlinedIcon, '6039 Kwh'],
        'Recent recorded number (water)': [PauseCircleOutlineOutlinedIcon, '6213 Kwh'],
        'Difference (water)': [SwapVerticalCircleOutlinedIcon, '174 Kwh'],
        'Total (water)': [MonetizationOnOutlinedIcon, 351600],
        'Total': [AttachMoneyOutlinedIcon, 417420],
        'Payment status': [CheckCircleOutlineOutlinedIcon, 'Paid'],
        'Notes': [NotesOutlinedIcon, '']
    }

    const header = [sampleBill['Month/Year'][1], sampleBill['Total'][1].toLocaleString('it-IT', { style: 'currency', currency: 'VND' }), ' ', sampleBill['Payment status'][1]];

    const residentList = [{
        'header': header,
        'details': sampleBill
    }];

    return <SnippetBill residentList={residentList} color1='#673ab7' color2='#ffef62' color3='#009688' />
}

export default UtilityBill;