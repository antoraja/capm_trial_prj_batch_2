namespace captrailtravel.db;

entity EmployeeTravel  {
    key ID           : UUID;
        EmployeeID   : String(10);
        EmployeeName : String(40);
        CompanyName  : String(40);
}

entity CustomerTravel  {
    key ID           : UUID;
        EmployeeID   : String(10);
        EmployeeName : String(40);
        CompanyName  : String(40);
}