export default {
  async fetch(request, env, ctx) {
    try {
      const API_URL = env.API_URL;
      const BOT_TOKEN = env.BOT_TOKEN;
      const CHANNEL_ID = env.CHANNEL_ID;
      const CHANNEL_NAME = 'CryptoApp Counter';

      const updateChannel = async () => {
        try {
          const response = await fetch(API_URL);

          if (!response.ok) {
            throw new Error(`Error getting API response: ${response.statusText}`);
          }

          const data = await response.json();

          if (!data.total) {
            throw new Error("Response doesn't contain a 'total'.");
          }

          const total = data.total;
          const discordAPIEndpoint = `https://discord.com/api/v9/channels/${CHANNEL_ID}`;
          const headers = {
            'Authorization': `Bot ${BOT_TOKEN}`,
            'Content-Type': 'application/json',
          };
          const body = JSON.stringify({ name: `${CHANNEL_NAME}: ${total}` });
          const res = await fetch(discordAPIEndpoint, { method: 'PATCH', headers, body });

          if (!res.ok) {
            throw new Error(`Error updating channel name: ${res.statusText}`);
          }
        } catch (error) {
          console.error('Error updating channel:', error);
          throw new Error('Error: Something happened and the channel cannot be updated.');
        }
      };

      await updateChannel();

      return new Response('Channel updated!', { status: 200 });
    } catch (error) {
      console.error('Error processing request:', error);
      return new Response('Error: Something happened and request cannot be completed.', { status: 500 });
    }
  },
  async scheduled(event, env, ctx) {
    try {
      await this.fetch(null, env, null);
      console.log(event.scheduledTime);
    } catch (error) {
      console.error('Error updating channel:', error);
    }
  },
};
