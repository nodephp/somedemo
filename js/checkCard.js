var checkIdCard:function(num) {
        if(num.length!=18) {
            return false;
        }
        if(isNaN(num.substr(0,17))) {
            return false;
        } //检验前17位是否为数字
        var city = [11,12,13,14,15,21,22,23,31,32,33,34,35,36,37,41,42,43,44,45,46,50,51,52,53,54,61,62,63,64,65,71,81,82,91];
        var code = parseInt(num.substr(0,2));
        var t = city.indexOf(code); //检验前2位地址码
        if(t<0) {
            return false;
        }
        var weight = [
            7, 9, 10, 5, 8, 4,
            2, 1, 6, 3, 7, 9,
            10, 5, 8, 4, 2, 1
            ]
        var id = [];
        for (var i = 0; i < 17; i++) {
            id[i] = parseInt(num[i]);
        }
        var temp = 0;
        for (var i = 0; i < 17; i++) {
            temp += id[i] * weight[i];
        }
        temp = temp % 11;
        var teamArr = ['1','0','X','9','8','7','6','5','4','3','2'];
        if(teamArr[temp] != num[17]) {
            return false
        } else {
            return true
        }
    }

