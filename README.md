# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Le But des TP est de comprendre les aspect suivants de REACT :

- La création de composant
- JSX
- Les props à quoi il serve et comment on les utilises
- Le cylce de vie et la gestion des états
- La gestions des interactions avec l'utilisateur à travers les évènements
- L'affichage conditionnel
- Créer des listes et l'attribut "key"
- La gestion des formulaire
- La communication enfant -> parent et parent -> enfant et la synchronisation des états
- Créer des composants qui ont des enfants dynamique.
- Les bases du Router
- les fragments
- le lazy loading

Exercice Home :

Exercice 1
Créer un composant Home qui apparait uniquement quand on est connecté.
dans "src/views/home/Home.js"

Exercice 2
Dans ce composant créer une liste de film.
Chaque film à un titre et une note qui doit être un nombre entre 1 et 5. La note peut être null si le film n'est pas encore noter.

Exercice 3
Dans chaque film créer un composant permettant de noter le film de 1 à 5.
Le composant doit prendre la forme de 5 bouton 1,2,3,4,5 et d'un texte affichant la note courante.

Exercice 4
Afficher la note dans le composant parent et la mettre à jour.

Exercice 5
Trier le tableau du meilleur film au plus bas et rentrer chez vous

Exercice Router :

Exercice 1 :
Créer un deuxième composant "Users" affichant un titre qui sera utiliser dans le routeur.
Ajouter le routeur a votre application avec pour route :

- "/" affichera Home
- "/users" affichera users

Exercices 2:
Ajouter un menu pour passer de home à users.
Le menu doit s'afficher quelque soit l'url.

Exercices 3:
Faire en sorte que pour l'url "/" on affiche la home.
Pour l'url qui commence par "/users" on affiche users
Pour toute les autres url on affiche "Cette page n'existe pas".

Exercice 4
Créer un composant "UserDetail".
Faire ne sorte d'afficher ce composant pour toutes les urls de type
"/users/1" ou 1 est une variable dynamique qui représsente l'id de l'utilisateur.
Afficher cette id dans "UserDetail"

https://reactrouter.com/web/example/nesting

https://reactrouter.com/web/api/Route/path-string-string
path avec ":" utiliser les fonctions "useParams" et "useRouteMatch"
