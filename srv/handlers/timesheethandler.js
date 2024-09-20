const cds = require("@sap/cds");

module.exports = cds.service.impl( async function(){



    this.on("GET" ,"EmployeesTimesheet", async (req,next) =>{

        var test = "test";

        return next();

    });

    this.before("GET" ,"EmployeesTimesheet", async (req,next) =>{

       // req[0].EmployeeName = "Satish" 
      
    });

    this.on("GET" ,"Employees1", async (req,next) =>{

        //req[0].EmployeeName = "Guna" 

        
        return next();

    });

    this.on("POST" ,"Employees1", async (req,next) =>{

      //  req[0].EmployeeName = "Sagar" 
     //   console.log("Modified emp name " + req[0].EmployeeName);
    var data = req.data;
    //    return req
    req.data.EmployeeName = "Test 5" 
    return next();
    });

    this.on("PUT" ,"Employees1", async (req,next) =>{

        var test = "test";

        return next();

    });

    this.on("GET" ,"EmployeesTimesheet", async (req,next) =>{

        var test = "test";

        return next();

    });

    
  this.on('TrialFunction', async (req, res) => {

        var data = req.data;
  });

  this.on('TrialAction', async (req, res) => {

    var data = req.data;
});

})