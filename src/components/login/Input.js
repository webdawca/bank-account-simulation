import * as React from 'react';
import { connect } from 'react-redux';

const Input = ({
    classes,
    name,
    placeholder,
    type,
    onChange,
    fullName,
    minLength = 2,
    label,
    autocomplete,
    errorEmptyInput,
    invalidInput,
    showError
    }) => (
    <div className="LogIn__wrapper">
        <label className="LogIn__label">{label}</label>
        <input
            className={classes}
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={fullName}
            minLength={minLength}
            autoComplete={autocomplete}
            required/>
            <span className={!showError ? "LogIn__error" : "LogIn__error LogIn__error--visible "}>{!showError ? errorEmptyInput : invalidInput}</span>
    </div>
);

const mapStateToProps = state => ({
    form: state.form
})


export default connect(mapStateToProps)(Input);