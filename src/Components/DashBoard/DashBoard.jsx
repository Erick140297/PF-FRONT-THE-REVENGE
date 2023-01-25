import React from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div>
        <Link to="/admin/user">User</Link>
      </div>
      <div>
        <Link to="/admin/products">Products</Link>
      </div>
      <div>
        <Link to="/admin/orders">Orders</Link>
      </div>
    </div>
  );
};

export default DashBoard;
