using System;

namespace Core.Dto.EmailDto
{
    public class EmailDto
    {
        public Guid Id { get; set; }
        public string EmailName { get; set; }
    }
    public class addEmailDto
    {
        public string EmailName { get; set; }
    }
    public class addEmailMessageDto
    {
        public string EmailName { get; set; }
        public Guid MessageId { get; set; }
    }
}