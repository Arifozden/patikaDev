using System;
using System.Collections.Generic;
using System.IO;

class Program
{
    static Dictionary<string, decimal> accounts = new Dictionary<string, decimal>();
    static List<string> transactions = new List<string>();

    static void Main(string[] args)
    {
        // Örnek hesaplar oluştur
        accounts["user1"] = 1000;
        accounts["user2"] = 500;
        accounts["user3"] = 1500;

        Console.WriteLine("Welcome to the ATM Application!");

        while (true)
        {
            Console.WriteLine("\nChoose an option:");
            Console.WriteLine("1. Deposit");
            Console.WriteLine("2. Withdraw");
            Console.WriteLine("3. Check Balance");
            Console.WriteLine("4. End of Day");

            int choice;
            if (!int.TryParse(Console.ReadLine(), out choice))
            {
                Console.WriteLine("Invalid input. Please enter a number between 1 and 4.");
                continue;
            }

            switch (choice)
            {
                case 1:
                    Deposit();
                    break;
                case 2:
                    Withdraw();
                    break;
                case 3:
                    CheckBalance();
                    break;
                case 4:
                    EndOfDay();
                    return;
                default:
                    Console.WriteLine("Invalid option. Please choose a number between 1 and 4.");
                    break;
            }
        }
    }

    static void Deposit()
    {
        Console.WriteLine("Enter your username: ");
        string username = Console.ReadLine();

        if (!accounts.ContainsKey(username))
        {
            Console.WriteLine("User not found. Please try again.");
            return;
        }

        Console.WriteLine("Enter the amount to deposit: ");
        decimal amount;
        if (!decimal.TryParse(Console.ReadLine(), out amount) || amount <= 0)
        {
            Console.WriteLine("Invalid amount. Please enter a valid positive number.");
            return;
        }

        accounts[username] += amount;
        transactions.Add($"Deposit\t{DateTime.Now}\t{username}\t{amount}");
        Console.WriteLine($"Deposit successful. New balance: {accounts[username]}");
    }

    static void Withdraw()
    {
        Console.WriteLine("Enter your username: ");
        string username = Console.ReadLine();

        if (!accounts.ContainsKey(username))
        {
            Console.WriteLine("User not found. Please try again.");
            return;
        }

        Console.WriteLine("Enter the amount to withdraw: ");
        decimal amount;
        if (!decimal.TryParse(Console.ReadLine(), out amount) || amount <= 0)
        {
            Console.WriteLine("Invalid amount. Please enter a valid positive number.");
            return;
        }

        if (amount > accounts[username])
        {
            Console.WriteLine("Insufficient funds.");
            return;
        }

        accounts[username] -= amount;
        transactions.Add($"Withdrawal\t{DateTime.Now}\t{username}\t{amount}");
        Console.WriteLine($"Withdrawal successful. New balance: {accounts[username]}");
    }

    static void CheckBalance()
    {
        Console.WriteLine("Enter your username: ");
        string username = Console.ReadLine();

        if (!accounts.ContainsKey(username))
        {
            Console.WriteLine("User not found. Please try again.");
            return;
        }

        Console.WriteLine($"Your balance: {accounts[username]}");
    }

    static void EndOfDay()
    {
        Console.WriteLine("End of day summary:");

        // Transaction log
        Console.WriteLine("\nTransaction Log:");
        foreach (var transaction in transactions)
        {
            Console.WriteLine(transaction);
        }

        // Fraud detection (mock)
        Console.WriteLine("\nFraudulent Activity:");
        Console.WriteLine("No fraudulent activity detected.");

        // Write transactions to file
        string filePath = $"EOD_{DateTime.Now.ToString("ddMMyyyy")}.txt";
        File.WriteAllLines(filePath, transactions);

        Console.WriteLine($"\nEnd of day report saved to {filePath}");
    }
}
