import React from 'react';

export default function Cross(props) {
  return (
    <svg
      className={props.className}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      size={25}
      height={25}
      width={25}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
    </svg>
  );
}
