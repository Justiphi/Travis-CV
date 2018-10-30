using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebCv.Models;

namespace WebCv.Controllers
{
    [Produces("application/json")]
    [Route("api/Contact")]
    public class ContactController : Controller
    {
        [Route("contact")]
        [HttpPost]
        public ActionResult NewContact(ContactModel test)
        {
            return Content("Success!");
        }
    }
}