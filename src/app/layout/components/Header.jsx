import React from 'react'
import logo from "../../../images/react.svg"

export default function Header() {
  return (
    <div>
        <img src={logo} alt="" style={{height: "35px", verticalAlign: "top"}} />{""}
        <span className='h2 pt-4 text-white-50'> React Course - ReduxPedia</span>
    </div>
  )
}
