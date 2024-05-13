import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#d7d7d7] font-bold px-3 py-2"
              : "font-bold px-3 py-2 "
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold px-3 py-2 "
              : "font-bold px-3 py-2 "
          }
          to="/allBlog"
        >
          All Blog
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold px-3 py-2"
                  : "font-bold px-3 py-2"
              }
              to="/addBlog"
            >
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold px-3 py-2  "
                  : "font-bold px-3 py-2 "
              }
              to="/wishlist"
            >
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold px-3 py-2  "
                  : "font-bold px-3 py-2 "
              }
              to="/featuredBlogs"
            >
              Featured Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold px-3 py-2  "
                  : "font-bold px-3 py-2 "
              }
              to="/comment"
            >
              All Comment
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className=" bg-black text-white"
    >
      <div className=" lg:px-10 navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-item z-10 menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <h2 className="lg:text-2xl font-bold -mt-2">Backpack Traveler</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end flex gap-3">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(true)}
              >
                <div className="w-12 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                className={`mt-14 z-20 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2 text-center ${
                  showMenu ? "block" : "hidden"
                }`}
              >
                <li>
                  <button className="btn btn-sm bg-[#f7775e] text-white">
                    {user?.displayName || "User name not found"}
                  </button>
                </li>
                <li>
                  <button
                    className=" bg-[#f7775e] text-white py-2 flex justify-center"
                    onClick={logOut}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className=" flex md:space-x-2 lg:space-x-2">
              <Link to="/login" className="btn bg-[#f7775e] text-white lg:px-7">
                Sing In
              </Link>
              <Link
                to="/register"
                className="btn bg-[#f7775e] text-white lg:px-7"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
