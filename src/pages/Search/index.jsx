import "./style.css";

import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Search() {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponíveis</h1>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
          {error && (<h3 style={{color:"red"}}>{error}</h3>)}
      </ul>
    </div>
  );
}
