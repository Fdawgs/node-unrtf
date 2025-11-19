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
	const reducedPowerSet = powerSet.map((subset) => {
		const combined = {};

		const subsetLength = subset.length;
		for (let i = 0; i < subsetLength; i += 1) {
			Object.assign(combined, subset[i]);
		}
		return combined;
	});

	// Remove duplicates and return
	return [...new Set(reducedPowerSet)];
}

module.exports = generateCombos;
