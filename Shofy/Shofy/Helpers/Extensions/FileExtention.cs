namespace Shofy.Helpers.Extensions
{
    public static class FileExtention
    {
        public static bool CheckFileSize(this IFormFile file, int size)
        {
            return file.Length / 1024 < size;
        }


        public static bool CheckFileType(this IFormFile file, string pattern)
        {
            return file.ContentType.Contains(pattern);
        }

        public async static Task SavaFileToLocalAsync(this IFormFile file, string path)
        {
            using FileStream fileStream = new(path, FileMode.Create);
            await file.CopyToAsync(fileStream);
        }


        public static void DeleteFileFromLocal(this string path)
        {

            if (File.Exists(path))
                File.Delete(path);
        }
    }
}
