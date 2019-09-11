import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Typography, Box }from '@material-ui/core';
import Data from './Data';
import Breakdown from './Breakdown';

const propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="details"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            <Box p={4}>{children}</Box>
        </Typography>
    );
}

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
    };
}

const Details = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div>
            <h2>Detalles</h2>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Data" {...a11yProps(0)} />
                <Tab label="Breakdown" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Data />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Breakdown />
            </TabPanel>
        </div>
    );
}

TabPanel.propTypes = propTypes;
export default Details;