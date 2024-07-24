import { header } from '../helpers/ProjectList'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Header.css'

const Header = () => {
  const { homepage, title } = header
  const location = useLocation();

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <Link to="PersonalPortfolioWebsite/" className='link'>{title}</Link>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}





export default Header
