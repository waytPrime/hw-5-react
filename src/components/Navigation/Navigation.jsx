import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movie">Movie</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
