select "firstName",
      "lastName",
      sum("payments"."amount") as "total amount"
  from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "total amount" desc;
