using System.ComponentModel.DataAnnotations;

namespace StudentApi.Model
{
    public class course
    {
        [Key]
        public int Id { get; set; }

        public String Title { get; set; }

        public String Description { get; set; }

    }
}
