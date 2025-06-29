-- create accounts table
CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    account_type VARCHAR2(20),
    balance NUMBER
);

INSERT INTO accounts VALUES (1, 'Savings', 1000);
INSERT INTO accounts VALUES (2, 'Savings', 2000);
INSERT INTO accounts VALUES (3, 'Checking', 1500);
COMMIT;

-- create employees table
CREATE TABLE employees (
    employee_id NUMBER PRIMARY KEY,
    department_id NUMBER,
    salary NUMBER
);

INSERT INTO employees VALUES (1, 101, 5000);
INSERT INTO employees VALUES (2, 101, 6000);
INSERT INTO employees VALUES (3, 102, 5500);
COMMIT;