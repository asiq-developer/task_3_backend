npm install

nodemon server.js

GET /api/orders  --  returns all the orders
GET /api/orders/:id -- returns details of a specific order

--Each order contains:
UserID (to identify which user placed the order)
Product Name
Price

--index
In this project, indexing is added to the userId field in the order schema. Indexing helps MongoDB retrieve data faster when searching or filtering orders based on the user.
