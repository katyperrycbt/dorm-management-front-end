/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import PlacesAutocomplete from 'react-places-autocomplete';

const useStyles = makeStyles((theme) => ({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
    margin: {
        // margin: theme.spacing(1),
    },
}));

export default function CountrySelect({ formData, setFormData }) {
    const classes = useStyles()
    const [address, setAddress] = React.useState("");
    const [value, setValue] = React.useState(null);
    const [data, setData] = React.useState([]);

    return (
        <PlacesAutocomplete value={address} onChange={setAddress}>
            {
                ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                    setData(suggestions);
                    return (<div>
                        <Autocomplete
                            id="country-ss-dasaqdemo"
                            options={data}
                            classes={{
                                option: classes.option,
                            }}
                            autoHighlight
                            autoSelect
                            getOptionLabel={(option) => option.description}
                            renderOption={(option) => (
                                <React.Fragment>
                                    {option.description}
                                </React.Fragment>
                            )}
                            value={value}
                            onChange={(e, value) => {
                                if (value?.description) {
                                    setValue(value);
                                    setFormData({
                                        ...formData, parentinfo: {
                                            ...formData.parentinfo,
                                            address: value.description
                                        }
                                    });
                                }
                            }}
                            //
                            renderInput={(params) => (
                                <div>
                                    <div className={classes.margin}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item xs={9}>
                                                <TextField
                                                    {...getInputProps({ placeholder: "Type address", required: true, fullWidth: true })}
                                                    {...params}
                                                    label="Address"
                                                    required
                                                    value={formData?.parentinfo?.address ? formData.parentinfo.address : null}
                                                    shrink={formData?.parentinfo?.address ? true : false}
                                                    inputProps={{
                                                        ...params.inputProps,
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <img src='/place.google.png' alt='gg places autocomplete' width='auto' height='auto' />
                                                <LinearProgress color="secondary" style={{ opacity: !loading ? 0.0 : 1.0 }} />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                            )}
                        />
                    </div>)
                }
            }
        </PlacesAutocomplete>
    );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
