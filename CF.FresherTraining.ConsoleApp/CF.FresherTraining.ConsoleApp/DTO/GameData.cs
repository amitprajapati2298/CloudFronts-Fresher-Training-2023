using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CF.FresherTraining.ConsoleApp.DTO
{
    
    public class GameData
    {
        public string playerId {  get; set; }
        public string firstName { get;set; }
        public string lastName { get;set; }

    }

    public class Skill
    {
        public string skillId { get; set; }
        public string skillName { get; set; }
        public int maxPoint { get; set; }

        
    }

    public class PlayerSkill
    {
        public string playerId { get; set; }
        public string skillId { get; set; }
        public int playerPoint { get; set; }
    }
}
