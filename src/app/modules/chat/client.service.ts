import { Injectable } from '@nestjs/common';

interface IClients {
  key: string;
  name: string;
}

@Injectable()
export default class ClientService {
  private _clients = new Map<string, IClients>();

  connectClient(client: IClients): void {
    this._clients.set(client.key, client);
  }

  getClient(key: string): IClients {
    return this._clients.get(key);
  }

  getClients(): IClients[] {
    let clients: IClients[] = [];

    this._clients.forEach(value => clients.push(value));
    return clients;
  }
}
