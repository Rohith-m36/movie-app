import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaStar, FaRegClock } from 'react-icons/fa';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MovieApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"><FaHome className="me-1" /> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top-rated"><FaStar className="me-1" /> Top Rated</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/upcoming"> <FaRegClock className="me-1" /> Upcoming </Link>
            </li>
          </ul>

          <form className="d-flex" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Search movies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
