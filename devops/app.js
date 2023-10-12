export class Main{
    ligneToutesEnBas(number) {
        let nombreMin
        if (number % 5 === 0){
            nombreMin = number/5;
        }else{
            if ( number % 5 ===1){
                return "Lampe 1 en bas jaune allumé";
            };
            if (number % 5 === 2){
                return "lampe 2 en bas jaune allumé";
            }
        };
    }
}
