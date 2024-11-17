import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Team from './Team';
import Company from './Company';

const About = () => {
  return (
    <div>
      <h2>About</h2>

      <ul>
        <li>
          <Link to="team">Our Team</Link>
        </li>
        <li>
          <Link to="company">Our Company</Link>
        </li>
      </ul>

      <Routes>
        <Route path="team" element={<Team />} />
        <Route path="company" element={<Company />} />
      </Routes>
    </div>
  );
}

export default About