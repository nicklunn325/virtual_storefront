# Virtual Storefront

## Example React Project

3 routes:

1. "/" base root will display a homepage that will ask for entry into store
2. "/items"
   - restful route
   - display all items available for purchase(get request to items)
   - users can add items to their cart from this page (this will be us persisting data to our db.json file, posting to cartItems)
3. "/cart"
   - will show all cartItems(get request to cartItems)
   - users will be able to check out
     - when users check out delete all cartItems(delete request to cartItems)
     - stretch: users fill out form with delivery and payment information

## Requirements:

1. Use the create-react-app generator to start your project. ✔
2. Your app should have one HTML page to render your react application. ✔
3. Your app should use multiple components in a way that keeps your code well organized. ✔
4. There should be 3 routes. ✔
5. The Application must make use of react-router and proper RESTful routing. ✔
6. Your app must incorporate API data. This data can be from a public API or from a GitHub JSON file you create.
7. Your app must persist some data using a JSON server as a mock up backend.
8. Your application should have some minimal styling. ✔
