//	newScript.js
//	by OKNewman
//
// 	Purpose: quickly create a new NS2 script template at localhost:WIP/<newScript>.
//	
//	Runs: Once, then stops.
//
//	Recommended for: home; all non-home files are wiped after augment installations

/** @param {NS} ns **/
export async function main(ns) {
	var newScriptName = ns.args[0]+".js";
	var	writeContents = "//	"+newScriptName+"\n//	by OKNewman\n//\n// 	Purpse: <why is this script>\n//	\n//	Runs: <Once/Forever, until manually stopped/and then ends.>\n//\n//	Recommended for: <platform to run>\n\n/** @param {NS} ns **/\nexport async function main(ns) {\n\t\n}"

	ns.write("/WIP/"+ newScriptName, writeContents, "w");
}