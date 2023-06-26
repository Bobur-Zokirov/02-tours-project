import { useState } from "react";
import { Loading, Tours } from "./components";
import { useEffect } from "react";

const URL = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);

    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchData}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};

export default App;
