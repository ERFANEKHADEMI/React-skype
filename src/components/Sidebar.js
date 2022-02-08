import React from "react";
import User from "../containers/User";
import "./Sidebar.css";
import { userdata } from "../userdata";
import Header from "./Header";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <aside className="Sidebar">
    	<Header user={userdata[0]} key={userdata[0].name} />
    	<div className = "Sidebar_search">
    		<p className = "Sidebar_search_p">Chats</p>
    		<input className = "Sidebar_input" placeholder = "Search" />
    	</div>
    	{userdata.map(user=> <User user={user} key={user.name} />)}
    	<div className = "Footer">
    		<Footer />
    	</div>
    </aside>
  );
};

export default Sidebar;