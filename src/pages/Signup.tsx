import React from 'react';
import { useAuth } from "../controller/Authentification";
import './Signup.css';
import { IonButton, IonInput } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Signup: React.FC = () => {
 const { signup, signInWithGoogle } = useAuth();
 const history = useHistory();

 const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();

   // Extraire les valeurs de username et password directement de l'événement
   const target = event.target as typeof event.target & {
     username: { value: string };
     password: { value: string };
     passwordconfirm: { value: string };
   };
   const username = target.username.value;
   const password = target.password.value;
   const passwordconfirm = target.passwordconfirm.value;

  const onSuccess = () => {
    history.push('/login');
  };

   // Ajoutez ici la logique de connexion
    if (username.trim() !== '' && password.trim() !== '' && passwordconfirm.trim() !== '') {
        
        if(password.trim() !== passwordconfirm.trim()){
            // alert('Les deux mots de passes ne sont pas pareilles!');
            setErreur("Les deux mots de passes ne sont pas pareilles!");
        } else {
            try {
              if(password.length < 6) {
                setErreur("Le mot de passe doit etre plus de 5 caracteres!");
                return;
              }
                const user = await signup(username, password);
                if(user){
                  // alert(`Inscription réussie ${username}! User ID: ${user.uid}`);
                  onSuccess();
                }
            } catch (error) {
                // alert('Il y a une erreur : '+error);
                setErreur("Ce compte existe deja!");
            }
        }

    } else {
        alert('Veuillez saisir votre nom d\'utilisateur et votre mot de passe.');
    }
 };

 const handleGoogleSignUp = async () => {
  try {
    const user = await signInWithGoogle();
    if(user){
      alert(`Connexion réussie avec Google! User ID: ${user.uid}`);
    }
  } catch (error) {
    alert('Il y a une erreur : '+error);
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
      <h1>Inscription</h1>
      <form method="Get" onSubmit={handleSignUp}>
        <IonInput label="Email" labelPlacement="floating" fill="outline" type="email" placeholder="Entrer votre email" name="username" required></IonInput>
        <IonInput label="Mot de passe" labelPlacement="floating" fill="outline" type="password" placeholder="Entrer votre mot de passe" name="password" required></IonInput>
        <IonInput label="Confimation Du Mot de passe" labelPlacement="floating" fill="outline" type="password" placeholder="Confirmer votre mot de passe" name="passwordconfirm" required></IonInput>
        <p id="erreur" className="erreur"></p>
        <IonButton expand="block" type="submit">S'inscrire</IonButton>
        <IonButton expand="block" onClick={handleGoogleSignUp}>Se connecter avec Google</IonButton>
        <a href="/login"><p>Vous avez deja un compte?</p></a>
      </form>
    </div>
   </>
 );
};

export default Signup;
