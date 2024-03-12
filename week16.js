//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

function makeOne() {
	const paragraph = document.getElementById('practicum');
	paragraph.textContent = document.forms.length;
}

document.querySelector('.b-1').addEventListener('click', makeOne);

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeTwo() {
	const paragraphTwo = document.getElementById('practicum2');
	paragraphTwo.textContent = document.forms[0].getAttribute('name');
}

document.querySelector('.b-2').addEventListener('click', makeTwo);

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeThree() {
	const paragraphThree = document.getElementById('practicum3');
	const lastFormIndex = document.forms.length - 1;
	paragraphThree.textContent = document.forms[lastFormIndex].getAttribute('name');
}

document.querySelector('.b-3').addEventListener('click', makeThree);

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

function makeFour() {
	const paragraphFour = document.getElementById('practicum4');
	const formNames = [];
	const allForms = document.forms;
	
	for(let i = 0; i < allForms.length; i++){
		const nameOfForm = allForms[i].getAttribute('name');
		formNames.push(nameOfForm);
	}

	//почему не полуичлось с помощью  forEach?
	// allForms.forEach(function(form){
	// 	const nameOfForm = form.getAttribute('name');
	// 	formNames.push(nameOfForm);
	// });

	paragraphFour.textContent = formNames.join(', ');
}

document.querySelector('.b-4').addEventListener('click', makeFour);

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

function makeFive() {
	const paragraphFive = document.getElementById('practicum5');
	paragraphFive.textContent = document.forms.formThree.elements.length;
}

document.querySelector('.b-5').addEventListener('click', makeFive);

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

function makeSix() {
	const paragraphSix = document.getElementById('practicum6');
	paragraphSix.textContent = document.forms.formTwo.elements.length;
}

document.querySelector('.b-6').addEventListener('click', makeSix);

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

function makeSeven() {
	const paragraphSeven = document.getElementById('practicum7');
	
	const elementsList = [];
	const formElements = document.forms.formTwo.elements;
	for(let i = 0; i < formElements.length; i++){
		const nameOfElement = formElements[i].getAttribute('name');
		elementsList.push(nameOfElement);
	}

	paragraphSeven.textContent = elementsList.join(', ');
}

document.querySelector('.b-7').addEventListener('click', makeSeven);

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

function makeEight() {
	const paragraphEight = document.getElementById('practicum8');
	
	const elementsList = [];
	const formElements = document.forms.formOne.elements;
	for(let i = 0; i < formElements.length; i++){
		const nameOfElement = formElements[i].getAttribute('name');
		elementsList.push(nameOfElement);
	}

	paragraphEight.textContent = elementsList.join(', ');
}

document.querySelector('.b-8').addEventListener('click', makeEight);

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

function makeNine() {
	const paragraphNine = document.getElementById('practicum9');
	
	const elementsList = [];
	const formElements = document.forms.formThree.elements;
	for(let i = 0; i < formElements.length; i++){
		const nameOfElement = formElements[i].getAttribute('name');
		elementsList.push(nameOfElement);
	}

	paragraphNine.textContent = elementsList.join(', ');
}

document.querySelector('.b-9').addEventListener('click', makeNine);

//Задание 10
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

function makeTen() {
	const paragraphTen = document.getElementById('practicum10');
	//возможно имелась в виду 4 форма, тк в 3 нет радиокнопки?
	paragraphTen.textContent = document.forms.lastForm.elements.fourthName.value;
}

document.querySelector('.b-10').addEventListener('click', makeTen);

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

function makeEleven() {
	const paragraphEleven = document.getElementById('practicum11');

	const firstForm = document.forms.formOne;
	const selectElement = firstForm.elements.firstSelect;
	const optionsValues = [];
	for(let i = 0; i < selectElement.length; i++){
		const optionValue = selectElement[i].value;
		optionsValues.push(optionValue);
	}

	paragraphEleven.textContent = optionsValues.join(', ');
}

document.querySelector('.b-11').addEventListener('click', makeEleven);

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

function makeTwelve() {
	const paragraphTwelve = document.getElementById('practicum12');

	const formElements = document.forms.formTwo.elements;
	const checkboxIds = [];
	for (let i = 0; i < formElements.length; i++){
		if(formElements[i].type === 'checkbox'){
			const id = formElements[i].id;
			checkboxIds.push(id);
		}
	}

	paragraphTwelve.textContent = checkboxIds.join(', ');
}

document.querySelector('.b-12').addEventListener('click', makeTwelve);

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

function checkButton(e) {
	e.preventDefault();

	const paragraphThirteen = document.getElementById('practicum13');

	const radio = document.forms.lastForm.elements.fourthName;
	if(radio.checked === true){
		paragraphThirteen.textContent = 'Кнопка выбрана';
	} else {
		paragraphThirteen.textContent = 'Кнопка не выбрана';
	}

}

document.querySelector('.b-13').addEventListener('click', checkButton);

//Задание 14
//Выведите на экран название выбранного варианта в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным любой вариант формы
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Напишите проверку, которая используя условный оператор (if) будет выводить в элемент paragraphFourteen название выбранного варианта

