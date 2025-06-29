-- Transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
    from_account_p IN accounts.account_id%TYPE,
    to_account_p IN accounts.account_id%TYPE,
    amount_p IN NUMBER
) IS src_balance NUMBER;

BEGIN
    SELECT balance INTO src_balance FROM accounts
    WHERE account_id=from_account_p;
    -- Check for sufficient balance
    IF src_balance<amount_p THEN
        RAISE_APPLICATION_ERROR(-20001,'Insufficient funds in source account!');
    END IF;

    -- Otherwise, deduct from source account
    UPDATE accounts SET balance=balance-amount_p WHERE account_id=from_account_p;
    -- and add to destination account
    UPDATE accounts SET balance=balance+p_amount_p WHERE account_id=to_account_p;

    DBMS_OUTPUT.PUT_LINE('Transferred '||amount_p||' from account '
    ||from_account_p||' to account '||to_account_p);

    COMMIT;
END;

-- Call and execute the procedure
BEGIN
    TransferFunds(1,3,500) -- Transfer 500 from account 1 to account 3
END;
