
namespace MyShuttle.Web.DataContextConfigExtensions
{
    using Microsoft.Data.Entity;
    using Microsoft.Framework.DependencyInjection;
    using Data;
    using Microsoft.Framework.ConfigurationModel;

    public static class DataContextConfigExtensions
    {
        
        public static EntityServicesBuilder AddStore(this EntityServicesBuilder services, bool runningOnMono)
        {
            // Add EF services to the services container 
            if (runningOnMono)
            {
                services.AddInMemoryStore();
            }
            else
            {
                services.AddSqlServer();
            }

            return services;
        }

        public static void UseDataStore(this MyShuttleDbContextOptions options, string connString, bool runningOnMono)
        {
            if (runningOnMono)
            {
                options.UseInMemoryStore();
            }
            else
            {
                options.UseSqlServer(connString);
            }
        }
    }
}