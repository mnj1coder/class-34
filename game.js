class GameClass{
    constructor(){

    }
    getState (){
        database.ref("GameState").on("value",function (data){
            gameState = data.val();
        })
    }
    update(state){
    database.ref("/").update({
        gameState : state
    })
    }
    start (){
        player = new PlayerClass();
        player.getCount();

        form = new FormClass ();
        form.display();
    }
}