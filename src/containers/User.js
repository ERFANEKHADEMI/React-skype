import React from "react";
import "./User.css";
import store from "../store";
import { setActiveUserId } from "../actions";
import { userdata } from "../userdata";

const User = ({ user }) => {
  console.log(user.profile_pic);
  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <div>
        <img src={user.profile_pic} alt={user.name} className="User__pic" />
      </div>
      <div className="User__details">
        <div>
          <p className="User__details-name">{user.name}</p>
        </div>
        <p className="User__details-status">{user.status}</p>
      </div>
    </div>
  );
};

function handleUserClick({ user_id }) {
  console.log(user_id);
}

export default User;