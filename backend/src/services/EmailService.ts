interface EMailto {
  name: string;
  email: string;
}

interface EMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MessageDTO { // DTO = Data Transfer Object (metodologia DDD)
  to: EMailto;
  message: EMailMessage;
}

interface IMailService {
  sendMail(request: MessageDTO): void;
}

class EmailService implements IMailService {
  sendMail({ to , message }: MessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;