using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models.Requests
{
    public class InsertRequest
    {
        [Required(ErrorMessage = "Name is required")]
        [StringLength(255, ErrorMessage = "Name must be between 6 and 255 characters", MinimumLength = 6)]
        public string Username { get; set; }

        [EmailAddress(ErrorMessage = "Email must be valid")]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm password is required")]
        [DataType(DataType.Password)]
        [Compare(nameof(Password), ErrorMessage = "Password and confirm password must be the same")]
        public string ConfirmPassword { get; set; }
        public IEnumerable<int>? Categories { get; set; }
        public string Rank { get; set; }
    }
}
