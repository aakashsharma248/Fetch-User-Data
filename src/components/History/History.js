import React from "react";
import "./History.css";

const History = () => {
  const userProfileData = JSON.parse(localStorage.getItem("userProfileData"));
  const clearSearchHistory = () => {
    localStorage.removeItem("userProfileData");
    window.location.reload();
  };
  return (
    <div className="home-container">
      <h1>Your Search History</h1>
      {userProfileData ? (
        <>
          <div className="home-subcontainer"
          >
            {/* Left Container Header */}
            <div
             className="header-leftcontainer"
            >
              <h4>Search Term</h4>
            </div>

            {/* Right Container Header*/}
            <div className="header-rightcontainer">
              <h4>Search Result</h4>
            </div>
          </div>

          {userProfileData &&
            userProfileData.map((userData,index) => {
              return userData.userName ? (
                <React.Fragment key={index + "i"}>
                  <div
                  className="leftcontainer"
                  >
                    {/* Left Container */}
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <h4>{userData.userName}</h4>
                    </div>

                    {/* Right Container */}

                    {userData.userPic ? (
                      <>
                        <div style={{ flex: 1 }}>
                          <div
                           className="rightcontainer"
                          >
                            <div style={{ flex: 1 }}>
                              <h4>User Image</h4>
                              <img
                                src={userData.userPic}
                                alt="User Pic"
                                style={{ height: "100px" }}
                              />
                            </div>

                            <div style={{ flex: 1 }}>
                              <div>
                                <h4>Github User Name</h4>
                                <p>
                                  {userData.userName || "Name not available"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ flex: 1 }}>
                          <div
                            className="searchresult"
                          >
                            Search result not found
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                <></>
              );
            })}
        </>
      ) : (
        <h1> Nothing has been searched yet </h1>
      )}

      <button
        className="searchbutton"
        onClick={clearSearchHistory}
      >
        Clear Search History
      </button>
    </div>
  );
};

export default History;
