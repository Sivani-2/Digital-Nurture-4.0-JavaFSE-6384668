-- Apply Monthly Interests to Savings Account
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE accounts SET balance=balance+(balance*0.01) WHERE account_type='Savings';
    DBMS_OUTPUT.PUT_LINE('Monthly interest is applied to all savings accounts');
    COMMIT;
END;

-- Call and Execute the procedure
BEGIN
    ProcessMonthlyInterest;
END;