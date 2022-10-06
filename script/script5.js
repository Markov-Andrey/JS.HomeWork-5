/*Attention! Т.к. урок посвящен функциям, 
то для удобства вывода все функции с заданиями обернуты в 
дополнительные функции "function taskN", чтобы постоянно 
не переходить между страницами HTML и Scripts5.js
*/

//Task 1
function task1 () {
	document.write(`Создаем функцию с 3-мя аргументами (number1...number3),
		в теле функции сразу же вызываем оператор return и
		возвращаем наше значение<br>
		(number1 - number2) / number3) <br><br>`)
	function numbers3(number1,number2,number3) {
		return document.write('(' + number1 + ' - ' + number2 + ') / ' + number3 + ' = ' + //запись примера текстом
		(number1 - number2) / number3) //само решение
	};
	numbers3(10,2,2);//аргументы функции
};

//Task 2
function task2 () {
	document.write(`Ситуация аналогична предыдущему заданию, однако аргумент функции один.<br>
		Переменную Х с помощью метода Math.pow возводим во 2-ю и 3-ю степень.<br>
		Полученные значения отображаем на экране.<br><br>`)
	function degree(x) {
		return document.write(`${x}<sup>2</sup> = ${Math.pow(x, 2)}<br>
			${x}<sup>3</sup> = ${Math.pow(x, 3)}<br>`)
	};
	degree(5);//аргумент функции
};

//Task 3
//Task 4
//Task 5
//Task 6
//Task 7
//Task 8
//Task 9
//Task 10
//Task 11
//Task 12
//Task 13