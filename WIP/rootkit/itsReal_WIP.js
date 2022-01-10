/** @param {NS} ns **/
export async function main(ns) {	
	var target = ns.getHostname()

	if (ns.args[0] != null) {
		target = ns.args[0]
	}

	ns.tprint(ns.getHostname() + " is making bread with the enemy, " + target);

	while (true) {
		await ns.hack(target);
		//TODO: Add logging for average cash per hack?
		//TODO: See how much RAM stat monitoring costs
	}
}