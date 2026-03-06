var userArr;
userArr = [];
var user4 = { userName: "Hachibur", userId: 101 };
var user5 = { userName: "Rahman", userId: 102 };
var user6 = { userName: "Antu", userId: 103 };
var user7 = { userName: "Hachib", userId: 104 };
userArr.push(user4, user5, user6, user7);
for (var key in userArr) {
    console.log(userArr[key]);
}
