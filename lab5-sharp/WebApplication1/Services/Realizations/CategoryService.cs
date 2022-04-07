using Microsoft.EntityFrameworkCore;
using WebApplication1.DataContext;
using WebApplication1.Models.Entities;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Services.Realizations
{
    public class CategoryService : ICategoryService
    {
        private readonly IDataContext _dataContext;
        public CategoryService(IDataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<IEnumerable<Category>> GetByPlayerId(int playerId)
        {
            return await _dataContext.Categories
                .AsNoTracking()
                .Where(c => c.PlayerId == playerId)
                .ToListAsync();
        }

        public async Task<IEnumerable<Category>> InsertCategories(IEnumerable<Category> categories)
        {
            ICollection<Category> result = new List<Category>();
            foreach (var category in categories)
            {
                var resultValue = (await _dataContext.Categories.AddAsync(category)).Entity;
                result.Add(resultValue);
            }
            await _dataContext.SaveChangesAsync();
            return result;
        }
    }
}
