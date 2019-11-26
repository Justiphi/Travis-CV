using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebCv.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebCv.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        [HttpGet("getexperience")]
        public IEnumerable<Experience> GetExperience()
        {
            return DatabaseModel.getExperience();
        }

        [HttpGet("getnotes")]
        public IEnumerable<Notes> GetNotes()
        {
            return DatabaseModel.getNotes();
        }

        [HttpGet("geteducation")]
        public IEnumerable<Qualification> GetEducation()
        {
            return DatabaseModel.getEducation();
        }
    }
}
