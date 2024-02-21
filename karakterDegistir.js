using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("String ifadeyi girin: ");
        string input = Console.ReadLine();
        
        string output = SwapFirstAndLastCharacters(input);
        
        Console.WriteLine("Output: " + output);
    }
    
    static string SwapFirstAndLastCharacters(string str)
    {
        if (str.Length <= 1)
        {
            return str;
        }
        
        char firstChar = str[0];
        char lastChar = str[str.Length - 1];
        
        char[] chars = str.ToCharArray();
        chars[0] = lastChar;
        chars[str.Length - 1] = firstChar;
        
        return new string(chars);
    }
}
