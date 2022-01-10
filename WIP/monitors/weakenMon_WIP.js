//	WeaknMon.ns
//	by OKNewman

//	Purpose: Monitors known severs for root access, then compares minimum sec level to current
//		sec level, and if current sec is 1.5x minsec, posts servername to port for a bully.js instance
//		to pick up and begin weakening.
//
//	Note: At the time of this writing (22/01/10) bully.js just cycles through known server names and sends
//		a weaken() at them if they're open. It's just brute-forcing. This should make weaken calls more
//		efficiently.

//	Recommended for: home, purcahsed servers

/** @param {NS} ns **/
export async function main(ns) {
	var secLev = 0.0;
	var secMin = ns.getServerMinSecurityLevel(target);
}