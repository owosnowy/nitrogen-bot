import { Client, Events, GatewayIntentBits, ActivityType } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

export default function bot() {
  client.once(Events.ClientReady, async (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
    c.user.setPresence({
      activities: [{
        name: `'ello gov'ner`,
        type: ActivityType.Streaming,
      }],
      status: 'idle'
    });
  });
  client.login(process.env.TOKEN);
}