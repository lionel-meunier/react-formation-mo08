export function authLogin(email, password) {
  return (
    fetch("https://api.jsonapi.co/rest/v1/user/login", {
      method: "POST",
      // Ajoute le header "Content-Type": "application/json"
      headers: {
        "Content-Type": "application/json",
      },
      // Avec le body = {email : 'mon email', password : 'mon password'}
      body: JSON.stringify({
        email,
        password,
      }),
    })
      // on vérifier si le status est valide
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          return res;
        }
        // génére une erreur
        throw res;
      })
      // quand c'est valide on utilise la méthode json() pour parser le body
      .then((res) => res.json())
      // On renvoie le token
      .then((res) => {
        return res.data.token;
      })
      // On gère l'erreur qu'on a générer quand on vérifier le status
      .catch((res) => {
        return res.json().then((res) => {
          throw res.error;
        });
      })
  );
}
