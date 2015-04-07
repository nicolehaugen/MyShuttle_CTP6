using MyShuttle.Client.Core.ViewModels;
using Windows.ApplicationModel.Resources;
using Windows.UI.ApplicationSettings;
using Windows.UI.Popups;
using Cirrious.MvvmCross.ViewModels;
using Cirrious.CrossCore;

namespace MyShuttle.Client.UniversalApp.Settings
{
    /// <summary>
    /// Settings panel helper.
    /// </summary>
    public class SettingsPanelHelper
    {
        private SettingsPane settingsPane;
        private static SettingsPanelHelper instance;

        /// <summary>
        /// Instance the class.
        /// </summary>
        public static SettingsPanelHelper Instance
        {
            get
            {
                if (instance == null)
                    instance = new SettingsPanelHelper();
                return instance;
            }
        }

        /// <summary>
        /// This method creates the settings options.
        /// </summary>
        public void CreateSettingsOptions()
        {
            settingsPane = SettingsPane.GetForCurrentView();

            settingsPane.CommandsRequested += settingsPane_CommandsRequested;
        }

        private void settingsPane_CommandsRequested(SettingsPane sender, SettingsPaneCommandsRequestedEventArgs args)
        {
            var ConfigHandler = new UICommandInvokedHandler(onConfigCommand);

            var loader = new ResourceLoader();
            var configurationCommand = new SettingsCommand(loader.GetString("Settings"), loader.GetString("Settings"), ConfigHandler);
            args.Request.ApplicationCommands.Add(configurationCommand);
        }

        private SettingsPanelHelper()
        {
        }
        private void onConfigCommand(IUICommand command)
        {
            var loader = Mvx.Resolve<IMvxViewModelLoader>();
            var vm = loader.LoadViewModel(MvxViewModelRequest<SettingsViewModel>.GetDefaultRequest(), null);
            var configurationPanel = new Views.Settings(vm);
            configurationPanel.Show();

        }
    }
}

