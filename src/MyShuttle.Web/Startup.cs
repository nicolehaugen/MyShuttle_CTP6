
namespace MyShuttle.Web
{
    using Microsoft.AspNet.Builder;
    using Microsoft.Framework.ConfigurationModel;
    using Microsoft.Framework.DependencyInjection;
    using Microsoft.AspNet.Diagnostics;
    using Data;
    using AppBuilderExtensions;
    using Model;
    using Microsoft.AspNet.Identity;

    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            // Setup configuration sources
            var configuration = new Configuration();
            configuration.AddJsonFile("config.json");
            configuration.AddEnvironmentVariables();

            // Set up application services
            app.UseServices(services =>
            {
                // Add EF services to the services container and configure DbContext
                services.ConfigureDataContext(configuration);

                // Register MyShuttle dependencies
                services.ConfigureDependencies();

                //Add Identity services to the services container
                services.AddIdentity<ApplicationUser, IdentityRole>(configuration)
                    .AddEntityFrameworkStores<MyShuttleContext>();

                services.ConfigureCookieAuthentication(options =>
                {
                    options.LoginPath = new Microsoft.AspNet.Http.PathString("/Carrier/Login");
                });

                // Add MVC services to the services container
                services.AddMvc();

                services
                    .AddSignalR(options =>
                    {
                        options.Hubs.EnableDetailedErrors = true;
                    });
            });

            // Enable Browser Link support
            app.UseBrowserLink();

            /* Error page middleware displays a nice formatted HTML page for any unhandled exceptions in the request pipeline.
             * Note: ErrorPageOptions.ShowAll to be used only at development time. Not recommended for production.
             */
            app.UseErrorPage(ErrorPageOptions.ShowAll);

            // Add static files to the request pipeline
            app.UseStaticFiles();

            app.ConfigureSecurity();

            //Configure SignalR
            app.UseSignalR();

            // Add cookie-based authentication to the request pipeline

            // Add MVC to the request pipeline
            app.ConfigureRoutes();

            MyShuttleDataInitializer.InitializeDatabaseAsync(app.ApplicationServices).Wait();

        }
    }

}
