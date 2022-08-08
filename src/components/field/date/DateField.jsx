import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

const DateField = (props) => {
    const [isOpen, setOpen] = useState(false)

    const {field, form, isDark} = props

    const handleChange = (e) => {
        const now = new Date()
        const value = e.setHours(now.getHours(), now.getMinutes(), now.getSeconds())
        form.setFieldValue(field.name, value)
        setOpen(false)
    }

    const handleReset = (e) => {
        e.preventDefault()
        form.setFieldValue(field.name, form.initialValues[field.name])
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
                label=''
                value={field.value}
                onChange={handleChange}
                open={isOpen}
                onClose={() => setOpen(false)}
                renderInput={({inputRef, inputProps, InputProps}) => (
                    <>
                        <input 
                            {...inputProps}
                            ref={inputRef}
                            className={`form ${isDark ? 'theme-dark' : 'theme-light'}`} 
                        />
                        {
                            !form.dirty ? (InputProps?.endAdornment) : (
                                <IconButton onClick={handleReset}>
                                    <Close/>
                                </IconButton>
                            )
                        }
                    </>
                )}
            />
        </LocalizationProvider>
    )
}
const mapStateToProps = state => state.theme
const ConnectedDatePicker = connect(mapStateToProps)(DateField)
export { ConnectedDatePicker as DateField }