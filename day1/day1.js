let greeting = 'welcome'
let name = 'Kolade'

console.log(`Hello, ${name}!! ${greeting}`)

exports.add = function(a, b, c) {
  if ((typeof a === 'number')
  && (typeof b === 'number')
  && (typeof c === 'number')) {
    // console.log(assert.equal(a, b))

    return console.log(`Sum of ${a} + ${b} + ${c} = ${a+b+c}`)
  } else {
    console.log('we are not numbers')
  }
}





