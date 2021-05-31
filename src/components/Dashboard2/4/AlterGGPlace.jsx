/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
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

export default function Alter({ formData, setFormData }) {
    const [data, setData] = useState([]);
    const requestOptions = {
        method: 'GET',
    };

    const handleTyping = (e) => {
        e.preventDefault();
        if (e.target.value) {
            setFormData({
                ...formData, parentinfo: {
                    ...formData.parentinfo,
                    address: e.target.value
                }
            });
            fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${e.target.value}&apiKey=59e24af581494160872c1b0a5b7395af`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result?.features?.length > 0) {
                        setData([...result.features, { properties: { formatted: e.target.value } }]);
                    }
                    if (result) {
                        setData([...result.features, { properties: { formatted: e.target.value } }]);
                    } else {
                        setData([{ properties: { formatted: e.target.value } }]);
                    }

                })
                .catch(error => {
                    console.log('error', error)
                });
        }
    }

    return (
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            options={data.map((option) => option.properties.formatted)}
            onInputChange={handleTyping}
            onChange={(e, value) => {
                if (value) {
                    setFormData({
                        ...formData, parentinfo: {
                            ...formData.parentinfo,
                            address: value
                        }
                    });
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search input"
                    margin="normal"
                    required
                />
            )}
        />
    );
}

