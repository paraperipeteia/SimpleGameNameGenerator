// Purpose: To generate a random name for a fighting game
ApplyLogicToGeneratorButton();
ApplyLogicToCopyButton();
FlashTitle();
var defaultTextColor = '#4CAF50';

const adj = 
    [
        "Road", 
        "Street",
        "Rage",
        "Mortal",
        "Crass",
        "Crypto", 
        "Cyber",
        "Primal",
        "Eternal",
        "Endless",
        "Pummel",
        "Skid",
        "Gunk",
        "Rabid",
        "Cantankerous",
        "Scrum",
        "Scourge",
        "Muscle",
        "Raw",
        "Obscene", 
        "Obsolete", 
        "Nihilist", 
        "Murder", 
        "Lethal", 
        "Crazy", 
        "Loose-Cannon",
        "Insane",
        "Skunkworks",
        "Lobotomy",
        "Licks & Kicks",
        "Poutine",
        "Lumberjerk",
        "Blade",
        "Fury",
        "Crazed",
        "Rotten",
        "Hammer",
        "Back Alley",
        "Knockout",
        "Fighting",
        "Punch-Up",
        "Elite",
        "Jettison",
        "Junkyard",
        "Fast",
        "Flash",
        "Quick",
        "Spaghetti",
        "Curry Noodle",
        "Borscht",
        "Hamburger",
        "Donut",
        "Coffee Addled",
        "Gastro",
        "Manic",
        "Turbulent",
        "Soda Junkie",
        "Pepsi Pounding",
        "Cola Chugging",
        "Redbull",
        "Monster Energy-Drinking"
    ];

const noun =
    [
        "Pugilist", 
        "Brawler",
        "Fighter",
        "Belligerent",
        "Quarreler",
        "Throwdown", 
        "Puncher", 
        "Kicker", 
        "K.O. Kings",
        "Battle Kings",
        "Striker",
        "!",
        "Splatter",
        "Gutslingers",
        "Nutcases",
        "Slobberknockers",
        "Slammers",
        "Attack Combat",
        "Combatants",
        "Combo-Squad Brawl",
        "Dance of Danger",
        "Ring Fight",
        "Dragons",
        "Breaker",
        "Rivals",
        "Hit Parade"
    ];

const modifier = 
    [
        "Deluxe",
        "Special Edition",
        "Turbo",
        "Champion Edition",
        "Redux",
        "Director's Cut",
        "2.X",
        "Revisited",
        "Re-Revisited",
        "Reblasted",
        "Beat Down Edition",
        "Retorn Edition",
        "Uppercut Revision Edition",
        "Jawbreaker Special Recracked Edition",
        "Re-purposed Hypercut",
        "Gold", 
        "TKO2K",
        "Champion Redux"
    ];

const symbols = [":", " -", "!", " POW!", " X", "++", " Ahh!", "" ];

const preModifier = 
    [
        "Ultra",
        "Super",
        "Extra",
        "Absolute",
        "Platinum",
        "Complete!",
        "Total",
        "Maximum",
        "Showdown",
        "Hyper", 
        "Omega", 
        "Shatter",
        "Total Destruction",
        "Carnage",
        "Ravenous",
        "Final"
    ];

var list = [adj, noun, symbols, preModifier, modifier];
var result = "";

function ApplyLogicToGeneratorButton()
{
    var button = document.getElementById("generateButton");
    button.addEventListener("click", () => GenerateName());
}

function ApplyLogicToCopyButton(){
    var button = document.getElementById("copyButton");
    button.addEventListener("click", () => CopyToClipboard());
}

function GenerateName()
{
    var name = DoResult();
    document.getElementById("bottomHeader").innerHTML = name; 
}

function CopyToClipboard()
{
    var copyText = document.getElementById("bottomHeader").innerHTML;
    navigator.clipboard.writeText(copyText);
    document.execCommand("copy");
    alert("Copied the text: " + copyText);
}

function GetRand(item)
{
    return `${item[Math.floor(Math.random() * item.length)]}`;
}

function DoResult()
{
    var result = "";
    var randNoun = GetRand(noun); 
    result += GetRand(adj); 
    result += randNoun.length == 1 ? randNoun : " " + randNoun; 
    result += GetRand(symbols); 
    result += " " + GetRand(preModifier);
    result += " " + GetRand(modifier);     
    return result; 
}

function FlashTitle()
{
    var current = document.getElementById("topHeader").style.color;
    document.getElementById("topHeader").style.color = current == "orange" ? defaultTextColor : "orange";
    setTimeout(() => FlashTitle(), 300);
}
