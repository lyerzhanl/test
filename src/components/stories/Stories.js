import React from 'react';

import { successStories } from '../../helpers/successStories';
import Story from './Story';

const Stories = () => {
  return (
    <section className="success-stories">
      <div className="story__title">
        <h1 className="header__primary">Succsess stories</h1>
        <p className="description">
          Every day more than 1,000,000 people visit our app with inspiration to
          become better people. Be inspired too!
        </p>
      </div>
      <div className="stories">
        {successStories.map((e) => {
          return (
            <Story key={e.id} title={e.comment} img={e.img} name={e.name} />
          );
        })}
      </div>
      {/* <div className="btn-wrapper">
        <button className="start__button">Try For Free</button>
      </div> */}
    </section>
  );
};

export default Stories;
