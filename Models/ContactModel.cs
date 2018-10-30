using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebCv.Models
{
    public class ContactModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
    }
}
