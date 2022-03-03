
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"

    // let test = []
    // for(let i=0;i<array.length;i++){ --no sirve xD
    //     if(array[i] > 9){
    //         let aux = []
    //         aux.push(array[i])
    //         console.log(aux)
    //     }else{
    //         test.push(array[i])
    //     }
    // }
    // return test

    let newArray = [];
    for(let i=0;i<array.length;i++){
        if(array[i]<10){
            newArray.unshift(array[i]);
        }
    }
    return newArray;

    // [1,    4 ,  24 , 10,    8]
    // i[0] i[1] i[2]  i[3]  i[4]
//-------------------------------------------------------------------------
// let newArray = [];
// for(let i=array.length - 1;i>=0;i--){
//     if(array[i]<10)
//     newArray.push(array[i]);
// }
// return newArray;
//-------------------------------------------------------------------------
// let newArray = [];
// array.forEach(element => {
//     if(element < 10) newArray.unshift(element);
// });
// return newArray;
//-------------------------------------------------------------------------
// let newArray = [];
// for(let element of array){
//     if(element <10) newArray.unshift(element);
// }
// return newArray;

};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
    let nComun = []
    for(let i=0;i<array1.length;i++){
        for(j=0;j<array2.length;j++){
            if(array1[i] === array2[j]){
                nComun.push(array1[i])
            }else{
                var min = array1[0];
                var min2 = array2[0]
                if(array1[i] !== array2[j]){
                    for(i=1;i<array1.length;i++){
                        for(j=1;j<array2.length;j++){
                            if(array1[i]<min){
                               min=array1[i] 
                            }
                            if(array2[j]<min2){
                                min2 = array2[i]
                            }
                            
                            if(min > min2){
                                return min2
                            }else{
                                return min
                            }
                        }
                    }
                }
            }
        }
    }
    return nComun
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};