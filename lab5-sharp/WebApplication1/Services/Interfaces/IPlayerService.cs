using WebApplication1.Models.DTO;
using WebApplication1.Models.Entities;

namespace WebApplication1.Services.Interfaces
{
    public interface IPlayerService
    {
        public Task<IEnumerable<Player>> GetAllAsync();
        public Task<Player> GetAsync(int id);
        public Task<Player> InsertAsync(PlayerInsertDto player);
        public Task UpdateAsync(PlayerUpdateDto player);
        public Task DeleteAsync(int id);
    }
}
