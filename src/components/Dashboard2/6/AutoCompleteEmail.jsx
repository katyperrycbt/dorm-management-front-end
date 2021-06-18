/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

export default function CountrySelect({ email, setEmail, data, disabled }) {
    const classes = useStyles();
    
    return (
        <Autocomplete
            id={`country-seledwqqqqqqasct-demo-email${Date.now()}${Math.random()}`}
            options={data}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            autoSelect
            disabled={disabled}
            getOptionLabel={(option) => option.email}
            renderOption={(option) => (
                <React.Fragment>
                    {option.email}
                </React.Fragment>
            )}
            value={email ? data.find(x => x.email === email) : null}
            onChange={(e, value) => {
                if (value) {
                    setEmail(value.email);
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Student Email"
                    required
                    inputProps={{
                        ...params.inputProps,
                    }}
                />
            )}
        />
    );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js