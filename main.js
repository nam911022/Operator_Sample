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

  if ('false') {
  console.log(123)
  }