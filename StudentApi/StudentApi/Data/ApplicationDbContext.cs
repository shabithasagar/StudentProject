using Microsoft.EntityFrameworkCore;
using StudentApi.Model;

namespace StudentApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<student> students { get; set; }
        public DbSet<course> courses { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
    }
}
