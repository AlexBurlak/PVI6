using Microsoft.EntityFrameworkCore;
using WebApplication1.DataContext;
using WebApplication1.Models.DTO;
using WebApplication1.Models.Entities;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Services.Realizations
{
    public class PlayerService : IPlayerService
    {
        private readonly IDataContext _dataContext;
        public PlayerService(IDataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task DeleteAsync(int id)
        {
            var player = await _dataContext.Players.FindAsync(id);
            if (player is null)
            {
                throw new KeyNotFoundException($"Player with id `{id}` not found");
            }
            _dataContext.Players.Remove(player);
            await _dataContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<Player>> GetAllAsync()
        {
            return await _dataContext.Players.ToListAsync();
        }

        public async Task<Player> GetAsync(int id)
        {
            var player = await _dataContext.Players.FindAsync(id);
            if (player is null)
            {
                throw new KeyNotFoundException($"Player with id `{id}` not found");
            }
            return player;
        }

        public async Task<Player> InsertAsync(PlayerInsertDto player)
        {
            var categories = await _dataContext.Categories.Where(c => player.Categories.Contains(c.Id)).ToListAsync();
            var result = (await _dataContext.Players.AddAsync(new Player()
            {
                Categories = categories,
                Email = player.Email,
                Name = player.Name,
                Password = player.Password,
                Rank = player.Rank,
            }));
            await _dataContext.SaveChangesAsync();
            return result.Entity;
        }

        public async Task UpdateAsync(PlayerUpdateDto player)
        {
            var playerObject = await _dataContext.Players.FindAsync(player.Id);
            if (playerObject is null) throw new KeyNotFoundException($"Player with id `{player.Id}` not found");
            playerObject.Email = player.Email;
            playerObject.Name = player.Name;
            playerObject.Rank = player.Rank;
            playerObject.Password = player.Password;
            if (player.Categories is not null)
            {
                var categories = await _dataContext.Categories.Where(c => player.Categories.Contains(c.Id)).ToListAsync();
                playerObject.Categories = categories;
            }
            await _dataContext.SaveChangesAsync();
        }
    }
}
