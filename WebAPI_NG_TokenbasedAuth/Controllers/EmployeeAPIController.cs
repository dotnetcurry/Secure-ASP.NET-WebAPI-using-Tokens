using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI_NG_TokenbasedAuth.Models;

namespace WebAPI_NG_TokenbasedAuth.Controllers
{
    [Authorize]
    public class EmployeeAPIController : ApiController
    {
        public List<Employee> Get()
        {
            return new EmployeeDatabase();
        }
    }
}
