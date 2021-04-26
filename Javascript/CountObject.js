let objects = [
    {x:1, y:1}, 
    {x:2, y:3},
    {x:3, y:3},
    {x:3, y:4},
    {x:4, y:5}
]

/* function obj(objects) {
    return objects.filter(function(o) {return o.x == o.y}).length;   
} */

function obj(objects) {
    let count = 0;
    for(let o of objects) {
        count += (o.x == o.y);
    }
    return count;    
}

console.log(obj(objects));