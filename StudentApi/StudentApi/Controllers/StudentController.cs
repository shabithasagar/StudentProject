using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApi.Data;
using StudentApi.Model;

namespace StudentApi.Controllers
{
    public class StudentController : Controller
    {
        private readonly ApplicationDbContext _context;
        public StudentController(ApplicationDbContext context)
        {
            _context = context;

        }
        [HttpGet("GetStudent")]
        public async Task<ActionResult<IEnumerable<student>>> GetStudent()
        {
            return await _context.students.ToListAsync();
        }

        [HttpPost("register")]
        public async Task<ActionResult<student>> Register(student users)
        {
            if (_context.students.Any(u => u.Name == users.Name))
            {
                return BadRequest("Name already exists.");
            }
            var user = new student
            {
                Name = users.Name,
                Email = users.Email
            };
            _context.students.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registered new student");
        }


        [HttpGet("GetCourse")]
        public async Task<ActionResult<IEnumerable<course>>> GetCourse()
        {
            return await _context.courses.ToListAsync();
        }

        [HttpPost("registerCourse")]
        public async Task<ActionResult<course>> RegisterCourse(course users)
        {
            if (_context.courses.Any(u => u.Title == users.Title))
            {
                return BadRequest("Title already exists.");
            }
            var user = new course
            {
                Title = users.Title,
                Description = users.Description
            };
            _context.courses.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registered new Course");
        }

        [HttpGet("GetEnrollment")]
        public async Task<ActionResult<IEnumerable<Enrollment>>> GetEnrollment()
        {
            return await _context.Enrollments.ToListAsync();
        }


    }
}
