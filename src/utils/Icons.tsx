import * as Fa6Icons from 'react-icons/fa6'
import * as BsIcons from 'react-icons/bs'

const returnError = () => {
  return "Nein !";
}


const customFa6Icons = (name: string) => {
  const Fa6Icon = (Fa6Icons as { [key: string]: React.ComponentType })[name];
  if (!Fa6Icon) {
    console.log("L'icône suivant n'a pas été trouvé :", name);
    return returnError();
  };

  return <Fa6Icon />;
};

const customBsIcons = (name: string) => {
  const BsIcon = (BsIcons as { [key: string]: React.ComponentType })[name];
  if (!BsIcon) {
    console.log("L'icône suivant n'a pas été trouvé :", name);
    return returnError();
  };

  return <BsIcon />;
};

export { customFa6Icons, customBsIcons };