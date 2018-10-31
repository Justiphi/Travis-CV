using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace WebCv.Models
{
    public class ContactModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
    }
    public class Contact
    {
        public static SmtpClient smtpClient;
        public static int SendEmail(ContactModel details)
        {
            try
            {
                MailMessage mail = new MailMessage();

                //Setting From , To and CC
                mail.From = new MailAddress("travis@streamspike.com", details.Name);
                mail.To.Add("traviswylie58@gmail.com");
                mail.Subject = details.Subject;
                mail.Body = $"From: {details.Email} \n {details.Content}";
                mail.IsBodyHtml = true;

                smtpClient.Send(mail);

                return 1;
            }
            catch
            {
                throw;
            }
        }
        public static void startSmtp()
        {
            string password = "placeholder"; //TODO: add password config file (add file to gitignore)

            if (smtpClient == null)
            {
                smtpClient = new SmtpClient("streamspike.com", 587);
            }

            smtpClient.Credentials = new System.Net.NetworkCredential("travis@streamspike.com", password); 
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtpClient.EnableSsl = true;
            smtpClient.Timeout = 1000000;
        }
    }
}
