-- Promote customer to VIP status if balance > $10,000
DECLARE
    CURSOR customers_cur IS 
        SELECT customer_id,balance FROM customers;

BEGIN
    FOR cust IN customers_cur LOOP
        IF cust.balance>10000 THEN
            UPDATE customers SET IsVIP='TRUE'
            WHERE customer_id=cust.customer_id;
            DBMS_OUTPUT.PUT_LINE('VIP status granted to Customer ID:'||cust.customer_id);
        END IF;
    END LOOP;
    COMMIT;
END;

-- Without cursor
BEGIN
    UPDATE customers SET IsVIP='TRUE' WHERE balance>10000;
    DBMS_OUTPUT.PUT_LINE('VIP status(flag) is updated for customers with balance over 10000')
END;