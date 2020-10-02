class FormClass {
    constructor(){

    }
     display (){
         var input = createInput ("name");
         input.position (150,150);

         var button = createButton ("play");
         button.position(150 ,200);

         button.mousePressed(function () {

         PlayerCount ++
         input.hide();
         button.hide();

         player.update(PlayerCount);
         })
     }
}