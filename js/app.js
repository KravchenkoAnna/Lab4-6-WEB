$('.telegram-form').on('submit', function (event) {

    event.stopPropagation()
    event.preventDefault()

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Отправка...')
    

    data.append( 'name', 		$('[name="name"]', form).val() )
    data.append( 'group', 		$('[name="group"]', form).val() )
    data.append( 'resultss', 		$('[name="resultss"]', form).val() )
  
    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value )
            })
        }
    })

    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr()

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' )
                    }
                }, false )
            }

            return myXhr
        },
        error: function( jqXHR, textStatus ) {
            
        },
        complete: function() {
            
            console.log('Complete')
            form.reset() 
        }
    })

    return false
})

const DATA = [
	{
		questions: 'Які цикли є в JavaScript?',
		answers: [
			{
				id: '1',
				value: 'for, forMap, foreach, while',
				correct: false,
			},
			{
				id: '2',
				value: 'for, forMap, foreach, while, do while',
				correct: false,
			},
			{
				id: '3',
				value: 'for, while, do while',
				correct: true,
			},
			{
				id: '4',
				value: 'for, while, do while, foreach',
				correct: false,
			}
		]
	},

	{
		questions: 'Що таке умовний оператор?',
		answers: [
			{
				id: '5',
				value: 'Оператор порівняння значень',
				correct: true,
			},
			{
				id: '6',
				value: 'Конструкція для створення певної змінної',
				correct: false,
			},
			{
				id: '7',
				value: 'Конструкція, що виконує код кілька разів',
				correct: false,
			}
		]
	},

	{
		questions: 'Де правильно вказано виведення даних?',
		answers: [
			{
				id: '8',
				value: 'prompt("Hello")',
				correct: false,
			},
			{
				id: '9',
				value: 'write("Hello");',
				correct: false,
			},
			{
				id: '10',
				value: 'console.log("Hello");',
				correct: true,
			},
			{
				id: '11',
				value: 'documentWrite("Hello");',
				correct: false,
			},
			{
				id: '12',
				value: 'print(Hello);',
				correct: false,
			}
		]

	},

	{
		questions: 'У чому різниця між локальною та глобальною змінною?',
		answers: [
			{
				id: '13',
				value: 'Різниці немає',
				correct: false,
			},
			{
				id: '14',
				value: 'Глобальні видно всюди, локальні лише у функціях',
				correct: true,
			},
			{
				id: '15',
				value: 'Глобальні можна перевизначати, локальні не можна',
				correct: false,
			},
			{
				id: '16',
				value: 'Локальні можна перевизначати, глобальні не можна',
				correct: false,
			},
			{
				id: '17',
				value: 'Локальні видно всюди, глобальні лише у функціях',
				correct: false,
			}
		]
	},
	{
		questions: 'Де можна використовувати JavaScript?',
		answers: [
			{
				id: '18',
				value: 'Мобільні додатки',
				correct: false,
			},
			{
				id: '19',
				value: 'Серверні програми',
				correct: false,
			},
			{
				id: '20',
				value: 'Веб-програми',
				correct: false,
			},
			{
				id: '21',
				value: 'Прикладне програмне забезпечення',
				correct: false,
			},
			{
				id: '22',
				value: 'Можна у всіх перерахованих',
				correct: true,
			}
		]
	},

	{
		questions: 'Які значення можна зберігати у змінних?',
		answers: [
			{
				id: '23',
				value: 'Рядки, числа з точкою, прості числа та булеві вирази',
				correct: true,
			},
			{
				id: '24',
				value: 'Рядки, числа з точкою та прості числа',
				correct: false,
			},
			{
				id: '25',
				value: 'Лише числа та рядки',
				correct: false,
			}
		]
	},
	{
		questions: 'У чому різниця між confirm та prompt?',
		answers: [
			{
				id: '26',
				value: 'Різниці немає',
				correct: true,
			},
			{
				id: '27',
				value: 'prompt викликає діалогове вікно з полем для введення, confirm – вікно з підтвердженням',
				correct: false,
			},
			{
				id: '28',
				value: 'confirm викликає діалогове вікно з полем для введення, prompt – вікно з підтвердженням',
				correct: false,
			}
		]
	},
	{
		questions: 'Де правильно вказано ім`я змінної?',
		answers: [
			{
				id: '29',
				value: 'var num_1;',
				correct: true,
			},
			{
				id: '30',
				value: 'var num',
				correct: false,
			},
			{
				id: '31',
				value: 'ver num;',
				correct: false,
			},
			{
				id: '32',
				value: 'var 2num;',
				correct: false,
			},
			{
				id: '33',
				value: 'var num-1;',
				correct: false,
			}
		]
	},
	{
		questions: 'Де правильно вказано запуск спливаючого вікна?',
		answers: [
			{
				id: '34',
				value: 'new alert ("Hi")',
				correct: false,
			},
			{
				id: '35',
				value: 'info ("Hi")',
				correct: false,
			},
			{
				id: '36',
				value: 'Нема правильних варіантів',
				correct: false,
			},
			{
				id: '37',
				value: 'alert ("Hi")',
				correct: true,
			}
		]
	}


]

