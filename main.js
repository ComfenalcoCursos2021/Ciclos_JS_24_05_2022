let array = ["Miguel","Jose","Oscar"];
let obj = [
    {
        Profesor: "Miguel"
    },
    {
        Alumno1: "Oscar"
    },
    {
        Alumno2: "Jose"
    }
]
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for(let data of Object.values(obj)){

    document.body.insertAdjacentHTML("beforeend", `
        <b>${Object.keys(data)}</b> : ${Object.values(data)} <br>
    `);

}
document.body.insertAdjacentHTML("beforeend","<hr>");








for(let id in array){
    document.body.insertAdjacentHTML("beforeend", `
    ${id} <br>
    `);
}
document.body.insertAdjacentHTML("beforeend","<hr>");







for(let value of array){
    document.body.insertAdjacentHTML("beforeend", `
    ${value} <br>
    `);
}