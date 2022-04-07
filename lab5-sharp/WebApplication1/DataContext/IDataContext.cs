using Microsoft.EntityFrameworkCore;
using WebApplication1.Models.Entities;

namespace WebApplication1.DataContext
{
    public interface IDataContext : IDisposable
    {
        DbSet<Player> Players { get; set; }
        DbSet<Category> Categories { get; set; }

        Task<int> SaveChangesAsync();
    }
}
