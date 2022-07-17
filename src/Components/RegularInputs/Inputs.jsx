import { TextField } from '@mui/material'
import React from 'react'

function TextFields({
    type = 'text',
    label,
    value,
    name = '',
    onchangeHandler = () => { },
    padding = 'py-2 px-4',
    bgColor = '',
    width = 'w-[100%]',
    border = '',
    fontSize = 'text-base',
    minLength = 1,
    defaultValue,
    maxLength,

}) {
    return (
        <TextField
            id="outlined-basic"
            value={value}
            variant="outlined"
            autoFocus={true}
            defaultValue={defaultValue}
            type={type}
            name={name}
            label={label}
            onChange={onchangeHandler}
            required
            maxLength={maxLength}
            minLength={minLength}
            className={`${width} ${padding} ${bgColor} ${border} ${fontSize} rounded-md text-slate-800 focus:outline-none ring-blue-500 focus:ring`
            }
        />
    )
}

export default TextFields
