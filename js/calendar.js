var weeks = "一二三四五六日".split(''),
    monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    //上个月在本月显示的天数
    pastMleft = {
        0: 6, 1: 7, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5
    };
var time = new Date(),
    thisY = time.getFullYear(),
    thisM = time.getMonth(),
    thisD = time.getDate();
//定义两个常量表示本年本月
const tY = thisY,
    tM = thisM;
function cal() {
    monthDays[1] = (thisY % 400 == 0 || (thisY % 4 == 0 && thisY % 100 == 0)) ? 29 : 28;//判断闰年的2月天数
    var pastM = thisM - 1,//上月
        realM = thisM + 1;// 下月
    var firstDW = new Date(thisY, thisM, 1).getDay(),//当前年月1号对应的星期
        thisMD = monthDays[thisM],//本月对应天数
        pastMD = pastMleft[firstDW],//上月应显示天数
        nextMD = 42 - thisMD - pastMD,//下月应显示天数
        pastM = pastM < 0 ? 11 : pastM;
    var lists = [];
    var pastM_lastD = monthDays[pastM];//上月天数
    lists.push(`<div class="cal-title">
            <span class="cal-left-btn"><</span>
            <span class="cal-title-content">${thisY}-${realM < 10 ? 0 + '' + realM : realM}</span>
            <span class="cal-right-btn">></span>
        </div>`);
    for (var i = 0, l = weeks.length; i < l; i++)
        lists.push('<span class="week">' + weeks[i] + '</span>');
    for (var i = 0; i < pastMD; i++)
        lists.push('<span class="past">' + (pastM_lastD - pastMD + i + 1) + '</span>')
    for (var i = 1; i <= thisMD; i++) {
        if (thisY <= tY && thisM < tM) {
            lists.push('<span class="now">' + i + '</span>');
        } else if (thisY === tY && thisM === tM) {
            var str = i == thisD ? 'today' : i < thisD ? 'now' : 'fur';
            lists.push('<span class="' + str + '">' + i + '</span>');
        } else {
            lists.push('<span class="fur">' + i + '</span>');
        }
    }
    for (var i = 0; i < nextMD; i++)
        lists.push('<span class="next">' + (i + 1) + '</span>')
    $('#cal-wrap').html(lists.join(' '))
}
$('body')
    .on('click', '.cal-left-btn', function () {
        thisM = thisM - 1;
        if (thisM < 0) {
            thisM = 11;
            thisY = thisY - 1;
        }
        cal();
    })
    .on('click', '.cal-right-btn', function () {
        thisM = thisM + 1;
        if (thisM > 11) {
            thisM = 0;
            thisY = thisY + 1;
        }
        cal();
    })
window.onload = cal;

