/**
 * Precast Concrete Boundary Wall ("China Panchir") Estimator Logic
 * Shakti Enterprise, Sainthia, Birbhum
 */

export interface WallEstimateParams {
  lengthFeet: number; // e.g. 50 to 5000 ft
  heightFeet: 6 | 7 | 8; // standard heights: 6ft, 7ft, 8ft
  location: 'within_birbhum' | 'outside_birbhum';
  securityExtension?: 'none' | 'barbed_wire' | 'concertina_coil';
  panelGrade?: 'standard_m30' | 'heavy_duty_m35';
}

export interface WallEstimateResult {
  lengthFeet: number;
  heightFeet: number;
  bayWidthFeet: number;
  baysCount: number;
  pillarsCount: number;
  panelsCount: number;
  pillarHeightTotalFeet: number; // includes 3ft underground foundation
  estimatedDaysToInstall: number;
  materialCost: number;
  pillarCost: number;
  laborAndErectionCost: number;
  transportCost: number;
  securityAddonCost: number;
  totalEstimatedCost: number;
  costPerRunningFoot: number;
  traditionalBrickWallCost: number;
  savingsVsBrick: number;
  savingsPercentage: number;
  locationLabel: string;
}

export const BAY_WIDTH_FEET = 7; // standard 7ft centre-to-centre distance between H-columns

export function calculateWallEstimate(params: WallEstimateParams): WallEstimateResult {
  const length = Math.max(10, Math.round(params.lengthFeet || 100));
  const height = params.heightFeet;
  const isWithinBirbhum = params.location === 'within_birbhum';

  // Number of 7ft bays needed
  const baysCount = Math.max(1, Math.ceil(length / BAY_WIDTH_FEET));
  // 1 pillar between bays, plus 1 terminating pillar, plus ~5% buffer for corners/turns
  const cornerBuffer = Math.max(1, Math.round(baysCount * 0.05));
  const pillarsCount = baysCount + 1 + cornerBuffer;

  // Each panel is 7ft wide and 1ft (12 inches) high
  const panelsPerBay = height;
  const panelsCount = baysCount * panelsPerBay;

  // Pillar total height = wall height above ground + 3ft deep foundation in PCC
  const pillarHeightTotalFeet = height + 3;

  // Base panel unit cost
  const basePanelRate = params.panelGrade === 'heavy_duty_m35' ? 290 : 250; // per panel (7ft x 1ft)
  const materialCost = panelsCount * basePanelRate;

  // Base pillar unit cost (heavy H-beam post with 4 high-tensile wire cords)
  const pillarUnitRate = pillarHeightTotalFeet * 75; // ~₹75 per foot of H-pillar
  const pillarCost = pillarsCount * pillarUnitRate;

  // Erection and auger digging labor rate
  const laborRatePerRunningFoot = 75;
  const laborAndErectionCost = length * laborRatePerRunningFoot;

  // Transport rate from Sainthia factory
  // Within Birbhum: flat local logistics, outside Birbhum adds long-haul freight
  const transportPerFoot = isWithinBirbhum ? 20 : 50;
  const transportCost = Math.round(length * transportPerFoot);

  // Security add-ons
  let securityAddonCost = 0;
  if (params.securityExtension === 'barbed_wire') {
    securityAddonCost = Math.round(length * 45); // Y-angle extension + 3 strands
  } else if (params.securityExtension === 'concertina_coil') {
    securityAddonCost = Math.round(length * 85); // Razor blade punch coil
  }

  const subtotal = materialCost + pillarCost + laborAndErectionCost + transportCost + securityAddonCost;
  
  // Volume discount for large boundaries (> 500 ft)
  let discountRate = 0;
  if (length >= 1000) {
    discountRate = 0.08; // 8% volume rebate
  } else if (length >= 500) {
    discountRate = 0.04; // 4% volume rebate
  }

  const totalEstimatedCost = Math.round(subtotal * (1 - discountRate));
  const costPerRunningFoot = Math.round(totalEstimatedCost / length);

  // Installation speed: 1 erection team installs ~150-200 running feet per day
  const estimatedDaysToInstall = Math.max(1, Math.ceil(length / 180));

  // Traditional 10" brick wall comparison:
  const brickRatePerFoot = height === 6 ? 950 : height === 7 ? 1050 : 1180;
  const traditionalBrickWallCost = length * brickRatePerFoot;
  const savingsVsBrick = Math.max(0, traditionalBrickWallCost - totalEstimatedCost);
  const savingsPercentage = Math.round((savingsVsBrick / traditionalBrickWallCost) * 100);

  return {
    lengthFeet: length,
    heightFeet: height,
    bayWidthFeet: BAY_WIDTH_FEET,
    baysCount,
    pillarsCount,
    panelsCount,
    pillarHeightTotalFeet,
    estimatedDaysToInstall,
    materialCost,
    pillarCost,
    laborAndErectionCost,
    transportCost,
    securityAddonCost,
    totalEstimatedCost,
    costPerRunningFoot,
    traditionalBrickWallCost,
    savingsVsBrick,
    savingsPercentage,
    locationLabel: isWithinBirbhum ? 'বীরভূমের মধ্যে (সাঁইথিয়া / বোলপুর / সিউড়ি / রামপুরহাট)' : 'বীরভূমের বাইরে (বর্ধমান / মুর্শিদাবাদ / ঝাড়খণ্ড)',
  };
}
