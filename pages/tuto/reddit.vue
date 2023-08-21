<template>
    <div class="tuto-container">
        <div class="header">
            <img :src="redditLogo" alt="Reddit Logo" style="width: 15%;">
            <span> Tuto: Utiliser l'API de Reddit dans un serveur Node js </span>
        </div>
        <div class="box">
            <Card :title="'Préambule'" titlePlace="start" class="card">
				<template #content>
                    <span> Le but de ce tutoriel est de montrer comment créer une web app utilisant l'API de Reddit. Celle ci n'étant pas très claire à mes yeux, j'ai décidé de réaliser ce tuto afin de vous aider à faire votre propre application. </span>
				</template>
			</Card>
            <Card :title="'Prérequis'" titlePlace="start" class="card">
				<template #content>
                    <div style="display: flex;
    flex-direction: column;">
                        <span> Pour cela vous devez être connecter à un compte Reddit et vous rendre à l'url:
                            <a href="https://www.reddit.com/prefs/apps"> https://www.reddit.com/prefs/apps </a>
                        </span>
                        <span> Ensuite sélectionner le bouton "create app" et remplisser les champs </span>
                        <div style="display: flex;
    flex-direction: row;
    justify-content: center;">
                            <img src="@/assets/tuto/reddit/create_app.png" alt="reddit create app" style="width: 50%;">
                        </div>
                        <span> Explication: "name" est le nom de l'application, on choisis "web app" car ce sera une application qui tournera sur internet, la "description" et le "about url" sont optionnel et enfin "redirect uri" et l'endroit où l'utilisateur va être redirigé une fois qu'il aura accepté que votre application utilise ses informations. Celle ci devrait être composé de "Là on tourne votre application", dans mon cas, mon server Node js tourne sur localhost:8000 puis par convention on rajoute "/auth/le nom du service/callback". Cette route devra exister dans notre server Node js.</span>
                    </div>
                </template>
			</Card>
            <Card :title="'Créer une nouvelle application'" titlePlace="start" class="card">
				<template #content>
                    <span> Je pars du principe que vous avez un server en Node js et que vous utiliser Express js pour faire les routes. Vous devriez aussi avoir une version de node suffisament récente pour utiliser node-fetch. </span>
                </template>
			</Card>

            <div class="box">
                <span class="title"> Préparer l'auth du server: </span>
                <span> Une fois que l'app est créé, vous verrez ses informations. À savoir un "secret id" et un "client id", ces 2 là doivent être gardé secret c'est pourquoi vous devriez les copier dans un fichier .env de votre projet. </span>
                <img src="" alt="servers auth">
                <span> Créons un nouveau fichier qui s'occupera de récupérer un access token de reddit. </span>
                <span> On import express-session qui permet de créer une session par utilisateur qui se connecte à notre serveur et de stocker des informations pour chaqu'un d'entre eux, ainsi que node-fetch pour utiliser l'API de Reddit depuis notre serveur. </span>
                <pre>
                    const session = require('express-session');
                    const fetch = require('node-fetch');
                </pre>
                <span> Ensuite nous allons exporter 2 routes get: </span>
                <pre>
                    module.exports = function(app) {
                        app.get('/auth/reddit', function(req, res) {
                        
                        });

                        app.get('/auth/reddit/callback', async function(req, res) {

                        });
                    };
                </pre>
                <span> Nous avons donc la première route que l'utilisateur appellera pour obtenir un access token et accepter que son compte Reddit soit utiliser par notre application. La seconde route étant la "redirect uri" que vous avez renseigné lors de la création de l'app. C'est dans celle-ci que Reddit vous redirigera après que l'utilisateur ait accepté que sont compte Reddit soit utiliser par notre application  </span>
                <span> Dans la première route nous devons rediriger vers une url en particulier qui prend cette form: </span>
                <pre> https://www.reddit.com/api/v1/authorize?client_id=REDDIT_CLIENT_ID&response_type=code&state=RANDOM_STRING&redirect_uri=REDDIT_CALLBACK_URL&duration=permanent&scope=LIST_OF_SCOPES </pre>
                <span> Le "REDDIT_CLIENT_ID" est celui que vous avez obtenu lors de la création de l'application sur Reddit, la "RNDOM_STRING" est litérallement une string random que vous mettez dans l'url, la "REDDIT_CALLBACK_URL" doit être celle que vous avez renseigné lors de la création de l'application sur Reddit et enfin vous pouvez ajouter une liste de scope séparé par des espaces: identity history read </span>
                <span> Personnellement j'utilise res.redirect ainsi que des variables d'environnement pour faire la redirection: </span>
                <pre>
                    const session = require('express-session');
                    const fetch = require('node-fetch');

                    module.exports = function(app) {
                        app.get('/auth/reddit', function(req, res) {
                            res.redirect(`https://www.reddit.com/api/v1/authorize?client_id=${process.env['REDDIT_CLIENT_ID']}&response_type=code&state=sdfghjkl\
                            &redirect_uri=${process.env['REDDIT_CALLBACK_URL']}&duration=permanent&scope=identity privatemessages submit mysubreddits read account history`);
                        });

                        app.get('/auth/reddit/callback', async function(req, res) {

                        });
                    };
                </pre>
                <span> À partir de là, si un client front-end appel votre serveur Node js sur la route GET /auth/reddit il sera redigé vers la page de reddit permettant à l'utilisateur de choisir son compte Reddit et d'accpeté que son compte soit utilisé par notre application. </span>
                <span> Maintenant nous devons nous occupé de la callback url, pour cela nous allons devoir faire appel à l'API de Reddit en utilisant les informations contenu dans la request de la route. En effet, celle-ci contient désormais un code que nous allons devoir utiliser </span>
                <span> Première étape: préparer nos données </span>
                <pre>
                    const session = require('express-session');
                    const fetch = require('node-fetch');

                    module.exports = function(app) {
                        app.get('/auth/reddit', function(req, res) {
                            res.redirect(`https://www.reddit.com/api/v1/authorize?client_id=${process.env['REDDIT_CLIENT_ID']}&response_type=code&state=sdfghjkl&redirect_uri=${process.env['REDDIT_CALLBACK_URL']}&duration=permanent&scope=identity privatemessages submit mysubreddits read account history`);
                        });

                        app.get('/auth/reddit/callback', async function(req, res) {
                            const bodyData = {
                                grant_type: 'authorization_code',
                                code: req.query.code,
                                redirect_uri: process.env['REDDIT_CALLBACK_URL'],
                            };
                            const bodyDataUrl = new URLSearchParams(Object.entries(bodyData)).toString();
                        });
                    };
                </pre>
                <span> On "URLSearchParams" pour formater les données car l'API de reddit s'attends à ce qu'elles soient présenté d'une certaine manière. </span>
                <span> Deuxième étape: appeler l'API </span>
                <pre>
                    const session = require('express-session');
                    const fetch = require('node-fetch');

                    module.exports = function(app) {
                        app.get('/auth/reddit', function(req, res) {
                            res.redirect(`https://www.reddit.com/api/v1/authorize?client_id=${process.env['REDDIT_CLIENT_ID']}&response_type=code&state=sdfghjkl&redirect_uri=${process.env['REDDIT_CALLBACK_URL']}&duration=permanent&scope=identity privatemessages submit mysubreddits read account history`);
                        });

                        app.get('/auth/reddit/callback', async function(req, res) {
                            const bodyData = {
                                grant_type: 'authorization_code',
                                code: req.query.code,
                                redirect_uri: process.env['REDDIT_CALLBACK_URL'],
                            };
                            const bodyDataUrl = new URLSearchParams(Object.entries(bodyData)).toString();

                            const result = await fetch(`https://www.reddit.com/api/v1/access_token`, {
                                method: "POST",
                                headers: {
                                    "Authorization": `Basic ${process.env['REDDIT_BASE_64']}`,
                                    'Content-Type': "application/x-www-form-urlencoded",
                                },
                                body: bodyDataUrl,
                            });
                            const data = await result.json();
                        });
                    };
                </pre>
                <span> Cette partie fait appel à l'API de Reddit et renvoie un access token que nous pourrons utiliser pour faire des requête par la suite. </span>
                <span> Enfin, troisième et dernière étape: stocker le token de l'utilisateur et le rediriger vers notre front-end </span>
                <pre>
                    const session = require('express-session');
                    const fetch = require('node-fetch');

                    module.exports = function(app) {
                        app.get('/auth/reddit', function(req, res) {
                            res.redirect(`https://www.reddit.com/api/v1/authorize?client_id=${process.env['REDDIT_CLIENT_ID']}&response_type=code&state=sdfghjkl&redirect_uri=${process.env['REDDIT_CALLBACK_URL']}&duration=permanent&scope=identity privatemessages submit mysubreddits read account history`);
                        });

                        app.get('/auth/reddit/callback', async function(req, res) {
                            const bodyData = {
                                grant_type: 'authorization_code',
                                code: req.query.code,
                                redirect_uri: process.env['REDDIT_CALLBACK_URL'],
                            };
                            const bodyDataUrl = new URLSearchParams(Object.entries(bodyData)).toString();

                            const result = await fetch(`https://www.reddit.com/api/v1/access_token`, {
                                method: "POST",
                                headers: {
                                    "Authorization": `Basic ${process.env['REDDIT_BASE_64']}`,
                                    'Content-Type': "application/x-www-form-urlencoded",
                                },
                                body: bodyDataUrl,
                            });
                            const data = await result.json();
                            session.reddit = data.access_token;
                            res.redirect("http://localhost:3000/");
                        });
                    };
                </pre>
                <span> N'oubliez pas de mettre l'addresse de votre front-end et d'importer ce fichier dans votre app principal: <code> require("./PATH/TO/FILE.js")(app); </code> par exemple. Vous avez donc tout le code qui permet de se connecter au servce de Reddit. </span>
            </div>
            <div class="box">
                <span class="title"> Utiliser l'API de Reddit: </span>
                <span> Maintenant nous allons faie en sorte que notre serveur Node js ait des routes pouvant être appelé par le front et qui s'occuperont de renvoyer les données de l'API de Reddit. </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const redditLogo = ref("https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Reddit_Logo_Icon.svg/1200px-Reddit_Logo_Icon.svg.png");
const lintToCreateApp = ref("https://www.reddit.com/prefs/apps");
</script>

<style scoped>
.tuto-container {
    background: var(--bg-secondary);
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 24px;
    font-weight: bold;
    font-size: 24px;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.title {
    font-weight: bold;
    font-size: 24px;
}
</style>