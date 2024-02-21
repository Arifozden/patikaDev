using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Integer ikilileri girin (boşlukla ayrılmış): ");
        string input = Console.ReadLine();
        
        string[] pairs = input.Split(' ');
        List<int> numbers = new List<int>();
        
        // Girilen ikilileri integer olarak ayırma
        for (int i = 0; i < pairs.Length; i += 2)
        {
            int num1 = int.Parse(pairs[i]);
            int num2 = int.Parse(pairs[i + 1]);
            
            // Eğer sayılar birbirinden farklı ise toplamlarını ekran yazdır
            if (num1 != num2)
            {
                int sum = num1 + num2;
                Console.Write(sum + " ");
            }
            // Eğer sayılar aynı ise toplamının karesini ekrana yazdır
            else
            {
                int square = num1 * num1;
                Console.Write(square + " ");
            }
        }
    }
}
