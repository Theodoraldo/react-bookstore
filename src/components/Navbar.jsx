import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="bookstore-nav">
      <div className="bookstore-nav-left">
        <h1 className="book-head">Bookstore CMS</h1>
        <NavLink to="/">Book</NavLink>
        <NavLink to="categories">Category</NavLink>
      </div>
      <button>Icon</button>
    </div>
  );
}
