const { spawn } = require('child_process');
const path = require('path');

// Liste des chemins vers les bots
const bots = [
    path.join(__dirname, 'bots/Basicfit-Coach_discord-bot/index.js'),
    path.join(__dirname, 'bots/Basicfit-Manager_discord-bot/index.js'),
    path.join(__dirname, 'bots/Basicfit-Securite_discord-bot/index.js')
];

// Fonction pour lancer un bot
function launchBot(botPath) {
    console.log(`Lancement de : ${botPath}`);
    const botProcess = spawn('node', [botPath], { stdio: 'inherit' });

    botProcess.on('close', (code) => {
        console.log(`Le bot ${botPath} s'est arrêté avec le code : ${code}`);
        // Redémarrer le bot en cas de crash ou fermeture
        if (code !== 0) {
            console.log(`Redémarrage du bot : ${botPath}`);
            launchBot(botPath);
        }
    });
}

// Lancer tous les bots
bots.forEach(launchBot);
