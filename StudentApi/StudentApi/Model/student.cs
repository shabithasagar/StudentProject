using System.ComponentModel.DataAnnotations;

namespace StudentApi.Model
{
    public class student
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

    }
}
