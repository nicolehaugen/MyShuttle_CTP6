using Chance.MvvmCross.Plugins.UserInteraction;
using Cirrious.MvvmCross.Plugins.PhoneCall;
using Cirrious.MvvmCross.ViewModels;
using MyShuttle.Client.Core.DocumentResponse;
using MyShuttle.Client.Core.Infrastructure.Abstractions.Services;
using MyShuttle.Client.Core.Model;
using MyShuttle.Client.Core.ServiceAgents.Interfaces;
using MyShuttle.Client.Core.Settings;
using MyShuttle.Client.Core.ViewModels.Base;
using System;
using System.Windows.Input;

namespace MyShuttle.Client.Core.ViewModels
{
    public class VehicleDetailViewModel : NavegableViewModel
    {
        private readonly IMyShuttleClient _myShuttleClient;
        private readonly IMvxPhoneCallTask _phoneCallTask;
        private readonly IUserInteraction _userInteraction;
        private readonly ILocationServiceSingleton _locationService;

        private bool _isLoadingVehicle;
        private Vehicle _currentVehicle;
        private Location _currentLocation;

        private ICommand _callVehicleCommand;
        private ICommand _requestVehicleCommand;

        public IApplicationSettingServiceSingleton ApplicationSettingService { get; private set; }

        public bool IsLoadingVehicle
        {
            get
            {
                return _isLoadingVehicle;
            }

            set
            {
                _isLoadingVehicle = value;
                RaisePropertyChanged(() => IsLoadingVehicle);
            }
        }

        public Vehicle CurrentVehicle
        {
            get
            {
                return _currentVehicle;
            }
            set
            {
                _currentVehicle = value;
                RaisePropertyChanged(() => CurrentVehicle);
            }
        }

        public Location CurrentLocation
        {
            get
            {
                return _currentLocation;
            }

            set
            {
                _currentLocation = value;
                RaisePropertyChanged(() => CurrentLocation);
            }
        }

        public ICommand CallVehicleCommand
        {
            get { return this._callVehicleCommand; }
        }

        public ICommand RequestVehicleCommand
        {
            get { return this._requestVehicleCommand; }
        }

        public VehicleDetailViewModel(
            IMyShuttleClient myShuttleClient,
            IMvxPhoneCallTask phoneCallTask,
            IUserInteraction userInteraction,
            ILocationServiceSingleton locationService,
            IApplicationSettingServiceSingleton applicationSettingService)
        {
            if (myShuttleClient == null)
            {
                throw new ArgumentNullException("myShuttleClient");
            }

            if (phoneCallTask == null)
            {
                throw new ArgumentNullException("phoneCallTask");
            }

            if (userInteraction == null)
            {
                throw new ArgumentNullException("userInteraction");
            }

            if (locationService == null)
            {
                throw new ArgumentNullException("locationService");
            }

            if (applicationSettingService == null)
            {
                throw new ArgumentNullException("applicationSettingService");
            }

            _myShuttleClient = myShuttleClient;
            _phoneCallTask = phoneCallTask;
            _userInteraction = userInteraction;
            _locationService = locationService;
            ApplicationSettingService = applicationSettingService;

            this.InitializeCommands();
        }

        public async void Init(int currentVehicleId)
        {
            CurrentLocation = await _locationService.CalculatePositionAsync();
            this.LoadVehicleAsync(currentVehicleId);
        }

        private void InitializeCommands()
        {
            this._callVehicleCommand = new MvxCommand(this.CallVehicle);
            this._requestVehicleCommand = new MvxCommand(this.RequestVehicle);
        }

        private void CallVehicle()
        {
            var driver = this.CurrentVehicle.Driver;
            if (string.IsNullOrWhiteSpace(driver.Phone))
            {
                return;
            }

            this._phoneCallTask.MakePhoneCall(driver.Name ?? string.Empty, driver.Phone);
        }

        private async void RequestVehicle()
        {
            this.IsLoadingVehicle = true;

            await _myShuttleClient.NotificationsService.RequestVehicleAsync(CommonAppSettings.FixedEmployeeId,
                this.CurrentVehicle.DriverId,
                this.CurrentLocation.Latitude,
                this.CurrentLocation.Longitude);

            this.IsLoadingVehicle = false;

            await _userInteraction.AlertAsync("Vehicle requested. Thanks!");
        }

        private async void LoadVehicleAsync(int vehicleId)
        {
            this.IsLoadingVehicle = true;
            this.CurrentVehicle = await _myShuttleClient.VehiclesService.GetAsync(vehicleId);
            this.IsLoadingVehicle = false;
        }
    }
}
