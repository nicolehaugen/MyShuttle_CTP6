

namespace MyShuttle.Model
{
    using Microsoft.AspNet.Identity;

    public class ApplicationUser : IdentityUser
    {
        public int CarrierId { get; set; }
    }
}