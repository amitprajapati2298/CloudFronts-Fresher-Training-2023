using CF.FresherTraining.ConsoleApp.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CF.FresherTraining.ConsoleApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            List<GameData> playerList = new List<GameData>();
            List<Skill> skills = new List<Skill>();
            List<PlayerSkill> playerSkills = new List<PlayerSkill>();
            int playerCount = 0;
            int skillCount = 0;
            string userInput = string.Empty;
            #region Code for Player Input
            userInput = GetPlayerData(playerList, ref playerCount);


            #endregion

            //Clearing User Input
            userInput = string.Empty;

            Console.WriteLine("Please provide your skills in <skillName>:<maxLevel> and Type 'Terminate' to close the entry");
            do
            {

                userInput = Console.ReadLine();
                try
                {
                    Skill skill = new Skill();
                    skill.skillId = Convert.ToString(skillCount++);
                    skill.skillName = userInput.Split(':')[0];
                    skill.maxPoint = Convert.ToInt32(userInput.Split(':')[1]);
                    skills.Add(skill);
                }
                catch (Exception)
                {

                    continue;
                }


            } while (userInput != "Terminate");
            Console.WriteLine("------------------------------------------------------------");
            Console.WriteLine("Below are list of players that you have entered");
            foreach (var currentPlayer in playerList)
            {
                Console.WriteLine($"{currentPlayer.playerId} | {currentPlayer.firstName} | {currentPlayer.lastName}");
            }
            Console.WriteLine("------------------------------------------------------------");
            Console.WriteLine("Below are list of available Skills for the above player list");
            foreach (var currentSkill in skills)
            {
                Console.WriteLine($"{currentSkill.skillId} | {currentSkill.skillName} | {currentSkill.maxPoint}");
            }
            //Clearing User Input
            userInput = string.Empty;

            foreach (var currentPlayer in playerList)
            {
                foreach (var currentSkill in skills)
                {
                    Console.WriteLine($"Please enter the Skill Level assigned to {currentPlayer.firstName} {currentPlayer.lastName} for {currentSkill.skillName} with Max Level: {currentSkill.maxPoint}");
                    userInput = Console.ReadLine();
                    PlayerSkill playerSkill = new PlayerSkill();
                    playerSkill.playerId = currentPlayer.playerId;
                    playerSkill.skillId = currentSkill.skillId;
                    playerSkill.playerPoint = Convert.ToInt32(userInput);
                    playerSkills.Add(playerSkill);
                }
            }

            Console.WriteLine("------------------------------------------------------------");
            foreach (var currentPlayerSkill in playerSkills)
            {
                GameData currentPlayer = playerList.Where(x => x.playerId == currentPlayerSkill.playerId).First();
                Skill currentSkill = skills.Where(x => x.skillId == currentPlayerSkill.skillId).First();


                Console.WriteLine($"Player {currentPlayer.firstName} has {currentSkill.skillName} with Point: {currentPlayerSkill.playerPoint}");
            }

            Console.ReadLine();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="playerList"></param>
        /// <param name="playerCount"></param>
        /// <returns></returns>
        private static string GetPlayerData(List<GameData> playerList, ref int playerCount)
        {
            string userInput;
            Console.WriteLine("Please provide your input in <first>:<lastname> and Type 'Terminate' to close the entry");
            do
            {

                userInput = Console.ReadLine();
                try
                {
                    GameData player1 = new GameData();
                    player1.playerId = Convert.ToString(playerCount++);
                    player1.firstName = userInput.Split(':')[0];
                    player1.lastName = userInput.Split(':')[1];
                    playerList.Add(player1);
                }
                catch (Exception)
                {

                    continue;
                }


            } while (userInput != "Terminate");
            return userInput;
        }
    }
}
