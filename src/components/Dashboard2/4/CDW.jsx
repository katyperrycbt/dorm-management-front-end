/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
import {cdw} from './CDW.data';

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
    const data = cdw;    

    return (
        <Autocomplete
            id="country-sdsadwxs-demo"
            options={data}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            autoSelect
            getOptionLabel={(option) => option.full_name}
            renderOption={(option) => (
                <React.Fragment>
                    {option.full_name}
                </React.Fragment>
            )}
            value={formData.residentinfo.ward ? data.find(x => x.full_name === (formData.residentinfo.ward + ", " + formData.residentinfo.district + ", " + formData.residentinfo.city)) : null}
            onChange={(e, value) => {
                if (value?.full_name) {
                    const temp = value.full_name.split(", ");
                    if (temp) {
                        setFormData((old) => {
                            return {
                                ...old,
                                residentinfo: {
                                    telephone: old.residentinfo.telephone,
                                    city: temp[2],
                                    district: temp[1],
                                    ward: temp[0]
                                }
                            }
                        });
                    }
                }
            }}

            renderInput={(params) => {
                return (
                    <TextField
                        {...params}
                        label="Ward, district and city"
                        required
                        InputLabelProps={{
                            shrink: formData?.residentinfo?.ward ? true: false,
                            color: 'primary'
                        }}
                        inputProps={{
                            ...params.inputProps,
                        }}
                    />
                )
            }}
        />
    );
}

