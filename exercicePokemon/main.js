class Pokemon{
    constructor(name,pv, atk, def, chance){
        this.name=name
        this.pv=pv
        this.atk=atk
        this.def=def
        this.chance=chance
} 
attackPokemon(Pokemon){
    Pokemon.pv-=this.atk+this.def
  

}
}

let L = new Pokemon("Lugulabre", 220, 150, 10, 0.05)

let A = new Pokemon("Arceus", 230, 130, 10, 0.10)

 console.log("Le combat commence!!!") 
 
 function isloki(F){

    G=Math.random() 
if (G<F.chance){
   return true
}
else {
    return false
}
    
 }

while(L.pv>0||A.pv>0){
if(isloki(L)===true)

L.attackPokemon(A)
    console.log("Lugulabre crache brume ténébreuse.")
if(isloki(L)!==false)
console.log("Attaque raté par Lugulabre.")

    if(A.pv<=0){
console.log("Arceus est mort")
    break

    }
     console.log(A.name,A.pv)
    
     if(isloki(A)===true)
A.attackPokemon(L)
    console.log("Arceus tire étoile de lumière.")
if(isloki(A)!==false)
console.log("Attaque raté par Arceus")

    if(L.pv<=0){
        console.log("Lugulabre est mort.")
       break   
    }
    
    console.log(L.name,L.pv)
    
   
}

console.log("Le KoMbA est Fini!")


