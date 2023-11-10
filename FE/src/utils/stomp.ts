import { MessageRequest } from "@/types/chat";
import { Client } from "@stomp/stompjs";
import { Storage } from "./storage";

export const Stomp = Object.freeze({
  connect(client: any, url: string, onConnect: () => void) {
    if (client.current) {
      onConnect();
      return;
    }

    const accessToken = Storage.getAccessToken();
    client.current = new Client({
      brokerURL: `${url}?Authorization=${accessToken}`,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect,
      onStompError: (data) => {
        console.error(data);
      },
    });

    client.current.activate();
    console.log("connect 실행", client.current);
  },

  disconnect(client: Client) {
    client.deactivate();

    console.log("disconnect 실행", client);
  },

  subscribe(client: Client, url: string, callback: (data: any) => void) {
    client.subscribe(url, callback);

    console.log("subscribe 실행", client);
  },

  publish(client: Client, url: string, messageRequest: MessageRequest) {
    client.publish({
      destination: url,
      body: JSON.stringify(messageRequest),
    });

    console.log("publish 실행", client);
  },
});
