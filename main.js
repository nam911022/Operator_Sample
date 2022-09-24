import getType from './getType'
import random from './getRandom'

// console.log(typeof 'Hello world!') // 실행문(객체/메소드/인수)
// console.log(typeof 123) // js에선 ;를 붙이지 않아도 자동으로 ';'이 있다고 인식
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType({}))
// console.log(getType([]))

// -----------------------------

// 산술 연산자(arithemtic oparateor)
  // '+', '-', '*', '/', '%'

  // console.log(1 + 2) 
  // console.log(5 - 7)
  // console.log(3 * 4)
  // console.log(10 /2)
  // console.log(7 % 5)

// -----------------------------

// 할당 연산자(assignment oprator)

  // let a = 2 // '='가 할당연산자
  // a = a + 1
  // a += 1 // 위의 'a = a + 1' 과 같음

  // console.log(a)

// -----------------------------

  // 비교 연산자(comparison operator)
  // '===', '!==', '<', '>', '>=', '<='
  // '=' 기호는 항상 뒤로(문법)

  // const a = 1
  // const b = 3

  // console.log(a === b) // '===' 일치 연산자 -> 'a' + 'b' 의 일치 여부

  // function isEqual(x, y) {
  //   return x === y
  // }

  // console.log(isEqual(1, 1))
  // console.log(isEqual(2, '2'))

  // console.log(a !== b) // '!=='는 서로가 다른것인지 확인해주는 연산자
  // console.log(a < b) // '!=='는 서로가 다른것인지 확인해주는 연산자


// -----------------------------


// 논리 연산자(logical operator)

  // const a = 1 === 123
  // const b = 'AB' === 'ABC'
  // const c = true

  // console.log(a)
  // console.log(b)
  // console.log(b)

  // console.log('&&: ', a && b && c) // '&&'는 '그리고' && 'and'
  // '&&'연산자를 사용하는 값 중 하나라도 'false'면 'false'로 전체 표기

  // console.log('||:', a || b || c) // '||' 또는 'or'
  // '||'는 전체중 하나의 값이 'true'면 전체  'true'로 출력

  // console.log('!:', !a) // '!'는 부정연산자 'not'
  // 'true'면 'false'로 출력 -> 반대로 출력

  // -----------------------------
  
  // 삼항 연산자(ternary operator)

  // const a = 1 < 2

  // if (a) {
  //   console.log('참')
  // } else {
  //   console.log('거짓')
  // }

  // console.log(a ? '참' : '거짓') //  a if (참) else ('거짓')
  // 말 그대로 항이 3개 / '?'는 참인지 거짓인지 묻는다로 기억

  // -----------------------------

  // 조건문 (If statement)

  // console.log(random())
  // const a  = random()

  // switch (a) {
  //   case 0:
  //     console.log('a is 0')
  //     break
  //   case 2:
  //     console.log('a is 2')
  //     break
  //   case 4:
  //     console.log('a is 4')
  //     break
  //   default: 
  //     console.log('rest...')
  // }
  // 어떠한 변수가 특정한 값으로 딱 떨어질 경우 사용
  // 일반적으로는 'if'를 많이 사용
  // !break를 통해 하나의 케이스를 항상 마무리해야함!

  // if (a === 0) {
  //   console.log('a is 0')
  // } else {
  //   console.log('rest....')
  // }
  // a가 0이면 'a is 0' 출력

  // if (a === 0) {
  //   console.log('a is 0')
  // } else if (a === 2) {
  //   console.log('a is 2')
  // } 
  //   else if (a === 4) {
  //   console.log('a is 4')
  // } else {
  //   console.log('rest...')
  // }
  // 'else if(){}', '중간조건'을 계속해서 추가가능


// -----------------------------
  // 반복문 (For statement)
  // for (시작조건; 종료조건; 변화조건) {}
  // 반복물을 작동시킬 때 변수의 이름은 통상적으로 'i'로 사용

  // const ulEl = document.querySelector('ul')

  // for (let i = 0; i < 10; i += 1) {
  //   const li = document.createElement('li')
  //   li.textContent = 'list-${i + 1}'
  //   if ((i + 1) % 2 === 0) {
  //     li.addEventListener('click', function (){
  //       console.log(li.textContent)
  //     })
  //   }
  //   ulEl.appendChild(li)
  // }

