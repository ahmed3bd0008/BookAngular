using Core.Shared;

namespace Core.Email
{
    public class Message:Entity
    {
        public string MessageName { get; set; }
        public string Subject { get; set; }
    }
}