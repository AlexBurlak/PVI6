using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.Requests
{
    public class UpdateRequest
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required")]
        [StringLength(255, ErrorMessage = "Name must be between 6 and 255 characters", MinimumLength = 6)]
        public string Name { get; set; }

        [EmailAddress(ErrorMessage = "Email must be valid")]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public IEnumerable<int>? Categories { get; set; }
        public string Rank { get; set; }
    }
}