// -----------------------------
  // 변수 유효범위(Variable Scope)
  // var, let, const
  // 'var'는 블록 래밸이 아닌 함수래밸(더 높은 범위)의 유효범위를 가짐
  // -> 의도하지 않은 범위에서 사용될 수 있으므로 일반적으로 사용 X

  // function scope() {
  //   if (true) {
  //     // console.log(a) // 값이 할당되는 것보다 앞에 있기때문에 'undefind'처리
  //     const a = 123
  //     console.log(a) // 정상
  //   }
  //   // console.log(a) // 유효범위를 벗어나 콘솔에서 오류 표기
  // }
  // scope()


// -----------------------------

  // 형 변환(Type conversion)
      // const a = 1
      // const b = '1'

      // console.log(a == b) // '=='는 '동등연산자' -> 형 변화를 일으킴
      // // '동등연산자'는 특수케이스로 비사용 추천  

  // Truthy(참 같은 값)
  // true, {}, [], 1, 2, 'false', '-12', '3.14' ...

  // Falsy(거짓 같은 값)
  // false, '', null, undefinded, 0, -0, NaN -> (Not a Number)
  // '1 + undefined' => NaN

  // if ('false') {
  // console.log(123)
  // }

  
// -----------------------------
  // 함수 복습
    
  // function sum(x, y) {
    //   console.log(x+y)
    // }

    // sum(1, 3)
    // sum(4, 13)


    // ----------------------------
    // function sum(x, y) {
    //   return x + y
    // }

    // const a = sum(1, 3)
    // const b = sum(4, 13)

    // console.log(a)
    // console.log(b)
    // console.log(a + b)

    // ----------------------------
    // function sum() {
    //   console.log(arguments)
    //   return arguments [0] + arguments[1]
    // }

    // console.log(sum(7, 3))

    // ----------------------------
      // 화살표 함수
      // () => {} vs function () {}


      // const double = function (x) {
      //   return x * 2
      // }
      // console.log('double: ', double(7))

      // const doubleArrow = (x) => {
      //   return x * 2
      // }
      // console.log('doubleArrow', doubleArrow(7))

      // const doubleArrow = (x) => x * 2 // 축약형
      // {}로 사용할 수 없음. 사용하려면 ( {   } )형태로 사용해야함
 

    // ----------------------------
      // 즉시실행함수
      // IIFE, Immediately-Invoked Function Expression

        // const a = 7
        // function double() {
        //   console.log(a * 2)
        // }
        // double();

        // (function () {
        //   console.log(a * 2)
        // }) () ;

        // (function () {
        //   console.log(a * 2)
        // }()) 

        
    // ----------------------------
      // 호이스팅(Hoisting)
      // 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

      // const a = 7

      // double() // 함수는 선언되는 곳 아래로 있어야함. 원칙적으로 현재 위치는 ERROR
      // double()

      
      // const double = function () { //함수표현 'const' 보유
      //   console.log(a * 2)
      // }

      // function double() {  // 함수표현 삭제&함수선언 으로 변경
      //   console.log(a * 2)
      // }

    // ----------------------------
      // 타이머 함수
        // setTimeout(함수, 시간) : 일정 시간 후 함수 실행
        // setInterval(함수, 시간) : 시간 간격마다 함수 실행
        // clearTimeout() : 설정된 Timeout 함수를 종료
        // clearInterval(): 설정된 Interval 함수를 종료

        // setTimeout(function () {
        //   console.log('Heropy')
        // }, 3000) // 시간은 ms - 1초는 1000ms

        // const timer = setTimeout(() => {
        //   console.log('Heropy')
        // }, 3000)

        // const timer = setInterval(() => {
        //   console.log('Heropy')
        // }, 3000)

        // const h1El = document.querySelector('h1')
        // h1El.addEventListener('click', () => {
        //   clearInterval(timer)
        // })

    // 콜백(Callback)
    // 함수의 인수로 사용되는 함수

    // setTimeout(함수, 시간)

      // function timeout(cb) {
      //   setTimeout(() => {
      //     console.log('Heropy')
      //     cb()
      //   }, 3000)
      // }
      // timeout(() => {
      //   console.log('Done!')
      // })


      // -----------------------------------------------------------------------------------------------
      // JS 클래스 

      // 생성자 함수
        // const heropy = {
        //   firstName: 'Heropy',
        //   lastName: 'park',
        //   getFullName: function () {
        //     return `${this.firstName} ${heropy.lastName}` // this는 heropy를 지칭
        //   }
        // }

        // console.log(heropy.getFullName())

        // const amy = {
        //   firstName: 'Amy',
        //   lastName: 'Park',
        //   getFullName: function () {
        //     return `${this.firstName} ${this.lastName}` // this는 heropy를 지칭
        //   }
        // }

        // console.log(amy.getFullName())

        // const neo = {
        //   firstName: 'neo',
        //   lastName: 'smith',
        //   getFullName: function () {
        //     return `${this.firstName} ${this.lastName}` // this는 heropy를 지칭
        //   }
        // }

        // console.log(neo.getFullName())

      // function User(first, last) { // 생성자 함수는 파스칼 케이스로 앞에 글자를 대문자로함.
      //   this.firstName = first
      //   this.lastName = last
      //   }
      // User.prototype.getFullName = function () {      // prototype 중요, 자바스크립트에서는 매우 많이 사용해서 prototype 기반이라고도 함.
      //   return `${this.firstName} ${this.lastName}`
      // }

      // const heropy = new User('Heropy', 'Park') // user = 생성자 함수, heropy = 인스턴스
      // const amy = new User('Amy', 'Clarke') 
      // const neo = new User('Neo', 'Smith') 
      
      // console.log(heropy.getFullName())
      // console.log(amy)
      // console.log(neo)

      // const heropy = {} //  리터럴 방식 = 특정한 과정을 거치지 않고 쉽게 데이터를 생성하는 방식


      // this
      // 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
      // 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

      // const heropy = {
      //   name: 'Heropy',
      //   normal: function () {
      //     console.log(this.name)
      //   },
      //   arrow: () => {
      //     console.log(this.name)
      //   }
      // }

      // heropy.normal()
      // heropy.arrow()

      // const amy = {
      //   name: 'Amy',
      //   normal: heropy.normal,
      //   arrow: heropy.arrow
      // }
      // amy.normal()
      // amy.arrow()

    // const timer = {
    //   name: 'Heropy!!',
    //   timeout: function () {
    //     //setTimeout(함수{콜백}, 시간)
    //     setTimeout(() => {
    //       console.log(this.name)
    //     }, 2000)
    //   }
    // }

    // timer.timeout()

    // const heropy = {
    //   name: 'Heropy',
    //   normal() {
    //     console.log(this.name)
    //   },
    //   arrow: () => {
    //     console.log(this.name)
    //   }
    // }

    // heropy.normal()
    // heropy.arrow()


    // ES6 Class

      // function User(first, last) { 
      //   this.firstName = first
      //   this.lastName = last
      //   }
      // User.prototype.getFullName = function () {      
      //   return `${this.firstName} ${this.lastName}`
      // }

      // class User {
      //   constructor(first, last) {
      //     this.firstName = first
      //     this.lastName = last
      //   }
      //   getFullName() {
      //     return `${this.firstName} ${this.lastName}`
      //   }
      // }

      // const heropy = new User('Heropy', 'Park') 
      // const amy = new User('Amy', 'Clarke') 
      // const neo = new User('Neo', 'Smith') 
      
      // console.log(heropy.getFullName())
      // console.log(amy.getFullName())
      // console.log(neo.getFullName())


    // 클래스 상속&확장 개념
      // class Vehicle {
      //   constructor(name, wheel) {
      //     this.name = name
      //     this.wheel = wheel
      //   }
      // }
      // const myVehicle = new Vehicle('운송수단', '2')
      // console.log(myVehicle)
      
      // class Bicycle extends Vehicle { // extends 확장 또는 상속의 개념
      //   constructor(name, wheel) {
      //     super(name, wheel)
      //   }
      // }
      // const myBicycle = new Bicycle('삼천리', 2)
      // const daughtersBicycle = new Bicycle('세발, 3')
      // console.log(myBicycle)
      // console.log(daughtersBicycle)

      // class Car extends Vehicle {
      //   constructor(name, wheel, license) {
      //     super(name, wheel)
      //     this.license = license
      //   }
      // }
      
      // const myCar = new Car('벤츠', 4, true)
      // const daughtersCar = new Car('포르쉐', 4, false)

      // console.log(myCar)
      // console.log(daughtersCar)

  // --------------------------------------------------------------
  // Js - String
  // string.prototype.indexOf()
  
  //  const result = 'Hello world!'.indexOf('Heropy')
  //  console.log(result)
  
   // String.prototype indexOf()

  //  const str = '0123'
  // //  console.log(str.length) =
  //     console.log('0123'.length)

  // const str = 'Hello world!'
  // const str = 'thesecon@gmail.com'
  // const str = '     Hello world    '

  // console.log(str.indexOf('HEROPY') !== -1) // '!'로 인해 반대로 나와서 False 표시

  // console.log(str.slice(6, 11)) // 어디에서 시작해서 어디에서 끝낼것이냐 (0, 3)
  // console.log(str.replace('world', 'Heropy')) // 앞에 있는 문자데이터에서 두번째 인수를 교체해준다.
  // console.log(str.replace(' world!', '')) // 
  // console.log(str.match(/.+(?=@)/)[0]) // 정규표현식 /.+(?=@)/[]  '[]'부분이 배열데이터로 반환
  // console.log(str.trim()) // 앞에서 시작하는 부분과 뒤에서 시작하는 부분을 제거하겠다.

  // const pi = 3.14159265358979
  // console.log(pi)

  // const str = pi.toFixed(2) // toFixed로 반환하면 문자데이터로 변환됨
  // console.log(str)
  // console.log(typeof str) // typeof 종류를 알려줌(문자인지, 숫자인지)

  // const integer = parseInt(str) // parse 분석 int 정수 _ 정수로 반환
  // const float = parseFloat(str) // 소수점 자리의 숫자도유지하면서 문자데이터를 숫자로 반환
  // console.log(integer)
  // console.log(float)
  // console.log(typeof integer, typeof float)

    // console.log('abs:', Math.abs(-12))
    
    // console.log('min:', Math.min(2, 8))

    // console.log('max:', Math.max(2, 8))

    // console.log('ceil:', Math.ceil(3.14))

    // console.log('floor:', Math.floor(3.14))

    // console.log('round:', Math.round(3.14))

    // console.log('random:', Math.random())


  // .length(길이)

  // const numbers = [1, 2, 3, 4]
  // const fruits = ['Apple', 'Banana', 'Cherry']

  // console.log(numbers.length)
  // console.log(fruits.length)
  // console.log([1,2 ].length)

  // console.log([],len)

  
  // --------------------------------------------------------------
  // array mdn

  // .concat()
  // -> 붙어있는 배열데이터의 아이템 갯수만큼 인수로 사용된 콜백함수가 반복적으로 실행됨

  // console.log(numbers.concat(fruits)) // 2개의 배열데이터를 병합해서 새로운 배열데이터를 그 자리에 반환
  // console.log(numbers) // Point: 원본의 데이터는 손상되지 않음(중요)
  // console.log(fruits)


  // .forEach(배열데이터 아이템의 갯수만큼 특정한 콜백함수를 반복적으로 실행하는 용도로 사용되는 메소드 )

  // fruits.forEach(function (item, i) { 
  //   console.log(item, i)
  // })
  // element, index, array 는 각각 매개변수 // item, fruit로 변경해서 사용가능
  // element -> apple, Banana, Cherry
  // index -> 0, 1, 2 // i로 줄이는 것 가능
  // array -> forEach가 붙어있는 배열데이터(fruits)를 지칭 // 잘안씀 // 삭제해도 문제 없음

  // .map()

  // const a = fruits.forEach(function (fruit, index) {
  //   console.log(`${fruit}-${index}`) // '`' 백팁기호를 이용했기때문에 보간법을 이용한 문자데이터
  // })
  // console.log(a)

  // 화살표 함수 사용시 -> 

  // const a = fruits.forEach((fruit, index) => {
  //   console.log(`${fruit}-${index}`) 
  // })
  // console.log(a)

  // const b = fruits.map(function (fruit, index) {
  //   return `${fruit}-${index}`
  // })
  // console.log(b)
  
  // const b = fruits.map(function (fruit, index) {
  //   return {
  //     id: index,
  //     name: fruit
  //   }
  // })

  // const b = fruits.map((fruit, index) => ({
  //     id: index,
  //     name: fruit
  // }))

  // console.log(b)
  
  // .forEach와 .map의 차이
  // -> 둘다 아이템의 갯수만큼 반복하지만 .forEach는 반환(return)하는 값이 없고
  // -> .map은 값을 반환해서 새로운 배열로 만들어서 사용가능


  // .filter()
  // -> 걸러버림
  // const numbers = [1, 2, 3, 4]
  // const fruits = ['Apple', 'Banana', 'Cherry']

  // const a = numbers.map(number => {
  //   return number < 3
  // })
  // console.log(a)
  // 화살표 기호 사용
  // const a = numbers.map(number => number < 3)
  // console.log(a)
  
  // const b  = numbers.filter(number => {
  //   return number < 3
  // })
  // console.log(b)
  // console.log(numbers)


  // .find() .findindex()
  // 찾은 아이템을 반환함

  // const a = fruits.find(fruit => /^B/.test(fruit)) // /^B/ -> B로 시작하는 item 찾음
  // console.log(a)

  // const b = fruits.findIndex(fruit => /^B/.test(fruit)) // /^B/ -> B로 시작하는 item 찾음
  // console.log(b)


  // .includes()
  // -> 인수로 사용되는 데이터가 특정 데이터에 포함여부

  // const a = numbers. includes(3)
  // console.log(a)

  // const b = fruits.includes('HEROPY')
  // console.log(b)

  
  // .push() .unshift()
  // 원본 수정됨 주의!
  // -> 배열데이터의 가장 뒷부분에 인수를 집어넣음

  // numbers.push(5)
  // console.log(numbers)

  // numbers.unshift(0)
  // console.log(numbers)


  // .reverse()
  // 원본 수정됨 주의!

  // numbers.reverse()
  // fruits.reverse()

  // console.log(numbers)
  // console.log(fruits)


  // .splice()
  // 원본 수정됨 주의!

  // numbers.splice(2, 1) // index 2번째를 선택 -> 1개를 지워라 -> 12 (3)삭제 4
                       // (2, 2) -> 1, 2

  // numbers.splice(2, 1, 999) // 2번째 자리에 999를 집어넣어라 -> 1, 2, 999, 4
  // fruits.splice(2, 1, 'oragne')
  
  // console.log(numbers)
  // console.log(fruits)

  

  // --------------------------------------------------------------
  // Object mdn

  // 01 Object.assign
    // const userAge = {
    //   // key: value
    //   name: 'Heropy',
    //   age: 85
    // }
    // const userEmail = {
    //   name: 'Heropy',
    //   email: 'thesecon@gmail.com'
    // }

    // // const target = Object.assign(userAge, userEmail) // userAge에 userEmail을 덮어씌움
    // const target = Object.assign({}, userAge, userEmail) // 원본데이터를 건드리지않고 {}에 넣음
    // // .assign은 Object(전역객체) 뒤에만 직접적으로 사용할 수 있음
    // // -> 정적메소드
    // console.log(target)
    // console.log(userAge)
    // console.log(target === userAge)

    // const a = { k: 123 }
    // const b = { k: 123 }
    // console.log(a === b)

  // 02 Object.keys
  const user = {
    name: 'Heropy',
    age: 85,
    email: 'thekdjf@gmail.com'
  }

  const keys = Object.keys(user)
  console.log(keys)
  // ['name', 'age', 'email]

  console.log(user['email'])

  const values = keys.map(key => user[key])
  console.log(values)




