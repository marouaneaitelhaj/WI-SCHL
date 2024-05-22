export type Tuser = {
  email: string;
  password: string;
  name: string;
  image: string;
  nom_fr: string;
  nom_ar: string;
  prenom_fr: string;
  prenom_ar: string;
  cin: string;
  cne: string;
  code_inscription: string;
  date_naissance: string;
  lieu_naissance_fr: string;
  lieu_naissance_ar: string;
  adresse_fr: string;
  adresse_ar: string;
  sexe: string;
  tele: string;
  img: string;
  fillier: string;
};

export type eventsType = {
  [key: string]: string;
};

export type Tpassword = {
  motPassActuel: string;
  nvMotPass: string;
  nvMotPass_confirmation: string;
};

export type Tevent = {
  color: string;
  end: string;
  id: string;
  textColor: string;
  id_reserv: string;
  start: string;
  title: string;
  type: number;
};

export type Tseance = {
  id: string;
  code: string;
  class_id: string;
  module_id: string;
  element_id: string;
  prof_id: string;
  filiere_id: string;
  salle_id: string;
  section_id: string;
  group_id: string;
  type_id: string;
  niveau: string;
  semestre_id: string;
  annee_universitaire_id: string;
  etablissement_id: string;
  date: string;
  mois: string;
  heure_d: string;
  heure_f: string;
  statut: string;
  notif: string;
  id_created: string;
  id_deleted: string;
  id_updated: string;
  statut_absence: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  salle: Tsalle;
  classe: Tclasse;
  element: Telement;
  seance_element: Tseance_element;
  prof: Tprof;
};

export type Tsalle = {
  id: string;
  code: string;
  bloc: string;
  etablissement_id: string;
  created_at: string;
  updated_at: string;
};

export type Telement = {
  id: string;
  code: string;
  libelle_fr: string;
  libelle_ar: string;
  coefficient: string;
  coefficient_pourcentage: string;
  module_id: string;
  code_module: string;
  couleur: string;
  statut: string;
  created_at: string;
  updated_at: string;
};

export type Tprof = {
  id: string;
  cin: string;
  personnel_departements: string;
  numero_somme: string;
  nom_ar: string;
  nom_fr: string;
  prenom_ar: string;
  prenom_fr: string;
  email: string;
  email_second: string;
  telephone: string;
  type_personnel: string;
  vacataire: string;
  sexe: string;
  situation_familiale: string;
  nombre_enfant: string;
  lettre_ministerielle: string;
  lieu_naissance_fr: string;
  lieu_naissance_ar: string;
  adresse_ar: string;
  adresse_fr: string;
  fiche_poste: string;
  statut_infos: string;
  statut: string;
  image: string;
  created_at: string;
  updated_at: string;
  date_naissance: string;
  date_entre: string;
  nationalite: string;
  autre_nationalite: string;
};

export type Tclasse = {
  id: string;
  libelle_fr: string;
  semestre_id: string;
  niveau_id: string;
  statut: string;
  etablissement_id: string;
  annee_universitaire_id: string;
  updated_at: string;
  created_at: string;
  etudiant_classes: Tetudiant_classes[];
};

export type Tetudiant_classes = {
  id: string;
  filiere_id: string;
  classe_id: string;
  section: string;
  annee_universitaire_id: string;
  etablissement_id: string;
  created_at: string;
  updated_at: string;
};

export type Tseance_element = {
  id: string;
  seance_id: string;
  element_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  element: Telement;
  prof: Tprof;
};

export type Tannonce = {
  id: string;
  annonce_body: string;
  titre: string;
  annonce_title: string;
  objet: string;
  lien : string;
  image: string;
  date: string;
  piece_jointe: string;
};

export type TDemande = {
  num_dem: string;
  anneUniversitaire: string;
  etat_dem: string;
  date_dem: string;
  notes: string;
  inscription_id: string;
  file : string;
};


export type Tfiliere = {
  id: string;
  code: string;
  libelle_fr: string;
  pole_id: string;
};



export type Element = {
  libelle_fr: string;
  coefficient: string;
  note_n: number | null;
  note_r: number | null;
};

export type TModule = {
  id: number;
  libelle_fr: string;
  resultat_n: number | null;
  resultat_r: number | null;
  decision_g: string | null;
  elements: Element[];
};

type Semester = {
  modules: TModule[][];
};

export type StudentRecord = {
  [semesterName: string]: Semester;
};