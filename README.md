# bamazon

This application combines both the functionality of Node.js and mySQL Workbench to create a amazon-like stock tracker using the bash/terminal. Currently there are two applications, one for the customer, and one for the manager.

1. A customer is able to search through the items that are *in-store* and decide to purchase which items and the amount. With every successful purchase, the database in mySQL Workbench will then subtract the stock from the order purchased and maintain quantities of the item after every purchase.

2. The manager is able to look through a number of commands to maintain the items *in-store*.
   * List a set of menu options:
      - View Products for Sale
      - View Low Inventory
      - Add to Inventory
      - Add New Product
  
  Depending on the action the manager takes, they are able to view, alter, restock, or add items to the store for the customer to purchase. The changes will also reflect on the MySQL Workbench database.
  
3. The supervisor can manage the departments and look at profits.
   * List of menu options:
      - View Product Sales by Department
      - Create New Department

## Getting Started

Fork the repo and download the files to your computer. You will also need to create your own mySQL database file and connect the database to the JavaScript files located in the repo. Create the necessary npm packages and run the following in the bash/terminal:

```
npm init -y
npm i
npm i mysql
npm i inquirer
npm i console.table
```

Check to make sure the parameters that you have created in your SQL database are the same as those included or the application will not run properly.

You can run the applications using node like so:

    node bamazonCustomer.js
    node bamazonManager.js
    node bamazonSupervisor.js

### Prerequisites

- An internet connection
- The terminal or Git Bash installed
- Node NPM packages installed
- An active copy of an SQL database with the same parameters

## Built With

* [Javscript]
* [Node.js]
* [NPM MySQL]
* [NPM Inquirer]
* [NPM Console.Table]
* [MySQL Workbench]

## Authors

* **Alpha Kwong**
