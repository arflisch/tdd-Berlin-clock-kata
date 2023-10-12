import { Main } from "../app.js";

describe("Ligne simple min", function() {
    let main = new Main();
    //let dateMinute = new Date().getMinutes;
    it("doit return 1 quand je donne 1", function(){
        
        let result = main.ligneToutesEnBas(5);

        expect(result).toBe(0);
    })
    it("doit return 1 quand je donne 1", function(){
        
        let result = main.ligneToutesEnBas(1);

        expect(result).toBe(1);
    })
    it("doit return 1 quand je donne 1", function(){
        
        let result = main.ligneToutesEnBas(2);

        expect(result).toBe(2);
    })
    it("doit return 1 quand je donne 1", function(){
        
        let result = main.ligneToutesEnBas(3);

        expect(result).toBe(3);
    })
    it("doit return 1 quand je donne 1", function(){
        
        let result = main.ligneToutesEnBas(4);

        expect(result).toBe(4);
    })
    /*it("doit return 2 quand je donne 2", function(){
        let result = main.ligneToutesEnBas(dateMinute);

        expect(result).toBe("Lampe 1 et 2 en bas jaune allumé");
    });*/
    
})