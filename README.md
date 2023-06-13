# DISCORD COUNTER BOT FOR DEXKIT CRYPTO APPS

This is a simple script that reads the API that provides the total number of products that have been deployed with the DexAppBuilder tool.

Anyone can use this script, even adapt it to their needs. It can be useful for displaying information via an inaccessible voice channel on Discord whose name is updated every 10 minutes (given Discord's limitations).

## HOW TO USE THIS SCRIPT

1. First of all you need to create a new bot at [Discord Developers portal](https://discord.com/developers/applications) and grab the bot token. Keep it private as long you don't want anyone sniffing in your server.

2. Fork this repo and download the code to your PC. We always recommend to test first in your local environment and then, if you liked the product, send it to your private VPS or cloud provider.

3. Extract the ZIP file and, inside the extracted folder, run ``pip install -r requirements.txt`` to install the necessary dependencies.

4. Edit the ``.env.example`` file with the asked data and then rename it to ``.env``. IMPORTANT!!! Remember to keep your ``.env`` file secure and hidden. The ``.gitignore`` file of this repo excludes the ``.env`` upload to GitHub but we always need to be special careful on this topic.

5. On your Discord server create a new voice channel. Set the restrictions for read-only and forbid access to connect.

6. After this, let's edit our script in order to use our very own server channels. Go to the line 14 (CHANNEL_ID) and paste the ID you grabbed for your channel created above.

7. It's test time! Let's run the script with ``python3 bot.py`` and check the incoming logs for errors. If the script fails it will just crash and logs will be explicit enough to help you solve the problem.

8. To keep this script persistent (for remote deployments mostly) use ``nohup python3 bot.py -u &`` and then press enter. If ``nohup`` doesn not throw ``exit`` message you are ready to go!

You have just deployed your API counter!



