import React from 'react'

export default function (props) {
    return (
        props.alert && <div className={`alert alert-${props.alert.alertType} fade show`} role="alert">
            {props.alert.alertText}
        </div>
    )
}
