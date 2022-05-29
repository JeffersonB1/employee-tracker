INSERT INTO  department (name)
VALUES
('IT'),
('Sales'),
('Marketing'),
('HR');

INSERT INTO role (title, salary, department_id)
VALUES
('Manager', 15000, 1),
('Developer', 10000, 1),
('Designer', 8000, 3),
('Accountant', 7000, 2),
('Marketer', 6000, 3),
('HR', 5000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Roe', 2, NULL),
('Joe', 'Simon', 3, NULL),
('Jill', 'Fisher', 4, NULL),
('Jack', 'Diamond', 5, NULL);
