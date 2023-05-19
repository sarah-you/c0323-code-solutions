select "a"."firstName",
      "a"."lastName",
      "films"."title"
from "actors" as "a"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy';





/*
actors: actorId, fn, ln
films: filmId, title
castMembers: actorId, filmId
*/
