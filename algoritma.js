using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Bir metin ve bir sayı girin (metin,sayı): ");
        string input = Console.ReadLine();

        // Kullanıcının girdisini virgül ile böler
        string[] parts = input.Split(',');

        // Eğer giriş iki parçaya bölünemiyorsa veya ikinci parça bir sayı değilse hata ver
        if (parts.Length != 2 || !int.TryParse(parts[1], out int index))
        {
            Console.WriteLine("Geçersiz giriş.");
            return;
        }

        string text = parts[0];
        int length = text.Length;

        // İndeks pozitif bir değerse, belirtilen indexteki karakteri kaldır
        if (index >= 0 && index < length)
        {
            text = text.Remove(index, 1);
            Console.WriteLine(text);
        }
        else
        {
            Console.WriteLine("Geçersiz indeks.");
        }
    }
}
