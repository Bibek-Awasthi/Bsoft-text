import React from 'react'

export default function Alert(props) {
    const capitalize=(word)=>{
        const lcase = word.toLowerCase();
        return lcase.slice(0,1).toUpperCase()+lcase.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>
  )
}
