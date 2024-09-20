namespace captrail.db;
using {
    cuid,
    managed
} from '@sap/cds/common';

using {captrail.util.aspects as localaspects} from '../utils/Aspects';


entity Employee   : managed , localaspects.common {
    key ID           : UUID;
        EmployeeID   : String(10) default '';
        EmployeeName : String(40);
        CompanyName  : String(40);
        Attachment  : Binary;
        ItsAddess : Association to one EmployeeAddress
                                         on ItsAddess.ID = $self.ID;
}

entity EmployeeAddress   : managed , localaspects.common {
    key ID           : UUID;
        EmployeeCity   : String(10) default '';
        EmployeeStreet : String(40);
        PostCode  : String(40);
}





entity Customer  {
    key ID           : UUID;
        EmployeeID   : String(10);
        EmployeeName : String(40);
        CompanyName  : String(40);
}