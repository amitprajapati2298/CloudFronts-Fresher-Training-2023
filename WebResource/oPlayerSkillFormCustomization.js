var oPlayerSkillFormCustomization = {
    globalFormContext:null,
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


    },
    setMaxPoint: function(execContext){
        var formContext = execContext.getFormContext();
        var skillLookupValue = null;
        
        if(formContext.getAttribute("cf_skill")){
            skillLookupValue = formContext.getAttribute("cf_skill").getValue();
            var skillObject = skillLookupValue[0];
            oPlayerSkillFormCustomization.globalFormContext = formContext;
            Xrm.WebApi.retrieveRecord(skillObject.entityType, skillObject.id.replace("{","").replace("}",""), "?$select=cf_maxlevel").then(
                function success(result) {
                    debugger;
                    var formContext = oPlayerSkillFormCustomization.globalFormContext;
                    var maxLevel = result.cf_maxlevel;
                    var playerpoint  = formContext.getAttribute("cf_maxpoint").getValue();
                    if(playerpoint > maxLevel){
                        formContext.getAttribute("cf_maxpoint").setValue(null);
                        var alertStrings = { confirmButtonLabel: "OK", text: "Player Point should be less than or equal Max Level: "+maxLevel, title: "Change Player Point" };
                        var alertOptions = { height: 120, width: 260 };
                        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
                            function (success) {
                                console.log("Alert dialog closed");
                            },
                            function (error) {
                                console.log(error.message);
                            }
                        );
                    }


                    console.log("Retrieved values: Name: " + result.name + ", Revenue: " + result.revenue);
                    // perform operations on record retrieval
                },
                function (error) {
                    debugger;
                    console.log(error.message);
                    // handle error conditions
                }
            );
        }



    },
}