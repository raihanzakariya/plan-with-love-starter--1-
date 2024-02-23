import { useState } from "react";

const Card = ({ id, image, info, price, name, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  const describe = readmore ? info : `${info.substring(0, 200)}...`;
  const readmoreHandler = () => {
    setReadmore(!readmore);
  };
  return (
    <div className="card">
      <img src={image} className="image" alt="" />

      <div className="tour-info">
        <div className="tour-detail">
          <h4 className="tour-price">₹{price}</h4>
          <h4 className="tour-name">{name} </h4>
        </div>
        <div className="description">
          {describe}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};
export default Card;
