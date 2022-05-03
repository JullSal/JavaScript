// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(string) { 

    const glas = string.match(/[aeiouy]/gi).length;
    const soglas = string.match(/[bcdfghjklmnpqrstvwzx]/gi).length;
    console.log('Слово ' + string + ' состоит из ' + glas + ' гласных букв и ' + soglas + ' согласных букв');
    ;
}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')
