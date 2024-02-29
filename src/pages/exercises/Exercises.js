import React, {useState} from 'react';

import chest from './../../img/exercises/chest-yellow.png'
import arm from './../../img/exercises/arm-yellow.png'
import abs from './../../img/exercises/abs-yellow.png'
import leg from './../../img/exercises/leg-yellow.png'

import './style.css'
import SearchExercises from "../../components/searchExercise/SearchExercises";
import ExercisesList from "../../components/exercises/ExercisesList";

const Exercises = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([]);
    
    return(
        <main className="exercises-main">
            <h1 className="header__primary">
                Exercises
            </h1>

            {/*<div className="workout-categories">*/}
            {/*    {workoutCategories.map((category, index) => (*/}
            {/*        <div className="workout-icon" key={index}>*/}
            {/*            <div>*/}
            {/*                <img src={category.img} alt={category.title} srcSet=""/>*/}
            {/*            </div>*/}
            {/*            <p className="icon-title">{category.title}</p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <ExercisesList setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />

            <div className="exercises">
                <div className="exercise">

                </div>
            </div>
        </main>
    )
};

export default Exercises;