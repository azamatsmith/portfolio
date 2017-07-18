import React from 'react';

import './WorkPlaceHolder.css'

export default function WorkPlaceHolder() {
  return (
    <li className="WorkPlaceHolder">

      <div className="WorkPlaceHolder-left">
        <div className="WorkPlaceHolder-left-text one" />
        <div className="WorkPlaceHolder-left-text two" />
        <div className="WorkPlaceHolder-left-text three" />
      </div>

      <div className="WorkPlaceHolder-right">
        <div className="WorkPlaceHolder-right-text" />
        <div className="WorkPlaceHolder-right-text" />
        <div className="WorkPlaceHolder-right-text three" />
      </div>

    </li>
  );
}
