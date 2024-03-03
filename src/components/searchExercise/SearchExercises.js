import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../../utils/fetchData';
import HorizontalScrollbar from '../horizontalScrollbar/HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises?limit=100',
        exerciseOptions
      );

      console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      console.log(searchedExercises);
      setExercises(searchedExercises);
    }
  };

  return (
    <>
      <div className="search-exercise">
        <input
          type="text"
          placeholder="Search ExercisesList"
          className="search-exercise-input"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button className="search-exercise-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="workout-categories">
        <HorizontalScrollbar
          data={bodyParts.slice(0, 4)}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </>
  );
};

export default SearchExercises;
