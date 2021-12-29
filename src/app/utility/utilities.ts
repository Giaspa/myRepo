export class Utilities {

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
}
