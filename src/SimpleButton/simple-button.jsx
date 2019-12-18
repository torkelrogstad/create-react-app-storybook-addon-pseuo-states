import * as React from 'react';
import style from './simple-button.module.scss';

export const SimpleButton = (props) => {
  return (
    <button
      ref={props.innerRef}
      style={props.style}
      onClick={props.onClick ? props.onClick : () => null}
      disabled={props.disabled}
      className={style.Button}
    >
      {props.label}
    </button>
  );
};
