
// const serviceTicketNo = (count) => {
//     let newCount = count + 1;
//     let flag = "ST";
//     let newString = String(newCount);
//     let zeroToGentrate = 5 - newString.length;
//     let zeroStr = "";
//     for (let i = 0; i < zeroToGentrate; i++) {
//         zeroStr += "0"
//     }
//     return flag + zeroStr + newString;
// }

// let data = serviceTicketNo(909);
// console.log('data:', data)
// let newData = data.split("ST");
// console.log('newData:', newData)
// let myNum = Number(newData[1]);
// console.log('myNum:', myNum);

// let data2 = serviceTicketNo(myNum);
// console.log('data:', data2)


const dateFormate = () => {

    const dateObj = new Date();
    const date = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const year = dateObj.getUTCFullYear();
    const newdate = date + "/" + month + "/" + year;
    return newdate

}

console.log(dateFormate());