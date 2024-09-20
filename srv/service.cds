using { captrail.db as captrail } from '../db/schema';

service TimesheetService  @(impl: '/srv/handlers/timesheethandler.js') {

 
  entity EmployeesTimesheet as projection on captrail.Employee ;

  entity CustomerTimesheet as projection on captrail.Customer ;

  entity EmployeeAddress as projection on captrail.EmployeeAddress

}

service TravelService  @(impl: '/srv/handlers/travelhandler.js') {

 
  entity EmployeesTravel as projection on captrail.Employee {
               *
          }
          where
               DELETED = false ;


  entity CustomerTravel as projection on captrail.Customer ;


 function TrialFunction() returns {};

  action TrialAction() returns {};
}
