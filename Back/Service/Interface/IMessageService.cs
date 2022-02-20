using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Dto.EmailDto;
using Service.Response;

namespace Service.Interface
{
    public interface IMessageService
    {
        Task<ResponseService< int>> addMessageAsync(addMessageDto addMessageDto);
        ResponseService<int> addMessage(addMessageDto addMessageDto);
        ResponseService<List<MessageDto>> GetMessage();
        ResponseService<int> UpdateMassage(MessageDto messageDto);
        ResponseService<int> addEmail(addEmailDto addEmailDto);
        ResponseService<List<EmailDto>> GetEmail();
      Task < ResponseService<int>> addEmailAsync(addEmailDto addEmailDto);
        ResponseService<int>UpdateEmail(EmailDto EmailDto);
        Task< ResponseService<int>>SendMessageToEmail(SendMessageEmailsDto sendMessageEmailsDto);
    }
}