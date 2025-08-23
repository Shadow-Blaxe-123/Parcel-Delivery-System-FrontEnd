import { Outlet } from "react-router";

function DashBoard() {
  return (
    <div>
      <h1>This is DashBoard component.</h1>
      <Outlet />
    </div>
  );
}
export default DashBoard;
