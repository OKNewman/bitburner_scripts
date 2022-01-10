/** @param {NS} ns **/
// 	knockx2.ns by OKNewman
//	
//	purpose: Checks for root access on target server, then either spawns itsReal.ns or attempts to break in.
//
//	Note (Jan 9, 2022) 
//	I think this is functionally similar to OpenUpTheDoor, just with the thematic name 
//	but I've been kinda in the weeds lately. Will assess later

export async function main(ns) {
	var target = '';

	ns.tprint("-----------KNOCK KNOCK, START!-----")

	if (ns.args[0] != null) {
		target = ns.args[0];
		ns.tprint("Target " + target + " is local! Verifying...");
		if (ns.serverExists(target) == false) {
			ns.print("Server does not exist. Are you pushing the server name correctly?");
			return;
		}
		ns.tprint("LGTM, moving on...");
	}
	else {
		ns.print("No found argument for script! Are you pushing the server name?");
		return;
	}

	function tygn(){
			ns.tprint("Thanks for using Knock Knock!");
	}


	ns.tprint("Checking root access status...");
	
	if (ns.hasRootAccess(target) == true) {
		ns.tprint("Door's already open! Let's make some money.");
		ns.run("kitdrop.ns",1,target);
		ns.tprint("Ran kitdrop, gonna try to remote execute a hack loop on " + target);
		ns.exec("itsReal.ns", target, 1, target, 1);
		ns.exec("warpath.ns", 1, getHostname());
		return
		//get total RAM
		//launch QHS no args with x number of threads
		//exit this script
	}
	else {
		ns.tprint("Knock Knock? OPEN UP THE DOOR! IT'S REAL!");
		if (ns.fileExists("OpenUpTheDoor.ns", "home") == false) {
			ns.print("Could not find OpenUpTheDoor.ns! Did it get deleted from home?");
			ns.print("Moving on...");
		}
		ns.tprint("WITH A NON-STOP, KITDROP, MY CASE IS STEEL!")
		ns.run("kitdrop.ns",1,target);
		tygn()
		ns.exec("OpenUpTheDoor.ns", target, 1, target, 1);
		ns.tprint("DEBUG: Huh. OpenUpTheDoor.ns exec failed. Fix it.")
	}
	ns.tprint("-------------End of KNOCK KNOCK!-------------");
	return
}