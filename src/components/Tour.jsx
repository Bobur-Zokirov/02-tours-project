import { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [readMore, setReadmore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4 className="title">{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.substring(0, 200)}...
          <button onClick={() => setReadmore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => deleteTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
