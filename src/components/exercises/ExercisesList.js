import React from 'react';

import { exerciseOptions, fetchData } from '../../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const ExercisesList = ({ exercises, setexercises, bodypart }) => {
  return (
    <div className="exercises-wrapper">
      <h1 className="header__primary">Available Exercises</h1>
      <div className="exerciseslist">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default ExercisesList;
