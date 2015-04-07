using Cirrious.MvvmCross.Plugins.Messenger;
using Cirrious.MvvmCross.ViewModels;
using MyShuttle.Client.Core.ServiceAgents.Interfaces;
using System;
using System.Windows.Input;

namespace MyShuttle.Client.UniversalApp.ViewModels
{
    public class RideDetailViewModel : Core.ViewModels.RideDetailViewModel
    {
        public RideDetailViewModel(IMyShuttleClient myShuttleClient, IMvxMessenger messenger)
            : base(myShuttleClient, messenger)
	    {
	    }

    }
}
