let count = 200;




runFunction = (min1 , max1,  min2,max2, min3, max3, min4, max4, min5, max5,min6, max6, min7, max7, min8, max8, min9, max9) => {
    num1 = Math.floor(Math.random() * (max1 - min1) + min1)
    num2 = Math.floor(Math.random() * (max2 - min2) + min2)
    num3 = Math.floor(Math.random() * (max3 - min3) + min3)
    num4 = Math.floor(Math.random() * (max4 - min4) + min4)
    num5 = Math.floor(Math.random() * (max5 - min5) + min5)
    num6 = Math.floor(Math.random() * (max6 - min6) + min6)
    num7 = Math.floor(Math.random() * (max7 - min7) + min7)
    num8 = Math.floor(Math.random() * (max8 - min8) + min8)
    num9 = Math.floor(Math.random() * (max9 - min9) + min9)

    output = `${num1}${num2}${num3}${num4}${num5}${num6}${num7}${num8}${num9}`

    return output
    
};

let index = 0;
while (index < count) {
    console.log("+254"+runFunction(min1=7, max1=7,  min2=2,max2=9, min3=0, max3=9, min4=0, max4=9, min5=0, max5=9,min6=0, max6=9, min7=0, max7=9, min8=0, max8=9, min9=0, max9=9));
    index++;
}

