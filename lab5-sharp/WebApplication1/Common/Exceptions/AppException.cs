namespace WebApplication1.Common.Exceptions
{
    public class AppException : Exception
    {
        public AppException() : base() { }
        public AppException(string messsage)
            : base(messsage) { }
    }
}
