import React, { useState } from 'react';

import './style.css';
import SearchExercises from '../../components/searchExercise/SearchExercises';
import ExercisesList from '../../components/exercises/ExercisesList';

const Exercises = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <main className="exercises-main">
      <h1 className="header__primary">Exercises</h1>

      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <ExercisesList
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />

      <div className="exercises">
        <div className="exercise"></div>
      </div>
    </main>
  );
};

export default Exercises;

{
  /*<div className="workout-categories">*/
}
{
  /*    {workoutCategories.map((category, index) => (*/
}
{
  /*        <div className="workout-icon" key={index}>*/
}
{
  /*            <div>*/
}
{
  /*                <img src={category.img} alt={category.title} srcSet=""/>*/
}
{
  /*            </div>*/
}
{
  /*            <p className="icon-title">{category.title}</p>*/
}
{
  /*        </div>*/
}
{
  /*    ))}*/
}
{
  /*</div>*/
}
