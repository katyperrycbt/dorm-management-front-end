/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

export default function CountrySelect({ formData, setFormData }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);
    
    return (
        <Autocomplete
            id="country-seledasct-demo"
            options={countries}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            autoSelect
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
                <React.Fragment>
                    <span>{countryToFlag(option.code)}</span>
                    {option.label} ({option.code}) {option.alias}
                </React.Fragment>
            )}
            value={value}
            onChange={(e, value) => {
                if (value?.label) {
                    setValue(value);
                    setFormData({ ...formData, religion: value.label });
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Religion"
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
const countries = [
    { code: 'NO', label: 'None', alias: 'Khong' },
    { code: 'BU', label: 'Buddhism', alias: 'Phat Giao' },
    { code: 'CH', label: 'Christianity', alias: 'Kito Giao' },
    { code: 'CA', label: 'Catholicism', alias: 'Cong Giao' },
    { code: 'PR', label: 'Protestantism', alias: 'Tin Lanh' },
    { code: 'HH', label: 'Hoahaoism', alias: 'Hoa Hao' },
    { code: 'CD', label: 'Caodaism', alias: 'Cao Dai' },
    { code: 'OT', label: 'Other', alias: 'Khac' },
];
