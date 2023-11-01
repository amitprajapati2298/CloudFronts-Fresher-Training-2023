var oPlayerFormCustomization = {
    setPlayerName : function(execContext){
        var formContext = execContext.getFormContext();
        var playerName = "";
        if(formContext.getAttribute("cf_firstname")){
            playerName = formContext.getAttribute("cf_firstname").getValue();
        }
        if(formContext.getAttribute("cf_lastname")){
            playerName += formContext.getAttribute("cf_lastname").getValue();
        }
        formContext.getAttribute("cf_name").setValue(playerName);


    },
    disabledLastName:function(execContext){
        var formContext = execContext.getFormContext();
        if(formContext.getAttribute("cf_firstname")){
            
         var   playerName = formContext.getAttribute("cf_firstname").getValue();
         if(playerName === "Amit"){
            formContext.getControl("cf_lastname").setDisabled(true);
         }else {
            formContext.getControl("cf_lastname").setDisabled(false);
         }
        }
    }
}