let s1 = 10;
let s2 = 14;

function sides(literal, ...expressions) {
    const [a,p] = expressions;
    const root = Math.sqrt((p**2)-(16*a));
    const s1 = ((p+root)/4);
    const s2 = ((p-root)/4);
    return [s2,s1];
}

console.log(sides`The area is: ${s1 * s2}.
The perimeter is: ${2 * (s1 + s2)}.`)