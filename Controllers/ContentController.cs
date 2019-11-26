using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebCv.Models;
using Newtonsoft.Json;

namespace WebCv.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ContentController : Controller
    {
        [Route("[action]")]
        [HttpGet]
        public static IEnumerable<Qualification> RequestEducation()
        {
            return (DatabaseModel.getEducation());
        }

        [Route("notes")]
        [HttpGet]
        public static IEnumerable<Notes> RequestNotes()
        {
            return (DatabaseModel.getNotes());
        }

        [HttpGet("[action]")]
        public static IEnumerable<Experience> RequestExperience()
        {
            IEnumerable<Experience> expResponse = DatabaseModel.getExperience();
            return expResponse;
            //return JsonConvert.SerializeObject(expResponse);
        }
    }
}