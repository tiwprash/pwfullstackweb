const arr = [1,3,4,999,"Mithun",1244,"PW"];
var str = "false";

while (str == "false") {
    for (let index = 0; index < arr.length; index++) {
        const element = typeof(arr[index]);
        if (element=="string") {
            str = "true"
            console.log("Found First string : "+ arr[index])
            break;  
        }
    }
}