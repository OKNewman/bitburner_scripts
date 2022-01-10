//	OpenUpTheDoor.ns
//	by OKNewman

//	Purpose:	Quickly attempts to crack into target host, kitdrops it, kicks off a warpath 
//				and starts a hack miner on target host.    

/** @param {NS} ns **/
export async function main(ns) {
	var target = ns.getHostname();
	var myHacking = ns.getHackingLevel();
	var minHacking = ns.getServerRequiredHackingLevel(target);

	// Checks for supplied arg for a hostname, otherwise uses current hostname
	if (ns.args[0] != null) {
		target = ns.args[0]
	}
	else {
		target = ns.getHostname();
	}

	ns.tprint(target + ": Trying to open up " + target + "\n");

	if (myHacking < minHacking) {
		ns.tprint(target + ": ABORTING SCRIPT: Hacking Level is TOO LOW.");
		ns.tprint(target + ": Killing script, starting warpath");
		ns.spawn("warpath.ns", 1);
	}

	var portLocks = ns.getServerNumPortsRequired(target);
	var hasFtp, hasSsh, hasSmtp, hasHttp, hasSql = false;
	var toolbox = 0;

	function toolCheck(toolbox) {
		ns.tprint(target + ": Checking my tools...");
		if (ns.fileExists("FTPCrack.exe", "home")) {
			ns.tprint(target + ": FTP GOOD");
			toolbox++;
			hasFtp = true;
		}
		if (ns.fileExists("BruteSSH.exe", "home")) {
			ns.tprint(target + ": SSH GOOD");
			toolbox++;
			hasSsh = true;
		}
		if (ns.fileExists("relaySMTP.exe", "home")) {
			ns.tprint(target + ": SMTP GOOD");
			toolbox++;
			hasSmtp = true;
		}
		if (ns.fileExists("HTTPWorm.exe", "home")) {
			ns.tprint(target + ": WORM GOOD");
			toolbox++;
			hasHttp = true;
		}
		if (ns.fileExists("SQLInject.exe", "home")) {
			ns.tprint(target + ": SQL GOOD");
			toolbox++;
			hasSql = true;
		}

		ns.tprint(target + ": Tools: " + toolbox);
		ns.tprint(target + ": Locks: " + portLocks);

		ns.tprint(target + ": Assessing...")
		if (portLocks > toolbox) {
			ns.tprint(target + ": More locks than we've got tools. Cannot proceed with hack.");
			ns.tprint(target + ": Shutting down, and kicking off warpath.");
			ns.spawn("warpath.ns", 1);
		}
	}


	function crackIt() {
		ns.tprint("Cracking the nut...");
		if (hasFtp == true) {
			ns.ftpcrack(target);
		}
		if (hasSsh == true) {
			ns.brutessh(target);
		}
		if (hasSmtp == true) {
			ns.relaysmtp(target);
		}
		if (hasHttp == true) {
			ns.httpworm(target);
		}
		if (hasSql == true) {
			ns.sqlinject(target);
		}

		ns.tprint("Dropping the bomb...");
		ns.nuke(target);
	}

	toolCheck(toolbox);
	ns.tprint("Tools OK!");
	crackIt();


	ns.tprint("Securing the bag.");
	ns.exec("itsReal.ns", target, 1, target);
	ns.spawn("warpath.ns", 1);
	ns.tprint("DEBUG: itsReal.ns exec call faild to execute. Fix it.");
	return
}