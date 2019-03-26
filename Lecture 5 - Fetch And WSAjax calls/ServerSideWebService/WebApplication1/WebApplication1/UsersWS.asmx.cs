using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

namespace WebApplication1
{
    /// <summary>
    /// Summary description for UsersWS
    /// </summary>
    [WebService(Namespace = "http://nir.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class UsersWS : System.Web.Services.WebService
    {
        string conStr = @"Data Source=LABA00;Initial Catalog=UserDB;Integrated Security=True";
        SqlConnection con = null;

        public UsersWS()
        {
            con = new SqlConnection(conStr);
        }

        [WebMethod]
        public int Add(int num1, int num2)
        {
            return num1 + num2;
        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public string GetUserById(int id)
        {
            User u = new User() { ID = id, Name = "avi", Address = "Sokolov 1" };
            string userOutput = new JavaScriptSerializer().Serialize(u); // to JSON
            return userOutput;
        }

        [WebMethod]
        public string GetUserByIdAndName(int id, string name)
        {
            User u = new User() { ID = id, Name = name, Address = "Sokolov 1" };
            string userOutput = new JavaScriptSerializer().Serialize(u); // to JSON
            return userOutput ;
        }

        [WebMethod]
        public string InsertUserToSQL(string name, string address)
        {
            SqlCommand com = null;
            string userOutput = null;
            try
            {
                User u = null;

                com = new SqlCommand($"INSERT INTO UsersTB(Name, Address) VALUES('{name}','{address}')", con);
                com.Connection.Open();
                int res = com.ExecuteNonQuery();
                if (res==1)
                {
                   SqlCommand  com2 = new SqlCommand("SELECT max(id) as maxID FROM UsersTB", con);
                    SqlDataReader reader2 = com2.ExecuteReader();
                    if (reader2.Read())
                    {
                        u = new User()
                        {
                            ID = (int)reader2["maxID"],
                            Name = name,
                            Address = address
                        };
                    }
                }
                userOutput = new JavaScriptSerializer().Serialize(u); // to JSON
                return userOutput;
            }
            catch (Exception e)
            {
                File.AppendAllText(Server.MapPath(@"\") + "logSQL.txt",
                    " InsertUserToSQL\r\n" + 
                    e.Message +
                    "\n\r " + DateTime.Now.ToString() +
                    "\n\rname=" + name +
                    "\n\r_______________\n\r");
            }
            finally
            {
                if (com.Connection.State != ConnectionState.Closed)
                {
                    com.Connection.Close();
                }
            }

            return userOutput;
        }


        [WebMethod]
        public string GetUserByIdFromSQL(int id)
        {
            SqlCommand com = null;
            string userOutput = null;
            try
            {
                User u = null;

                com = new SqlCommand("SELECT * FROM UsersTB WHERE ID=" + id, con);
                com.Connection.Open();
                SqlDataReader reader = com.ExecuteReader();

                if (reader.Read())
                {
                    u = new User()
                    {
                        ID = id,
                        Name = reader["Name"].ToString(),
                        Address = reader["Address"].ToString()
                    };
                }

                userOutput = new JavaScriptSerializer().Serialize(u); // to JSON
                return userOutput;
            }
            catch (Exception e)
            {
                File.AppendAllText(Server.MapPath(@"\") + "logSQL.txt",
                    " GetUserByIdFromSQL\r\n" +
                    e.Message +
                    "\n\r " + DateTime.Now.ToString() +
                    "\n\rid=" + id + 
                    "\n\r_______________\n\r");
            }
            finally
            {
                if (com.Connection.State != ConnectionState.Closed)
                {
                    com.Connection.Close();
                }
            }

            return userOutput;
        }
    }


    class User
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
    }
}
