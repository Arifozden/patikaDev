using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("String ifadeyi girin: ");
        string input = Console.ReadLine();
        
        string[] words = input.Split(' ');
        
        foreach (var word in words)
        {
            Console.Write(HasConsecutiveConsonants(word) + " ");
        }
    }
    
    static bool HasConsecutiveConsonants(string str)
    {
        for (int i = 0; i < str.Length - 1; i++)
        {
            char currentChar = char.ToLower(str[i]);
            char nextChar = char.ToLower(str[i + 1]);
            
            if (!IsVowel(currentChar) && !IsVowel(nextChar))
            {
                return true;
            }
        }
        
        return false;
    }
    
    static bool IsVowel(char c)
    {
        return "aeiou".Contains(c);
    }
}
