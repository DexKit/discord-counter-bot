# Discord Channel Updater Worker

This Cloudflare Worker script is designed to update the name of a Discord channel with the total number of CryptoApps (Dapps) made with DexAppBuilder, obtaining the data from an internal API. The script runs on Cloudflare Workers and utilizes JavaScript to fetch data from the API and update the Discord channel accordingly.

## Setup

1. **Environment Variables**: Make sure to set the following environment variables in your Cloudflare Workers environment:
   - `API_URL`: The URL of the external API providing the total number of CryptoApps.
   - `BOT_TOKEN`: The Discord bot token with permissions to edit the channel name.
   - `CHANNEL_ID`: The ID of the Discord channel to update.

2. **Deploy**: Deploy the worker script to Cloudflare Workers using the appropriate deployment method.

## Functionality

The script fetches data from the specified API URL, retrieves the total number of CryptoApps made with DexAppBuilder, and updates the name of the designated Discord channel with this information. It runs the update process immediately upon execution and then periodically polls the API for updates every 30 seconds.

## Error Handling

The script includes error handling to catch and log any errors that occur during the update process. If an error occurs, it returns an appropriate error response to indicate the failure.

## Deployment

Deploy the worker script to Cloudflare Workers using the deployment method of your choice. Once deployed, the worker will automatically start updating the Discord channel as per the configured logic.

## Note

- This script uses polling to check for updates from the API. Real-time updates via WebSockets are not currently supported.

