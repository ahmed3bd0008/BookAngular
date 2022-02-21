using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Core.Dto.EmailDto;
using Core.Email;
using Repository.Interface;
using Service.Interface;
using Service.Response;

namespace Service.Implementation
{
    public class MessageService : IMessageService
    {
        private readonly IUntityOfWork _untityOfWork;
        private readonly IMapper _mapper;

        public MessageService(IUntityOfWork untityOfWork,IMapper mapper)
        {
            _untityOfWork=untityOfWork;
            _mapper=mapper;
        }

        public ResponseService< int> addEmail(addEmailDto addEmailDto)
        {
             Email email=_mapper.Map<Email>(addEmailDto);
            _untityOfWork.EmailRepstiory.AddEntity(email);
             return  new ResponseService<int>(){Data= _untityOfWork.save()};
        }
        public ResponseService< int> UpdateEmail(EmailDto messageDto)
        {
            throw new System.NotImplementedException();
        }
          public ResponseService<List<MessageDto>> GetMessage()
        {
            var message=_untityOfWork.MessageRepstiory.getEntity(false);
            var messageDto=_mapper.Map<List<MessageDto>>(message);
            return new ResponseService<List<MessageDto>>(){Data=messageDto};
        }

        public ResponseService< int> addMessage(addMessageDto addMessageDto)
        {
            Message message=_mapper.Map<Message>(addMessageDto);
            _untityOfWork.MessageRepstiory.AddEntity(message);
            return  new ResponseService<int>(){Data= _untityOfWork.save()};
        }
        async Task<ResponseService<int>> IMessageService.addMessageAsync(addMessageDto addMessageDto)
        {
             Message message=_mapper.Map<Message>(addMessageDto);
              await  _untityOfWork.MessageRepstiory.AddEntityAsync(message);
            return  new ResponseService<int>(){Data=await _untityOfWork.saveAsync()};
        }
        public ResponseService< int >UpdateMassage(MessageDto messageDto)
        {
            throw new System.NotImplementedException();
        }
          public ResponseService<List<EmailDto>> GetEmail()
        {
            var email=_untityOfWork.EmailRepstiory.getEntity(false);
            var emailDto=_mapper.Map<List<EmailDto>>(email);
            return new ResponseService<List<EmailDto>>(){Data=emailDto};
        }
        public Task< ResponseService<int> >addEmailAsync(addEmailDto addEmailDto)
        {
            throw new System.NotImplementedException();
        }

    public async Task< ResponseService<int>>SendMessageToEmail(SendMessageEmailsDto sendMessageEmailsDto)
    {
        Message  message=_untityOfWork.MessageRepstiory.getEntityById(sendMessageEmailsDto.MessageId);
        if(sendMessageEmailsDto.EmailsDto.Count>0)
        {
            foreach (var item in sendMessageEmailsDto.EmailsDto)
            {
              List<Email> existEmail= await  _untityOfWork.EmailRepstiory.
                            getEntityAsync(d=>d.EmailName.Trim().ToUpper()==item.EmailName.Trim().ToUpper(),false);
               if(existEmail==null||existEmail.Count<=0)
               {
                     var addEmail=_mapper.Map<Email>(item);
                     addEmail.messageSended.Add(new MessageSended(){MessageId=message.Id});
                     await _untityOfWork.EmailRepstiory.AddEntityAsync(addEmail); 
               }
               else
               {
                  var email=  existEmail.FirstOrDefault();
                  email.messageSended.Add(new MessageSended(){MessageId=message.Id});
                    _untityOfWork.EmailRepstiory.updateEntity(email);
               }
            }
             await  _untityOfWork.saveAsync();
        }
        else{
            return new ResponseService<int>(){Message="Thier Is no Email To send"};
        }
        return new ResponseService<int>(){};
    }

      
      
    }
}