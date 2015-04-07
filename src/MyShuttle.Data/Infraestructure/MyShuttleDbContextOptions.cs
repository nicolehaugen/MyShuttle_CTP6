
namespace MyShuttle.Data
{
    using Microsoft.Data.Entity;

    public class MyShuttleDbContextOptions : DbContextOptions
    {
        public string DefaultAdminUserName { get; set; }

        public string DefaultAdminPassword { get; set; }

    }
}