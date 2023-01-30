import React from "react";
import "./Paginado.css";

function PaginadoOrder({ ordersPerPage, allOrders, paginado }) {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(allOrders / ordersPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  return (
    <nav className="nav">
      <ul className="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className="number" key={number}>
              <button
                className="paginadoA"
                onClick={() => paginado(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
export default PaginadoOrder;
