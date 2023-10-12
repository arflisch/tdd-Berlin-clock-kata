import { Main } from "../app";

describe("Ligne simple min", function() {
    let main = new Main();

    it("doit return 1 quand je donne 1", function(){
        let dateMinute = new Date().getMinutes;


        let result = main.ligneToutesEnBaseline(dateMinute);

        expect(result).toBe("Lampe 1 en bas jaune allumé");
    })
    it("doit return 2 quand je donne 2", function(){
        let result = main.ligneToutesEnBas(dateMinute);

        expect(result).toBe("Lampe 2 en bas jaune allumé");
    });
    
})