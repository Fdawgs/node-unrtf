"use strict";

const btPowerSetRecursive = require("./bt-power-set");

/**
 * @author Frazer Smith
 * @description Utility function to generate unique combinations when provided with an
 * array of objects.
 * @param {object[]} originalSet - Array of objects.
 * @returns {object[]} All subsets of array of objects provided.
 */
function generateCombos(originalSet) {
	const powerSet = btPowerSetRecursive(originalSet);

	// Merge resulting array of arrays of objects into a single array of objects
	const reducedPowerSet = powerSet.map((subset) =>
		subset.reduce((acc, cur) => ({ ...acc, ...cur }), {})
	);

	// Remove duplicates and return
	return [...new Set(reducedPowerSet)];
}

module.exports = generateCombos;
