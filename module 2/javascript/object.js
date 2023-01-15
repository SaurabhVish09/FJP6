let obj = {};
console.log(obj);

let objsau = {
    Name: "Saurabh Vishwakarma",
    Class:"ECE",
    RollNUmber:"UE205105",
}
console.log(objsau);
let captain = {
    Name: "Steve",
    Age: 99,
    Friends:['ironman' , 'wanda' , 'howkeye', 'bucky'],
    address:{
        city:"Queens",
        country:"America",

    },
    hi:function(){
        console.log("my name is saurabh who is writing this code")
    }
}
console.log(captain);
captain.hi();
console.log(captain.Name);
console.log(captain.address);
console.log(captain.address.city);
//add key in object
captain.movies= ['ca','Endgame'];
console.log(captain);
delete captain.movies;
console.log(captain);

//second method to acess a key;;
console.log(captain.Name);
console.log(captain['Name']);
