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

export default function CountrySelect({ formData, setFormData, rooms }) {
    const classes = useStyles();
    
    return (
        <Autocomplete
            id="country-seledwqqqqqqasct-demo"
            options={rooms}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            autoSelect
            getOptionLabel={(option) => option.dorm_ID}
            renderOption={(option) => (
                <React.Fragment>
                    {option.dorm_ID}
                </React.Fragment>
            )}
            value={formData.room ? rooms.find(x => x._id === formData.room) : null}
            onChange={(e, value) => {
                if (value) {
                    setFormData({ ...formData, room: value._id });
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Available rooms"
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