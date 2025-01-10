# **Basicfit Discord Bots Launcher**

Ce projet permet de gérer et de lancer plusieurs bots Discord à l'aide d'un script Node.js. Les bots sont configurés pour se relancer automatiquement en cas de crash.

## **Prérequis**

Avant de commencer, assurez-vous que les éléments suivants sont installés :
- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [Git](https://git-scm.com/)
- Les dépendances spécifiques de chaque bot sont décrites dans leurs propres répertoires.

---

## **Installation**

### **1. Cloner le dépôt**
Pour cloner le projet avec ses sous-modules (chaque bot est un sous-module), exécutez :
```bash
git clone --recurse-submodules https://github.com/yamakajump/Basicfit_discord-bot.git
```

Si vous avez déjà cloné le dépôt sans les sous-modules, vous pouvez les initialiser et les mettre à jour avec :
```bash
git submodule init
git submodule update
```

---

### **2. Installer les dépendances**
Après le clonage, installez les dépendances pour chaque bot :

1. Accédez au répertoire du dépôt principal :
   ```bash
   cd Basicfit_discord-bot
   ```

2. Pour chaque bot (par exemple, `Basicfit-Coach_discord-bot`), installez les dépendances :
   ```bash
   cd bots/Basicfit-Coach_discord-bot
   npm install
   cd ../Basicfit-Manager_discord-bot
   npm install
   cd ../Basicfit-Securite_discord-bot
   npm install
   ```

---

## **Utilisation**

### **Lancer les bots**
Pour lancer tous les bots simultanément, utilisez le script Node.js :

1. Revenez au répertoire principal :
   ```bash
   cd Basicfit_discord-bot
   ```

2. Lancez le script :
   ```bash
   node index.js
   ```

Ce script :
- Affiche les journaux de chaque bot dans la console.
- Relance automatiquement un bot s'il s'arrête ou plante.

---

### **Mettre à jour les bots**
Si des mises à jour sont disponibles dans les sous-modules (bots individuels), vous pouvez les récupérer comme suit :

1. Mettre à jour le dépôt principal et les sous-modules :
   ```bash
   git pull --recurse-submodules
   ```

2. Mettre à jour les sous-modules indépendamment :
   ```bash
   git submodule update --remote
   ```

3. Si nécessaire, réinstallez les dépendances pour chaque bot :
   ```bash
   cd bots/Basicfit-Coach_discord-bot
   npm install
   cd ../Basicfit-Manager_discord-bot
   npm install
   cd ../Basicfit-Securite_discord-bot
   npm install
   ```

---

### **Ajouter un nouveau bot**
Pour ajouter un nouveau bot :
1. Clonez le nouveau bot dans le dossier `bots/` comme sous-module :
   ```bash
   git submodule add <URL-du-repo-du-bot> bots/<nom-du-nouveau-bot>
   ```
2. Ajoutez le chemin du nouveau bot dans le fichier `launcher.js` :
   ```javascript
   const bots = [
       path.join(__dirname, 'bots/Basicfit-Coach_discord-bot/index.js'),
       path.join(__dirname, 'bots/Basicfit-Manager_discord-bot/index.js'),
       path.join(__dirname, 'bots/Basicfit-Securite_discord-bot/index.js'),
       path.join(__dirname, 'bots/<nom-du-nouveau-bot>/index.js') // Nouveau bot
   ];
   ```
3. Commitez les modifications :
   ```bash
   git add .
   git commit -m "Ajout d'un nouveau bot"
   git push origin main
   ```

---

## **Dépannage**

### **1. Les sous-modules ne se chargent pas**
Si vous ne voyez pas les fichiers des sous-modules après un clone, assurez-vous d'utiliser :
```bash
git submodule init
git submodule update
```

### **2. Un bot ne se lance pas**
- Vérifiez que vous avez installé les dépendances dans le répertoire du bot :
  ```bash
  cd bots/<nom-du-bot>
  npm install
  ```
- Assurez-vous que le fichier `.env` est configuré correctement dans le répertoire du bot.

---

## **Contributions**
Les contributions sont les bienvenues ! Si vous souhaitez ajouter un nouveau bot ou améliorer le script, veuillez créer une Pull Request.

---

## **Licence**

Ce projet est sous licence MIT. Vous êtes libre de l’utiliser, de le modifier et de le redistribuer dans le respect des termes de la licence.

Pour plus de détails, consultez le fichier [LICENSE](./LICENSE).
