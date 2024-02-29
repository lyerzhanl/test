import React from 'react';

const Story = (props) => {
  return (
    <div className="story">
      <img src={props.img} alt="story" />
      <h1 className="header__tertiary">{props.name}</h1>
      <p className="description">{props.title}</p>
    </div>
  );
};

export default Story;
