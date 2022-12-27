import React from 'react';

const Clock = props => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

Clock.propTypes = {

};

export default Clock;