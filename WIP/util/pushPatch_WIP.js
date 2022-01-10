//	pushPatch.ns
//	by OKNewman

// 	Purpose: To update target scripts to latest release version on every host it can reach.
//	TODO: Create a "release" folder specific to home as source of truth.  

/** @param {NS} ns **/
export async function main(ns) {
	//var scanList = ns.scan()
	//
	//If scanList contains 'home', move home to end of array
	//
	//	for targetServer in scanList
	//		If targetServer is home
	//			ns.tprint("targetServer should NOT be home. Exiting script.");
	//			ns.exit();
	//
	//		check for target script
	//			if doesn't exist
	//			move on
	//		else
	//			try
	//				kill targetScript on targetServer
	//			catch
	//				"couldn't find script in targetServer"
	//				return
	//
	//		try
	//			delete target script from target server
	//		catch
	//			"could not find target script on server"
	//
	//		try
	//			upload "target.ns" from 'home/release/targetScript' to 'targetServer/targetScript'
}