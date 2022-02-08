import React from "react";
import "./Header.css";

function Header({ user }) {
  const { name, status, profile_pic } = user;

  return (
    <header className="Header">
    	<img className = "Header__img" src = {profile_pic} />
		<div className = "Header__pgroup">
			<p className="Header__name">{name}</p>
			<div>
				<div className = "Header__status_round"></div>
				<p className="Header__status">{status}</p>
			</div>
		</div>
		<div className = "Header__icons" >
			<img className = "H_icon" src = "./images/msgicon.png" />
			<img className = "H_icon" src = "./images/bellicon.png" />
			<img className = "H_icon dot_icon" src = "./images/dot1.png" />
		</div>
    </header>
  );
}

export default Header;