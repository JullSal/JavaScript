// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
// которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

// function printSmile(stroka, numberOfRows) {
//     let n = numberOfRows
//     while (stroka = String(stroka)) {
//     console.log(stroka + numberOfRows)
//     n++
// }
// }

function printSmile(stroka, numberOfRows) {
    let result = '';
    for (let i = 1; i<=numberOfRows; i++){
        result+=stroka
        console.log(result)   
    }
}
printSmile("=^.^= ", 8)