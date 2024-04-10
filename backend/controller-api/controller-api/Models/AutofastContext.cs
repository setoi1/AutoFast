using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using controller_api.Models;

namespace controller_api.Models
{
    public class AutofastContext : DbContext
    {

        protected readonly IConfiguration Configuration;
        public AutofastContext(DbContextOptions<AutofastContext> options) : base(options) { }

        // Add DbSets here
        public DbSet<Users> Users { get; set; } = null!;
        public DbSet<Invoices> Invoices { get; set; } = null!;
    }
}
