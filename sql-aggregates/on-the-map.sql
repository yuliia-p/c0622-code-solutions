SELECT "countries"."name" as "country",
      count(*) as "totalCities"
from "countries"
join "cities" as "c" using ("countryId")
group by "countries"."name";
