select count(*) as "cities",
  "countries"."name"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
