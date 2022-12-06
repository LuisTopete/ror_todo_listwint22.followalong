import { Link } from 'react-router-dom';

const Nomatch = () => (
  <>
    <h1>404 page not Found</h1>
    <Link to='/'>
      Return Home 
    </Link>
  </>
)

export default Nomatch;