let localResults = {}

const quiz = document.getElementById('quiz')
const questions = document.getElementById('questions')
const indicator = document.getElementById('indicator')
const results = document.getElementById('results')
const btnNext = document.getElementById('btn-next')
const btnRestart = document.getElementById('btn-restart')
console.log(btnRestart)
const renderQuestions = (index) => {
	renderIndicator(index + 1)
	questions.dataset.currentStep = index
	const renderAnswers = () => DATA[index].answers
	.map((answer) => `
				<li>
					<label>
						<input type="radio" class="answer-input" name=${index} value=${answer.id}>
							${answer.value}
					</label>
				</li> 
	`)
	.join('')
	questions.innerHTML = ` 
		<div class="quiz-questions-item">
				<div class="quiz-questions-item__question">${DATA[index].questions}</div>
				<ul class="quiz-questions-item__answers">
					${renderAnswers()}
				</ul>
			</div>
	`
}


let counter = 0
const renderResults = () => {
	let content = ''

const getClassname = (answer, questionIndex) => {
	let classname = ''
	
	if (!answer.correct && answer.id === localResults[questionIndex]) {
		classname = 'answer--invalid'
	}else if (answer.correct) {
		classname = 'answer--valid'
		counter++
	}
	console.log(counter)
	return classname
}

const getAnswers = (questionIndex) => DATA[questionIndex].answers
		.map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
		.join('')

	DATA.forEach((question, index) => {
		content += ` 
			<div class="quiz-results-item">
				<div class="quiz-results-item__question">${question.questions}</div>
				<ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
			</div>`
	})

	results.innerHTML = content
	
}

const renderIndicator = (currentStep) => {
	indicator.innerHTML = `${currentStep}/${DATA.length}`

}


quiz.addEventListener('change', (event) => {
	// логика для отметки варианта ответа
	 if (event.target.classList.contains('answer-input')) {
		localResults[event.target.name] = event.target.value
		//console.log(localResults)
	}
})

quiz.addEventListener('click', (event) => {
	if (event.target.classList.contains('btn-next')) {
		const nextQuestionIndex = Number(questions.dataset.currentStep) + 1

		if (DATA.length === nextQuestionIndex) {
			 questions.classList.add('questions--hidden')
			 indicator.classList.add('indicator--hidden')
			 results.classList.add('results--visible')
			 btnNext.classList.add('btn-next--hidden')
			 btnRestart.classList.add('btn-restart--visible')
			 renderResults()
		}else{
			renderQuestions(nextQuestionIndex)
		}
	}
	if (event.target.classList.contains('btn-restart')) {
			 results.innerHTML = ''
			 localResults = {}
		 	 questions.classList.remove('questions--hidden')
			 indicator.classList.remove('indicator--hidden')
			 results.classList.remove('results--visible')
			 btnNext.classList.remove('btn-next--hidden')
			 btnRestart.classList.remove('btn-restart--visible')
			 renderQuestions(0)
	}
})


renderQuestions(0)
