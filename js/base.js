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


function show() {
    //获取目的日期
    var myyear = document.getElementById("year").value;
    var mymonth = document.getElementById("month").value - 1;
    var myday = document.getElementById("day").value;
    var myhour = document.getElementById("hour").value;
    var myminute = document.getElementById("minute").value;
    var mysecond = document.getElementById("second").value;
    var time = Number(new Date(myyear, mymonth, myday, myhour, myminute, mysecond));
    // var time=new Date(myyear,mymonth,myday,myhour,myminute,mysecond).getTime();
    //获取当前时间
    var nowTime = Date.now();
    // var nowTime=new Date().getTime();
    //获取时间差
    var timediff = Math.round((time - nowTime) / 1000);
    //获取还剩多少天
    var day = parseInt(timediff / 3600 / 24);
    //获取还剩多少小时
    var hour = parseInt(timediff / 3600 % 24);
    //获取还剩多少分钟
    var minute = parseInt(timediff / 60 % 60);
    //获取还剩多少秒
    var second = timediff % 60;
    //输出还剩多少时间
    document.getElementById("1").innerHTML = day;
    document.getElementById("2").innerHTML = hour;
    document.getElementById("3").innerHTML = minute;
    document.getElementById("4").innerHTML = second;
    setTimeout(show, 1000);
    if (timediff == 0) { return; }
}