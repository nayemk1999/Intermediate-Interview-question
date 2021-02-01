const students = [
    {Id :71, Name : "Omor", age : 20},
    {Id :81, Name : "Sagir", age : 25},
    {Id :91, Name : "Rahim", age : 35}
];
const output = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const result =  element.age;
    output.push(result);
}
// console.log(output);
const result2 = students.map(x => x.Name)
console.log(result2);