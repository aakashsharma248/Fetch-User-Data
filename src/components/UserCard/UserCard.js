import React from 'react';

const UserCard = ({ userPic, userName }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid rgb(228, 231, 237)' }}>
      {/* Left Container */}
      <div style={{ flex: 1 }}>
        <h4>User Image</h4>
        <img src={userPic} alt="Your Image" style={{height: "100px"}}/>
      </div>

      {/* Right Container */}
      <div style={{ flex: 1 }}>
        <div>
          <h4>Github User Name</h4>
          <p>{userName || "Name not available"}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;


