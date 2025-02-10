import { getProductImageUrl } from '@/lib/cloudinary/config'

// Helper to create image URLs with different transformations
const createImageUrls = (filename: string) => ({
  full: getProductImageUrl(filename, 'product'),
  thumbnail: getProductImageUrl(filename, 'thumbnail'),
  placeholder: getProductImageUrl(filename, 'placeholder')
})

export const PRODUCT_IMAGES = {
  // Pain & Fever
  'advil-ibuprofen-pain-reliever': createImageUrls('advil-ibuprofen-pain-reliever-fever-reducer-liqui-gels-160ct.png'),
  'aleve-naproxen-sodium': createImageUrls('aleve-naproxen-sodium-tablets-220mg-pain-reliever-fever-reducer-caplets-90ct.png'),
  'tylenol-extra-strength-500mg-caplets-24ct': createImageUrls('tylenol-extra-strength-500mg-caplets-24ct.png'),
  'bayer-aspirin-low-dose': createImageUrls('bayer-aspirin-low-dose-81mg-enteric-tablets-120ct.png'),

  // Cold & Flu
  'dayquil-cold-flu': createImageUrls('dayquil-cold-flu-liquicaps-24ct.png'),
  'mucinex-fast-max': createImageUrls('mucinex-fast-max-cld-flu-sr-thr-cpl-20ct.png'),
  'mucinex-night-shift': createImageUrls('mucinex-fast-max-nt-shft-cld-flu-6oz.png'),
  'theraflu-daytime': createImageUrls('theraflu-flu-relief-max-strength-daytime-packets-6ct.png'),
  'vicks-dayquil': createImageUrls('vicks-dayquil-cold-flu-multi-symptom-relief-24ct.png'),
  'vicks-vaporub': createImageUrls('vicks-vaporub-cough-suppressant-topical-ointment-50g.png'),

  // Allergy Care
  'zyrtec-24-hour': createImageUrls('zyrtec-24-hour-allergy-relief-14ct.png'),
  'benadryl-allergy': createImageUrls('benadryl-allergy-dye-free-liquigels-24ct.png'),
  'claritin-24hr': createImageUrls('claritin-24hr-10mg-tablets-30ct.png'),
  'xyzal-allergy': createImageUrls('xyzal-24hr-allergy-5mg-tablet-10ct.png'),
  'flonase-sensimist': createImageUrls('flonase-sensimist-24hr-allergy-relief-scent-free-nasal-spray-0.34oz.png'),
  'childrens-flonase': createImageUrls('childrens-flonase-sensimist-60-sprays.png'),

  // Digestive Health
  'pepto-bismol-original': createImageUrls('pepto-bismol-5-symptom-relief-original-liquid-8oz.png'),
  'pepto-bismol-kids': createImageUrls('pepto-bismol-kids-gummies-24ct.png'),
  'pepto-bismol-cherry': createImageUrls('pepto-bismol-liquid-cherry-8oz.png'),
  'pepto-bismol-max': createImageUrls('pepto-bismol-maximum-strength-liquid-8oz.png'),
  'imodium-anti-diarrheal': createImageUrls('imodium-anti-diarrheal-multi-symptom-relief-caplets-18ct.png'),
  'tums-chewy-bites': createImageUrls('tums-chewy-bites-extra-strength-assorted-berry-tablets-32ct.png'),
  'mylanta-antacid': createImageUrls('mylanta-antacid-classic-liq-12oz.png'),
  'phillips-milk-magnesia': createImageUrls('phillips-milk-of-magnesia-original-liquid-12oz.png'),
  'prilosec-otc': createImageUrls('prilosec-otc-heartburn-relief-and-acid-reducer-tablets-14ct.png'),

  // Children's Medicine
  'childrens-tylenol-cold': createImageUrls('tylenol-childrens-cold-flu-grape-flavor-liquid-4oz.png'),
  'childrens-mucinex': createImageUrls('childrens-mucinex-stuffy-nose-chest-congestion-very-berry-flavor-4oz.png'),
  'pediasure-chocolate': createImageUrls('pediasure-grow-gain-kids-nutritional-shake-chocolate.png'),
  'pediasure-vanilla': createImageUrls('pediasure-grow-gain-kids-nutritional-shake-vanilla.png'),
  'zarbees-day': createImageUrls('zarbees-childrens-cough-mucus-day-syrup-4oz.png'),
  'zarbees-night': createImageUrls('zarbees-childrens-cough-mucus-night-syrup-4oz.png'),
  'hylands-kids-day': createImageUrls('hyland-s-kids-cough-mucus-daytime-grape-liquid-4o.png'),
  'hylands-kids-night': createImageUrls('hylands-kids-mucus-cough-nt-grp-liq-4oz.png'),
  'natrol-kids-melatonin': createImageUrls('natrol-kids-melatonin-berry-gummies-90ct.png'),

  // First Aid
  'band-aid-flexible': createImageUrls('band-aid-brand-flexible-fabric-adhesive-bandages-30-count.png'),
  'band-aid-kids': createImageUrls('band-aid-bandages-kids-hello-kitty-assorted-20ct.png'),

  // Skincare
  'voltaren-topical-gel': createImageUrls('voltaren-topical-gel-1-50g.png'),
  'bengay-ultra-strength': createImageUrls('bengay-ultra-strength-cream-2oz.png'),

  // Cough & Sore Throat
  'halls-honey-lemon': createImageUrls('halls-relief-honey-lemon-cough-drops-30ct.png'),
  'ricola-swiss-herb': createImageUrls('ricola-bag-s-f-swiss-herb-drp-19ct.png'),
  'mucinex-instasoothe': createImageUrls('mucinex-instasoothe-honey-echinacea-throat-drop-20ct.png'),
  'cepacol-extra-strength': createImageUrls('cepacol-extra-strength-sore-throat-honey-lemon-lozenges-16ct.png'),
  'robitussin-max-strength': createImageUrls('robitussin-maximum-strength-cough-chest-congestion-dm-8oz.png'),

  // Nasal Care
  'afrin-original': createImageUrls('afrin-original-spray-30ml.png'),
  'sudafed-pe': createImageUrls('sudafed-pe-pressure-pain-max-strength-caplets-24ct.png'),

  // Sleep & Stress
  'unisom-sleeptabs': createImageUrls('unisom-sleeptabs-doxylamine-succinate-tablets-16ct.png'),

  // Motion Sickness
  'dramamine-less-drowsy': createImageUrls('dramamine-all-day-less-drowsy-motion-sickness-relief-8ct.png'),

  // Joint Health
  'move-free-advanced': createImageUrls('move-free-advanced-plus-joint-health-with-msm-tablets-120ct.png'),

  // Feminine Care
  'monistat-3': createImageUrls('monistat-3-vaginal-antifungal-prefilled-cream-3x5gm.png'),
  'monistat-7': createImageUrls('monistat-7-vaginal-antifungal-cream-combination-pack.png'),

  // Supplements
  'megared-omega-3': createImageUrls('megared-omega-3-350mg-krill-oil-softgels-60ct.png'),
  'florastor-kids': createImageUrls('florastor-kids-probiotic-packets-20-ct.png'),
  'nature-made-vitamin-c': createImageUrls('nature-made-vitamin-c-500mg-liquigel-60ct.png'),

  // Antacids
  'alka-seltzer-extra': createImageUrls('alka-seltzer-extra-strength-effervescent-tablets-24ct.png'),
  'alka-seltzer-plus': createImageUrls('alka-seltzer-plus-day-night-multi-symptom-cold-flu-liquid-gels-20ct.png'),
  'pepcid-max': createImageUrls('pepcid-max-tablet-original-8ct.png'),

  // Cold & Flu
  'coricidin-hbp-chest': createImageUrls('coricidin-hbp-chest-cold-flu-tablets-10ct.png'),
  'coricidin-hbp-cough': createImageUrls('coricidin-hbp-chest-congestion-cough-liquid-gels-20ct.png'),
  'coricidin-hbp-max': createImageUrls('coricidin-hbp-maximum-strength-flu-tablets-24ct.png'),
  'zicam-cold-remedy': createImageUrls('zicam-cold-remedy-rapidmelt-cherry-flavor-tablets-25ct.png'),

  // Default
  placeholder: createImageUrls('placeholder.svg')
} as const

// Type for image keys
export type ProductImageKey = keyof typeof PRODUCT_IMAGES 