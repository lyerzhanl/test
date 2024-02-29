import React, {useEffect, useState} from 'react';
import {exerciseOptions, fetchData} from "../../utils/fetchData";
import HorizontalScrollbar from "../horizontalScrollbar/HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);
    useEffect(() => {
        const fetchExerciseData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExerciseData();
    }, []);

    const handleSearchClick = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
            )

            setSearch('');
            setExercises(searchedExercises)
        }
    }

    return (
        <>
            <div className="search-exercise">
                <input type="text" placeholder="Search ExercisesList" className="search-exercise-input" value={search}
                       onChange={(e) => setSearch(e.target.value.toLowerCase())}/>
                <button className="search-exercise-btn" onClick={handleSearchClick}>Search</button>
            </div>
            <div className="workout-categories">
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
        </>
    )
};

export default SearchExercises;