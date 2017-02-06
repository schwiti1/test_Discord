curl -X POST --data '{ "embeds": [{"title": "Topic Title", "url": "https://example.com", "description": "This is a test for webhooks", "type": "link", "thumbnail": {"url": "https://meta-s3-cdn.global.ssl.fastly.net/original/3X/c/b/cb4bec8901221d4a646e45e1fa03db3a65e17f59.png"}}] }' -H "Content-Type: application/json"  https://canary.discordapp.com/api/webhooks/url

function sendText(){
