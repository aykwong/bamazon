var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    passowrd: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    managerOptions();
})

function managerOptions() {
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Products"]
        }
    ])
        .then(function (answers) {
            switch (answers.action) {
                case "View Products for Sale":
                    viewProducts();
                    break;

                case "View Low Inventory":
                    lowInventory();
                    break;

                case "Add to Inventory":
                    addInventory();
                    break;

                case "Add New Products":
                    newProducts();
                    break;
            }
        })
}

function viewProducts() {
    let query = "SELECT * FROM products";

    connection.query(query, function (err, res) {
        if (err) throw err;

        for (let i = 0; i < res.length; i++) {
            console.log(`\nID: ${res[i].item_id}\n`, `Name: ${res[i].product_name}\n`, `Department: ${res[i].department_name}\n`, `Price: $${res[i].price}`);
        }
        console.log(`\n-------------------`);
        connection.end();
    })
}

function lowInventory() {
    let query = "SELECT * FROM products GROUP BY stock_quantity HAVING count(*) < 5";

    connection.query(query, function (err, res) {
        if (err) throw err;

        for (let i = 0; i < res.length; i++) {
            console.log(`\nID: ${res[i].item_id}\n`, `Name: ${res[i].product_name}\n`, `Department: ${res[i].department_name}\n`, `Price: $${res[i].price}`);
        }
        console.log(`\n-------------------`);
        connection.end();
    })
}

function addInventory() {
    let query = "SELECT * FROM products";

    connection.query(query, function (err, res) {
        if (err) throw err;

        for (let i = 0; i < res.length; i++) {
            console.log(`\nID: ${res[i].item_id}\n`, `Name: ${res[i].product_name}`);
        }
        console.log(`\n-------------------`);
        orderForm();
    })

    function orderForm() {
        inquirer.prompt([
            {
                name: "item",
                type: "input",
                message: "Which product would you like to add more of? (Insert ID)",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true
                    }
                    return false
                }
            },
            {
                name: "amount",
                type: "input",
                message: "How many more would you like to add?"
            }
        ])
            .then(function (answers) {
                console.log(`\n-------------------`);
                let stock = res[answers.item - 1].stock_quantity + answers.amount;
                let query = `UPDATE products SET stock_quantity = ${stock} WHERE item_id = ${answers.item}`;

                connection.query(query, function (err, res) {
                    if (err) throw err;

                    console.log("Stock has been successfully added!");
                    connection.end();
                })
            })
    }
}

function newProducts() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Name of new product: "
        },
        {
            name: "department",
            type: "input",
            message: "Department Name: "
        },
        {
            name: "price",
            type: "input",
            message: "Set the price: "
        },
        {
            name: "amount",
            type: "input",
            message: "How much stock: "
        },
        {
            name: "boolean",
            type: "confirm",
            message: "Are you sure everything is correct?"
        }
    ])
    // .then(function(answers) {

    // })
    connection.end();
}
