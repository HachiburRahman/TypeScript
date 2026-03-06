
let userArr:Object[];
userArr=[];
type RequestData={userName:string,userId:number};
let user4:RequestData={userName:"Hachibur",userId:101};
let user5:RequestData={userName:"Rahman",userId:102};
let user6:RequestData={userName:"Antu",userId:103};
let user7:RequestData={userName:"Hachib",userId:104};
userArr.push(user4,user5,user6,user7);
for(let key in userArr){
    console.log(userArr[key])
}