/** @param {NS} ns **/
export async function main(ns) {
	
	var target = ns.getHostname()

	var secLev = 0.0;
	var secMin = ns.getServerMinSecurityLevel(target);
	var servMoNow = 0.0;
	var servMoMax = ns.getServerMaxMoney(target);


	if (ns.args[0] != null) {
		target = ns.args[0]
	}

	ns.tprint("Make bread with the enemy... " + ns.getHostname() + " (TO WHAAAT?!) " + target);

	while (true) {
		secLev = ns.getServerSecurityLevel(target);
		servMoNow = ns.getServerMoneyAvailable(target);
		ns.print("Security Level: " + secLev);
		ns.print("Server Money: " + servMoNow);
		if (secLev > (secMin * 1.5)) {
			ns.print('Swinging on ' + target);
			await ns.weaken(target);
			secLev = ns.getServerSecurityLevel(target);
		}
		if (servMoNow < (servMoMax * 0.75)) {
			await ns.grow(target)
		}
		await ns.hack(target);
	}
}