function myFun(num){
    console.log(num);
    num--;
    if(num>=0){
        myFun(num);
    }


}
myFun(10);