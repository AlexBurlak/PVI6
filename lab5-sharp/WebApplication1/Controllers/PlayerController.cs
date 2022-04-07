using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models.DTO;
using WebApplication1.Models.Requests;
using WebApplication1.Services.Interfaces;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly IPlayerService _playerService;
        private readonly ICategoryService _categoryService;

        public PlayerController(IPlayerService playerService, ICategoryService categoryService)
        {
            _playerService = playerService;
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var players = await _playerService.GetAllAsync();
            return Ok(players);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var player = await _playerService.GetAsync(id);
            return Ok(player);
        }

        [HttpPost]
        public async Task<IActionResult> Insert([FromBody] InsertRequest request)
        {
            var player = await _playerService.InsertAsync(new PlayerInsertDto()
            {
                Categories = request.Categories,
                Email = request.Email,
                Name = request.Username,
                Password = request.Password,
                Rank = request.Rank,
            });
            return Created(nameof(Insert), player);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UpdateRequest request)
        {
            await _playerService.UpdateAsync(new PlayerUpdateDto()
            {
                Categories = request.Categories,
                Email = request.Email,
                Id = request.Id,
                Name = request.Name,
                Password = request.Password,
                Rank = request.Rank,
            });
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _playerService.DeleteAsync(id);
            return Ok();
        }
    }
}
