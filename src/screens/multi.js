import { UseDispatch, useDispatch, useSelector } from "react-redux";

export default function Multi() {

  const store = useSelector((state) => state.multimedia);

  const series = store.filter((item) => item.programType === "series");
  const movies = store.filter((item) => item.programType === "movie");

  const mostSeries = series.sort((a, b) => a.title.localeCompare(b.title));


  

  // console.log(series);
  // console.log(movies);
  // console.log(store);

  return (<>
    <div>
      <h1>Popular Series</h1>
      <div>
        {series.map((item) => (
          <div key={item.title}>
            <img src={item.images["Poster Art"].url} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </>);
}
