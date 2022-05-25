multiplicando:
for (let i = 0; i < 2;) {
    i++;
    multiplicador:
    for (let g = 0; g < 10;) {
        g++;
        // if(g%2==0){
        //     console.log(`${i} X ${g} = ${i * g}`);
        //     continue multiplicando;
        // }
        document.body.insertAdjacentHTML("beforeend", `
            ${i} X ${g} = ${i * g} <br>
        `);
    }
    document.body.insertAdjacentHTML("beforeend", "<hr>");
}








// let array = ["Miguel", "Oscar", "Jose"];
// for (let i = 0; i < array.length; i++) {
//     document.body.insertAdjacentHTML("beforeend", "<br>"+array[i]);
// }













// bandera = true;
// let fn = () => {
//     bandera = false; 
//     return '';
// };
// let i = (()=>{
//     let i = 1;
//     return () => i++;
// })();
// for(null; bandera;){
//     let I = i();
//     document.body.append((I<=10) ? I : fn());
// }


