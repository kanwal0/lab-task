// task 01

let flower={
    name="rose",
    color="red",
    height=5.2


};
console.log("flowers name is "+ flower.name);
console.log("flower color is"+ flower.color);
console.log("flower height is"+ flower.height);

// task 02 
// Deleting color

let flower={
    name="rose",
    color="red",
    height=5.2
};
console.log(flower);
delete flower.color;
console.log(flower);


// task 03
var library=[
    {
        author:'bill gates',
        title:'the road ahead',
        readingstattus:true
    },
    {
        author:'steve jobs',
        title:'whalter lsaacson',
        readingstatus:true

    },
    {
        author:'suzanne collins',
        title:'mockingjay:the final book of the hunger games',
        readingstatus:false

    }
];
for(var i=0; i<library.length; i++)
{
    var book "'" + library[i].title +'by' + library[i].author +"'";
    if (library[i].readingstatus){
        console.log("DONE with reading this book"+ book);

    } else 
    {
        console.log("havent started yet "+book);


    }

}


// task 04 
function sandwichcalculator(bread,cheese){
    var count=0;
    while(cheese>0 && bread>1){
        count++;

    }
    return count;

}
letbread=50;
let cheese=6;
var  sandwiches=sandwitchcalculator (bread,cheese);
console

//  task 05
function average (calculator)
{
    console.log(argument);
    var sum=0;
    for(var i=0; i<arguments.length; i++){
        sum+=argument[i];

    }
    let average=sum/calculator.lenght;
    let max=math.max(calculator);
    arr[0]=average;
    arr[1]=max;
    console.log(max);

    return arr;


}
console.log 



