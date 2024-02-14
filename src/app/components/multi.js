"use client";
import * as React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import styles from "@/app/css/multi.module.css";
import { Tooltip } from "@mui/material";

export default function Multi() {
  const params = useSearchParams();

  let views = [];

  const store = useSelector((state) => state.multimedia);

  const series = store.filter(
    // filtro los resultados segun el programType y el releaseYear
    (item) => item.programType === "series" && item.releaseYear >= 2010
  );
  const movies = store.filter(
    (item) => item.programType === "movie" && item.releaseYear >= 2010
  );

  const variable = params.get("element");

  if (variable === "movies") {
    views = movies.slice(0, 20).sort((a, b) => a.title.localeCompare(b.title)); // elijo los primeros 20 y ordenamos
    // console.log(views);
  } else if (variable === "series") {
    views = series.slice(0, 20).sort((a, b) => a.title.localeCompare(b.title)); // elijo los primeros 20 y ordenamos
    // console.log(views);
  }
  //   console.log(variable);
  // console.log(series);
  // console.log(movies);
  // console.log(store);

  return (
    <>
      <div>
        {variable === "movies" ? ( // usamos valores ternarios para ver que titulo mostrar asi agregamos la pagina de error 404
          <h1 className={styles.title}>Movies</h1>
        ) : variable === "series" ? (
          <h1 className={styles.title}>Series</h1>
        ) : (
          <h1 className={styles.title}>Error 404</h1>
        )}
        <div className={styles.container}>
          {views.map(
            (
              item // aplicamos un map para que por cada iteracion agregue un div a la vista, con foreach no se pudo sjsj
            ) => (
              <Tooltip
                title={
                  <React.Fragment>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <h3>{item.releaseYear}</h3>
                  </React.Fragment>
                }
              >
                <div key={item.title} className={styles.containerMovie}>
                  {/* <img src={item.images["Poster Art"].url} alt={item.title} />  */}
                  {variable === "movies" ? ( // agrego imagen predeterminada, las del json gran parte estan caidas
                    <img
                      src="https://colonfilm.com/wp-content/uploads/2021/04/bohemian-rhapsody-poster.webp"
                      alt={item.title}
                    />
                  ) : (
                    <img
                      src="https://i.3djuegos.com/juegos/17679/the_witcher__la_serie__temporada_1/fotos/ficha/the_witcher__la_serie__temporada_1-5339440.webp"
                      alt={item.title}
                    />
                  )}

                  <h3>{item.title}</h3>
                </div>
              </Tooltip>
            )
          )}
        </div>
      </div>
    </>
  );
}
