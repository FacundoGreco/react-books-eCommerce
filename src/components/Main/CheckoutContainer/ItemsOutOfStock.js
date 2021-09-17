import React from "react";
import { Link } from "react-router-dom";
import "./ItemsOutOfStock.scss";

export default function ItemsOutOfStock({ itemsOutOfStock }) {
	return (
		<div className="itemsOutOfStock">
			<h3>No hay stock suficiente para estos libros.</h3>

			<div className="outOfStockList">
				{itemsOutOfStock.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</div>

			<Link to="/cart">
				<button>CARRITO</button>
			</Link>
		</div>
	);
}
