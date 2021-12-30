export class Root {

  static readonly USER = 'users';
  static readonly AUTH = '/auth';
  static readonly PGs = '/personaggi';
  static readonly DONI = '/doni';
  static readonly EQUIP = '/equipaggiamento';
  static readonly MERITS = '/pregi';
  static readonly FLAWS = '/difetti';
  static readonly SCAR = '/cicatriciDaBattaglia';

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
}
