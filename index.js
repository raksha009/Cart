const langs = require('langs')
const franc = require('franc')
const color = require('colors')

const input = process.argv[2];  
const LangCode = franc(input);

if (LangCode === 'und'){
	ErrorPrint();
}
else{
	const language = langs.where("3", LangCode);
	if (language === undefined) ErrorPrint();
	else console.log(`Our Best Language Guess is ${language.name}`.green);
}

function ErrorPrint(){
	console.log("Sorry, Couldn't guess its language".red);
}
