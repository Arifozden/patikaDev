using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static Dictionary<string, int> votes = new Dictionary<string, int>();

    static void Main(string[] args)
    {
        Console.WriteLine("Welcome to the Voting Application!");

        // Kategorileri tanımla
        List<string> categories = new List<string> { "Film Categories", "Tech Stack Categories", "Spor Categories" };

        // Kullanıcıları tanımla
        Dictionary<string, string> users = new Dictionary<string, string>
        {
            { "user1", "password1" },
            { "user2", "password2" },
            { "user3", "password3" }
        };

        // Kullanıcı girişi
        string username = Login(users);

        // Kullanıcıya kategorileri göster
        ShowCategories(categories);

        // Oylama
        while (true)
        {
            Console.WriteLine("Enter category to vote (or 'exit' to finish voting): ");
            string category = Console.ReadLine();

            if (category.ToLower() == "exit")
                break;

            Vote(category);
        }

        // Sonuçları göster
        ShowResults();
    }

    static string Login(Dictionary<string, string> users)
    {
        while (true)
        {
            Console.WriteLine("Enter your username: ");
            string username = Console.ReadLine();

            if (users.ContainsKey(username))
            {
                Console.WriteLine("Enter your password: ");
                string password = Console.ReadLine();

                if (users[username] == password)
                    return username;
                else
                    Console.WriteLine("Invalid password. Please try again.");
            }
            else
            {
                Console.WriteLine("Username not found. Do you want to register? (yes/no)");
                string choice = Console.ReadLine();

                if (choice.ToLower() == "yes")
                {
                    Console.WriteLine("Enter a new username: ");
                    string newUsername = Console.ReadLine();
                    Console.WriteLine("Enter a password: ");
                    string newPassword = Console.ReadLine();

                    users.Add(newUsername, newPassword);

                    Console.WriteLine("Registration successful. You can now login.");
                }
                else
                {
                    Console.WriteLine("Returning to login...");
                }
            }
        }
    }

    static void ShowCategories(List<string> categories)
    {
        Console.WriteLine("Categories:");
        foreach (var category in categories)
        {
            Console.WriteLine("- " + category);
        }
    }

    static void Vote(string category)
    {
        if (!votes.ContainsKey(category))
        {
            votes[category] = 1;
        }
        else
        {
            votes[category]++;
        }
        Console.WriteLine("Vote recorded for category: " + category);
    }

    static void ShowResults()
    {
        Console.WriteLine("Voting Results:");
        foreach (var vote in votes)
        {
            Console.WriteLine($"{vote.Key}: {vote.Value} votes ({(double)vote.Value / votes.Sum(v => v.Value) * 100:F2}%)");
        }
    }
}
