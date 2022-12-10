

var fruits = ["apple", "strawberry", "banana", "orange", "mango"] ;



// var isString =fruits.filter(function(item)
// {
//     return (item === String); 
// })

// console.log(isString);


// var sumarr=fruits.reduce(function(sum,item)
// {
//     console.log("sum: ",sum)
//     return sum+item
// },'a');

// console.log(sumarr);


var start=fruits.filter(function(item)
{
    return (item[0] == 'b' || item[0] == 's') ;
})
console.log(start);






