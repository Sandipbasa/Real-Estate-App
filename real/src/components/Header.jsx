import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        
        {/* Logo */}
        <Link to="/">
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-red-700'>Urban</span>
            <span className='text-yellow-500'>Roots</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button type="submit">
            <FaSearch className='text-slate-600' />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className='flex gap-4'>
          <li>
            <Link to="/" className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className='text-slate-700 hover:underline'>
              Sign in
            </Link>
          </li>
        </ul>
        
      </div>
    </header>
  );
}
