var questions = [
    {
      question: "This sport has a maximum time limit but can end at any second.",
      answer: "Boxing",
      options: [
        "Golf",
        "Tennis",
        "Boxing",
        "Baseball"
      ]
    },
    { 
      question: "In this sport, you can bat, ball, and field the ball.",
      answer: "Cricket",
      options: [
        "Curling",
        "Basketball",
        "Cricket",
        "Football"
      ]
    },
    {
      question: "In this sport, you start by serving, but not food.",
      answer: "Volleyball",
      options: [
        "Fencing",
        "Wrestling",
        "Volleyball",
        "Tug of war"
      ]
    },
    {
      question: "In this sport, there are 18 legs on the field trying to catch flies.",
      answer: "Baseball",
      options: [
        "Luge",
        "Ping Pong",
        "Baseball",
        "Tennis"
      ]
    },
    {
      question: "In this sport, you have to wear a glove on each hand, but neither are used for catching.",
      answer: "Boxing",
      options: [
        "Water Polo",
        "Boxing",
        "Badminton",
        "Volleyball"
      ]
    }
  ]

var question = document.getElementById('question')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var livesNumber = document.getElementById('lives')
var scoreNumber = document.getElementById('score')

var count = 0
var score = 0
var lives = 3

function myFunction(){
  question.innerHTML = questions[count].question
  let [first, second, third, fourth] = questions[count].options
  option1.innerHTML = first
  option2.innerHTML = second
  option3.innerHTML = third
  option4.innerHTML = fourth
  
  option1.onclick = ()=>{
    if(option1.innerHTML == questions[count].answer){
      score++
      scoreNumber.innerHTML = score
    }
    else{
      lives--
      livesNumber.innerHTML = lives
      if(lives == 0){
        alert("Game Over")
        window.location.reload()
      }
    }
    count++
    if(count == 5){
      alert('Hurray, Your score is '+score)
    }
    myFunction()
  }
  option2.onclick = ()=>{
    if(option2.innerHTML == questions[count].answer){
      score++
      scoreNumber.innerHTML = score
    }
    else{
      lives--
      livesNumber.innerHTML = lives
      if(lives == 0){
        alert("Game Over")
        window.location.reload()
      }
    }
    count++
    if(count == 5){
      alert('Hurray, Your score is '+score)
    }
    myFunction()
  }
  option3.onclick = ()=>{
    if(option3.innerHTML == questions[count].answer){
      score++
      scoreNumber.innerHTML = score
    }
    else{
      lives--
      livesNumber.innerHTML = lives
      if(lives == 0){
        alert("Game Over")
        window.location.reload()
      }
    }
    count++
    if(count == 5){
      alert('Hurray, Your score is '+score)
    }
    myFunction()
  }
  option4.onclick = ()=>{
    if(option4.innerHTML == questions[count].answer){
      score++
      scoreNumber.innerHTML = score
    }
    else{
      lives--
      livesNumber.innerHTML = lives
      if(lives == 0){
        alert("Game Over")
        window.location.reload()
      }
    }
    count++
    if(count == 5){
      alert('Hurray, Your score is '+score)
    }
    myFunction()
  }
}
