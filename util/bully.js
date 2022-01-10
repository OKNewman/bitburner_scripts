//bully.ns
//by Newman

//	 Purpose - 	Infinite script which cycles through known servers, checks for root, and if so, starts to run a weaken on it.

// 	TODO - 	Improve the script to either run a weaken loop on one specified server ad nauseum, OR possibly make a "bully 
//			dispatch" script of sorts to push data on security level thresholds to port(s)
// 			

/** @param {NS} ns **/
export async function main(ns) {
	const serverList = ['n00dles',
						'sigma-cosmetics',
						'foodnstuff',
						'harakiri-sushi',
						'joesguns',
						'hong-fang-tea',
						'neo-net',
						'iron-gym',
						'max-hardware',
						'nectar-net',
						'silver-helix',
						'zer0',
						'phantasy',
						'omega-net',
						'I.I.I.I',
						'unitalife',
						'alpha-ent'
						];

	while (true) {
		for (let i = serverList.length - 1; i >= 0; i--) {
			try {
				ns.tprint("Now bullying " + serverList[i]);
				ns.tprint(await ns.weaken(serverList[i]));
			}
			catch (err) {
				ns.tprint("Can't bully " + serverList[i] + ": Don't have root.")
			}
		}
	}
}