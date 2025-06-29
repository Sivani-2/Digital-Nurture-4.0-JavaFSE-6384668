-- Create customers table
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    balance NUMBER,
    IsVIP VARCHAR2(5)
);

INSERT INTO customers VALUES (1, 'Alice', 65, 15000, 'FALSE');
INSERT INTO customers VALUES (2, 'Bob', 55, 8000, 'FALSE');
INSERT INTO customers VALUES (3, 'Charlie', 70, 5000, 'FALSE');
INSERT INTO customers VALUES (4, 'Diana', 45, 12000, 'FALSE');

-- Create loans table
CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER REFERENCES customers(customer_id),
    interest_rate NUMBER,
    due_date DATE
);

INSERT INTO loans VALUES (101, 1, 7.5, SYSDATE + 20);
INSERT INTO loans VALUES (102, 2, 6.5, SYSDATE + 40);
INSERT INTO loans VALUES (103, 3, 8.0, SYSDATE + 10);
INSERT INTO loans VALUES (104, 4, 7.0, SYSDATE + 5);

COMMIT;