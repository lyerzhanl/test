import React, {useEffect, useState} from 'react';
import './style.css';
import goalOptions from './../../../helpers/goalOptions.json';
import { useData } from '../../../context/UserDataContext';
import { useNavigate } from 'react-router-dom';

const UserGoals = () => {
  const { userGoals, setUserGoals } = useData();
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      setSelectedOptions((prevSelected) => [...prevSelected, option]);
    }
  };

  useEffect(() => {
    setUserGoals(selectedOptions);
  }, [selectedOptions, setUserGoals]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserGoals(selectedOptions);
    navigate('/signup/bodycount');
  };

  return (
    <main className="userData">
      <div className="data__container">
        <div className="form__outer">
          <div className="form__title">
            <h1 className="header__primary">Goals</h1>
            <p className="description">
              Perfect, ! Now let's decide what we want to work on:
            </p>
          </div>
          <div className="form__wrapper">
            <form className="signUp checkbox" onSubmit={handleSubmit}>
              <div className="chips">
                {goalOptions.goals.map((option) => (
                  <div key={option}>
                    <input
                      type="checkbox"
                      id={option}
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={() => handleCheckboxChange(option)}
                    />
                    <label
                      htmlFor={option}
                      className={`checkbox-item ${
                        selectedOptions.includes(option) ? 'active' : ''
                      }`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>

              <button type="submit" className="submit">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserGoals;
