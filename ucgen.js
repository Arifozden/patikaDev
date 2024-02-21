using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Üçgenin boyutunu giriniz: ");
        int boyut = Convert.ToInt32(Console.ReadLine());

        UcgenCiz(boyut);
    }

    static void UcgenCiz(int boyut)
    {
        for (int i = 1; i <= boyut; i++)
        {
            for (int j = 1; j <= i; j++)
            {
                Console.Write("* ");
            }
            Console.WriteLine();
        }
    }
}
