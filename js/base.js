// 判断函数类型方法 es6的写法
const isType = type => target => {
    let stringType = Object.prototype.toString.call(target);
    return `[Object ${type}]` === stringType;
}
// es5的写法
const isType1 = function(type){
    return function(target){
        let stringType = Object.prototype.toString.call(target);
        return `[Object ${type}]` === stringType;
    } 
}

// 判断数组
const isArray = isType('Array');
// 判断NaN
const isNaN = isType1('NaN');

console.log(isArray([]),isNaN(NaN));


