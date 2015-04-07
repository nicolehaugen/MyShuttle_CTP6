
namespace MyShuttle.Web.AppBuilderExtensions
{
    using Data;
    using DataContextConfigExtensions;
    using Microsoft.Framework.ConfigurationModel;
    using Microsoft.Framework.DependencyInjection;
    using Microsoft.Data.Entity;
    using System;

    public static class DataContextExtensions
    {
        public static IServiceCollection ConfigureDataContext(this IServiceCollection services, Configuration configuration)
        {
            //If this type is present - we're on mono 
            var runningOnMono = Type.GetType("Mono.Runtime") != null;

            services.AddEntityFramework(configuration)
                .AddStore(runningOnMono)
                .AddDbContext<MyShuttleContext>(options =>
                {
                    if (runningOnMono)
                    {
                        options.UseInMemoryStore();
                    }
                    else
                    {
                        options.UseSqlServer(configuration.Get("Data:DefaultConnection:Connectionstring"));
                    }
                });

            // Configure DbContext
            services.Configure<MyShuttleDbContextOptions>(options =>
            {
                options.DefaultAdminUserName = configuration.Get("DefaultAdminUsername");
                options.DefaultAdminPassword = configuration.Get("DefaultAdminPassword");
            });

            return services;
        }

       
    }
}