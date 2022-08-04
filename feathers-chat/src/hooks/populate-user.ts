// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const { app, method, result, params } = context;
    const addUser = async (message: any) => {
      const user = await app.service('users').get(message.userId, params);

      return { ...message, user };
    };

    if (method === 'find')
      // Map all data to include the `user` info
      context.result.data = await Promise.all(result.data.map(addUser));
    else
      // otherwise, just update the single result
      context.result = await addUser(result);

    return context;
  };
};
