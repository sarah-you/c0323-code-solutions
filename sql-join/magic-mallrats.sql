select "c"."firstName",
      "c"."lastName",
      "films"."title"
from "customers" as "c"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
where "films"."title" = 'Magic Mallrats';




/*
customers: customerId, fn, ln
inventory: inventoryId, filmId
films: filmId, title
rentals: inventoryId, customerId
*/
