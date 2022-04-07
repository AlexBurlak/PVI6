using Microsoft.EntityFrameworkCore;
using WebApplication1.Models.Entities;

namespace WebApplication1.DataContext
{
    public class MyDbContext : DbContext, IDataContext
    {
        public MyDbContext()
            : base()
        {}

        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options) {}

        public DbSet<Player> Players { get; set; }
        public DbSet<Category> Categories { get; set; }

        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }
    }
}
