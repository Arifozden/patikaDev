using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Bir metin girin: ");
        string input = Console.ReadLine();

        string output = KarakterleriYerDegistir(input);
        Console.WriteLine("Sonuç: " + output);
    }

    static string KarakterleriYerDegistir(string input)
    {
        char[] characters = input.ToCharArray();

        for (int i = 0; i < characters.Length; i++)
        {
            // Her karakterin bir önceki karakterle yer değiştirmesi
            if (i > 0)
            {
                char temp = characters[i - 1];
                characters[i - 1] = characters[i];
                characters[i] = temp;
            }
        }

        return new string(characters);
    }
}
