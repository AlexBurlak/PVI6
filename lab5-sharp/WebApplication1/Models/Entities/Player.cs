namespace WebApplication1.Models.Entities
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public IEnumerable<Category> Categories { get; set; }
        public string Rank { get; set; }
    }
}
