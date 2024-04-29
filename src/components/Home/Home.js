import React, { useState } from "react";
import "./Home.css"; 
import UserCard from "../UserCard/UserCard.js";
import axios from "axios";

const HomeComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState("");
  const [activeSeachQuery, setActiveSeachQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSeachQuery(searchQuery);
    setSearchQuery("");
    const searchParam = searchQuery.replace(/\s/g, "");
    axios
      .get(`https://api.github.com/users/${searchParam}`)
      .then((response) => {
        if(response && response.data){
            setUserData(response.data);
                const fetchedData = {
                    userName: searchQuery,
                    userPic: response.data.name ? response.data.avatar_url : null
                }
                let existingData = localStorage.getItem('userProfileData');
                existingData = existingData ? JSON.parse(existingData) : [];
                existingData.push(fetchedData);
                localStorage.setItem('userProfileData', JSON.stringify(existingData));
        }
      })
      .catch((error) => {
        console.error("Error fetching userData:", error);
      });
  };
  return (
    <div className="home-container">
      <h1>Search GitHub User</h1>
      <div className="search-form">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search GitHub users..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {userData ? userData.name ? (
        <div style={{ textAlign: "center" }}>
          <p style={{ textAlign: "left", marginLeft: "6vw" }}>Search Results</p>
          <UserCard
            userPic={userData.avatar_url}
            userName={userData.name ? activeSeachQuery : null}
          />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>Search Result not found</div>
      ) : <></>
      }
    </div>
  );
};

export default HomeComponent;
