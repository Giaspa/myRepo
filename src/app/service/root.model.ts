import { SheetDataSet } from "../model/sheetDataSet.model";

export class Root {

  static readonly USER = 'users';
  static readonly AUTH = '/auth';
  static readonly PGs = '/personaggi';
  static readonly DONI = '/doni';
  static readonly EQUIP = '/equipaggiamento';
  static readonly MERITS = '/pregi';
  static readonly FLAWS = '/difetti';
  static readonly SCAR = '/cicatriciDaBattaglia';
  static readonly SESSION_USER = 'user';
  static readonly SESSION_PG = 'character';

  //inserisce un utente passato in sessione
  static setSessionUser(user: any){
    sessionStorage.setItem(this.SESSION_USER, JSON.stringify(user))
  }

  //legge l'utente in sessione
  static getSessionUser(){
    var user = sessionStorage.getItem(this.SESSION_USER)
    return JSON.parse(user? user : '')
  }

  //rimuove l'utente dalla sessione
  static removeSessionUser(){
    this.removeSessionPg();
    sessionStorage.removeItem(this.SESSION_USER)
  }

  //inserisce un personaggio passato in sessione
  static setSessionPg(pg: any){
    sessionStorage.setItem(this.SESSION_PG, JSON.stringify(pg))
  }

  //legge il personaggio in sessione
  static getSessionPg(){
    var pg = sessionStorage.getItem(this.SESSION_PG)
    return pg ? JSON.parse(pg): null
  }

  //rimuove l'personaggio dalla sessione
  static removeSessionPg(){
    sessionStorage.removeItem(this.SESSION_PG)
  }

  static userEntity(id: number) {
    return {
        "id": id,
        "nome": "Gianluca",
        "cognome": "Spadazzi",
        "email": "spadazzi.gianluca@gmail.com",
        "password": "admin_123",
        "login": "spadazzi.gianluca@gmail.com_admin_123"
    }
  }

  static pgEntity(id: number) {
    return {
      "pgId": id,
      "nomeCompleto": "Tatarus Iocone",
      "rango": 0,
      "razza": "Homid",
      "auspicio": "Arhoun",
      "tribu": null,
      "branco": "Voci del Basileus",
      "totemBranco": "Minerva",
      "profilo": "Giullare casuale",
      "forza": 1,
      "destrezza": 1,
      "costituzione": 1,
      "carisma": 1,
      "persuasione": 1,
      "aspetto": 1,
      "percezione": 1,
      "intelligenza": 1,
      "prontezza": 1,
      "atletica": 0,
      "autorita": 0,
      "bassifondi": 0,
      "empatia": 0,
      "espressivita": 0,
      "intimidire": 0,
      "istintoPrimordiale": 0,
      "rissa": 0,
      "sestoSenso": 0,
      "sotterfugio": 0,
      "affinitaAnimale": 0,
      "arceria": 0,
      "armiDaMischia": 0,
      "cavalcare": 0,
      "criminalita": 0,
      "espressioneArtistica": 0,
      "furtivita": 0,
      "galateo": 0,
      "manualita": 0,
      "sopravvivenza": 0,
      "accademiche": 0,
      "enigmi": 0,
      "investigare": 0,
      "legge": 0,
      "linguistica": 0,
      "medicina": 0,
      "occulto": 0,
      "rituali": 0,
      "saggezzaDellaTerra": 0,
      "scienza": 0,
      "alleati": null,
      "antenati": null,
      "contatti": null,
      "destino": null,
      "feticci": null,
      "kinfolk": null,
      "mentore": null,
      "networkSpirituale": null,
      "numeTutelare": null,
      "pesoPolitico": null,
      "razzaPura": null,
      "retaggioSpirituale": null,
      "risorse": null,
      "riti": null,
      "territorioDiCaccia": null,
      "toccatoDalWyld": null,
      "toccatoDallaWeaver": null,
      "toccatoDalWyrm": null,
      "totem": 1,
      "doni": [],
      "furia": 0,
      "gnosi": 0,
      "volonta": 0,
      "pregi": [],
      "difetti": [],
      "cicatriciDaBattaglia": [],
      "equipaggiamento": []
    }
  }

  static giftEntity(id: number, dono: string, link: string | null) {
    return {
      "id": id,
      "dono": dono,
      "link": link
    }
  }

  static meritEntity(id: number, nome: string, note: string | null) {
    return {
      "id": id,
      "nome": nome,
      "note": note
    }
  }

  static flawEntity(id: number, nome: string, note: string | null) {
    return {
      "id": id,
      "nome": nome,
      "note": note
    }
  }

  static scarEntity(id: number, nome: string, note: string | null) {
    return {
      "id": id,
      "nome": nome,
      "note": note
    }
  }

  static equipEntity(id: number, item: string, note: string | null) {
    return {
      "id": id,
      "item": item,
      "note": note
    }
  }

