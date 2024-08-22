import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

@Injectable()
export class EmailService {
  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  } 
  export async function sendEmail(message: string, to: string) {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: 'nome da empres <email@daempresa.com>',
      to,
      subject: 'Código QR do WhatsApp',
      html: `<p>Olá,</p>
      <pre>${message}</pre>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email enviado com sucesso com o código QR do WhatsApp.');
    } catch (error) {
      console.error('Erro ao enviar o email com o código QR do WhatsApp:', error);
    }
  }

