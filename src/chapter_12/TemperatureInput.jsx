import React from 'react';

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

const TemperatureInput = (props) => {

  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  }

  return (
    <fieldset>
      <legend>
        온도를 입력해주세요(단위:{scaleNames[props.scale]});
        <input value={props.temperature} onChange={handleChange}/>
      </legend>
    </fieldset>
  );
};

export default TemperatureInput;