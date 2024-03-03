import React from 'react';

const General = () => {
  return (
    <>
      <div className="item-group">
        <div className="general-item">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="general-item">
          <label htmlFor="username">Name</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="general-item">
          <label htmlFor="username">Email</label>
          <input type="text" name="username" id="username" />
        </div>
        <button className="save-changes">Save Changes</button>
      </div>
    </>
  );
};

export default General;
