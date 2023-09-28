let names=[]
names.push("Vincent","Paul","Arthur")
names.splice(1,1)
let comments=["mon chouchou", "ma beauté", "mon loulou"]
console.log(comments.length)
for(let i=0; i< comments.length; i++){
    comments[i]="va à la pêche "+comments[i]
    console.log(comments[i])
}

