# DiscordCrowdControl

> un bot avec des contrôles customs

## Utilisation

```sh
# install dependencies
$ npm install
# start in dev mode
$ npm run dev
# start all crons
$ npm run dev:cron
# start in production mode
$ npm run start
# lint all files
$ npm run lint
# format all files
$ npm run lint:fix
```

## Env

Le bot a besoin de quelques variables d'environnement afin de fonctionner
correctement. Pour ce faire, il vous faut créer un fichier `.env` et un fichier
`.env.dev` à partir du fichier `.local.env` et le compléter avec vos
informations.

Attention, il est important de ne pas utiliser le même token pour discord.js en
production et en développement. En effet, cela pourrait poser des soucis pour
vos mise en production.
