var mahabharatGame = {
    memory : {
        players:[],
        skills:[],
        playerskills:[],
        playerCount:0,
        skillCount:0,
        constants:{
            player:"Player",
            skill:"skill"
        }
    },
    addPlayer:function(){
        var userinput = prompt("Please provide your Player Details in <first>:<lastname>");
        var firstname = userinput.split(":")[0];
        var lastname = userinput.split(":")[1];
        if(firstname !== "" && firstname !== undefined && lastname !== "" && lastname !== undefined){
            var playerObject = {};
            playerObject["id"] = mahabharatGame.memory.playerCount++;
            playerObject["firstname"] = firstname;
            playerObject["lastname"] = lastname;
            gameScreen.addContentToConsole(`${firstname} ${lastname}`, mahabharatGame.memory.constants.player);
            mahabharatGame.memory.players.push(playerObject);
            console.log(mahabharatGame.memory);
        }else{
            alert("Please enter the Correct First Name and Last name")
        }
        
    },
    addSkill: function () {
        var userinput = prompt("Please provide your skills in <skillName>:<maxLevel>");
        var skilname = userinput.split(":")[0];
        var maxLevelString = userinput.split(":")[1];
        if(skilname !== "" && maxLevelString !== "" && skilname !== undefined && maxLevelString !== undefined){
            var maxlevel = parseInt(maxLevelString);
            var skillObject = {};
            skillObject["id"] = mahabharatGame.memory.skillCount++;
            skillObject["skilname"] = skilname;
            skillObject["maxlevel"] = maxlevel;
            gameScreen.addContentToConsole(`${skilname} ${maxlevel}`, mahabharatGame.memory.constants.skill);
            mahabharatGame.memory.skills.push(skillObject);
            console.log(mahabharatGame.memory);
        }else{
            alert("Please enter the Correct Skillname and Max Levels")
        }
        
    }
    
}

var gameScreen= {
    addContentToConsole: function (message, messageType){
        if(messageType === mahabharatGame.memory.constants.player){
            var existingText = document.getElementById("playerList").innerHTML ;
            if(existingText !== ""){
                document.getElementById("playerList").innerHTML = existingText +"<br>" + message;
            }else{
                document.getElementById("playerList").innerHTML = message;
            }
            
        }else if(messageType === mahabharatGame.memory.constants.skill){
            var existingText = document.getElementById("skillList").innerHTML ;
            if(existingText !== ""){
                document.getElementById("skillList").innerHTML = existingText +"<br>" + message;
            }else{
                document.getElementById("skillList").innerHTML = message;
            }
        }
        
    },
    
    clearTheConsoleScreen: function (){
        document.getElementById("skillList").innerHTML = "";
        document.getElementById("playerList").innerHTML = "";
    }
}



