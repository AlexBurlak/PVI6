namespace WebApplication1.Models.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int PlayerId { get; set; }
        public Player Player { get; set; }
    }
}
