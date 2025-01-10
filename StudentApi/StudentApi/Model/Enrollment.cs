using System.ComponentModel.DataAnnotations;

namespace StudentApi.Model
{
    public class Enrollment
    {
        [Key]
        public int Id { get; set; }

        public int StudentId { get; set; }

        public int CourseId { get; set; }
        public String EnrollmentDate { get; set; }
    }
}
