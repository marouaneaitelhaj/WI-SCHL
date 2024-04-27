export type Tuser = {
  email: string;
  password: string;
  name : string;
  image : string;
  nom_fr : string;
  nom_ar : string;
  prenom_fr : string;
  prenom_ar : string;
  cin : string;
  cne : string;
  code_inscription : string;
  date_naissance : string;
  lieu_naissance_fr : string;
  lieu_naissance_ar : string;
  adresse_fr : string;
  adresse_ar : string;
  sexe : string;
  tele : string;
  img : string;
};

export type  Tpassword = {
  password : string;
  newPassword : string;
  confirmNewPassword : string;
}
