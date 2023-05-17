select "a"."line1",
      "city"."name",
      "a"."district"
  from "cities" as "city"
  join "addresses" as "a" using ("cityId");
