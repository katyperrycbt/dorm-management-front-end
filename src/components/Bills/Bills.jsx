import { useState } from 'react';
import BillTabs from './BillTabs/BillTabs';

import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';

import useStyles from './styles';
import ResidenceBill from './ResidenceBill/ResidenceBill';
import UnpaidBill from './UnpaidBill/UnpaidBill';
import UtilityBill from './UtilityBill/UtilityBill';

const Bills = () => {
    const history = useHistory();
    const profile = JSON.parse(localStorage.getItem('iu-student'));
    const classes = useStyles();

    const [activeTab, setActiveTab] = useState(0);

    if (!profile) {
        history.push('/login');
        return <></>;
    }

    return <Container maxWidth='md' className={classes.root}>
        <BillTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 0 && <ResidenceBill />}
        {activeTab === 1 && <UtilityBill />}
        {activeTab === 2 && <UnpaidBill />}
    </Container>;
}

export default Bills;