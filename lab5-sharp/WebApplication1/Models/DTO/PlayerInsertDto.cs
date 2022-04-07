namespace WebApplication1.Models.DTO
{
    public class PlayerInsertDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public IEnumerable<int> Categories { get; set; }
        public string Rank { get; set; }
    }
}
