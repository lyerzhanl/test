import React from 'react';
import Navbar from '../../components/nav/Navbar';
import './style.css';

const Contacts = () => {
  return (
    <>
      <Navbar />
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Kazakhstan, Astana</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+77777777">+7 777 77 77</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:fitfusion@mail.ru">fitfusion@mail.ru</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Contacts;
