
namespace MyShuttle.MobileServices.Controllers
{
    using Microsoft.WindowsAzure.Mobile.Service;
    using DataObjects;
    using Models;
    using System.Threading.Tasks;
    using System.Web.Http;
    using System.Web.Http.Controllers;
    using System.Web.Http.OData;
    using System.Linq;

    public class EmployeeController : TableController<Employee>
    {
        MobileServiceContext _context = null;

        protected override void Initialize(HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            _context = new MobileServiceContext();         
            DomainManager = new EntityDomainManager<Employee>(_context, Request, Services);
        }

        // GET tables/Employee/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public SingleResult<Employee> GetEmployee(string id)
        {
            return Lookup(id);
        }


        // GET tables/Employee
        public IQueryable<Employee> GetAllEmployees()
        {
            return Query();
        }


        // PATCH tables/Employee/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task<Employee> PatchEmployee(string id, Delta<Employee> patch)
        {
            return UpdateAsync(id, patch);
        }

        // POST tables/Employee
        public async Task<IHttpActionResult> PostEmployee(Employee item)
        {
            // EmployeeId is not defined as identity due to the current version of EF doesn´t allow data annotations
            item.EmployeeId = _context.Employees.Max(r => r.EmployeeId) + 1;
            
            Employee current = await InsertAsync(item);
            return CreatedAtRoute("Tables", new { id = current.Id }, current);
        }

        // DELETE tables/Employee/48D68C86-6EA6-4C25-AA33-223FC9A27959
        public Task DeleteEmployee(string id)
        {
            return DeleteAsync(id);
        }

    }
}