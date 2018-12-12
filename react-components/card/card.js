import React from 'react';

const Card = (props) => {
  const cardImg = props.cardImg;
  const cardTitle = props.cardTitle;
  const cardText = props.cardText;
  const cardAlt = props.cardAlt;
  const extra = props.extra;
  const children = props.children;

  return(
    <div className={"card " + extra} >
      <img className="card-img-top img-responsive" height="200" src={cardImg} alt={cardAlt}/>
      {children}
      <div className="card-body">
        <p className="card-title">{cardTitle}</p>
        <p className="card-text">{cardText}</p>
      </div>
    </div>
  )
}

export default Card;
