using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Fibonacci serisi için derinlik giriniz: ");
        int derinlik = Convert.ToInt32(Console.ReadLine());

        double ortalama = FibonacciOrtalamaHesapla(derinlik);
        
        Console.WriteLine($"Fibonacci serisinin ilk {derinlik} terimi ortalaması: {ortalama}");
    }

    static double FibonacciOrtalamaHesapla(int derinlik)
    {
        int[] fibonacci = FibonacciSerisiGetir(derinlik);
        double toplam = 0;

        foreach (int sayi in fibonacci)
        {
            toplam += sayi;
        }

        return toplam / derinlik;
    }

    static int[] FibonacciSerisiGetir(int derinlik)
    {
        int[] fibonacci = new int[derinlik];
        fibonacci[0] = 0;
        fibonacci[1] = 1;

        for (int i = 2; i < derinlik; i++)
        {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        }

        return fibonacci;
    }
}
