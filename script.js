var qMyTime = prompt('Введите ваше время (чч:мм) : ');
var test = qMyTime.split(':');

var clock = setInterval(function () {
    var dat = new Date();
    var h = dat.getHours();
    var m = dat.getMinutes();
    var s = dat.getSeconds();
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    var timeNow = document.body.innerHTML = 'Время сейчас : ' + h + ":" + m + ":" + s;
    var timeTo = [h, m];
    var testing = test[0] - timeTo[0];
    var testing2 = test[1] - timeTo[1];
    if (testing < 10) testing = '0' + testing;
    if (testing2 < 10) testing2 = '0' + testing2;
    var pushik = [];
    pushik.push(testing);
    var pushik2 = [];
    pushik2.push(testing2);
    var concatik = pushik.concat(pushik2);
    var joinik = concatik.join(':');
    var timeTo2 = document.body.innerHTML = 'Время до : ' + joinik;
}, 1000)