import React, {useEffect, useState} from 'react';
import './style.css';
import { useData } from '../../../context/UserDataContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BodyCount = () => {
  const { bodyCount, setBodyCount } = useData();
  const lifeStyle = ['passive', 'little activity', 'active', 'intense'];
  const navigate = useNavigate();
  // Immport Data & Goals
  const {userData, userGoals} = useData();
  // Set initial bodyData
  const [bodyData, setBodyData] = useState({
    height: '',
    weight: '',
    birthDate: '',
    lifeStyle: 'passive',
  });


  // Handle input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedBodyData = {
      ...bodyData,
      [name]: value,
    };
    setBodyData(updatedBodyData);
  };

  useEffect(() => {
    setBodyCount(bodyData);
  }, [bodyData, setBodyCount]);



  // Handle Submit Button
  const handleComplete = async (e) => {
    e.preventDefault();
    const allUserData = { userData, userGoals, bodyCount };

    // try {
    //   await axios.post('http://localhost:3001/users', allUserData, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //
    //   navigate('/');
    // } catch (error) {
    //   console.error('There is some issue', error.message);
    // }
    console.log(allUserData)
  };

// Handle Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    setBodyCount(bodyData);
  };


  return (
    <main className="userData">
      <div className="data__container">
        <div className="form__outer">
          <div className="form__title">
            <h1 className="header__primary">BodyCount</h1>
            <p className="description">
              It's almost done, now lets do some body data calculation.
            </p>
          </div>
          <div className="form__wrapper">
            <form className="signUp" onSubmit={handleSubmit}>
              <div>
                <input
                  type="number"
                  name="height"
                  id="height"
                  placeholder="Height"
                  autoComplete="off"
                  value={bodyData.height}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="Weight"
                  autoComplete="off"
                  value={bodyData.weight}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  placeholder="Birthday"
                  autoComplete="off"
                  value={bodyData.birthDate}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <select
                  className="lifeStyle"
                  name="lifeStyle"
                  onChange={handleInputChange}
                >
                  {lifeStyle.map((style, index) => (
                    <option key={index} value={style} id={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="submit" onClick={handleComplete}>
                sUGN uP
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BodyCount;