  //ARRAY di riferimento
  static auth = ["cognome", "email", "nome", "password", "login"];
  static pgBio = ["nomeCompleto", "rango", "razza", "auspicio", "tribu", "branco", "totemBranco", "profilo"];
  static abilita = ["atletica", "autorita", "bassifondi", "empatia", "espressivita", "intimidire", "istintoPrimordiale", "rissa", "sestoSenso", "sotterfugio", "affinitaAnimale", "arceria", "armiDaMischia", "cavalcare", "criminalita", "espressioneArtistica", "furtivita", "galateo", "manualita", "sopravvivenza", "accademiche", "enigmi", "investigare", "legge", "linguistica", "medicina", "occulto", "rituali", "saggezzaDellaTerra", "scienza"];
  static attributi = ["forza", "destrezza", "costituzione", "carisma", "persuasione", "aspetto", "percezione", "intelligenza", "prontezza"];
  static background = ["alleati", "antenati", "contatti", "destino", "feticci", "kinfolk", "mentore", "networkSpirituale", "numeTutelare", "pesoPolitico", "razzaPura", "retaggioSpirituale", "risorse", "riti", "territorioDiCaccia", "toccatoDalWyld", "toccatoDallaWeaver", "toccatoDalWyrm", "totem"];
  static FGV = ["furia", "gnosi", "volonta"];

  //oggetti di riferimento
  static userAuth: SheetDataSet[] = [
    {key:'cognome', value:'Cognome', type:'string', min:null, max:null, mandatory: true},
    {key:'nome', value:'Nome', type:'string', min:null, max:null, mandatory: true},
    {key:'email', value:'E-mail', type:'string', min:null, max:null, mandatory: true},
    {key:'password', value:'Password', type:'string', min:null, max:null, mandatory: true},
    {key:'login', value:'Login', type:'string', min:null, max:null, mandatory: false},
  ]

  static characterBio: SheetDataSet[] = [
    {key:'nomeCompleto', value:'Personaggio', type:'string', min:null, max:null, mandatory: true},
    {key:'rango', value:'Rango', type:'rango', min:0, max:6, mandatory: true},
    {key:'razza', value:'Razza', type:'razza', min:null, max:null, mandatory: true},
    {key:'auspicio', value:'Auspicio', type:'auspicio', min:null, max:null, mandatory: true},
    {key:'tribu', value:'Tribù', type:'tribu', min:null, max:null, mandatory: true},
    {key:'branco', value:'Branco', type:'string', min:null, max:null, mandatory: false},
    {key:'totemBranco', value:'Totem di branco', type:'string', min:null, max:null, mandatory: false},
    {key:'profilo', value:'Profilo', type:'string', min:null, max:null, mandatory: true},
  ]

  static characterAttrFisici: SheetDataSet[] = [
    {key:'forza', value:'Forza', type:'number', min:1, max:5, mandatory: false},
    {key:'destrezza', value:'Destrezza', type:'number', min:1, max:5, mandatory: false},
    {key:'costituzione', value:'Costituzione', type:'number', min:1, max:5, mandatory: false},
  ]

  static characterAttrSociali: SheetDataSet[] = [
    {key:'carisma', value:'Carisma', type:'number', min:1, max:5, mandatory: false},
    {key:'persuasione', value:'Persuasione', type:'number', min:1, max:5, mandatory: false},
    {key:'aspetto', value:'Aspetto', type:'number', min:1, max:5, mandatory: false},
  ]

  static characterAttrMentali: SheetDataSet[] = [
    {key:'percezione', value:'Percezione', type:'number', min:1, max:5, mandatory: false},
    {key:'intelligenza', value:'Intelligenza', type:'number', min:1, max:5, mandatory: false},
    {key:'prontezza', value:'Prontezza', type:'number', min:1, max:5, mandatory: false},
  ]

  static characterAttributs: SheetDataSet[] = Root.characterAttrFisici.concat(Root.characterAttrSociali.concat(Root.characterAttrMentali));

  static characterAbilAttitudini: SheetDataSet[] = [
    {key:'atletica', value:'Atletica', type:'number', min:0, max:5, mandatory: false},
    {key:'autorita', value:'Autorità', type:'number', min:0, max:5, mandatory: false},
    {key:'bassifondi', value:'Bassifondi', type:'number', min:0, max:5, mandatory: false},
    {key:'empatia', value:'Empatia', type:'number', min:0, max:5, mandatory: false},
    {key:'espressivita', value:'Espressività', type:'number', min:0, max:5, mandatory: false},
    {key:'intimidire', value:'Intimidire', type:'number', min:0, max:5, mandatory: false},
    {key:'istintoPrimordiale', value:'Istinto primordiale', type:'number', min:0, max:5, mandatory: false},
    {key:'rissa', value:'Rissa', type:'number', min:0, max:5, mandatory: false},
    {key:'sestoSenso', value:'Sesto senso', type:'number', min:0, max:5, mandatory: false},
    {key:'sotterfugio', value:'Sotterfugio', type:'number', min:0, max:5, mandatory: false},
  ]

