export class Main{
    ligneToutesEnBas(number) {
        let nombreMin
        if (number % 5 === 0){
            nombreMin = number/5;
            return "Aucune lampe allumé";
        }else{
            if ( number % 5 ===1){
                return "Lampe 1 en bas jaune allumé";
            };
            if (number % 5 === 2){
                return "Lampe 1 et 2 en bas jaune allumé";
            }
            if (number % 5 === 3){
                return "Lampe 1, 2 et 3 en bas jaune allumé";
            }
            if (number % 5 === 4){
                return "Les 4 lampes en bas jaune allumé";
            }
        };
    }
}
