var oPlayerSkillFormCustomization = {
    setPlayerSkillName : function(execContext){
        var formContext = execContext.getFormContext();
        var skillLookupValue = null;
        var playerLookupValue = null;
        if(formContext.getAttribute("cf_skill")){
            skillLookupValue = formContext.getAttribute("cf_skill").getValue();
        }
        if(formContext.getAttribute("cf_player")){
            playerLookupValue = formContext.getAttribute("cf_player").getValue();
        }

        var playerSkillName = "";

        
        playerSkillName = skillLookupValue!== null ? skillLookupValue[0].name : "";
        playerSkillName += playerLookupValue!== null ? `- ${playerLookupValue[0].name}` : "";

        formContext.getAttribute("cf_name").setValue(playerSkillName);


    }
}