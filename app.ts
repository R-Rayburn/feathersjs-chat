// import feathers from '@feathersjs/feathers';
const feathers = requires('@feathersjs/feahters');

interface Message {
  id?: number;
  text: string;
}

// Allows to create new and return existing messages
class MessageService {
  messages: Message[] = [];

  async find () {
    return this.messages;
  }

  async create (data: Pick<Message, 'text'>) {
    // new message = data text with unique identifier added
    // using the message's length since it changes when we add one
    const message: Message = {
      id: this.messages.length,
      text: data.text
    }

    this.messages.push(message);

    return message;
  }
}

const app = feathers();

// register service on Feathers app
app.use('messages', new MessageService());

// log when new message is created
app.service('messages').on('created', (message: Message) => {
  console.log('A new message has been created', message);
});

// create messages and logs existing messages on service
const main = async () => {
  // create new message on message service
  await app.service('messages').create({
    text: 'Hello Feathers'
  });

  // And another one
  await app.service('messages').create({
    text: 'Hello there'
  });

  // Find all existing messages
  const messages = await app.service('messages').find();

  console.log('All messages', messages);
};

main();