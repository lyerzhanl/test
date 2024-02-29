import React, {useEffect} from 'react';
import './style.css';
import { useState } from 'react';
import { useData } from '../../../context/UserDataContext';
import { useNavigate } from 'react-router-dom';

const UserData = () => {
  // ----------- Set Data from the form into Provider ----------
  const { userData, setUserData } = useData();
  const navigate = useNavigate();

  // ------------------ Get Data from the form -----------------
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      setPasswordError('Password confirmation does not match');
      return;
    }
    setUserData(formData);
    navigate('/signup/goals');
  };

  useEffect(() => {
    setUserData(formData);
  }, [formData, setUserData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const updateData = {
      ...formData,
      [name] : value,
    }
    setFormData(updateData);
  };

  return (
      <main className="userData">
        <div className="data__container">
          <div className="form__outer">
            <div className="form__title">
              <h1 className="header__primary">
                Sign <span>Up</span>
              </h1>
            </div>
            <div className="form__wrapper">
              <form className="signUp" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-Mail"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={passwordError !== '' ? 'confirm-input' : ''}>
                  <input
                    type="password"
                    name="confirm"
                    id="confirm"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={formData.confirm}
                  />
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

export default UserData;
