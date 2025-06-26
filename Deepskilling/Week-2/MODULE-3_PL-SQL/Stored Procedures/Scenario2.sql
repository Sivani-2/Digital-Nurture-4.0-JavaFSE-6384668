-- Update Employee Bonus by Department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    department_id_p IN employees.department_id%TYPE,
    bonus_percent_p IN NUMBER
) IS
BEGIN
    UPDATE employees SET salary=salary+(salary*(bonus_percent_p/100))
    WHERE department_id=department_id_p;
    DBMS_OUTPUT.PUT_LINE('Bonus of '||bonus_percent_p||' % applied to 
    Department ID: '||department_id_p);
    COMMIT;
END;

-- Call and Execute the procedure
BEGIN
    UpdateEmployeeBonus(100,5); -- 5% bonus for employees where department_id=100
END;