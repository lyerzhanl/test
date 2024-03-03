import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import madm from './../../img/mad-muscles.png';

const TrainingPrograms = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const coaches = [
    {
      name: 'Mad Muscles',
      img: madm,
      job: 'Fitness Organization',
      comment:
        'Bulking routine for skinny — Get first results in 5 days. Reach your muscle goals easily with our fitness coach app. Create a personalized meal and workout plan based on daily activity and eating habits.',
      url: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwigvOrI9teEAxW8BaIDHbxuAN4YABAAGgJsZQ&ase=2&gclid=CjwKCAiA3JCvBhA8EiwA4kujZujvNyTonVFgHt8u2HxbQSzpgmpZlOgeLG9JvqkSIBzTUj3J3-tpVBoCUj0QAvD_BwE&ohost=www.google.com&cid=CAESVuD21iIKBzFWHMRszdnVNMK0sbKKG2sf0odq50JpIKGL2yfPW6H914mCqTVzULh7OJu7xQsiFZISL2xv13nhUDJ7BOpFA1hxWWiXlMaDxNCJXjOTMRKD&sig=AOD64_0UpeBO8MzuXLLeCZ_6wuCkUK8IMQ&q&nis=4&adurl&ved=2ahUKEwikr-XI9teEAxXzKxAIHcKGCWcQ0Qx6BAgHEAM',
    },
  ];

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch('https://api.example.com/data');

  //         if (!response.ok) {
  //           throw new Error('Network response was not ok');
  //         }

  //         const result = await response.json();
  //         setData(result);
  //       } catch (error) {
  //         setError(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  return (
    <main className="training-programs-main">
      <h1 className="header__primary">Ready Training Programs From Coaches</h1>

      <div className="training-programs">
        {coaches.map((coach) => (
          <div className="training-program">
            <div className="program-wrapper">
              <img src={coach.img} alt={coach.name} className="trainer" />
              <div className="program-description">
                <h1 className="coach-name">{coach.name}</h1>
                <i className="coach-job">{coach.job}</i>
                <p className="coach-comment">{coach.comment}</p>
                <Link to={coach.url} className="program">
                  View Program
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TrainingPrograms;
