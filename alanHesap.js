using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Geometrik şekil seçin: ");
        Console.WriteLine("1. Daire");
        Console.WriteLine("2. Üçgen");
        Console.WriteLine("3. Kare");
        Console.WriteLine("4. Dikdörtgen");

        Console.Write("Seçiminizi yapın (1-4): ");
        int secim = Convert.ToInt32(Console.ReadLine());

        switch (secim)
        {
            case 1:
                DaireIslem();
                break;
            case 2:
                UcgenIslem();
                break;
            case 3:
                KareIslem();
                break;
            case 4:
                DikdortgenIslem();
                break;
            default:
                Console.WriteLine("Geçersiz seçim.");
                break;
        }
    }

    static void DaireIslem()
    {
        Console.Write("Dairenin yarıçapını girin: ");
        double yaricap = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Hesaplanmak istenen değeri seçin:");
        Console.WriteLine("1. Alan");
        Console.WriteLine("2. Çevre");

        Console.Write("Seçiminizi yapın (1-2): ");
        int secim = Convert.ToInt32(Console.ReadLine());

        switch (secim)
        {
            case 1:
                double alan = DaireAlanHesapla(yaricap);
                Console.WriteLine($"Dairenin alanı: {alan}");
                break;
            case 2:
                double cevre = DaireCevreHesapla(yaricap);
                Console.WriteLine($"Dairenin çevresi: {cevre}");
                break;
            default:
                Console.WriteLine("Geçersiz seçim.");
                break;
        }
    }

    static double DaireAlanHesapla(double yaricap)
    {
        return Math.PI * Math.Pow(yaricap, 2);
    }

    static double DaireCevreHesapla(double yaricap)
    {
        return 2 * Math.PI * yaricap;
    }

    // Diğer geometrik şekillerin işlemleri için aynı şekilde metotlar tanımlanabilir.

    static void UcgenIslem()
    {
        // Üçgen işlemleri burada gerçekleştirilebilir
    }

    static void KareIslem()
    {
        // Kare işlemleri burada gerçekleştirilebilir
    }

    static void DikdortgenIslem()
    {
        // Dikdörtgen işlemleri burada gerçekleştirilebilir
    }
}
