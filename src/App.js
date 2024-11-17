import React, { Suspense, lazy } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import User from './components/User';
import OldPage from './components/OldPage';
import NewPage from './components/NewPage';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';
import Settings from './components/Settings';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import Profile from "./components/Profile";
import Details from "./components/Details";
// import Blog from "./components/Blog";
import BlogLayout from "./components/BlogLayout";
import Blog from "./components/Blog";
// import Search from './components/Search';

const Search = lazy(() => import('./components/Search'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React App
        <Router>
          <nav className="nav-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/user/1">User 1</Link>
              </li>
              <li>
                <Link to="/user/2">User 2</Link>
              </li>
              <li>
                <Link to="old-page">Old Page</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/details">Details</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/search" element={<Search />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/old-page" element={<OldPage />} />
              <Route path="/new-page" element={<NewPage />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={<PrivateRoute element={<Dashboard />} />}
              >
                <Route path="stats" element={<Stats />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="/profile" element={<Profile />} />
              <Route path="/details" element={<Details />} />
              <Route path="/blog" element={<BlogLayout />}>
                <Route index element={<Blog />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </header>
    </div>
  );
}

export default App;
