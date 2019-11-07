using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;

namespace WebCv.Models
{
    public class DatabaseModel
    {
        public static string connectionString;

        public static void configureDB()
        {
            string file;

            file = Path.Combine(AppContext.BaseDirectory, "_config.json");

            if (!File.Exists(file))
            {
                throw new ApplicationException("Unable to locate the _config.json file.");
            }

            connectionString = JsonConvert.DeserializeObject<ConfigModel>(File.ReadAllText(file)).ConnectionString;
        }

        public static List<Qualification> getEducation()
        {
            string sqlString = "SELECT * FROM Qualifications ORDER BY StudyYear DSC;";
            List<Qualification> qualifications = new List<Qualification>();
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();
            SqlCommand command = new SqlCommand(sqlString, connection);
            using( SqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    qualifications.Add(new Qualification()
                    {
                        ID = Convert.ToInt32(reader["ID"]),
                        Title = (string)reader["Title"],
                        Location = (string)reader["Location"],
                        StudyYear = (string)reader["StudyYear"],
                        Completed = (bool)reader["Completed"]
                    });
                }
            }
            connection.Close();
            return qualifications;
        }

        public static List<Notes> getNotes()
        {
            string sqlString = "SELECT * FROM Notes;";
            List<Notes> notes = new List<Notes>();
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();
            SqlCommand command = new SqlCommand(sqlString, connection);
            using (SqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    notes.Add(new Notes()
                    {
                        ID = Convert.ToInt32(reader["ID"]),
                        Note = (string)reader["Note"]
                    });
                }
            }
            connection.Close();
            return notes;
        }

        public static List<Experience> getExperience()
        {
            string sqlString = "SELECT * FROM Experience;";
            List<Experience> projects = new List<Experience>();
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();
            SqlCommand command = new SqlCommand(sqlString, connection);
            using (SqlDataReader reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    projects.Add(new Experience()
                    {
                        ID = Convert.ToInt32(reader["ID"]),
                        Project = (string)reader["Project"],
                        Type = (string)reader["Type"],
                        Technology = (string)reader["Technology"],
                        GithubLink = (string)reader["GithubLink"]
                    });
                }
            }
            connection.Close();
            return projects;
        }

        public static void createDatabase()
        {
            string sqlString = "CREATE DATABASE IF NOT EXISTS TravisCV;" +
            "USE TravisCV;" +
            "CREATE TABLE IF NOT EXISTS Qualifications(" +
            "ID int(11) NOT NULL AUTO_INCREMENT," +
            "Title text(50)," +
            "Location text(50)," +
            "StudyYear text(4)," +
            "Completed boolean," +
            "PRIMARY KEY(ID)" +
            ");" +
            "CREATE TABLE IF NOT EXISTS Experience(" +
            "ID int(11) NOT NULL AUTO_INCREMENT," +
            "Project text(50)," +
            "Type text(30)," +
            "Technology text(50)," +
            "GithubLink text(100)," +
            "PRIMARY KEY(ID)" +
            ");" +
            "CREATE TABLE IF NOT EXISTS Notes(" +
            "ID int(11) NOT NULL AUTO_INCREMENT," +
            "Note text(100)," +
            "PRIMARY KEY(ID)" +
            ");";

            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();
            SqlCommand command = new SqlCommand(sqlString, connection);
            command.ExecuteNonQuery();
            connection.Close();
        }
    }

    public class Qualification
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Location { get; set; }
        public string StudyYear { get; set; }
        public bool Completed { get; set; }
    }

    public class Experience
    {
        public int ID { get; set; }
        public string Project { get; set; }
        public string Type { get; set; }
        public string Technology { get; set; }
        public string GithubLink { get; set; }
    }

    public class Notes
    {
        public int ID { get; set; }
        public string Note { get; set; }
    }
}
