function socialCode(str) {
    if(str.length!=18) return false;
    str = str.toUpperCase(str);
    var t = str.match(/^[\dA-HJ-NP-RT-UW-Y]{18}$/);
    if(t==null || t.length<1) return false;
    if (isNaN(str.substr(2, 6))) return false;
    var searchArr = [ '0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R', 'T','U', 'W','X','Y'];
    var addArr = [1,3,9,27,19,26,16,17,20,29, 25,13,8,24,10,30,28];
    var checkVal = 0;
    for(var i=0;i<17;i++) {
        var cnum = searchArr.indexOf(str[i]);
        checkVal += cnum * addArr[i];
    }
    checkVal = 31-(checkVal%31);
    checkVal = (checkVal==31)?0:checkVal;
    var val = searchArr[checkVal];
    if(val!=str[17])   return false;
    return true;
}
