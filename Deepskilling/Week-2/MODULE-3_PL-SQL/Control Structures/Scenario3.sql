-- Send reminders for loans due within the next 30 days
DECLARE
    CURSOR loans_dues_cur IS 
        SELECT l.loan_id,l.customer_id,c.name,l.due_date
        FROM loans l JOIN customers c 
        ON l.customer_id=c.customer_id 
        WHERE l.due_date<=SYSDATE+30;

BEGIN
    FOR rec IN loans_dues_cur LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID '||rec.loan_id||' for Customer '
        ||rec.name||' is due on '||TO_CHAR(rec.due_date,'DD-MON-YYYY'));
    
    END LOOP;
END;