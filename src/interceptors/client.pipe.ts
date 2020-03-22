import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import ClientService from '~/app/modules/chat/client.service';
import { IChat } from '~/app/modules/chat/chat.interface';

@Injectable()
export default class ClientPipe implements PipeTransform {
  constructor(private clientService: ClientService) {}

  transform(value: { id: string; message: string }): IChat {
    const author = this.clientService.getClient(value.id).name;
    const { message } = value;

    return <IChat>{
      author,
      message,
    };
  }
}