function checkOption() {
	const paragraphFourteen = document.getElementById('practicum14');

	const selectElement = document.forms.formOne.elements.firstSelect;

	for(let i = 0; i < selectElement.length; i++){
		if(selectElement[i].selected){
			paragraphFourteen.textContent = selectElement[i].value;
		}
	}
}

document.querySelector('.b-14').addEventListener('click', checkOption);

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию 
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
	const selectElement = document.forms.formOne.elements.firstSelect;
	selectElement.selectedIndex = 2;
}

makeFifteen();

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
	const thirdCheckbox = document.forms.formTwo.checkboxThree;
	thirdCheckbox.checked = true;
}

makeSixteen();

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную formOne
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

const formOne = document.forms.formOne;

formOne.addEventListener('submit', function (event) {
	event.preventDefault();

	const userName = formOne.elements.firstName;
	const userEmail = formOne.elements.firstEmail;
	const errorMessage = document.getElementById('errorMessage');

	if(userName.value === ''){
		errorMessage.textContent = 'Заполните имя';
	} 

	if(userEmail.value === ''){
		errorMessage.textContent = 'Заполните почту';
	}

});

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener('submit', function(event){
	event.preventDefault();
	formOne.reset();
})

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие change для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

const selectElement = document.forms.formOne.elements.firstSelect;

selectElement.addEventListener('change', function(){
	if(selectElement.options[selectElement.selectedIndex].value === "Опция 1"){
		document.body.style.backgroundColor = 'red';
	} 
	if(selectElement.options[selectElement.selectedIndex].value === "Опция 2"){
		document.body.style.backgroundColor = 'green';
	}
	if(selectElement.options[selectElement.selectedIndex].value === "Опция 3"){
		document.body.style.backgroundColor = 'blue';
	}
});

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие input для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp: /^[^\s@]+@[^\s@]+.[^\s@]+$/), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

const emailInput = document.forms.formOne.elements.firstEmail;
const errorMessage = document.getElementById('errorMessage');

emailInput.addEventListener('input', function(){
	const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
	if(!emailRegex.test(emailInput.value)){
		errorMessage.textContent = 'Неправильный формат email';
		emailInput.classList.add('error');
	} 
})

//Задание 21
//При отправке второй формы выполните проверку всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

document.forms.formTwo.addEventListener('submit', function (evt) {
	evt.preventDefault();

	const checkbox1 = document.getElementById('checkbox1').checked;
	const checkbox2 = document.getElementById('checkbox2').checked;
	const checkbox3 = document.getElementById('checkbox3').checked;

	if(!checkbox1 && !checkbox2 && !checkbox3){
		const errorMessage = document.getElementById('result21');
		errorMessage.textContent = 'Выберите хотя бы 1 чекбокс';
	}
});

//Задание 22
//При отправке третьей формы выполните проверку поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".

const formThree = document.forms.formThree;

formThree.addEventListener('submit', function (event){
	console.log(event);
	event.preventDefault;
	const nameInput = document.forms.formThree.elements.thirdName;
	const errorMessage = document.getElementById('result22');

	if(nameInput.value = ''){
		errorMessage.textContent = 'Введите имя';
	}
})
//не могу понять, почему не получается

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled

const formFour = document.forms.lastForm;
const registerRadio = document.forms.lastForm.elements.fourthName;  

registerRadio.addEventListener('change', function(){
	const submitBtn = document.forms.lastForm.elements.fourthButton;

	if(registerRadio.checked === false){
		submitBtn.disabled;
	} else{
		submitBtn.disabled = false;
	}
})
//получилось сделать, только если добавить атрибут disabled в html (но при этом нарушается работа функции из задания 13)

//Задание 24
//Найдите все поля ввода на странице (querySelectorAll) и установите им атрибут "placeholder" со значением "Введите данные" (используйте метод forEach).

document.querySelector('.b-24').addEventListener('click', function () {
	const allInputs = document.querySelectorAll('input');
	allInputs.forEach((input)=> {
		input.setAttribute('placeholder', 'Введите данные');
	})
});

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

document.querySelector('.b-25').addEventListener('click', function () {
	const inputs = document.querySelectorAll('input');

	inputs.forEach(function (input) {
		input.addEventListener('focus', function(){
			input.classList.toggle('focus');
		});
	});
});
//?

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector('.b-26').addEventListener('click', function () {
	const message = document.getElementById('result26');
	const nameThree = formThree.elements.thirdName;
	message.textContent = nameThree.placeholder;
});

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll('.secondForm input');

formTwoInputs.forEach(function (input) {
	input.addEventListener('input', function () {
		const message = document.getElementById('result27');
		message.textContent = 'Изменение внесено';
	});
});

//Задание 28
//При выборе любой из опций выпадающего списка в третьей форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"

const selectFormThree = document.getElementById('firstSelect');
//select находится в 1 форме

selectFormThree.addEventListener('change', function () {
	const message = document.getElementById('result28');
	message.textContent = 'Опция выбрана';
});
