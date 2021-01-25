const IpSubnetCalculator = require( 'ip-subnet-calculator' );

export const ip_subnet_calculator = function (value) { 
    let subnet = IpSubnetCalculator.calculateCIDRPrefix( value.ip, value.subnet );

    let ipHigherArray = subnet.ipHighStr.split(".");
        ipHigherArray[3] = parseInt(ipHigherArray[3]) - 1;
    let ipLowArray = subnet.ipLowStr.split(".");
        ipLowArray[3] = parseInt(ipLowArray[3]) + 1;
    
    subnet['ipHighStrUseful'] = ipHigherArray.join('.');
    subnet['ipLowStrUseful'] = ipLowArray.join('.');
    
    return subnet;
}

export const device_subnet_calculator = function (value){
    let intValue = parseInt(value);
    let mask = calc_subnet_prefix(intValue);
    let ip = calc_ip_class(mask);
    let subnet = IpSubnetCalculator.calculateSubnetMask( ip, mask );

    let ipHigherArray = subnet.ipHighStr.split(".");
        ipHigherArray[3] = parseInt(ipHigherArray[3]) - 1;
    let ipLowArray = subnet.ipLowStr.split(".");
        ipLowArray[3] = parseInt(ipLowArray[3]) + 1;
    
    subnet['ipHighStrUseful'] = ipHigherArray.join('.');
    subnet['ipLowStrUseful'] = ipLowArray.join('.');

    subnet['devices'] = new Intl.NumberFormat('de-DE').format(intValue);

    return subnet;
}
const calc_ip_class = function(mask){
    //return '172.16.0.0';
    if(mask > 0 && mask <= 8){
        return '10.0.0.0';
    } else if(mask > 8 && mask <= 12){
        return '172.16.0.0';
    } else if(mask > 12){
        return '192.168.0.0';
    }
}
const calc_subnet_prefix = function(value){
    
    if(value == 2){
        return 30;
    } else if(value > 2 && value <= 6){
        return 29;
    } else if(value > 6 && value <= 14){
        return 28;
    } else if(value > 14 && value <= 30){
        return 27;
    } else if(value > 30 && value <= 62){
        return 26;
    } else if(value > 62 && value <= 126){
        return 25;
    } else if(value > 126 && value <= 254){
        return 24;
    } else if(value > 254 && value <= 510){
        return 23;
    } else if(value > 510 && value <= 1022){
        return 22;
    } else if(value > 1022 && value <= 2046){
        return 21;
    } else if(value > 2046 && value <= 4094){
        return 20;
    } else if(value > 4094 && value <= 8190){
        return 19;
    } else if(value > 8190 && value <= 16382){
        return 18;
    } else if(value > 16382 && value <= 32766){
        return 17;
    } else if(value > 32766 && value <= 65534){
        return 16;
    } else if(value > 65534 && value <= 131070){
        return 15;
    } else if(value > 131070 && value <= 262142){
        return 14;
    } else if(value > 262142 && value <= 524286){
        return 13;
    } else if(value > 524286 && value <= 1048574){
        return 12;
    } else if(value > 1048574 && value <= 2097150){
        return 11;
    } else if(value > 2097150 && value <= 4194302){
        return 10;
    } else if(value > 4194302 && value <= 8388606){
        return 9;
    } else if(value > 8388606 && value <= 16777214){
        return 8;
    } else if(value > 16777214 && value <= 33554430){
        return 7;
    } else if(value > 33554430 && value <= 67108862){
        return 6;
    } else if(value > 67108862 && value <= 268435454){
        return 5;
    } else if(value > 268435454 && value <= 536870910){
        return 4;
    }

    return null;
}