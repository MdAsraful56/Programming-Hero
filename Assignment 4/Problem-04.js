function password(object) {
    if (object.birthYear && object.name && object.siteName) {
        const siteNameStr = object.siteName;
        const siteName = siteNameStr[0].toUpperCase() + siteNameStr.slice(1);
        let complite = siteName + "#" + object.name + "@" + object.birthYear;
        return complite;
    }
    else{
        // console.log("oiwefsdklfjoiflk")
        return "Inviled";
    }


}

let first = {
    name: 'kolimuddin',
    birthYear: 1999,
    siteName: 'google'
}
let second = {
    name: 'kolimuddin',
    birthYear: 1999,
    // siteName: 'google'
}
console.log(password(first));
console.log(password(second));


// let text = "Hello World!";
// let result = text.toUpperCase();
// console.log(result)


// const modStr = str[0].toUpperCase() + str.slice(1);

