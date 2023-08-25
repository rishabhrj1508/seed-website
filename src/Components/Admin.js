import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import enrollmentData from "./enrollmentData.json";
import "./Admin.css"; // Import the CSS file for styling

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedEnrollment, setSelectedEnrollment] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [matchingDataFound, setMatchingDataFound] = useState(true);

  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  useEffect(() => {
    // Filter users based on selected year and language
    let filteredData = [];

    if (selectedYear || selectedLanguage) {
      filteredData = users.filter((user) => {
        let isYearMatched = true;
        let isLanguageMatched = true;

        if (selectedYear && user.Year !== selectedYear) {
          isYearMatched = false;
        }

        if (
          selectedLanguage &&
          !user.Language.includes(selectedLanguage.toLowerCase())
        ) {
          isLanguageMatched = false;
        }

        return isYearMatched && isLanguageMatched;
      });
    } else {
      filteredData = users;
    }

    setFilteredUsers(filteredData);
  }, [users, selectedYear, selectedLanguage]);

  const handleLogout = () => {
    navigate("/");
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      alert("User deleted successfully!");
      // Remove the deleted user from the users state
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user. Please try again.");
    }
  };

  const handleShowDetails = (enrollmentId) => {
    setSelectedEnrollment(enrollmentId);
    setShowDetails(true);

    // Check if matching data is found for the selected enrollment ID
    if (enrollmentData.hasOwnProperty(enrollmentId)) {
      setMatchingDataFound(true);
    } else {
      setMatchingDataFound(false);
    }
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div>
      <nav className="navbar">
        <h1 className="navbar-title">Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="dashboard">
        <div className="filters">
          <h2>Filters:</h2>
          <select
            className="filter-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            <option value="1">1st year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          <input
            className="filter-input"
            type="text"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            placeholder="Search by Language"
          />
        </div>

        <div className="card-container">
          {filteredUsers.map((user) => (
            <div className="card" key={user.id}>
              <h3>Name: {user.Name}</h3>
              <p>Email: {user.Email}</p>
              <p>
                Languages:{" "}
                {user.Language.map((lang) => (
                  <span className="language-tag" key={lang}>
                    {lang},{" "}
                  </span>
                ))}
              </p>
              <p>Enrollment No: {user.Enrollment}</p>
              <p>Year: {user.Year}</p>
              <p>Phone No: {user.Phone}</p>
              <button
                className="delete-button"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
              <button
                className="show-details-button"
                onClick={() => handleShowDetails(user.Enrollment)}
              >
                Show Details
              </button>
            </div>
          ))}
        </div>

        {showDetails && (
          <div className="enrollment-details">
            <h2>Enrollment Details</h2>
            {matchingDataFound ? (
              <>
                <p>Subject: {enrollmentData[selectedEnrollment].subject}</p>
                <p>Grade: {enrollmentData[selectedEnrollment].grade}</p>
                <p>
                  Attendance: {enrollmentData[selectedEnrollment].attendance}
                </p>
              </>
            ) : (
              <p>No matching data found.</p>
            )}
            <button className="close-button" onClick={handleCloseDetails}>
              Close Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;