
class character{
    constructor(name,pv){
        this.name=name
        this.pv=pv 
      
    }
    traject(song){
        console.log(song) 
        let ChangementdeTaxi=0
        let Redlights=0 
        while(Redlights<31&&this.pv>0){ 

            let Mradio=Math.floor(Math.random()*5)

            console.log(song[Mradio])
            
            console.log(Redlights)
           

        if(song[Mradio]=== song[0]){
            this.pv-- 
            ChangementdeTaxi++
            console.log("Wejdene a attaqué les oreilles John")
            
            
           
            console.log("John change de taxi, il en prend un nouveau, c'est le "+ ChangementdeTaxi+"ème.")
            console.log("il reste "+this.pv+ " de santé mentale à John!")
           }
           
        
        if(this.pv===0){
             console.log("La tête de "+this.name+" viens d'exploser.")
            break
            
            }

        if(Redlights===31){
                console.log(this.name+" a survécu a la sirène frippé!!!")  
             console.log("Il peut rentrer chez lui vivant.")
                break
            }
            
            
           (Redlights++)
          
    
       }
            
    }
}
let John = new character("John",10)
let song=["Wejdene-Anissa","Imagine","One","Bohemian Rhapsody","Crazy in Love"]
John.traject(song)






