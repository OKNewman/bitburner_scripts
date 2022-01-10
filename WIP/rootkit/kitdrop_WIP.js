//	kitdrop.ns
//	by OKNewman

// 	Purpose - To install a group of scripts to be run on a target server, with the intent to hack and replicate.

/** @param {NS} ns **/
export async function main(ns) {
	var target = ns.args[0];
	var source = ns.getHostname();
	const files = ["itsReal.ns", "knockx2.ns", "OpenUpTheDoor.ns", "warpath.ns", "kitdrop.ns", "bully.ns"];

	if(target == 'home'){
		ns.tprint("Whelp, looks like we're back home. Later, tater!")
		ns.exit();
	}

	for (let script = files.length; script > 0; script--) {
		var file = files[script - 1];
		if (ns.fileExists(file, target)==false); {
			await ns.scp(file, source, target);
			ns.tprint(source + ": Copying " + file + " to " + target);
		}
	}

	//ns.tprint("Attempting to kitdrop from " + source + " to " + target);
	//await ns.scp(files, source, target);

	if (ns.fileExists("OpenUpTheDoor.ns", target) == true) {
		ns.tprint(source + ": Kit dropped at " + target + " - Gonna try to OpenUpTheDoor");
		ns.exec("OpenUpTheDoor.ns", target, 1, target);
	}

	else {
		ns.tprint(source + ": Couldn't find kit files.");
	}
	return
}