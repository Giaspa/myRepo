import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { equalTo, getDatabase, orderByChild, query, ref } from "firebase/database";
import { list, listVal, objectVal, set } from '@angular/fire/database';
import { Root } from './root.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(af: AngularFireDatabase) { }

  db = getDatabase();
  root = '/personaggi/0/equipaggiamento'
  dbRef = ref(this.db, this.root)

  test() {
    //ritorna una lista a partire dalla root
    // return objectVal(query(ref(this.db, '/personaggi')))
    // return objectVal(query(ref(this.db, '/personaggi'), orderByChild('pgId'), equalTo(2)))
    // return list(query(ref(this.db, '/personaggi'),orderByChild('pgId'), equalTo(2)))
  }

  //Utility------------------------------------------------
  findPgKey(pgId: number) {
    return list(query(ref(this.db, Root.PGs), orderByChild('pgId'), equalTo(pgId)))
  }

  findById(id: number, key: string, root: string) {
    return objectVal(query(ref(this.db, root), orderByChild(key), equalTo(id)))
  }


  //READ---------------------------------------------------
  //login
  getLogin(email: string, password: string){
    var login = email+"_"+password;
    return objectVal(query(ref(this.db, Root.USER), orderByChild('auth/login'), equalTo(login)))
  }

  //ritorna una lista degli utenti
  getUsersList(){
    return objectVal(query(ref(this.db, Root.USER)))
  }

  //ritorna un singolo utente
  getUser(userId: number){
    return objectVal(query(ref(this.db, Root.USER + '/' + userId)))
  }

  getUserByEmail(email:string){
    return objectVal(query(ref(this.db, Root.USER), orderByChild('auth/email'), equalTo(email)))
  }

  //ritorna una lista iterabile dei personaggi di un utente
  getPersonaggiList(userId: number) {
    console.log("path: ", Root.USER + '/'+ userId + Root.PGs)
    return listVal(query(ref(this.db, Root.USER + '/'+ userId + Root.PGs)))
  }

  //ritorna un singolo personaggio di un utente
  getPersonaggio(userId: number, pgId: number) {
    return objectVal(query(ref(this.db, Root.USER + '/'+ userId + Root.PGs + '/' + pgId)))
  }


  //CREATE-----------------------------
  //crea un nuovo utente
  setUser(userId: any, userEntity: {}) {
    set(ref(this.db, Root.USER + '/' + userId + Root.AUTH), userEntity);
  }

  //crea un nuovo pg per un utente esistente
  setPg(userId: any, pgId: any, pgEntity: {}) {
    set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId), pgEntity);
  }

  //crea o modifica un dono per un pg esistente di un utente esistente
  setGift(userId: any, pgId: any, giftId: any, giftEntity: {} | null) {
    set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + Root.DONI + '/' + giftId), giftEntity);
  }

  setMerit(userId: any, pgId: any, meritId: any, meritEntity: {}) {
    set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + Root.MERITS + '/' + meritId), meritEntity);
  }

  setFlaw(userId: any, pgId: any, flawId: any, flawEntity: {}) {
    set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + Root.FLAWS + '/' + flawId), flawEntity);
  }

  setScar(userId: any, pgId: any, scarId: any, scarEntity: {}) {
    set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + Root.SCAR + '/' + scarId), scarEntity);
  }

  setEquip(userId: any, pgId: any, equipId: any, equipEntity: {}) {
    set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + Root.EQUIP + '/' + equipId), equipEntity);
  }

  //UPDATE----------------------------
  updateUserAuth(userId: any, parameter: string, value: any) {
    if (Root.auth.includes(parameter)) {
        set(ref(this.db, Root.USER + '/' + userId + Root.AUTH + '/' + parameter), value);
    } else {
      window.alert("Il parametro inserito non è valido per l'Autenticazione dell'Utente")
    }
  }

  updatePgBio(userId: any, pgId: any, parameter: string, value: any) {
    if (Root.pgBio.includes(parameter)) {
      if (parameter === "rango" && isNaN(value)) {
        window.alert("Il valore passato a Rango deve essere un numero")
      } else {
        set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + '/' + parameter), value);
      }
    } else {
      window.alert("Il parametro inserito non è valido per la Bio del Pg")
    }
  }

  updatePgAttribute(userId: any, pgId: any, parameter: string, value: any) {
    if (Root.attributi.includes(parameter)) {
      set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + '/' + parameter), value);
    } else {
      window.alert("Il parametro inserito non è un Attributo")
    }
  }

  updatePgAbility(userId: any, pgId: any, parameter: string, value: any) {
    if (Root.abilita.includes(parameter)) {
      set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + '/' + parameter), value);
    } else {
      window.alert("Il parametro inserito non è una Abilità")
    }
  }

  updatePgBackground(userId: any, pgId: any, parameter: string, value: any) {
    if (Root.background.includes(parameter)) {
      set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + '/' + parameter), value);
    } else {
      window.alert("Il parametro inserito non è un Background")
    }
  }

  updatePgFGV(userId: any, pgId: any, parameter: string, value: any) {
    if (Root.FGV.includes(parameter)) {
      set(ref(this.db, Root.USER + '/' + userId + Root.PGs + '/' + pgId + '/' + parameter), value);
    } else {
      window.alert("Il parametro inserito non è ne Gnosi, ne Furia, ne Volontà")
    }
  }


  //DELETE--------------------------------------------------------------------
  deleteUser(userId: any){
    this.setUser(userId, {});
  }

  deletePg(userId: any, pgId: any){
    this.setPg(userId, pgId, {});
  }

  deleteGift(userId: any, pgId: any, giftId: any){
    this.setGift(userId, pgId, giftId, null)
  }

  deleteMerit(userId: any, pgId: any, meritId: any){
    this.setMerit(userId, pgId, meritId, {})
  }

  deleteFlaw(userId: any, pgId: any, flawId: any){
    this.setFlaw(userId, pgId, flawId, {})
  }

  deleteScar(userId: any, pgId: any, scarId: any){
    this.setScar(userId, pgId, scarId, {})
  }

  deleteEquip(userId: any, pgId: any, equipId: any){
    this.setEquip(userId, pgId, equipId, {})
  }
}
