import React, { useState } from 'react'

const Displayer = (props) => {
   let counts = props.count
  return (
<div>
    <p>Hi {counts}</p>
    </div>
  );
};

export default Displayer