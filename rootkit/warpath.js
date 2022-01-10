// warpath.ns
// by OKNewman

// 	Purpose: To run a scan of connected nodes, kitdrop them, attempt break-in, and then start 
//	over again on connected host machines 

/** @param {NS} ns **/
export async function main(ns) {
	const hitlist = ns.scan();
	var theHost = ns.getHostname();

	for (let targ = hitlist.length; targ > 0; targ--) {
		var target = hitlist[targ - 1];
		ns.tprint(theHost + ": Checking " + target);
		try {
			if (ns.fileExists("kitdrop.ns", target) == true) {
				ns.tprint(theHost + ": Looks like " + target + " has kitdrop.ns.");
				ns.tprint(theHost + ": Launching kitdrop.ns on " + target + "...");
				ns.exec("kitdrop.ns", theHost, 1, target);
				ns.tprint(theHost + ": Tried to kick off kitdrop on " + target);
			}
			else {
				ns.tprint(theHost + ": Couldn't find kitdrop.ns on " + target + "; Attempting to send...");
				await ns.scp("kitdrop.ns", ns.getHostname(), target);
				if (ns.fileExists("kitdrop.ns", target) == true)
					ns.exec("kitdrop.ns", theHost, 1, target);
			}
		}
		catch (err) {
			ns.tprint(theHost + ": Tried to check target, something went wrong.")
		}
	}
	ns.tprint(theHost + ": Thank you for using warpath!");
}