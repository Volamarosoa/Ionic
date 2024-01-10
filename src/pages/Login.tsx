import React from 'react';
import { useAuth } from "../controller/Authentification";
import './Login.css';
import { IonButton, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
 const { login } = useAuth();
 const history = useHistory();

 const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();

   // Extraire les valeurs de username et password directement de l'événement
   const target = event.target as typeof event.target & {
     username: { value: string };
     password: { value: string };
   };
   const username = target.username.value;
   const password = target.password.value;
  const onSuccess = () => {
    history.push('/tab1');
  };

   // Ajoutez ici la logique de connexion
   if (username.trim() !== '' && password.trim() !== '') {
     try {
      const user = await login(username, password);
      if(user){
        // alert(`Connexion réussie ${username}! User ID: ${user.uid}`);
        onSuccess();      }
     } catch (error) {
      //  alert('Il y a une erreur : '+error);
      setErreur("Email ou mot de passe incorrect")
     }
   } else {
      setErreur("Veuillez saisir votre nom d\'utilisateur et votre mot de passe.");
    //  alert('Veuillez saisir votre nom d\'utilisateur et votre mot de passe.');
   }
 };

 function setErreur(erreur: string) {
  var divErreur = document.getElementById("erreur");
  if(divErreur != null)
    divErreur.innerHTML = erreur;
}

 return (
   <>
   <div className="login-container">
     <h1>Connexion</h1>
     <form method="Get" onSubmit={handleLogin}>
       <IonInput label="Email" labelPlacement="floating" fill="outline" type="email" placeholder="Entrer votre email" name="username" required></IonInput>
       <IonInput label="Mot de passe" labelPlacement="floating" fill="outline" type="password" placeholder="Entrer votre mot de passe" name="password" required></IonInput>
       <p id="erreur" className="erreur"></p>
       <IonButton expand="block" type="submit">Se connecter</IonButton>
       <a href="/signup"><p>Inscription</p></a>
     </form>
   </div>
   </>
 );
};

export default Login;
