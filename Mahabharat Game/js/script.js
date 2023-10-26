var mahabharatGame = {
    memory : {
        players:[],
        skills:[],
        playerskills:[],
        playerCount:0,
        skillCount:0,
        constants:{
            player:"Playacha ers",
            skill:"skill"
        }
    },
    addPlayer:function(){
        var userinput = prompt("Please provide your Player Details in <first>:<lastname>");
        var firstname = userinput.split(":")[0];
        var lastname = userinput.split(":")[1];
        var playerObject = {};
        playerObject["id"] = mahabharatGame.memory.playerCount++;
        playerObject["firstname"] = firstname;
        playerObject["lastname"] = lastname;
        gameScreen.addContentToConsole(`${firstname} ${lastname}`, mahabharatGame.memory.constants.player);
        mahabharatGame.memory.players.push(playerObject);
        console.log(mahabharatGame.memory);
    },
    addSkill: function () {
        var userinput = prompt("Please provide your skills in <skillName>:<maxLevel>");
        var skilname = userinput.split(":")[0];
        var maxlevel = parseInt(userinput.split(":")[1]);
        var skillObject = {};
        skillObject["id"] = mahabharatGame.memory.skillCount++;
        skillObject["skilname"] = skilname;
        skillObject["maxlevel"] = maxlevel;
        gameScreen.addContentToConsole(`${skilname} ${maxlevel}`, mahabharatGame.memory.constants.skill);
        mahabharatGame.memory.skills.push(skillObject);
        console.log(mahabharatGame.memory);
    }
    
}

var gameScreen= {
    addContentToConsole: function (message, messageType){
        if(messageType === mahabharatGame.memory.constants.player){
            var existingText = document.getElementById("playerList").innerHTML ;
            document.getElementById("playerList").innerHTML = existingText +"<br>" + message;
        }else if(messageType === mahabharatGame.memory.constants.skill){
            var existingText = document.getElementById("skillList").innerHTML ;
            document.getElementById("skillList").innerHTML = existingText +"<br>" + message;
        }
        
    },
    
    clearTheConsoleScreen: function (){
        document.getElementById("skillList").innerHTML = "";
        document.getElementById("playerList").innerHTML = "";
    }
}



