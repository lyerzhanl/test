import React from 'react';

const ChangePassword = () => {
  return (
    <div className="item-group">
      <div className="pass-item">
        <label htmlFor="pass">Current Password</label>
        <input type="text" name="pass" id="pass" />
      </div>
      <div className="pass-item">
        <label htmlFor="newpass">New Password</label>
        <input type="text" name="newpass" id="newpass" />
      </div>
      <div className="pass-item">
        <label htmlFor="rep">Repeat New Password</label>
        <input type="text" name="rep" id="rep" />
      </div>
      <button className="save-changes">Save Changes</button>
    </div>
  );
};

export default ChangePassword;
