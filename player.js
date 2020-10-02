class PlayerClass {
constructor(){

}
getCount (){
    database.ref("PlayerCount").on("value",function (data){
        PlayerCount = data.val();
    })
}
update(count){
database.ref("/").update({
    PlayerCount : count
})
}
}