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
    [Route("api/contact")]
    public class ContactController : Controller
    {
        [Route("newcontact")]
        [HttpPost]
        public int NewContact(ContactModel details)
        {
            return Contact.SendEmail(details);
        }
    }
}