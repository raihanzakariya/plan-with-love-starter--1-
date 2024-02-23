import Card from "./Card";
const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      <div className="container">
        <h2 className="title"> 🥳 Plan For Tour 🥳 </h2>
      </div>

      <div className="cards">
        {tours.map((tour) => {
          /*looping of array, 7city of card */
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>
    </div>
  );
};
export default Tours;
