using System;
using System.Drawing;
using ZXing;
using ZXing.Common;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("1. Generate Barcode");
        Console.WriteLine("2. Read Barcode");
        Console.WriteLine("Choose an option: ");

        int choice;
        if (!int.TryParse(Console.ReadLine(), out choice))
        {
            Console.WriteLine("Invalid input. Please enter 1 or 2.");
            return;
        }

        switch (choice)
        {
            case 1:
                GenerateBarcode();
                break;
            case 2:
                ReadBarcode();
                break;
            default:
                Console.WriteLine("Invalid option. Please choose 1 or 2.");
                break;
        }
    }

    static void GenerateBarcode()
    {
        Console.WriteLine("Enter text for the barcode: ");
        string text = Console.ReadLine();

        BarcodeWriter writer = new BarcodeWriter
        {
            Format = BarcodeFormat.CODE_128,
            Options = new EncodingOptions
            {
                Height = 200,
                Width = 400
            }
        };

        Bitmap barcodeBitmap = writer.Write(text);

        Console.WriteLine("Enter the path to save the barcode image: ");
        string path = Console.ReadLine();

        barcodeBitmap.Save(path);
        Console.WriteLine($"Barcode image saved to {path}");
    }

    static void ReadBarcode()
    {
        Console.WriteLine("Enter the path to the barcode image: ");
        string path = Console.ReadLine();

        BarcodeReader reader = new BarcodeReader();
        Result result = reader.Decode(new Bitmap(path));

        if (result != null)
        {
            Console.WriteLine($"Decoded barcode text: {result.Text}");
        }
        else
        {
            Console.WriteLine("Failed to decode barcode.");
        }
    }
}
