import "./style.css";

import { useParams } from "react-router-dom";
import { Fragment } from "react";

import { useFetch } from "../../hooks/useFetch";

export default function Product() {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product } = useFetch(url);
  return (
    <Fragment>
      <p>ID do produto: {id}</p>
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      )}
    </Fragment>
  );
}
