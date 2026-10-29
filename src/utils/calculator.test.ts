import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateWallEstimate, BAY_WIDTH_FEET } from './calculator';

test('BAY_WIDTH_FEET is standard 7 feet', () => {
  assert.equal(BAY_WIDTH_FEET, 7);
});

test('calculateWallEstimate correctly calculates standard 100ft, 6ft wall in Birbhum', () => {
  const result = calculateWallEstimate({
    lengthFeet: 100,
    heightFeet: 6,
    location: 'within_birbhum',
  });

  // 100 / 7 = 14.28 -> 15 bays
  assert.equal(result.baysCount, 15);
  // 15 bays * 6 panels per bay = 90 panels
  assert.equal(result.panelsCount, 90);
  // Pillar height = 6ft above ground + 3ft foundation = 9ft
  assert.equal(result.pillarHeightTotalFeet, 9);
  // Estimated days should be 1 day for 100ft
  assert.equal(result.estimatedDaysToInstall, 1);
  // Total cost should be positive and substantially cheaper than brick wall
  assert.ok(result.totalEstimatedCost > 0);
  assert.ok(result.savingsVsBrick > 0);
  assert.ok(result.savingsPercentage >= 40, `Savings ${result.savingsPercentage}% should be at least 40%`);
});

test('calculateWallEstimate scales appropriately for 7ft and 8ft wall heights', () => {
  const res6 = calculateWallEstimate({ lengthFeet: 140, heightFeet: 6, location: 'within_birbhum' });
  const res7 = calculateWallEstimate({ lengthFeet: 140, heightFeet: 7, location: 'within_birbhum' });
  const res8 = calculateWallEstimate({ lengthFeet: 140, heightFeet: 8, location: 'within_birbhum' });

  assert.equal(res6.panelsCount, 20 * 6);
  assert.equal(res7.panelsCount, 20 * 7);
  assert.equal(res8.panelsCount, 20 * 8);

  assert.ok(res7.totalEstimatedCost > res6.totalEstimatedCost);
  assert.ok(res8.totalEstimatedCost > res7.totalEstimatedCost);
});

test('calculateWallEstimate handles security add-ons and external locations', () => {
  const base = calculateWallEstimate({ lengthFeet: 200, heightFeet: 6, location: 'within_birbhum' });
  const withBarbed = calculateWallEstimate({ lengthFeet: 200, heightFeet: 6, location: 'within_birbhum', securityExtension: 'barbed_wire' });
  const outsideBirbhum = calculateWallEstimate({ lengthFeet: 200, heightFeet: 6, location: 'outside_birbhum' });

  assert.ok(withBarbed.securityAddonCost > 0);
  assert.ok(withBarbed.totalEstimatedCost > base.totalEstimatedCost);
  assert.ok(outsideBirbhum.transportCost > base.transportCost);
});

test('calculateWallEstimate applies volume rebate for 500+ and 1000+ ft', () => {
  const small = calculateWallEstimate({ lengthFeet: 100, heightFeet: 6, location: 'within_birbhum' });
  const large = calculateWallEstimate({ lengthFeet: 1000, heightFeet: 6, location: 'within_birbhum' });

  // Rate per running foot should be lower for 1000ft than 100ft due to bulk discount
  assert.ok(large.costPerRunningFoot < small.costPerRunningFoot);
});
