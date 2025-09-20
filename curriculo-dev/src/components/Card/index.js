import React from 'react';
import './card.css';
import SubTitle from '../SubTitle';
import SubTitleH3 from '../SubTitleH3';
const Card = ({ subtitle, subtitleH3, data, info }) => (
  <>
    <div>
      <SubTitle texto={subtitle} />
      <SubTitleH3 texto={subtitleH3} />
    </div>
    <div className="info">
      <span className="highlight">{data}</span>
      <p>{info}</p>
    </div>
  </>
);

export default Card;
