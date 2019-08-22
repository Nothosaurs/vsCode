// 判断函数类型方法 es6的写法
const isType = type => target => {
    let stringType = Object.prototype.toString.call(target)
    return `[object ${type}]` === stringType
}
// es5的写法
const isType1 = function (type) {
    return function (target1) {
        let stringType = Object.prototype.toString.call(target1);
        return `[object ${type}]` === stringType;
    }
}
// 正则匹配，返回真正的类型值
const isType2 = type => (/^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(type)))[1];

// 判断数组
const isArray = isType('Array');
// 判断null
const isNull = isType1('Null');

console.log(isArray([]), isNull(null),isNaN(NaN),isType2(''));


