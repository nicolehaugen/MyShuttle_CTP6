namespace MyShuttle.Web.Controllers
{
    using Models;
    using Microsoft.AspNet.Mvc;
    using Data;
    using API;
    using Model;
    using System.Threading.Tasks;
    using System;
    using Microsoft.AspNet.Identity;
    using Microsoft.Framework.DependencyInjection;

    public class CarrierListController
    {
        private ICarrierRepository _carrierRepository;
        private MyShuttleSecurityContext _securityContext;

        [Activate]
        public ViewDataDictionary ViewData { get; set; }

        [Activate]
        public IServiceProvider serviceProvider { get; set; }

        public CarrierListController(ICarrierRepository carrierRepository, 
                                    MyShuttleSecurityContext securityContext)
        {
            _carrierRepository = carrierRepository;
            _securityContext = securityContext;
        }

        public async Task<IActionResult> Index(SearchViewModel searchVM)
        {
            string searchString = searchVM == null ? null : searchVM.SearchString;
            var carriers = await _carrierRepository.GetCarriersAsync(searchString);
            ViewData.Model = new CarrierListViewModel(carriers);
            return new ViewResult() { ViewData = ViewData, ViewName = "Index" };
        }

        [HttpPost]
        public async Task<IActionResult> RegisterCarrier(CarrierViewModel carrierViewModel)
        {
            var vm = new CarrierListViewModel(await _carrierRepository.GetCarriersAsync(null));
            if (ViewData.ModelState.IsValid)
            {
                var carrier = new Carrier();
                carrierViewModel.CopyTo(carrier);
                var userManager = serviceProvider.GetService<UserManager<ApplicationUser>>();
                var user = await userManager.FindByNameAsync(carrier.Name);
                if (user == null)
                {
                    var carrierId = await _carrierRepository.AddAsync(carrier);
                    user = new ApplicationUser { UserName = carrier.Name, CarrierId = carrierId };
                    await userManager.CreateAsync(user, _securityContext.DefaultPassword);
                    return new RedirectToActionResult("Login", "Carrier", null);
                }
                else
                {
                    ViewData.ModelState.AddModelError("UserNameNotAvailable","The User Name is not available");
                }
            }
            else
            {
                vm.LoadCarrierFrom(carrierViewModel);
            }

            ViewData.Model = vm;
            return new ViewResult() { ViewData = ViewData, ViewName = "Index" };
        }
    }
}
