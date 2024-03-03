import React, { useState } from 'react';
import './style.css';

import product from './../../img/mad-muscles.png';

const Meal = () => {
  //   const [meals, setMeals] = useState(null);
  //  const [error, setError] = useState(null);

  const meals = [
    {
      img: product,
      name: 'rice',
      category: 'zerno',
      properties:
        'Rice offers numerous benefits, making it a valuable dietary staple worldwide. Rich in carbohydrates, it serves as a primary energy source, providing sustained fuel for the body. Additionally, rice is gluten-free, making it suitable for individuals with gluten sensitivities or celiac disease. Its versatility in culinary applications allows for a wide range of dishes, from savory meals to desserts. Brown rice, in particular, retains its bran layer, offering additional fiber, vitamins, and minerals. Economically, rice cultivation contributes significantly to the livelihoods of farmers and the overall economy in many regions.',
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
  //         setMeal(result);
  //       } catch (error) {
  //         setError(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <>
      <main className="meal-main">
        <div className="meal__wrapper">
          <h1 className="header__primary">Meal Source</h1>
          <div className="meal-categories">
            {meals.map((meal) => (
              <div className="meal">
                <p className="meal-title">{meal.category}</p>
              </div>
            ))}
          </div>
          <div className="meal-cards-wrapper">
            {meals.map((meal) => (
              <div className="meal-card">
                <img src={meal.img} alt={meal.name} />
                <p className="meal-name">{meal.name}</p>
                <p className="desc">{meal.properties}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Meal;
