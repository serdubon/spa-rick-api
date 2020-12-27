//Poder extrer el id de un url #/1/ poder sacar ese 1

const getHash = () => 
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;