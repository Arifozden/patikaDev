using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Sayıları girin (boşlukla ayrılmış): ");
        string input = Console.ReadLine();
        
        string[] numbersStr = input.Split(' ');
        int[] numbers = new int[numbersStr.Length];
        
        for (int i = 0; i < numbersStr.Length; i++)
        {
            numbers[i] = int.Parse(numbersStr[i]);
        }
        
        int sum = 0;
        
        for (int i = 0; i < numbers.Length; i++)
        {
            int diff = 67 - numbers[i];
            
            if (numbers[i] < 67)
            {
                sum += diff;
            }
            else
            {
                sum += diff * diff;
            }
        }
        
        Console.WriteLine("Output: " + sum);
    }
}
