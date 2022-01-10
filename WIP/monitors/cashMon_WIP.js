//	cashMon.ns
//	by OKNewman

//	Purpose: Monitors known severs for cash levels, then compares maximum cash level to current
//		cash level, and if current cash is 75% of maxCash, posts servername to port for a banker.js instance
//		to pick up and begin growing.

//	Recommended for: home, purcahsed servers


/** @param {NS} ns **/
export async function main(ns) {
	var servMoNow = 0.0;
	var servMoMax = ns.getServerMaxMoney(target);

	if (servMoNow < (servMoMax * 0.75)) {
		await ns.grow(target)
	}
}