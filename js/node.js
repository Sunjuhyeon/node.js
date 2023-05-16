var studyday = ["어제","오늘","내일"]
var subject = ["자바스크립트","평가","피그마"]

var obj = {
    day : 3,
    subject : "자바스크립트"
}

// console.log(studyday[obj.day] + "도", subject[obj.study] + "해야지", typeof studyday)
console.log(obj.day + "일도", obj.subject)


var obj = {
    studyday : ["어제", "오늘", "내일", "모레", "다음날", "마지막날"],
    subject : ["자바스크립트", "제이쿼리", "쿼틀린", "피그마", "평가", "발표"]
}
console.log(obj.studyday[2] + "은", obj.subject[3] + "공부")

console.log(obj.studyday[obj.studyday.length - 1] + "도" , 
            obj.subject[obj.subject.length - 1])

console.log("전체공부는 " + obj.studyday.length +"일입니다.")

console.log(obj.subject[4] + "는" , obj.studyday[2])






for(var i = 0; i < 10; i++){
    console.log("10번 출력되게 해줘요")
}

// 어제는 자바스크립트 오늘은 자바스크립트 내일은 평가...

for(var i = 0; i < obj.studyday.length; i++){
    console.log(obj.subject[i] + "는" , obj.studyday[i])
}


var obj = {
    schedule : ["세미나", "쇼핑", "농장참여", "쇼핑", "자유시간"]
}
console.log("총" , obj.schedule.length+1 + "일" , "스케쥴")
for(var i = 0; i < obj.schedule.length; i++){
    console.log(i+1 + " | " + obj.schedule[i])
}

var num = 0;
for(var i in obj.schedule){
    num = parseInt(i);
    console.log(num+1 + " | " + obj.schedule[i])
}
// i는 숫자가 아니여서 사칙연산이 안됨.
// parseInt(i)를 사용하여 숫자로 전환.

var hubby = {
    play : ["캠핑", "낚시", "쇼핑", "그림", "산책"]
}

var num = 0;
for(s in hubby.play){
    num = parseInt(s);
    console.log(num+1 +"-"+ hubby.play[s])
}



// for문을 활용하여 '2~9'까지 콘솔에 출력하기.
for(var i = 0; i < 8; i++){
    console.log(i+2)
}

for(var i = 2; i < 10; i++){
    console.log(i)
}


// for문을 활용하여 '월~금'까지 콘솔에 출력하기
var obj = {
    day : ["월", "화", "수", "목", "금"]
}
for(i in obj.day){
    console.log(obj.day[i])
}

// for문 (변수와 문자겷바 및 사칙연산 익히기)
// *곱하기, +더하기, -빼기, /나누기, %나머지 구하기 기호
for(var i = 2; i < 10; i++){
    console.log("2" + "X" + i + "=" + 2 * i)
}
for(var i = 2; i < 10; i++){
    console.log(`2X${i}=${2 * i}`)
}

for(var i = 1; i < 11; i++){
    console.log(`${i}X5=${i * 5}`)
}