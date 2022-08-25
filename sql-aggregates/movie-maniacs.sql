select "firstName",
        "lastName",
        sum("amount") as "totalAmount"
  from "rentals"
  join "customers" using ("customerId")
  join "payments" using ("rentalId")
  group by "customers"."firstName", "customers"."lastName"
  order by "totalAmount" desc;
