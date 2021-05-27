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
            .replace(/./g, (char) => {
                if (char.charCodeAt(0) !== 32) {
                    return String.fromCodePoint(char.charCodeAt(0) + 127397);
                }
                return String.fromCodePoint(char.charCodeAt(0));
            })
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

    return (
        <Autocomplete
            id="country-ss-dasdemo"
            options={folk}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            autoSelect
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
                <React.Fragment>
                    <span>[{countryToFlag(option.label)}]</span>
                    {option.alias}
                </React.Fragment>
            )}
            value={formData.country ? folk.find(x => x.label === formData.folk) : null}
            onChange={(e, value) => {
                if (value?.label) {
                    setFormData({ ...formData, folk: value.label });
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Folk"
                    required
                    value={formData.folk ? formData.folk : null}
                    shrink={formData.folk ? true : false}
                    inputProps={{
                        ...params.inputProps,
                    }}
                />
            )}
        />
    );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const folk = [
    { label: 'Kinh', alias: 'Kinh' },
    { label: 'Chut', alias: 'Chứt' },
    { label: 'Muong', alias: 'Mường' },
    { label: 'Tho', alias: 'Thổ' },
    { label: 'Ba Na', alias: 'Ba Na' },
    { label: 'Brau', alias: 'Brâu' },
    { label: 'Bru Van Kieu', alias: 'Bru Vân Kiều' },
    { label: 'Cho Ro', alias: 'Chơ Ro' },
    { label: 'Co', alias: 'Co' },
    { label: 'Co Ho', alias: 'Cờ Ho' },
    { label: 'Co Tu', alias: 'Cơ Tu' },
    { label: 'Gie Trieng', alias: 'Giẻ Triêng' },
    { label: 'Hre', alias: 'Hrê' },
    { label: 'Khang', alias: 'Kháng' },
    { label: 'Khmer', alias: 'Khmer' },
    { label: 'Kho Mu', alias: 'Kho Mu' },
    { label: 'Ma', alias: 'Mạ' },
    { label: 'Mang', alias: 'Mảng' },
    { label: 'Mnong', alias: 'Mnông' },
    { label: 'O Du', alias: 'Ơ Đu' },
    { label: 'Ta Oi', alias: 'Tà Ôi' },
    { label: 'Xinh Mun', alias: 'Xinh Mun' },
    { label: 'Xo Dang', alias: 'Xơ Đăng' },
    { label: 'X’Tieng', alias: 'X’Tiêng' },
    { label: 'Bố Y', alias: 'Bo Y' },
    { label: 'Giay', alias: 'Giáy' },
    { label: 'Lao', alias: 'Lào' },
    { label: 'Lu', alias: 'Lự' },
    { label: 'Nung', alias: 'Nùng' },
    { label: 'San Chay', alias: 'Sán Chay' },
    { label: 'Tay', alias: 'Tày' },
    { label: 'Thai', alias: 'Thái' },
    { label: 'Co Lao', alias: 'Cờ Lao' },
    { label: 'La Chi', alias: 'La Chí' },
    { label: 'La Ha', alias: 'La Ha' },
    { label: 'Pu Peo', alias: 'Pu Péo' },
    { label: 'Dao', alias: 'Dao' },
    { label: 'Hmong', alias: 'Hmong' },
    { label: 'Pa Then', alias: 'Pà Thẻn' },
    { label: 'Cham', alias: 'Chăm' },
    { label: 'Chu Ru', alias: 'Chu Ru' },
    { label: 'E De', alias: 'Ê Đê' },
    { label: 'Gia Rai', alias: 'Gia Rai' },
    { label: 'Raglay', alias: 'Raglay' },
    { label: 'Hoa', alias: 'Hoa' },
    { label: 'Ngai', alias: 'Ngái' },
    { label: 'San Diu', alias: 'Sán Dìu' },
    { label: 'Cong', alias: 'Cống' },
    { label: 'Ha Nhi', alias: 'Hà Nhì' },
    { label: 'La Hu', alias: 'La Hủ' },
    { label: 'Lo Lo', alias: 'Lô Lô' },
    { label: 'Phu La', alias: 'Phù Lá' },
    { label: 'Si La', alias: 'Si La' },
];
