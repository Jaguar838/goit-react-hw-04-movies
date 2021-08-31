import pathIMG from 'services/pathIMG';
import css from './MovieDetails.module.css';

export default function MovieDetails({
  title,
  vote_average,
  homepage,
  genres,
  poster_path,
  overview,
}) {
  const posterUrl = pathIMG(poster_path);
  return (
    <article className={css.article}>
      <div className={css.titleBlock}>
        <h2 className={css.movieTitle}>{title}</h2>

        <img className={css.image} src={posterUrl} alt={title} width="300" />
      </div>
      <div className={css.description}>
        <h3 className={css.title}>Genres: </h3>
        <ul className={css.genresList}>
          {genres &&
            genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)}
        </ul>
        <h3 className={css.title}>Description:</h3>
        <p className={css.overview}>{overview}</p>

        <p className={css.voteText}>
          tmbd: <span className={css.vote}>{vote_average}</span>
        </p>
      </div>
    </article>
  );
}
