select "genres"."name",
      count(*) as "total"
  from "genres"
join "filmGenre" using ("genreId")
join "castMembers" using ("filmId")
join "films" using ("filmId")
join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
group by "genres"."name";

/*
castMembers: actorId, filmId
genres: genreId, name
filmGenre: filmId, genreId
films: filmId
actors: actorId, fn, ln
*/
