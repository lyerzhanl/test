import React from 'react';

const Info = () => {
  return (
    <div className="item-group">
      <div class="info-item">
        <label class="form-label">Bio</label>
        <textarea class="form-control" rows="5"></textarea>
      </div>
      <div class="info-item">
        <label class="form-label">Birthday</label>
        <input type="text" class="form-control" value="May 3, 1995" />
      </div>
      <div class="info-item">
        <label class="form-label">Country</label>
        <select class="custom-select">
          <option>USA</option>
          <option selected>Canada</option>
          <option>UK</option>
          <option>Germany</option>
          <option>France</option>
        </select>
      </div>
      <hr class="border-light" />
      <div class="card-body">
        <h6 class="info-contacts">Contacts</h6>
        <div class="info-item">
          <label class="form-label">Phone</label>
          <input type="text" class="form-control" value="+0 (123) 456 7891" />
        </div>
        <div class="info-item">
          <label class="form-label">Website</label>
          <input type="text" class="form-control" value />
        </div>
      </div>
      <button className="save-changes">Save Changes</button>
    </div>
  );
};

export default Info;