  static characterAbilCapacita: SheetDataSet[] = [
    {key:'affinitaAnimale', value:'Affinità animale', type:'number', min:0, max:5, mandatory: false},
    {key:'arceria', value:'Arceria', type:'number', min:0, max:5, mandatory: false},
    {key:'armiDaMischia', value:'Armi da mischia', type:'number', min:0, max:5, mandatory: false},
    {key:'cavalcare', value:'Cavalcare', type:'number', min:0, max:5, mandatory: false},
    {key:'criminalita', value:'Criminalità', type:'number', min:0, max:5, mandatory: false},
    {key:'espressioneArtistica', value:'Espressione artistica', type:'number', min:0, max:5, mandatory: false},
    {key:'furtivita', value:'Furtività', type:'number', min:0, max:5, mandatory: false},
    {key:'galateo', value:'Galateo', type:'number', min:0, max:5, mandatory: false},
    {key:'manualita', value:'Manualità', type:'number', min:0, max:5, mandatory: false},
    {key:'sopravvivenza', value:'Sopravvivenza', type:'number', min:0, max:5, mandatory: false},
  ]

  static characterAbilConoscenze: SheetDataSet[] = [
    {key:'accademiche', value:'Accademiche', type:'number', min:0, max:5, mandatory: false},
    {key:'enigmi', value:'Enigmi', type:'number', min:0, max:5, mandatory: false},
    {key:'investigare', value:'Investigare', type:'number', min:0, max:5, mandatory: false},
    {key:'legge', value:'Legge', type:'number', min:0, max:5, mandatory: false},
    {key:'linguistica', value:'Linguistica', type:'number', min:0, max:5, mandatory: false},
    {key:'medicina', value:'Medicina', type:'number', min:0, max:5, mandatory: false},
    {key:'occulto', value:'Occulto', type:'number', min:0, max:5, mandatory: false},
    {key:'rituali', value:'Rituali', type:'number', min:0, max:5, mandatory: false},
    {key:'saggezzaDellaTerra', value:'Saggezza della terra', type:'number', min:0, max:5, mandatory: false},
    {key:'scienza', value:'Scienza', type:'number', min:0, max:5, mandatory: false},
  ]

  static characterAbilities: SheetDataSet[] = Root.characterAbilAttitudini.concat(Root.characterAbilCapacita.concat(Root.characterAbilConoscenze));

  static characterBackgrounds: SheetDataSet[] = [
    {key:'alleati', value:'Alleati', type:'number', min:0, max:5, mandatory: false},
    {key:'antenati', value:'Antenati', type:'number', min:0, max:5, mandatory: false},
    {key:'contatti', value:'Contatti', type:'number', min:0, max:5, mandatory: false},
    {key:'destino', value:'Destino', type:'number', min:0, max:5, mandatory: false},
    {key:'feticci', value:'Feticci', type:'number', min:0, max:5, mandatory: false},
    {key:'kinfolk', value:'Kinfolk', type:'number', min:0, max:5, mandatory: false},
    {key:'mentore', value:'Mentore', type:'number', min:0, max:5, mandatory: false},
    {key:'networkSpirituale', value:'Network spirituale', type:'number', min:0, max:5, mandatory: false},
    {key:'numeTutelare', value:'Nume tutelare', type:'number', min:0, max:5, mandatory: false},
    {key:'pesoPolitico', value:'Peso politico', type:'number', min:0, max:5, mandatory: false},
    {key:'razzaPura', value:'Razza pura', type:'number', min:0, max:5, mandatory: false},
    {key:'retaggioSpirituale', value:'Retaggio spirituale', type:'number', min:0, max:5, mandatory: false},
    {key:'risorse', value:'Risorse', type:'number', min:0, max:5, mandatory: false},
    {key:'riti', value:'Riti', type:'number', min:0, max:5, mandatory: false},
    {key:'territorioDiCaccia', value:'Territorio di caccia', type:'number', min:0, max:5, mandatory: false},
    {key:'toccatoDalWyld', value:'Toccato dal Wyld', type:'number', min:0, max:5, mandatory: false},
    {key:'toccatoDallaWeaver', value:'Toccato dalla Weaver', type:'number', min:0, max:5, mandatory: false},
    {key:'toccatoDalWyrm', value:'Toccato dal Wyrm', type:'number', min:0, max:5, mandatory: false},
    {key:'totem', value:'Totem', type:'number', min:0, max:5, mandatory: false},
  ]

  static characterFGV: SheetDataSet[] = [
    {key:'furia', value:'Furia', type:'number', min:1, max:10, mandatory: false},
    {key:'gnosi', value:'Gnosi', type:'number', min:1, max:10, mandatory: false},
    {key:'volonta', value:'Volontà', type:'number', min:1, max:10, mandatory: false},
  ]
}
