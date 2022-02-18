using AutoMapper;
using Core.Dto.EmailDto;
using  Core.Email;

namespace Service.ConfigurationMap
{
    public class MapperConfiguration:Profile
    {
        public MapperConfiguration()
        {
            CreateMap<Email,addEmailDto>().ReverseMap();
            CreateMap<Email,EmailDto>().ReverseMap();
            CreateMap<Message,MessageDto>().ReverseMap();
            CreateMap<Message,addMessageDto>().ReverseMap();
        }
    }
}