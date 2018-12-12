import React from 'react';
import ReactLoading from 'react-loading';

const LoadingPage = (props) => {
  const text = props.text;
  const delay = props.delay;

  return(
    <div className="loading">
      <ReactLoading className="loading-img" type="spinningBubbles" delay={props.delay} color="#000" width='10%'>
      </ReactLoading>
      <h2>{text}</h2>
    </div>
  );
}

export default LoadingPage;
