using System;
using System.Collections.Generic;

namespace Core.Dto.EmailDto
{
    public class MessageDto
    {
        public Guid Id { get; set; }
         public string MessageName { get; set; }
        public string Subject { get; set; }
    }
  public class addMessageDto
    {
       public string MessageName { get; set; }
        public string Subject { get; set; }
    }
 public class SendMessageEmailsDto
 {
     public Guid MessageId { get; set; }
     public List<addEmailDto> EmailsDto { get; set; }
 }
}