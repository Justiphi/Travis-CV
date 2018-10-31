# Travis-CV
My website CV

This website uses my Stream Spike web server in order to contact me with any messages put into the contact form. 
Due to this requiring authentification I have stored the password for my email in a json file that I am not tracking via git.

In order to start an instance of this website, you must first add a file named '_config.json' into the root directory of the code with the fields: 
-'Email' with a value of your email
-'EmailPassword' with a value of your emails password
-'MailServer' with a value of your emails smtp server link/ip