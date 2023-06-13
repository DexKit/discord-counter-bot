from dotenv import load_dotenv
import os
import discord
from discord.ext import tasks, commands
import requests
## import logging

## logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.DEBUG)

load_dotenv()
intents = discord.Intents.default()
bot = commands.Bot(command_prefix="/", intents=intents)

CHANNEL_ID = 1115996050482798682
CHANNEL_NAME = 'CryptoApp Counter'

@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')
    update_channel.start()

@tasks.loop(seconds=600)
async def update_channel():
    response = requests.get(os.getenv('API_URL'))
    data = response.json()
    total = data.get('total')

    if total is None:
        print("The response did not contain a 'total'.")
        return

    channel = bot.get_channel(CHANNEL_ID)
    if channel is not None:
        await channel.edit(name=f'{CHANNEL_NAME}: {total}')


bot.run(os.getenv('BOT_TOKEN'))
