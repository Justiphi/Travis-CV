using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
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
        public static ConfigModel email;
        public static SmtpClient smtpClient;
        public static int SendEmail(ContactModel details)
        {
            try
            {
                MailMessage mail = new MailMessage();

                //Setting From , To and CC
                mail.From = new MailAddress(email.Email, details.Name);
                mail.To.Add("traviswylie58@gmail.com");
                mail.CC.Add("travis@streamspike.com");
                mail.Subject = details.Subject;
                mail.Body = $"From: {details.Email} \n {details.Content}";
                mail.IsBodyHtml = true;

                smtpClient.Send(mail);

                return 1;
            }
            catch
            {
                return 0;
            }
        }

        //start SMTP client at start of program to save connection time with each contact form filled
        public static void startSmtp()
        {
            ConfigureEmail();
            
            smtpClient = new SmtpClient(email.MailServer, 587);
            
            smtpClient.Credentials = new System.Net.NetworkCredential(email.Email, email.EmailPassword); 
            smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtpClient.EnableSsl = true;
            smtpClient.Timeout = 1000000;
        }
        public static void ConfigureEmail()
        {
            string file;
            
            file = Path.Combine(AppContext.BaseDirectory, "_config.json");

            if (!File.Exists(file))
            {
                throw new ApplicationException("Unable to locate the _config.json file.");
            }

            email = JsonConvert.DeserializeObject<ConfigModel>(File.ReadAllText(file));
        }
    }
}
