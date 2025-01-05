import React from "react";

const Login = () => {
  return (
    <div id="login">
      <h1>Connexion</h1>
      <form>
        <div className="input-group">
          <label htmlFor="identifiant">Identifiant</label>
          <input type="text" id="identifiant" placeholder="Identifiant" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" placeholder="Mot de passe" />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
