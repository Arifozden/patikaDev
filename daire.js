using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Dairenin yarıçapını giriniz: ");
        double yaricap = Convert.ToDouble(Console.ReadLine());

        DaireCiz(yaricap);
    }

    static void DaireCiz(double yaricap)
    {
        for (int i = 0; i <= 2 * yaricap; i++)
        {
            for (int j = 0; j <= 2 * yaricap; j++)
            {
                double mesafeMerkez = Math.Sqrt(Math.Pow(i - yaricap, 2) + Math.Pow(j - yaricap, 2));
                if (Math.Abs(mesafeMerkez - yaricap) < 0.5)
                {
                    Console.Write("*");
                }
                else
                {
                    Console.Write(" ");
                }
            }
            Console.WriteLine();
        }
    }
}
