export const bin_to_dec = function (bstr) { 
    return parseInt((bstr + '').replace(/[^01]/gi, ''), 2);
}

export const dec_to_bin = function (n) {
    return parseInt(n, 10).toString(2);
}

export const dec_to_bin_byte = function (n) {
    
    let bin = parseInt(n, 10).toString(2);

    while(bin.length < 7 ) bin="0" + bin

    return bin;

}