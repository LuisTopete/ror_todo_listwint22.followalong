import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <>
    <nav>
      <h5>TodoList</h5>
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/lists'>
          <li>Lists</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default MainNavbar;