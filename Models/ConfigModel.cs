using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebCv.Models
{
    public class ConfigModel
    {
        public string Email { get; set; }
        public string EmailPassword { get; set; }
        public string MailServer { get; set; }
        public string ConnectionString { get; set; }
    }
}
