import { useState, useEffect } from 'react';
import moviesAPI from 'services/moviesAPI';
import pathIMG from 'services/pathIMG';
import css from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    moviesAPI
      .getCreditsID(movieId)
      .then(cast => {
        if (cast.length === 0) {
          console.log('We don`t have any cast for this movie.');
        }
        setActors(cast);
      })
      .catch(error => {
        console.log(error);
        console.log('Whoops, something went wrong. Enter your request again');
      });
  }, [movieId]);

  return (
    <ul className={css.list}>
      {actors.length > 0 ? (
        actors.map(({ profile_path, name, id }) => {
          const imageUrl = pathIMG(profile_path, 'w185');
          return (
            <li className={css.item} key={id}>
              <img
                className={css.image}
                src={imageUrl}
                alt={name}
                width="130"
              />
              <h2 className={css.title}>{name}</h2>
            </li>
          );
        })
      ) : (
        <p>no info</p>
      )}
    </ul>
  );
}
