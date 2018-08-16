USE bamazon;

DROP TABLE IF EXISTS departments; 

CREATE TABLE departments (
    department_id INT NOT NULL auto_increment,
    department_name VARCHAR(100) NOT NULL,
    over_head_costs DECIMAL(100, 2),
    PRIMARY KEY (department_id)
);

INSERT INTO departments(department_name, over_head_costs)
VALUES ("Electronics", 50), ("Books", 20), ("Food", 5), ("Cell Phones", 100);

select * 
FROM departments;