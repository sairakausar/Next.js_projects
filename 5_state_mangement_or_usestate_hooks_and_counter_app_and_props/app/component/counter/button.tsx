import React from 'react'


export default function MeButton(props:any) {
  return (
    <div>
      <button className={props.MyButtonStyle} onClick={props.MyLittleButton}>
        button which use for counter
        {props.titleButton}
      </button>
    </div>
  );
}
