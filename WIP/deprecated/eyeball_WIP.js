//	!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!
//	SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED
//	!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!
//	SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED
//	!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!DEPRECATED!!!
//	SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED!!!SCRAPPED
//	REASON(S):	- warpath doesn't really work all that well, and should be re-evaluated and refactored into
//				smaller scripts.
//				- Idea was vague when I started.
//
//
//	eyeball.js
//	by OKNewman

// 	Purpose: The idea here is to keep running warpath (which presumably just keeps self-replicating to all servers) 
//	until user stats/abilities are able to crack the servers it keeps hitting.

/** @param {NS} ns **/
export async function main(ns) {
	while(ns.isRunning("warpath.ns", 'home')){
		ns.sleep(5000);
	}
	ns.spawn("warpath.ns", 1);
}