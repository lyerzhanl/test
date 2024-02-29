import React, {useState} from 'react';
import axios from "axios";
import './style.css'

const Signin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        const updateData = {
            ...formData,
            [name]: value,
        }
        setFormData(updateData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/users', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('There is some issue', error.message);
        }
        console.log(formData)
    }

    return <main className="signIn">
        <div className="data__container">
            <div className="form__outer">
                <div className="form__title">
                    <h1 className="header__primary">
                        Sign <span>In</span>
                    </h1>
                </div>
                <div className="form__wrapper">
                    <form className="signUp" >
                        <div>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                autoComplete="off"
                                value={formData.username}
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

                        <button type="submit" className="submit" onClick={handleSubmit}>
                            Next
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </main>;
};

export default Signin;
