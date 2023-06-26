import { Tour } from "./";

const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <h2 className="title">Ours tours</h2>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
