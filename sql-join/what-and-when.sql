select "f"."title",
      "f"."releaseYear",
      "genres"."name"
  from "films" as "f"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "f"."title" = 'Boogie Amelie';

/*
film: releaseYear, filmId
genres: genreId, genre "name"
filmGenre: filmId, genreId
*/
