const isTypeOf = <T>(value : T)  => {
    if(typeof value === 'object' && Array.isArray(value)) {
        return 'array'
    }
    if(typeof value === 'object' && value === null) {
        return 'null'
    }
    return typeof(value)
};
console.log(isTypeOf('Hello'))
console.log(isTypeOf(0))
console.log(isTypeOf(1))
console.log(isTypeOf(true))
console.log(isTypeOf([1,2,3]))
console.log(isTypeOf({name : "Dave"}))
console.log(isTypeOf(null))
console.log(isTypeOf(undefined))