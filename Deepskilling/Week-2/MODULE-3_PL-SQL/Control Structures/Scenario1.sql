-- Apply a 1% discount to loan interest rates for customers above 60 years old
DECLARE
CURSOR customers_cur IS
    SELECT c.customer_id,loan_id,interest_rate FROM customers c
    JOIN loans l ON c.customer_id=l.customer_id WHERE c.age>60;

BEGIN
    FOR cust IN customers_cur LOOP
        UPDATE loans 
        SET interest_rate=interest_rate-1 WHERE loan_id=cust.loan_id;

        DBMS_OUTPUT.PUT_LINE('1% interest discount is applied for Customer ID:' ||cust.customer_id);
    END LOOP;

    COMMIT;

END;

-- without using cursor
BEGIN 
    UPDATE loans
    SET interest_rate=interest_rate-1 WHERE customer_id IN 
    (SELECT customer_id FROM customers WHERE age>60);

    DBMS_OUTPUT.PUT_LINE('Interest discount is applied for customers above 60 years');

    COMMIT;
END;