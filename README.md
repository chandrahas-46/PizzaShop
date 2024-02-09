# Pizza-Shop
This project is a frontend React app which encourage a pizza restaurant behavior from taking orders to making the order ready. It allows users to track their pizza order.
### Live Url: https://pizza-shop-250e2.web.app/

## Features:
 1. add a form from which pizza can be configured & ordered with following options
     - Types :- Veg, Non-Veg
     - Size :- Large, Medium, Small
     - Base :- Thin, Thick
 2. There can be 10 max number of orders a restaurant can handle at a time, otherwise
 show “Not taking any order for now”
 3. Stages of pizza
     - Order Placed
     - Order in Making
     - Order Ready
     - Order Picked
 4. Highlight with Red if a pizza is in same stage for more than (3 min for small, 4 min for medium, 5 min for large)
 5. Showtimespent in each stage with each pizza card
 6. Display each stage in different cols with pizzas as cards
 7. There is a main display on same page
     - for all pizza in progress with their total time & order Id
     - total pizza delivered
 8. It can be Canceled at any time before order is in Ready stage from Main section
 9. Pizza must be moved from one stage to another manually with click on next button
