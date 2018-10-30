using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace WebCv.Models
{
    public class ContactModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
    }
    public class Contact
    {
        public static void SendEmail(ContactModel details)
        {
            SmtpClient smtpClient = new SmtpClient("streamspike.com", 25);

            smtpClient.Credentials = new System.Net.NetworkCredential("info@MyWebsiteDomainName.com", "myIDPassword"); //TODO:add credentials in config file (add file to gitignore)
            smtpClient.UseDefaultCredentials = true;
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtpClient.EnableSsl = true;
            MailMessage mail = new MailMessage();

            //Setting From , To and CC
            mail.From = new MailAddress(details.Email, details.Name);
            mail.To.Add(new MailAddress("travis@streamspike.com"));
            mail.Subject = details.Subject;
            mail.Body = details.Content;

            smtpClient.Send(mail);
        }
    }
}
