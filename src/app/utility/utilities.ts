export class Utilities {


  static readonly CELL_PORTRAIT = 'cell_portrait';
  static readonly CELL_LANDSCAPE = 'cell_landscape';
  static readonly IPAD_PORTRAIT = 'ipad_portrait';
  static readonly IPAD_LANDSCAPE = 'ipad_landscape';
  static readonly DESKTOP = 'desktop';

  static getRango(rango: number) {
    switch (rango) {
      case 1:
        return "Cliath";
      case 2:
        return "Fostern";
      case 3:
        return "Adren";
      case 4:
        return "Athro";
      case 5:
        return "Elder";
      case 6:
        return "Grand elder";
      default:
        return "Cucciolo"
    }
  }

  static getFirstEmptyId(dataSet: []){
    var id;
    if (dataSet) {
      for (let data of dataSet) {
        if (!data) {
          id = dataSet.indexOf(data);
          break;
        }
      }
    }
    return id;
  }

  static getFirstName(nomeCompleto: string){
    var indexPrimoSpazioVuoto = nomeCompleto.indexOf(" ");
    return indexPrimoSpazioVuoto==-1? nomeCompleto : nomeCompleto.substring(0, nomeCompleto.indexOf(" "));
  }

  static getScreenSize(){
    const height = window.screen.availHeight;
    const width = window.screen.availWidth;

    if (width <= 414) {
      return Utilities.CELL_PORTRAIT
    } else if (width >= 700 && width <= 1024) {
      return Utilities.IPAD_PORTRAIT
    } else {
      return Utilities.DESKTOP
    }
  }

  static getDeviceOrientation(){
    if (window.matchMedia("(orientation: portrait)").matches) {
      // you're in PORTRAIT mode
      console.log("##### PORTRAIT #####")
   }else if (window.matchMedia("(orientation: landscape)").matches) {
      // you're in LANDSCAPE mode
      console.log("##### LANDSCAPE #####")

   }
  }
}
