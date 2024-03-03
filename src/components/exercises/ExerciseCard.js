import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <div className="working-muscles">
        <button className="working-muscle">{exercise.bodyPart}</button>
        <button className="working-muscle target">{exercise.target}</button>
      </div>
      <p className="exercise-name">{exercise.name}</p>
    </Link>
  );
};

export default ExerciseCard;
