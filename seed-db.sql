USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Anker USB Charger', 'Electronics', 9.99, 10), ('Anker USB Cables', 'Electronics', 5.99, 10), ('Aukey Portable Battery', 'Electronics', 14.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Rich Dad, Poor Dad', 'Books', 9.99, 5), ('The Compound Effect', 'Books', 12.50, 7), ('Good to Great', 'Books', 14.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nature Valley Chocolate Granola', 'Food', 2.49, 10), ('Kelloggs Frosted Flakes', 'Food', 6.99, 8), ('Quest Bars - Cookies and Cream', 'Food', 23.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Samsung Galaxy S8', 'Cell Phones', 699.99, 8), ('iPhone X', 'Cell Phones', 1039.99, 10), ('Pixel 2 XL', 'Cell Phones', 999.99, 2);

INSERT INTO departments(department_name, over_head_costs)
VALUES ("Electronics", 50), ("Books", 20), ("Food", 5), ("Cell Phones", 80);

select *
FROM products;

select * 
FROM departments;