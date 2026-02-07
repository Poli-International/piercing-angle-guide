// =====================================================
// PIERCING ANGLE & DEPTH GUIDE - MAIN LOGIC
// Poli International Tool #15
// Professional piercing reference data and interactive functionality
// =====================================================

// COMPREHENSIVE PIERCING DATA
const piercingData = {
  // ===== EAR PIERCINGS =====
  'earlobe': {
    name: 'Earlobe Piercing',
    optimalAngle: '90° (perpendicular through lobe)',
    insertionDepth: '6-8mm through soft tissue',
    tissueType: 'Soft tissue (no cartilage)',
    healingTime: '6-8 weeks',
    jewelryGauge: '18g (1.0mm) or 16g (1.2mm) [14g (1.6mm) for stretching]',
    jewelryLength: '6-8mm barbell or stud',
    jewelryType: 'Labret stud, barbell, or CBR',
    downsizeTime: '4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Center of lobe, avoiding edges and cartilage boundary. Mark with client in natural sitting position, not reclined.</p>
      <p><strong>Anatomical Considerations:</strong> Assess lobe thickness with calipers. Avoid placing too close to face (minimum 6mm from edge) to prevent tearing. Consider glasses, headphones, and earbuds in placement.</p>
      <p><strong>Angle Guidelines:</strong> Straight perpendicular angle ensures jewelry sits flush. Verify entry and exit points are level and centered.</p>`,
    safety: `<ul>
      <li><strong>Vascular Care:</strong> Avoid visible blood vessels, especially in thin lobes</li>
      <li><strong>Scar Tissue:</strong> Never pierce through previous piercing scars or keloids</li>
      <li><strong>Children:</strong> For minors, ensure parent/guardian consent and child cooperation</li>
      <li><strong>Infection Risk:</strong> Low risk if proper aftercare followed; avoid touching with unwashed hands</li>
      <li><strong>Stretching Considerations:</strong> If client plans to stretch, start with 14g minimum</li>
    </ul>`,
    refuse: `<ul>
      <li>Active infection, eczema, or skin condition on earlobe</li>
      <li>Extremely thin lobes (<3mm thickness) that won't support jewelry safely</li>
      <li>Excessive scar tissue from previous piercings or trauma</li>
      <li>Client requests placement too close to edge (increased tearing risk)</li>
      <li>Visible keloid history on ears (high recurrence risk)</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Clean 2x daily with sterile saline spray. Spray, let sit 30 seconds, gently pat dry with clean gauze. No twisting or rotating jewelry.</p>
      <p><strong>First 2 Weeks:</strong> Avoid sleeping on piercing, touching with unwashed hands, swimming pools, or submerging in water.</p>
      <p><strong>Weeks 3-6:</strong> Continue cleaning routine, avoid changing jewelry before 6-8 weeks even if healed.</p>
      <p><strong>Warning Signs:</strong> Excessive redness, swelling, heat, green/yellow discharge, or severe pain requires professional evaluation.</p>`
  },

  'helix': {
    name: 'Helix Piercing',
    optimalAngle: '70-80° following ear curve',
    insertionDepth: '8-10mm through cartilage',
    tissueType: 'Cartilage',
    healingTime: '3-6 months',
    jewelryGauge: '16g (1.2mm) or 14g (1.6mm)',
    jewelryLength: '8-10mm labret stud',
    jewelryType: 'Flat-back labret (initial), CBR after healed',
    downsizeTime: '6-8 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Upper outer rim of ear cartilage. Assess natural curve and select flat area avoiding excessive curve or protruding sections.</p>
      <p><strong>Anatomical Considerations:</strong> Cartilage thickness varies 2-4mm typically. Use calipers to measure. Avoid areas with prominent blood vessels (visible through cartilage with transillumination).</p>
      <p><strong>Angle Guidelines:</strong> Follow natural curve of ear, typically 70-80 degrees. Angle ensures jewelry sits flush when healed, not protruding uncomfortably.</p>`,
    safety: `<ul>
      <li><strong>Avoid Piercing Gun:</strong> NEVER use piercing guns on cartilage - causes shattering and permanent damage</li>
      <li><strong>Infection Risk:</strong> Cartilage infections are serious and can cause permanent deformity (cauliflower ear)</li>
      <li><strong>Blood Vessels:</strong> Transilluminate ear to identify and avoid blood vessels</li>
      <li><strong>Keloid Risk:</strong> Higher keloid risk in cartilage than soft tissue; screen clients carefully</li>
      <li><strong>Trauma Risk:</strong> Warn about sleeping on piercing, snagging on hair/clothes during healing</li>
    </ul>`,
    refuse: `<ul>
      <li>Previous cartilage piercing rejection or infection in same area</li>
      <li>Active cellulitis or perichondritis on ear</li>
      <li>Keloid history (especially on ears)</li>
      <li>Extremely thin cartilage (<1.5mm) won't support jewelry</li>
      <li>Client requests gun piercing (explain cartilage damage risk)</li>
      <li>Immunosuppressive medications increasing infection risk</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2x daily. Spray generously, let sit 1-2 minutes, rinse with clean water, pat dry. NEVER twist jewelry.</p>
      <p><strong>First 3 Months:</strong> Absolutely no sleeping on piercing side. Use travel pillow or donut pillow if needed. Avoid headphones over piercing.</p>
      <p><strong>Months 4-6:</strong> Continue cleaning if any crusties present. May begin carefully changing to shorter post after professional evaluation.</p>
      <p><strong>Warning Signs:</strong> Persistent throbbing pain, excessive warmth, swelling spreading beyond piercing, or foul-smelling discharge requires immediate medical attention (cartilage infection risk).</p>`
  },

  'forward-helix': {
    name: 'Forward Helix Piercing',
    optimalAngle: '75-85° through forward curve',
    insertionDepth: '6-8mm through cartilage',
    tissueType: 'Cartilage',
    healingTime: '4-6 months',
    jewelryGauge: '16g (1.2mm)',
    jewelryLength: '6-8mm flat-back labret',
    jewelryType: 'Flat-back labret stud',
    downsizeTime: '8-10 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Front portion of helix, typically at curve where ear begins to fold forward. Location varies significantly by ear anatomy.</p>
      <p><strong>Anatomical Considerations:</strong> This area has thinner cartilage than standard helix (3-5mm typically). Assess curve carefully - some clients lack adequate flat space for this piercing.</p>
      <p><strong>Angle Guidelines:</strong> Must follow the natural forward curve to prevent jewelry protruding uncomfortably. Angle typically 75-85 degrees depending on individual ear shape.</p>`,
    safety: `<ul>
      <li><strong>Vascular Care:</strong> Higher blood vessel density in forward helix; always transilluminate before marking</li>
      <li><strong>Headphones Risk:</strong> This piercing is incompatible with many over-ear headphones during healing</li>
      <li><strong>Hair Snagging:</strong> Very high risk of snagging on hair, especially long hair - educate clients thoroughly</li>
      <li><strong>Multiple Piercings:</strong> Popular for triples/doubles - space minimum 8mm apart to prevent migration</li>
      <li><strong>Anatomical Limitations:</strong> Not all ears have suitable anatomy for forward helix placement</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient flat space on forward curve (ear too rounded or protruding)</li>
      <li>Major blood vessel directly in desired placement location</li>
      <li>Previous forward helix rejection or migration in same area</li>
      <li>Client wears over-ear headphones daily and cannot switch to earbuds during healing</li>
      <li>Active acne, cystic acne, or skin conditions in placement area</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2-3x daily. Access can be tricky - use clean hands to lift hair away, spray thoroughly, let sit, rinse with clean water in shower.</p>
      <p><strong>Hair Management:</strong> Critical to keep hair away from piercing. Use clips, headbands, or tie hair back during healing. Avoid hair products on/near piercing.</p>
      <p><strong>First 4 Months:</strong> No sleeping on that side, no over-ear headphones, extreme caution with hair brushing and styling.</p>
      <p><strong>Warning Signs:</strong> Forward helix more prone to irritation bumps. Persistent bumps, excessive swelling, or heat requires professional evaluation.</p>`
  },

  'tragus': {
    name: 'Tragus Piercing',
    optimalAngle: '90° horizontal through tragus',
    insertionDepth: '6-8mm (varies with tragus size)',
    tissueType: 'Cartilage (thicker than helix)',
    healingTime: '3-6 months',
    jewelryGauge: '16g (1.2mm)',
    jewelryLength: '6-8mm flat-back labret',
    jewelryType: 'Flat-back labret (initial), CBR after healed',
    downsizeTime: '6-8 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Center of tragus cartilage, positioned horizontally. Entry point on front tragus face, exit in conch bowl area.</p>
      <p><strong>Anatomical Considerations:</strong> Tragus size varies dramatically - assess if sufficient tissue exists (minimum 5mm width). Measure with calipers before committing. Some tragus are too small or thin for safe piercing.</p>
      <p><strong>Angle Guidelines:</strong> Straight horizontal angle (90 degrees) ensures jewelry doesn't angle awkwardly into conch or protrude excessively outward.</p>`,
    safety: `<ul>
      <li><strong>Earbuds Incompatible:</strong> Cannot use earbuds during healing (3-6 months minimum)</li>
      <li><strong>Hearing Aid Considerations:</strong> Incompatible with many hearing aids - screen carefully</li>
      <li><strong>Thick Cartilage:</strong> Requires proper needle technique due to thickness and density</li>
      <li><strong>Vascular Density:</strong> Transilluminate to avoid blood vessels in tragus</li>
      <li><strong>Balance Issues:</strong> Some clients experience temporary balance sensitivity during healing</li>
    </ul>`,
    refuse: `<ul>
      <li>Tragus too small (< 5mm width) or too thin (< 3mm thickness)</li>
      <li>Client uses hearing aids that would conflict with piercing</li>
      <li>Client cannot/will not avoid earbuds for 6+ months</li>
      <li>Previous tragus rejection or severe reaction</li>
      <li>Prominent blood vessel directly through desired placement</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2x daily. Spray front and back, let sit, gently rinse. Do NOT rotate or move jewelry.</p>
      <p><strong>Earbud Alternative:</strong> Use over-ear headphones or speakers during healing. NO earbuds until completely healed (6+ months).</p>
      <p><strong>First 3 Months:</strong> Avoid sleeping on that side, be cautious with phones pressed to ear, no swimming.</p>
      <p><strong>Warning Signs:</strong> Tragus prone to irritation bumps and swelling. Persistent issues, excessive pain, or suspected infection requires professional evaluation.</p>`
  },

  'anti-tragus': {
    name: 'Anti-Tragus Piercing',
    optimalAngle: '80-90° through anti-tragus fold',
    insertionDepth: '5-7mm (often thinner tissue)',
    tissueType: 'Cartilage',
    healingTime: '4-9 months',
    jewelryGauge: '16g (1.2mm)',
    jewelryLength: '6-8mm curved barbell or labret',
    jewelryType: 'Curved barbell or flat-back labret',
    downsizeTime: '8-10 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Small cartilage ridge opposite the tragus, above earlobe. Anatomy varies significantly - not all ears have prominent anti-tragus.</p>
      <p><strong>Anatomical Considerations:</strong> This is often the most challenging ear piercing due to anatomy variations. Anti-tragus may be very small, flat, or non-existent. Requires careful assessment before accepting client.</p>
      <p><strong>Angle Guidelines:</strong> Angle must follow the natural fold, typically 80-90 degrees. Improper angle causes jewelry to sit awkwardly or increases rejection risk.</p>`,
    safety: `<ul>
      <li><strong>Difficult Piercing:</strong> Considered advanced due to anatomy challenges and access difficulty</li>
      <li><strong>High Rejection Risk:</strong> Anti-tragus has higher rejection/migration rate than other ear piercings</li>
      <li><strong>Prolonged Healing:</strong> Often takes 6-9+ months to fully heal, longer than most cartilage piercings</li>
      <li><strong>Swelling Issues:</strong> Tends to swell significantly during healing due to location and movement</li>
      <li><strong>Jewelry Pressure:</strong> Sleeping position and phone use creates constant pressure on this piercing</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient anti-tragus anatomy (flat or non-existent ridge)</li>
      <li>Anti-tragus tissue too thin (< 4mm) to support jewelry safely</li>
      <li>Previous anti-tragus rejection or migration</li>
      <li>Client history of high rejection rates on other piercings</li>
      <li>Client lifestyle involves frequent phone use against that ear during healing period</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2x daily. Difficult location to reach - use clean hands to position jewelry for thorough cleaning front and back.</p>
      <p><strong>First 4-6 Months:</strong> Absolutely no sleeping on that side. Minimize phone pressure against ear. Avoid headphones touching piercing area.</p>
      <p><strong>Months 6-9:</strong> Continue monitoring even if appears healed. This piercing takes significantly longer than typical cartilage.</p>
      <p><strong>Warning Signs:</strong> Anti-tragus very prone to irritation bumps, migration, and rejection. Any jewelry migration (getting closer to surface) requires immediate professional evaluation.</p>`
  },

  'conch': {
    name: 'Conch Piercing',
    optimalAngle: '90° through conch bowl',
    insertionDepth: '8-12mm depending on conch depth',
    tissueType: 'Cartilage',
    healingTime: '3-9 months',
    jewelryGauge: '14g (1.6mm) or 16g (1.2mm)',
    jewelryLength: '8-12mm labret (measure carefully)',
    jewelryType: 'Flat-back labret (initial), CBR/clicker after healed',
    downsizeTime: '8-12 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Center of conch bowl (inner) or outer conch rim. Inner conch placement requires careful depth measurement as some conches are very deep.</p>
      <p><strong>Anatomical Considerations:</strong> Conch depth varies 8-15mm between clients. MUST measure with calipers to select appropriate jewelry length. Insufficient length causes embedding; excessive length increases snagging risk.</p>
      <p><strong>Angle Guidelines:</strong> Perpendicular (90 degrees) through conch ensures jewelry sits flush and comfortable. For inner conch going to outer ear, angle must account for ear curve.</p>`,
    safety: `<ul>
      <li><strong>Deep Piercing:</strong> One of the deeper ear piercings; requires appropriate needle length and technique</li>
      <li><strong>Bleeding Risk:</strong> More vascular than outer ear cartilage; transilluminate and mark vessels before piercing</li>
      <li><strong>Earbuds:</strong> Cannot use earbuds during healing (6-9 months)</li>
      <li><strong>Swelling Significant:</strong> Conch swells substantially during healing; initial jewelry MUST accommodate swelling</li>
      <li><strong>Phone Use:</strong> Phones pressed against conch during healing causes significant irritation</li>
    </ul>`,
    refuse: `<ul>
      <li>Conch anatomy too shallow (< 6mm depth) for safe inner conch piercing</li>
      <li>Major blood vessels in desired placement that cannot be avoided</li>
      <li>Previous conch rejection, severe infection, or migration</li>
      <li>Client uses earbuds daily and refuses to stop for healing period</li>
      <li>Active ear infection or severe acne in conch area</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2-3x daily. Spray generously into conch bowl, let sit 1-2 minutes, rinse thoroughly in shower. Crusties can be stubborn in this location.</p>
      <p><strong>First 6 Months:</strong> No sleeping on that side (critical for conch). No earbuds. Minimize phone pressure. Avoid hair products in ear.</p>
      <p><strong>Downsizing Important:</strong> Schedule downsize appointment at 8-12 weeks. Long initial jewelry increases snagging and irritation risk once swelling resolves.</p>
      <p><strong>Warning Signs:</strong> Persistent throbbing, excessive heat, swelling spreading beyond piercing site, or foul discharge requires immediate evaluation (cartilage infection risk high).</p>`
  },

  'rook': {
    name: 'Rook Piercing',
    optimalAngle: '85-90° through rook fold',
    insertionDepth: '6-8mm through cartilage fold',
    tissueType: 'Cartilage (thick fold)',
    healingTime: '6-9 months',
    jewelryGauge: '16g (1.2mm)',
    jewelryLength: '8-10mm curved barbell',
    jewelryType: 'Curved barbell (required for anatomy)',
    downsizeTime: '10-12 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Through the ridge of cartilage in upper inner ear, the fold of tissue above the daith location. Anatomy highly variable.</p>
      <p><strong>Anatomical Considerations:</strong> Rook anatomy varies dramatically between clients. Some lack prominent rook fold entirely. Requires very careful assessment - fold must be substantial enough (minimum 5mm height, 4mm thickness) to support jewelry safely.</p>
      <p><strong>Angle Guidelines:</strong> Must pierce through both sides of the fold at appropriate angle (85-90 degrees typically) to ensure curved barbell sits correctly and comfortably.</p>`,
    safety: `<ul>
      <li><strong>Advanced Piercing:</strong> Considered advanced due to difficult anatomy, access challenges, and technique requirements</li>
      <li><strong>Very Painful:</strong> Often rated as one of the most painful ear piercings due to thick, dense cartilage</li>
      <li><strong>Prolonged Healing:</strong> Takes 6-9 months minimum, often longer; clients must commit to long healing period</li>
      <li><strong>Swelling Significant:</strong> Rook swells substantially; initial jewelry must be long enough to prevent embedding</li>
      <li><strong>Migration Risk:</strong> If anatomy insufficient or angle incorrect, higher migration/rejection risk</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient rook anatomy (fold too small, flat, or non-existent)</li>
      <li>Rook fold too thin (< 4mm thickness) to safely support curved barbell</li>
      <li>Previous rook rejection or severe migration</li>
      <li>Client cannot commit to 9+ month healing period without changing jewelry</li>
      <li>Severe keloid history on ears</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2-3x daily. Access difficult - use spray bottle to thoroughly saturate both sides of fold. Let sit 2-3 minutes, rinse in shower.</p>
      <p><strong>First 6 Months:</strong> Absolutely no sleeping on that side. No touching, rotating, or moving jewelry. Avoid hair products near piercing.</p>
      <p><strong>Long Healing:</strong> Expect full healing to take 9-12 months. Do not change jewelry until completely healed and evaluated by professional.</p>
      <p><strong>Warning Signs:</strong> Rook prone to irritation bumps and prolonged swelling. Any signs of migration (jewelry getting shallower), persistent bumps, or severe pain requires professional evaluation.</p>`
  },

  'daith': {
    name: 'Daith Piercing',
    optimalAngle: '90° through daith fold',
    insertionDepth: '8-10mm through thick cartilage fold',
    tissueType: 'Cartilage (very thick fold)',
    healingTime: '4-9 months',
    jewelryGauge: '16g (1.2mm) or 14g (1.6mm)',
    jewelryLength: 'N/A - circular jewelry required',
    jewelryType: 'Captive bead ring or clicker',
    downsizeTime: 'Diameter adjustment at 8-10 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Through the crus of helix - the innermost cartilage fold that the ear canal passes under. Precise location critical for aesthetic and healing.</p>
      <p><strong>Anatomical Considerations:</strong> Daith anatomy varies significantly. Some ears lack distinct fold, others have very pronounced fold. Requires careful assessment - fold must be substantial (minimum 5mm wide, 5mm thick) to support jewelry. Measure depth carefully with calipers.</p>
      <p><strong>Angle Guidelines:</strong> Perpendicular (90 degrees) through fold ensures circular jewelry sits correctly following natural curve. Entry and exit points must allow ring to hang properly in conch.</p>`,
    safety: `<ul>
      <li><strong>Advanced Technique:</strong> Difficult piercing requiring experience due to anatomy challenges and access difficulty</li>
      <li><strong>Very Thick Cartilage:</strong> Daith fold is among thickest ear cartilage; requires appropriate needle gauge and technique</li>
      <li><strong>Circular Jewelry Required:</strong> Must use CBR or clicker, cannot use straight jewelry</li>
      <li><strong>Migraine Claims:</strong> No scientific evidence supports migraine relief; inform clients this is not proven medical treatment</li>
      <li><strong>Prolonged Healing:</strong> Often takes 6-9+ months; very prone to irritation during healing</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient daith anatomy (fold too small, undefined, or flat)</li>
      <li>Daith fold too thin (< 5mm) to safely support circular jewelry</li>
      <li>Previous daith rejection, severe migration, or infection</li>
      <li>Client believes it will cure migraines (educate about lack of scientific evidence; proceed only with informed consent)</li>
      <li>Cannot commit to 9+ month healing period</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2-3x daily. Spray thoroughly around all sides of circular jewelry, let sit 2-3 minutes, rinse well in shower. Crusties accumulate on circular jewelry - be diligent about cleaning.</p>
      <p><strong>First 6 Months:</strong> No sleeping on that side. Absolutely no rotating or moving the ring. Avoid earbuds (some clients can use with care after initial healing).</p>
      <p><strong>Jewelry Considerations:</strong> Circular jewelry requires diligent cleaning. Consider smaller diameter after swelling resolves to reduce snagging risk.</p>
      <p><strong>Warning Signs:</strong> Daith very prone to irritation bumps and prolonged healing issues. Persistent bumps, migration signs, or infection symptoms require immediate professional evaluation.</p>`
  },

  'industrial': {
    name: 'Industrial Piercing',
    optimalAngle: '75-85° through helix, 75-85° through forward helix',
    insertionDepth: '8-10mm each piercing',
    tissueType: 'Cartilage (two separate piercings)',
    healingTime: '6-12 months',
    jewelryGauge: '14g (1.6mm)',
    jewelryLength: '35-45mm industrial barbell (measure carefully)',
    jewelryType: 'Industrial barbell (must be fitted properly)',
    downsizeTime: 'N/A - custom fit required from start',
    positioning: `<p><strong>Optimal Placement:</strong> Two piercings (typically helix and forward helix) connected with single long barbell. CRITICAL: Piercings must be precisely aligned or jewelry will apply constant pressure causing migration/rejection.</p>
      <p><strong>Anatomical Considerations:</strong> Most challenging ear piercing due to alignment requirements. NOT all ears have suitable anatomy - ear shape must allow straight line between intended points. Use straightedge to verify alignment before marking. Even slight misalignment causes major issues.</p>
      <p><strong>Angle Guidelines:</strong> Both piercings must be angled so barbell passes through comfortably without pressure on either end. Requires advanced technique and experience.</p>`,
    safety: `<ul>
      <li><strong>Advanced Piercing:</strong> Should only be performed by experienced professionals with proven industrial piercing success</li>
      <li><strong>Anatomy Critical:</strong> Majority of ears do NOT have suitable anatomy for industrial - refuse if alignment not perfect</li>
      <li><strong>High Complication Rate:</strong> Industrial has higher complications than other ear piercings due to pressure, movement, and dual healing sites</li>
      <li><strong>Very Long Healing:</strong> Takes 9-12+ months minimum; longest healing of all ear piercings</li>
      <li><strong>Pressure Issues:</strong> Constant pressure from barbell frequently causes irritation, bumps, and migration</li>
    </ul>`,
    refuse: `<ul>
      <li>Ear anatomy does not allow straight line between intended piercing points (misalignment will cause pressure and rejection)</li>
      <li>Insufficient cartilage depth or width at either piercing point</li>
      <li>Previous industrial rejection or severe migration</li>
      <li>Client cannot avoid sleeping on that side for 12+ months</li>
      <li>Inexperienced piercer (industrial requires advanced skills)</li>
      <li>Client wears over-ear headphones daily and cannot stop during healing</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 3x daily on BOTH piercings. Clean thoroughly around barbell at both ends, let sit, rinse well. More maintenance than single piercing.</p>
      <p><strong>First 9-12 Months:</strong> Absolutely NO sleeping on that side (non-negotiable). No headphones touching barbell. Extreme caution with hair, clothes, seatbelts.</p>
      <p><strong>Irritation Common:</strong> Industrial almost always develops irritation bumps during healing due to movement and pressure. Most resolve with proper care and downsizing if needed.</p>
      <p><strong>Warning Signs:</strong> Signs of migration at either end (jewelry getting shallower), persistent severe pain, or infection requires immediate professional evaluation. May need to remove barbell and let heal, then re-evaluate anatomy.</p>`
  },

  // ===== FACIAL PIERCINGS =====
  'nostril': {
    name: 'Nostril Piercing',
    optimalAngle: '45-60° through nostril curve',
    insertionDepth: '8-10mm through cartilage and mucosa',
    tissueType: 'Cartilage + mucosal membrane',
    healingTime: '2-4 months',
    jewelryGauge: '18g (1.0mm) or 16g (1.2mm)',
    jewelryLength: '6-8mm labret stud',
    jewelryType: 'Labret stud (initial), can change to L-bend or hoop after healed',
    downsizeTime: '4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Crease of nostril where it curves, typically aligned with center or outer edge of nostril. Placement is aesthetic preference but must accommodate anatomy.</p>
      <p><strong>Anatomical Considerations:</strong> Nostril cartilage thickness varies 1-3mm. Must angle through cartilage curve to emerge properly inside nose without hitting septum or outer nostril edge. Mark carefully with client sitting upright, neutral expression.</p>
      <p><strong>Angle Guidelines:</strong> 45-60 degree angle necessary to navigate cartilage curve while keeping jewelry flush against nostril. Too steep or shallow causes jewelry to protrude awkwardly.</p>`,
    safety: `<ul>
      <li><strong>Vascular Area:</strong> Transilluminate nostril to identify blood vessels; nostril has significant blood supply</li>
      <li><strong>Allergies/Colds:</strong> Healing complicated by allergies, colds, or sinus issues - screen clients for chronic issues</li>
      <li><strong>Bumps Common:</strong> Nostril piercings prone to irritation bumps (not keloids); usually resolve with proper care</li>
      <li><strong>Jewelry Type Critical:</strong> L-bends and nose screws migrate frequently during healing; flat-back labret studs strongly preferred initially</li>
      <li><strong>Makeup Contamination:</strong> Must avoid makeup on/around piercing during healing</li>
    </ul>`,
    refuse: `<ul>
      <li>Active sinus infection, severe chronic allergies, or frequent nosebleeds</li>
      <li>Severely deviated septum causing nostril asymmetry or breathing issues</li>
      <li>Prominent blood vessels that cannot be avoided in desired placement</li>
      <li>Scar tissue from previous nostril piercings that hasn't fully healed</li>
      <li>Client requests gun piercing (explain cartilage damage risk, offer alternative)</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2-3x daily externally. Spray inside nostril and outside, let sit, gently blow nose to clear, pat dry. NO twisting or rotating.</p>
      <p><strong>First 2 Months:</strong> Avoid makeup near piercing, no swimming, careful nose blowing, no changing jewelry. Keep hands clean when touching nose.</p>
      <p><strong>Irritation Bumps:</strong> Very common on nostril piercings. Usually caused by movement, makeup, or trauma. Maintain cleaning routine; most resolve in 4-8 weeks.</p>
      <p><strong>Warning Signs:</strong> Excessive swelling, severe pain, or signs of infection (heat, green discharge) require professional evaluation. Some irritation and occasional bumps are normal.</p>`
  },

  'septum': {
    name: 'Septum Piercing',
    optimalAngle: '90° perpendicular through sweet spot',
    insertionDepth: '10-12mm through soft tissue',
    tissueType: 'Soft tissue membrane (sweet spot), NOT cartilage',
    healingTime: '6-8 weeks',
    jewelryGauge: '16g (1.2mm) or 14g (1.6mm)',
    jewelryLength: 'N/A - circular jewelry',
    jewelryType: 'Circular barbell or CBR',
    downsizeTime: 'Diameter adjustment at 4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Must be through "sweet spot" - thin membrane of soft tissue between cartilage and columella (bottom of nose). Sweet spot location varies significantly between clients.</p>
      <p><strong>Anatomical Considerations:</strong> CRITICAL: Never pierce through cartilage - only through sweet spot soft tissue. Sweet spot may be very small, off-center, high, or low depending on anatomy. Some clients lack adequate sweet spot for piercing. Always palpate thoroughly to locate exact position.</p>
      <p><strong>Angle Guidelines:</strong> Perpendicular (90 degrees) ensures jewelry hangs evenly and symmetrically. Must pierce straight through or jewelry will sit crooked.</p>`,
    safety: `<ul>
      <li><strong>Sweet Spot Verification:</strong> MUST palpate and verify soft tissue location before piercing - NEVER pierce cartilage</li>
      <li><strong>Deviated Septum:</strong> Very common; may cause sweet spot to be off-center or very small</li>
      <li><strong>Visibility Option:</strong> Can be hidden by flipping jewelry up into nose; verify client understands size needed for hiding</li>
      <li><strong>Allergy/Cold Issues:</strong> Healing complicated by allergies, sinus issues, colds</li>
      <li><strong>If Cartilage Pierced:</strong> Extremely painful, prolonged healing (6-12 months), high complications - avoid at all costs</li>
    </ul>`,
    refuse: `<ul>
      <li>No identifiable sweet spot (too small, non-existent, or entirely cartilage)</li>
      <li>Active severe sinus infection or frequent chronic infections</li>
      <li>Deviated septum so severe sweet spot cannot be safely accessed</li>
      <li>Scar tissue from previous septum piercing preventing safe access to sweet spot</li>
      <li>Client expectations for placement cannot be met safely with their anatomy</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2x daily. Spray inside both nostrils, flip jewelry down to clean both sides if applicable, rinse, gently blow nose to clear.</p>
      <p><strong>First 6-8 Weeks:</strong> Avoid touching, flipping up and down frequently (if hiding, choose position and leave it), no swimming, careful nose blowing.</p>
      <p><strong>Healing Note:</strong> Septum through sweet spot heals faster than cartilage piercings (6-8 weeks typically). Minimal pain if pierced correctly through soft tissue.</p>
      <p><strong>Warning Signs:</strong> Severe pain suggests cartilage may have been pierced - seek professional evaluation. Excessive swelling, heat, or bleeding requires immediate attention.</p>`
  },

  'bridge': {
    name: 'Bridge Piercing',
    optimalAngle: '90° horizontal across bridge of nose',
    insertionDepth: '5-7mm surface piercing depth',
    tissueType: 'Soft tissue + minimal cartilage',
    healingTime: '8-12 weeks',
    jewelryGauge: '14g (1.6mm) or 12g (2.0mm) (surface bars)',
    jewelryLength: 'Custom surface bar 12-18mm',
    jewelryType: 'Surface barbell (90° bends)',
    downsizeTime: 'N/A - custom fitted from start',
    positioning: `<p><strong>Optimal Placement:</strong> Horizontal across bridge of nose, typically between eyes at brow line level. Aesthetic placement highly variable by face structure.</p>
      <p><strong>Anatomical Considerations:</strong> Bridge piercing is technically a surface piercing with some cartilage involvement. Requires adequate tissue "pinch-ability" on nose bridge (minimum 7mm pinch). Tissue must be substantial enough to support surface bar without rejection risk.</p>
      <p><strong>Angle Guidelines:</strong> Must be perfectly horizontal and parallel to face. Surface bars with 90-degree bends required to minimize pressure and rejection risk.</p>`,
    safety: `<ul>
      <li><strong>Surface Piercing:</strong> High rejection/migration risk like all surface piercings; only pierce if adequate tissue depth</li>
      <li><strong>Glasses Incompatibility:</strong> Cannot wear glasses during healing (12+ weeks minimum); contact lenses required</li>
      <li><strong>Facial Movement:</strong> Significant facial movement during eating, talking increases migration risk</li>
      <li><strong>Scarring Risk:</strong> If rejects, will leave two scars on prominent facial location</li>
      <li><strong>Professional/Career Considerations:</strong> Highly visible, may impact employment - discuss thoroughly</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient tissue depth on nose bridge (< 7mm pinch test)</li>
      <li>Client wears glasses daily and cannot/will not switch to contacts during healing</li>
      <li>Previous bridge piercing rejection or severe migration</li>
      <li>Client history of high rejection rates on surface piercings</li>
      <li>Unrealistic expectations about permanence (inform about rejection risk)</li>
      <li>Career/professional concerns that client hasn't fully considered</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2-3x daily. Spray thoroughly around both ends of barbell, let sit, pat dry gently. Do NOT move or rotate jewelry.</p>
      <p><strong>First 12 Weeks:</strong> Absolutely no glasses (including sunglasses). No makeup near piercing. Minimize excessive facial expressions. Sleep on back only.</p>
      <p><strong>Migration Monitoring:</strong> Check weekly for signs of migration (bars getting closer to surface, jewelry becoming more visible). Any migration requires immediate professional evaluation.</p>
      <p><strong>Warning Signs:</strong> Signs of migration (jewelry becoming shallower), persistent bumps, or severe irritation may indicate rejection process. Professional evaluation critical to determine if removal necessary.</p>`
  },

  'eyebrow': {
    name: 'Eyebrow Piercing',
    optimalAngle: '40-50° following brow curve',
    insertionDepth: '5-8mm surface piercing',
    tissueType: 'Soft tissue (surface piercing)',
    healingTime: '6-8 weeks',
    jewelryGauge: '16g (1.2mm) or 14g (1.6mm)',
    jewelryLength: '10-12mm curved barbell',
    jewelryType: 'Curved barbell',
    downsizeTime: '4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Vertical along outer third of eyebrow, or horizontal through brow. Placement must follow natural brow curve and avoid facial nerves/vessels.</p>
      <p><strong>Anatomical Considerations:</strong> Eyebrow area has significant nerve branches (supraorbital nerve) and blood vessels. Always mark carefully avoiding major vessels. Tissue must have adequate depth (minimum 7mm pinch) to support piercing.</p>
      <p><strong>Angle Guidelines:</strong> Must follow natural angle of brow (40-50 degrees typically). Angle ensures jewelry follows face contour and minimizes rejection risk.</p>`,
    safety: `<ul>
      <li><strong>Nerve Proximity:</strong> Supraorbital nerve runs through brow area; avoid placing piercing directly over nerve (client will feel immediate sharp nerve pain if hit)</li>
      <li><strong>Surface Piercing Risks:</strong> High rejection/migration rate; only pierce if adequate tissue depth</li>
      <li><strong>Snagging Risk:</strong> Very prone to snagging on hair, towels, clothing during healing</li>
      <li><strong>Facial Movement:</strong> Eyebrow expressions cause significant jewelry movement</li>
      <li><strong>Professional Visibility:</strong> Highly visible facial piercing; discuss career implications</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient tissue depth (< 7mm pinch test)</li>
      <li>Placement would be directly over supraorbital nerve location</li>
      <li>Previous eyebrow rejection or migration</li>
      <li>Very expressive facial movements (increases rejection risk significantly)</li>
      <li>Scar tissue or damage in desired placement from previous piercings</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2x daily. Spray around both balls of barbell, let sit, pat dry gently. Avoid moving jewelry.</p>
      <p><strong>First 6-8 Weeks:</strong> Extreme caution with hair, towels, makeup. No makeup on/near piercing. Sleep on back or opposite side. Be gentle with facial expressions.</p>
      <p><strong>Migration Watch:</strong> Monitor weekly for signs of migration (jewelry becoming more shallow, more visible through skin). Common with eyebrow piercings.</p>
      <p><strong>Warning Signs:</strong> Any signs of migration, persistent bumps at entry/exit points, or jewelry becoming shallower requires immediate professional evaluation. Early detection critical.</p>`
  },

  'labret': {
    name: 'Labret Piercing',
    optimalAngle: '90° perpendicular through lower lip',
    insertionDepth: '10-12mm through lip tissue',
    tissueType: 'Soft tissue + mucous membrane',
    healingTime: '6-8 weeks',
    jewelryGauge: '16g (1.2mm) or 14g (1.6mm)',
    jewelryLength: '12-16mm labret stud (swelling accommodation)',
    jewelryType: 'Flat-back labret stud',
    downsizeTime: '4-6 weeks (critical for oral piercings)',
    positioning: `<p><strong>Optimal Placement:</strong> Centered below lower lip, between lip and chin. Placement must consider gum line on interior - jewelry must not rest against gums or cause recession.</p>
      <p><strong>Anatomical Considerations:</strong> Assess interior mouth anatomy carefully. Jewelry disc must rest against interior lip tissue, NOT gums. If anatomy places disc against gums, adjust placement or refuse. Check for lip webbing (frenulum) that could interfere.</p>
      <p><strong>Angle Guidelines:</strong> Perpendicular (90 degrees) through lip ensures jewelry sits flush externally and comfortably internally without pressure points.</p>`,
    safety: `<ul>
      <li><strong>Oral Health Critical:</strong> Requires excellent oral hygiene; do not pierce if poor dental health, active cavities, or gum disease</li>
      <li><strong>Gum Recession Risk:</strong> Jewelry rubbing gums causes recession; placement and downsize timing critical to prevent</li>
      <li><strong>Tooth Damage:</strong> Jewelry can chip teeth if too long or if client plays with it; educate thoroughly about keeping jewelry away from teeth</li>
      <li><strong>Initial Swelling:</strong> Labret swells significantly first week; long initial jewelry essential</li>
      <li><strong>Speech Impediment:</strong> Temporary speech changes first few days until adjustment occurs</li>
    </ul>`,
    refuse: `<ul>
      <li>Poor oral health, active cavities, or gum disease (require dental clearance)</li>
      <li>Anatomy places jewelry disc against gums unavoidably (will cause recession)</li>
      <li>Client smokes heavily (dramatically impairs oral piercing healing)</li>
      <li>Previous labret rejection or severe complications</li>
      <li>Lip webbing interferes with safe placement</li>
    </ul>`,
    aftercare: `<p><strong>External Cleaning:</strong> Sterile saline spray 2x daily on outside of piercing. Pat dry gently.</p>
      <p><strong>Internal Cleaning:</strong> Alcohol-free mouthwash after eating, drinking (except water), and before bed. Rinse 30-60 seconds, do NOT use alcohol-based mouthwash (drying and irritating).</p>
      <p><strong>First 2 Weeks:</strong> Avoid spicy food, hot liquids, alcohol, smoking (especially smoking). Expect swelling days 2-5. Cold water and ice chips help swelling.</p>
      <p><strong>Downsize Critical:</strong> MUST downsize jewelry at 4-6 weeks once swelling resolves. Long jewelry left in damages teeth and gums.</p>`
  },

  'monroe': {
    name: 'Monroe Piercing',
    optimalAngle: '90° through upper lip',
    insertionDepth: '8-10mm through lip tissue',
    tissueType: 'Soft tissue + mucous membrane',
    healingTime: '6-8 weeks',
    jewelryGauge: '16g (1.2mm)',
    jewelryLength: '10-12mm labret stud',
    jewelryType: 'Flat-back labret stud',
    downsizeTime: '4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Upper lip to left (Monroe) or right (Madonna) side, typically at or above vermilion border. Emulates beauty mark placement.</p>
      <p><strong>Anatomical Considerations:</strong> Must assess interior mouth anatomy. Jewelry disc must rest against upper lip interior, not against gums or frenulum. Upper lip tissue thinner than lower; measure carefully.</p>
      <p><strong>Angle Guidelines:</strong> Perpendicular (90 degrees) through upper lip. Slightly downward angle acceptable if needed to prevent gum contact internally.</p>`,
    safety: `<ul>
      <li><strong>Gum Contact Risk:</strong> Upper lip placement increases gum contact risk; jewelry must not rest against gums</li>
      <li><strong>Frenulum Proximity:</strong> Upper lip has prominent frenulum (webbing); placement must avoid interference</li>
      <li><strong>Tooth Damage Risk:</strong> Internal disc can contact teeth; sizing and placement critical</li>
      <li><strong>Less Swelling Than Lower Lip:</strong> Upper lip swells less than lower but still requires longer initial jewelry</li>
      <li><strong>Oral Hygiene Critical:</strong> Poor oral health contraindicates all oral piercings</li>
    </ul>`,
    refuse: `<ul>
      <li>Frenulum attachment too close to desired placement (will interfere with piercing)</li>
      <li>Anatomy would place jewelry disc against gums unavoidably</li>
      <li>Poor oral health or active dental issues</li>
      <li>Client smokes heavily (impairs healing significantly)</li>
      <li>Upper lip too thin (< 6mm tissue depth)</li>
    </ul>`,
    aftercare: `<p><strong>External Cleaning:</strong> Sterile saline spray 2x daily externally, pat dry.</p>
      <p><strong>Internal Cleaning:</strong> Alcohol-free mouthwash after eating/drinking (except water) and before bed. Rinse 30-60 seconds.</p>
      <p><strong>First 2 Weeks:</strong> Avoid spicy foods, acidic foods (citrus, tomato), hot liquids, alcohol. Expect moderate swelling days 2-4.</p>
      <p><strong>Downsize Required:</strong> Must downsize at 4-6 weeks to prevent tooth/gum damage from excess jewelry length.</p>`
  },

  'medusa': {
    name: 'Medusa (Philtrum) Piercing',
    optimalAngle: '90° through philtrum',
    insertionDepth: '8-10mm through upper lip center',
    tissueType: 'Soft tissue + mucous membrane',
    healingTime: '8-12 weeks',
    jewelryGauge: '16g (1.2mm) or 14g (1.6mm)',
    jewelryLength: '12-14mm labret stud',
    jewelryType: 'Flat-back labret stud',
    downsizeTime: '4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Center of philtrum (groove above upper lip), below septum. Must be centered precisely for aesthetic balance.</p>
      <p><strong>Anatomical Considerations:</strong> Philtrum anatomy varies significantly. Some have very pronounced groove, others quite flat. Internal frenulum (upper lip webbing) may be very prominent - piercing must not interfere. Assess gum line contact carefully.</p>
      <p><strong>Angle Guidelines:</strong> Perpendicular (90 degrees) straight through philtrum center. Precise centering critical - even slight off-center placement is visually obvious.</p>`,
    safety: `<ul>
      <li><strong>Centering Critical:</strong> Must be perfectly centered; off-center medusa is aesthetically poor and difficult to correct</li>
      <li><strong>Frenulum Interference:</strong> Upper frenulum frequently prominent; piercing must not pierce through or constantly rub against frenulum</li>
      <li><strong>Gum Damage High Risk:</strong> Internal disc sits very close to gums; causes recession in many clients even with proper placement</li>
      <li><strong>Swelling Significant:</strong> Medusa swells substantially, especially in philtrum groove area</li>
      <li><strong>High Rejection Rate:</strong> If anatomy unsuitable, rejection rate relatively high compared to other lip piercings</li>
    </ul>`,
    refuse: `<ul>
      <li>Frenulum attachment so prominent it interferes with placement</li>
      <li>Anatomy would unavoidably place jewelry disc against gums</li>
      <li>Philtrum too shallow or flat (jewelry won't sit properly)</li>
      <li>Poor oral health or active dental/gum issues</li>
      <li>Client expectations for placement cannot be met safely with their anatomy (off-center placement not acceptable)</li>
    </ul>`,
    aftercare: `<p><strong>External Cleaning:</strong> Sterile saline spray 2x daily externally, pat dry gently.</p>
      <p><strong>Internal Cleaning:</strong> Alcohol-free mouthwash after eating/drinking (except water) and before bed. Rinse 30-60 seconds gently.</p>
      <p><strong>First 2-3 Weeks:</strong> Significant swelling expected days 2-5. Cold water, ice chips help. Avoid spicy, acidic, hot foods. No alcohol or smoking.</p>
      <p><strong>Downsize Essential:</strong> MUST downsize at 4-6 weeks. Long jewelry left in causes gum recession and tooth damage. Monitor gum line for recession signs throughout healing.</p>`
  },

  'tongue': {
    name: 'Tongue Piercing',
    optimalAngle: '90° vertical through tongue center',
    insertionDepth: '15-20mm through tongue muscle',
    tissueType: 'Muscle tissue + mucous membrane',
    healingTime: '4-6 weeks',
    jewelryGauge: '14g (1.6mm)',
    jewelryLength: '18-22mm straight barbell (swelling accommodation)',
    jewelryType: 'Straight barbell',
    downsizeTime: '2-4 weeks (critical)',
    positioning: `<p><strong>Optimal Placement:</strong> Center of tongue, vertically, typically 15-20mm from tip. Must avoid lingual artery (runs underneath) and major veins (visible on tongue underside).</p>
      <p><strong>Anatomical Considerations:</strong> CRITICAL: Assess tongue underside thoroughly for vascular anatomy. Lingual artery runs lengthwise under tongue - NEVER pierce through artery location. Large visible veins must be avoided. Some tongues have short frenulum (tongue webbing) limiting safe placement distance from tip.</p>
      <p><strong>Angle Guidelines:</strong> Perfectly vertical (90 degrees) through center of tongue ensures proper healing and jewelry placement. Off-center causes tongue discomfort and speech issues.</p>`,
    safety: `<ul>
      <li><strong>Vascular Risk:</strong> Tongue highly vascular; hitting lingual artery causes severe bleeding/emergency; ALWAYS assess underside carefully before piercing</li>
      <li><strong>Nerve Risk:</strong> Tongue has significant nerve branches; piercing too far back or off-center risks nerve damage</li>
      <li><strong>Massive Initial Swelling:</strong> Tongue swells dramatically first 3-5 days; long initial barbell critical to prevent choking/breathing issues</li>
      <li><strong>Tooth Damage:</strong> Highest tooth chipping risk of all oral piercings; client education critical about jewelry contact with teeth</li>
      <li><strong>Speech Impediment:</strong> Temporary significant speech changes first week until adjustment</li>
    </ul>`,
    refuse: `<ul>
      <li>Lingual artery or major blood vessels in desired placement location (non-negotiable)</li>
      <li>Short frenulum preventing safe placement distance from tongue tip</li>
      <li>Tongue tie or other anatomical abnormalities limiting safe placement</li>
      <li>Poor oral health, active infections, or gum disease</li>
      <li>Client cannot commit to liquid/soft diet first week (necessary for healing)</li>
      <li>History of excessive tongue piercing complications or rejection</li>
    </ul>`,
    aftercare: `<p><strong>Oral Cleaning:</strong> Alcohol-free mouthwash after EVERY meal, snack, drink (except water), and before bed. Rinse 30 seconds minimum.</p>
      <p><strong>First Week:</strong> Liquid/soft foods only (soup, smoothies, mashed potatoes, ice cream). Cold foods help swelling. NO spicy, acidic, crunchy, or hot foods. Swelling peaks days 3-5.</p>
      <p><strong>Downsize CRITICAL:</strong> MUST downsize barbell at 2-4 weeks once swelling resolved. Long barbell causes tooth damage and gum recession. Non-negotiable downsize appointment.</p>
      <p><strong>Long Term:</strong> Check barbell tightness daily (balls unscrew from tongue movement). Plastic balls recommended after healing to reduce tooth chipping risk.</p>`
  },

  // ===== BODY PIERCINGS =====
  'navel': {
    name: 'Navel (Belly Button) Piercing',
    optimalAngle: '45-50° following navel rim curve',
    insertionDepth: '15-20mm through navel lip',
    tissueType: 'Soft tissue',
    healingTime: '6-12 months',
    jewelryGauge: '14g (1.6mm)',
    jewelryLength: '10-12mm curved barbell',
    jewelryType: 'Curved barbell',
    downsizeTime: '8-12 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Through upper rim of navel (traditional) or lower rim (reverse navel). Piercing must go through substantial rim/lip of tissue, not flat stomach surface.</p>
      <p><strong>Anatomical Considerations:</strong> CRITICAL: Not all navels have suitable anatomy for piercing. Navel must have pronounced lip/rim of tissue (minimum 8mm) that folds over when sitting. Flat navels or "outie" navels typically not suitable. Assess anatomy standing AND sitting - sitting position reveals true tissue availability.</p>
      <p><strong>Angle Guidelines:</strong> Must follow natural curve of navel rim, typically 45-50 degrees. Angle ensures jewelry sits properly and minimizes rejection pressure.</p>`,
    safety: `<ul>
      <li><strong>Anatomy Critical:</strong> High rejection rate if anatomy unsuitable; REFUSE if insufficient tissue or flat navel</li>
      <li><strong>Surface Piercing Characteristics:</strong> Navel has surface piercing tendencies; movement from clothing, bending increases rejection risk</li>
      <li><strong>Pregnancy:</strong> Ask about pregnancy plans; navel piercings often need removal during pregnancy</li>
      <li><strong>Clothing Friction:</strong> High-waisted pants, tight clothing causes constant irritation during healing</li>
      <li><strong>Longest Healing:</strong> Navel takes 9-12 months full healing; clients must commit to long healing period</li>
    </ul>`,
    refuse: `<ul>
      <li>Flat navel with insufficient lip/rim of tissue (will reject)</li>
      <li>Outie navel (not suitable anatomy)</li>
      <li>Navel lip tissue too thin (< 8mm) measured sitting and standing</li>
      <li>Previous navel rejection or severe migration</li>
      <li>Client pregnant or planning pregnancy in next 12 months</li>
      <li>Client wears high-waisted pants/tight clothing daily and cannot modify during healing</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2x daily. Spray thoroughly, let sit, rinse in shower, pat dry completely. Keep navel dry between cleanings.</p>
      <p><strong>First 6 Months:</strong> Wear loose, low-rise clothing. Avoid tight pants, high-waisted styles. No swimming (pools, lakes, ocean). Sleep on back or side (not stomach). No submerging in bathtubs.</p>
      <p><strong>Exercise Caution:</strong> Avoid sit-ups, crunches, yoga poses that bend/pressure navel. Light exercise okay; excessive sweating requires immediate cleaning.</p>
      <p><strong>Long Healing:</strong> Expect 9-12 months minimum for full healing. Jewelry changes only after completely healed and evaluated by professional. Signs of migration require immediate attention.</p>`
  },

  'nipple': {
    name: 'Nipple Piercing',
    optimalAngle: '90° horizontal through nipple base',
    insertionDepth: '12-18mm depending on nipple size',
    tissueType: 'Soft tissue + erectile tissue',
    healingTime: '6-12 months',
    jewelryGauge: '14g (1.6mm) or 12g (2.0mm)',
    jewelryLength: '14-18mm straight barbell (measure carefully)',
    jewelryType: 'Straight barbell',
    downsizeTime: '8-12 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Horizontal through base of nipple, behind areola. Placement must be through nipple tissue itself, not areola skin.</p>
      <p><strong>Anatomical Considerations:</strong> Nipple size, projection, and anatomy vary dramatically. Use calipers to measure nipple width precisely. Must have minimum 8mm nipple projection for safe piercing. Inverted nipples without adequate projection are not suitable. Assess nipple symmetry if piercing pair.</p>
      <p><strong>Angle Guidelines:</strong> Perfectly horizontal (90 degrees) through base of nipple ensures symmetrical appearance and even healing. Angle deviation causes uneven placement and potential migration.</p>`,
    safety: `<ul>
      <li><strong>Breastfeeding:</strong> CAN impact future breastfeeding; discuss thoroughly with clients of childbearing age</li>
      <li><strong>Sensation Changes:</strong> May increase or decrease nipple sensation; changes usually temporary but can be permanent</li>
      <li><strong>Inverted Nipples:</strong> Not suitable unless nipple has adequate projection when stimulated (minimum 8mm)</li>
      <li><strong>Infection Risk:</strong> Breast tissue infection (mastitis) possible if complications occur; requires immediate medical attention</li>
      <li><strong>Very Painful:</strong> One of most painful piercings; prepare clients for pain level</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient nipple projection (< 8mm), including inverted nipples without adequate erect projection</li>
      <li>Currently breastfeeding or pregnant (wait until after breastfeeding complete)</li>
      <li>History of breast cancer, breast surgery, or breast tissue abnormalities without physician clearance</li>
      <li>Active breast infection, cysts, or other breast health issues</li>
      <li>Client unrealistic about breastfeeding impact (discuss thoroughly before proceeding)</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2x daily. Spray thoroughly, let sit, rinse in shower, pat dry completely with clean gauze. Crusties very common on nipple piercings.</p>
      <p><strong>First 3 Months:</strong> Wear clean, soft, supportive bra (sports bra) during day. Sleep in soft bra initially. Avoid tight bras, lace, or rough fabrics that snag. No swimming. No oral contact.</p>
      <p><strong>Months 4-12:</strong> Continue cleaning if any crusties present. Avoid rough contact, excessive friction. No jewelry changes until completely healed (12+ months minimum).</p>
      <p><strong>Warning Signs:</strong> Excessive swelling, severe pain, red streaks spreading from piercing, fever, or signs of infection require immediate medical evaluation (mastitis risk). Some pain and swelling first week is normal.</p>`
  },

  'surface': {
    name: 'Surface Piercing',
    optimalAngle: '90° with surface bar',
    insertionDepth: '5-8mm surface depth',
    tissueType: 'Soft tissue (surface placement)',
    healingTime: '3-6 months',
    jewelryGauge: '14g (1.6mm) or 12g (2.0mm)',
    jewelryLength: 'Custom surface bar 15-25mm',
    jewelryType: 'Surface barbell (90° bends)',
    downsizeTime: 'N/A - custom fitted from start',
    positioning: `<p><strong>Optimal Placement:</strong> Various locations (collarbone, chest, nape, wrist, etc.). Location must have sufficient tissue depth and minimal movement/friction.</p>
      <p><strong>Anatomical Considerations:</strong> CRITICAL: Tissue must be "pinchable" with minimum 8-10mm depth. Surface piercings have high rejection rate; only pierce if anatomy truly suitable. Assess movement in area, clothing friction, and daily activities that might impact piercing.</p>
      <p><strong>Angle Guidelines:</strong> Surface bars with 90-degree bends required. Bar must sit under skin with minimal pressure. Improper jewelry or angle causes rapid rejection.</p>`,
    safety: `<ul>
      <li><strong>High Rejection Rate:</strong> Surface piercings reject more frequently than traditional piercings; clients must understand this risk</li>
      <li><strong>Scarring Risk:</strong> Rejection leaves two scars; placement must be acceptable for scarring</li>
      <li><strong>Movement Increases Risk:</strong> Areas with significant body movement reject faster</li>
      <li><strong>Friction Risk:</strong> Constant clothing friction accelerates rejection</li>
      <li><strong>Not Permanent:</strong> Even with perfect placement/care, surface piercings often reject within 1-5 years; set realistic expectations</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient tissue depth (< 8mm pinch test)</li>
      <li>Location has excessive movement, friction, or pressure during normal activities</li>
      <li>Previous surface piercing rejection in same or similar area</li>
      <li>Client unrealistic about permanence (must understand rejection likelihood)</li>
      <li>Scarring in desired location unacceptable to client (rejection will leave scars)</li>
      <li>Location has existing scar tissue or skin abnormalities</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2-3x daily. Spray thoroughly around both ends of surface bar, let sit, pat dry gently. Do NOT move or rotate jewelry.</p>
      <p><strong>First 3 Months:</strong> Avoid tight clothing over piercing. Minimize friction and pressure. Be very gentle - surface piercings sensitive to trauma.</p>
      <p><strong>Migration Monitoring:</strong> Check WEEKLY for signs of migration (bar becoming more visible/shallow, skin thinning over bar, ends moving closer together). Early detection critical.</p>
      <p><strong>Warning Signs:</strong> ANY signs of migration, skin thinning over jewelry, or increased visibility of bar requires immediate professional evaluation. Migration indicates rejection process starting; early removal prevents worse scarring.</p>`
  },

  'dermal': {
    name: 'Dermal Anchor (Microdermal)',
    optimalAngle: 'N/A - single point piercing',
    insertionDepth: '5-7mm beneath skin surface',
    tissueType: 'Dermal layer',
    healingTime: '1-3 months',
    jewelryGauge: 'N/A - dermal anchor base',
    jewelryLength: 'N/A - decorative top',
    jewelryType: 'Dermal anchor with interchangeable tops',
    downsizeTime: 'N/A - top can be changed after healed',
    positioning: `<p><strong>Optimal Placement:</strong> Various locations (face, chest, back, etc.). Single point piercing with anchor under skin, decorative top above. Location must have minimal movement and sufficient tissue depth.</p>
      <p><strong>Anatomical Considerations:</strong> Requires sufficient tissue depth (minimum 6mm) and stable tissue (not over joints, high-movement areas). Bone proximity varies by location - anchors over prominent bones less stable. Assess tissue type and depth carefully.</p>
      <p><strong>Technique:</strong> Needle method or dermal punch. Anchor base sits in dermal pocket beneath skin. Tissue must grow around anchor base for stability.</p>`,
    safety: `<ul>
      <li><strong>Removal Requires Minor Procedure:</strong> Cannot simply unscrew like regular piercing; anchor must be removed by professional (sometimes requires minor excision)</li>
      <li><strong>Rejection Risk:</strong> Can reject like surface piercings; leaves scar if rejected</li>
      <li><strong>Snagging Risk:</strong> Dermal tops protrude and snag on clothing, hair, towels</li>
      <li><strong>Migration:</strong> Can migrate toward surface over time, especially in high-movement areas</li>
      <li><strong>MRI Incompatible:</strong> Some dermal materials not MRI-safe; must use titanium anchors</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient tissue depth at desired location (< 6mm)</li>
      <li>Location over joints, high-movement areas, or prominent bones</li>
      <li><li>Previous dermal rejection at same or similar site</li>
      <li>Client does not understand removal process/permanence implications</li>
      <li>Occupation creates high snagging risk (construction, childcare, healthcare with daily equipment use)</li>
      <li>Location on face without thorough discussion of professional/social implications</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning Protocol:</strong> Sterile saline spray 2x daily. Spray around dermal top, let sit, pat dry gently. Do NOT rotate or move jewelry top.</p>
      <p><strong>First Month:</strong> Avoid snagging, pulling, or pressure on dermal. Keep bandage on first few days. Avoid clothing that catches on dermal top.</p>
      <p><strong>Top Changes:</strong> Can change decorative top after fully healed (3+ months). Tops screw in/out; be very gentle to avoid pulling anchor.</p>
      <p><strong>Warning Signs:</strong> Signs of migration (dermal becoming more raised, visible), redness spreading, rejection symptoms, or loosening requires professional evaluation. Rejection/migration requires anchor removal to prevent complications.</p>`
  },

  // ===== GENITAL PIERCINGS (Brief professional reference) =====
  'prince-albert': {
    name: 'Prince Albert (PA)',
    optimalAngle: '45° through urethra to underside',
    insertionDepth: '8-12mm (varies significantly)',
    tissueType: 'Soft tissue + urethral tissue',
    healingTime: '4-6 weeks',
    jewelryGauge: '10g (2.4mm) or 12g (2.0mm) (thick gauge for stability)',
    jewelryLength: 'N/A - circular jewelry',
    jewelryType: 'Captive bead ring or circular barbell',
    downsizeTime: 'Diameter adjustment at 4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Entry through urethra, exit on underside of glans. Precise placement critical for function and comfort.</p>
      <p><strong>Anatomical Considerations:</strong> ADVANCED PIERCING requiring significant experience. Anatomy varies greatly between clients. Must assess urethral opening size/position and underside anatomy. Some anatomy unsuitable for PA placement.</p>`,
    safety: `<ul>
      <li><strong>ADVANCED PROFESSIONAL ONLY:</strong> Requires extensive genital piercing experience and training</li>
      <li><strong>Urination Changes:</strong> Initial stream splits during healing; inform clients thoroughly</li>
      <li><strong>Sexual Activity:</strong> Must abstain minimum 4-6 weeks; partners must be informed about jewelry</li>
      <li><strong>Thick Gauge Required:</strong> Thinner gauges migrate/tear; 10g-12g minimum for safety</li>
      <li><strong>Informed Consent Critical:</strong> Extensive consultation required about risks, healing, lifestyle changes</li>
    </ul>`,
    refuse: `<ul>
      <li>Inexperienced piercer (only advanced professionals should perform genital piercings)</li>
      <li>Anatomy unsuitable (urethral opening too small, underside anatomy insufficient)</li>
      <li>Active STI or genital infection</li>
      <li>Client cannot abstain from sexual activity during healing</li>
      <li>Client does not fully understand risks and lifestyle implications</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning:</strong> Sea salt soaks 2x daily. Rinse thoroughly after urination. Thorough soap-and-water cleaning daily during healing.</p>
      <p><strong>First 4-6 Weeks:</strong> Absolutely no sexual activity. Expect split urinary stream. Sit to urinate initially to manage stream. Loose-fitting underwear required.</p>
      <p><strong>Professional Guidance:</strong> Genital piercings require professional follow-up and monitoring. Any concerns require immediate professional evaluation.</p>`
  },

  'vch': {
    name: 'Vertical Clitoral Hood (VCH)',
    optimalAngle: '90° vertical through clitoral hood',
    insertionDepth: '6-10mm through hood tissue',
    tissueType: 'Soft tissue (clitoral hood)',
    healingTime: '4-8 weeks',
    jewelryGauge: '14g (1.6mm) or 12g (2.0mm)',
    jewelryLength: 'N/A - curved barbell',
    jewelryType: 'Curved barbell',
    downsizeTime: '4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Vertically through clitoral hood above clitoris. Must have sufficient hood tissue that extends beyond clitoris when standing.</p>
      <p><strong>Anatomical Considerations:</strong> CRITICAL: Not all anatomy suitable for VCH. Hood must have adequate tissue and coverage. Approximately 30-40% of people lack suitable anatomy for VCH. Professional assessment required.</p>`,
    safety: `<ul>
      <li><strong>ADVANCED PROFESSIONAL ONLY:</strong> Requires specialized genital piercing training and experience</li>
      <li><strong>Anatomy Assessment Critical:</strong> Many clients lack suitable hood anatomy; thorough evaluation required</li>
      <li><strong>Sexual Activity:</strong> Abstain minimum 4-6 weeks</li>
      <li><strong>Sensitivity Changes:</strong> May increase or decrease sensation; discuss thoroughly</li>
      <li><strong>Fast Healing:</strong> VCH often heals faster than other genital piercings when anatomy suitable</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient clitoral hood tissue (approximately 30-40% of clients lack suitable anatomy)</li>
      <li>Hood does not extend adequately over clitoris when standing</li>
      <li>Active infection, STI, or genital health issues</li>
      <li>Pregnancy or plans to become pregnant during healing period</li>
      <li>Client cannot abstain from sexual activity during healing</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning:</strong> Saline spray or sea salt soaks 2x daily. Rinse thoroughly after urination. Soap-and-water cleaning daily during shower.</p>
      <p><strong>First 4-6 Weeks:</strong> No sexual activity. Wear breathable cotton underwear. Avoid tight clothing. Sleep without underwear when possible for airflow.</p>
      <p><strong>Professional Follow-Up:</strong> Genital piercings require professional monitoring. Any concerns require immediate professional evaluation.</p>`
  },

  'christina': {
    name: 'Christina Piercing',
    optimalAngle: '90° surface piercing vertical',
    insertionDepth: '8-12mm surface piercing',
    tissueType: 'Soft tissue (pubic mound)',
    healingTime: '6-9 months',
    jewelryGauge: '14g (1.6mm) or 12g (2.0mm)',
    jewelryLength: 'Custom surface bar 15-25mm',
    jewelryType: 'Surface barbell',
    downsizeTime: 'N/A - custom fitted',
    positioning: `<p><strong>Optimal Placement:</strong> Vertical surface piercing on pubic mound, from top of clitoral hood area up toward pubic bone. Aesthetic piercing without contact with clitoris.</p>
      <p><strong>Anatomical Considerations:</strong> Surface piercing with high rejection rate. Requires substantial tissue depth (minimum 10mm pinch). Not all anatomy suitable - mons pubis must have adequate tissue and appropriate angle.</p>`,
    safety: `<ul>
      <li><strong>ADVANCED PROFESSIONAL ONLY:</strong> Complex surface piercing in sensitive area</li>
      <li><strong>High Rejection Rate:</strong> Surface piercing with significant movement/friction; rejection common</li>
      <li><strong>Long Healing:</strong> Takes 6-9+ months, longer than most genital piercings</li>
      <li><strong>Scarring Risk:</strong> Rejection leaves visible scars in intimate area</li>
      <li><strong>Friction Issues:</strong> Clothing friction accelerates rejection risk</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient tissue depth (< 10mm pinch test)</li>
      <li>Anatomy angle unsuitable for surface bar placement</li>
      <li>Previous Christina rejection or genital surface piercing complications</li>
      <li>Client unrealistic about rejection risk and scarring</li>
      <li>Lifestyle/clothing creates excessive friction during healing</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning:</strong> Saline spray 2-3x daily. Keep area clean and dry. Wear loose, breathable cotton underwear.</p>
      <p><strong>First 6 Months:</strong> No tight clothing, no sexual activity first 8 weeks minimum. Monitor weekly for migration signs.</p>
      <p><strong>Migration Watch:</strong> Check frequently for migration/rejection signs. Any migration requires immediate professional evaluation and likely removal.</p>`
  },

  'frenum': {
    name: 'Frenum Piercing',
    optimalAngle: '90° horizontal through shaft skin',
    insertionDepth: '6-8mm through shaft skin',
    tissueType: 'Soft tissue (penile shaft)',
    healingTime: '4-8 weeks',
    jewelryGauge: '12g (2.0mm) or 10g (2.4mm)',
    jewelryLength: '10-14mm curved barbell',
    jewelryType: 'Curved barbell or circular barbell',
    downsizeTime: '4-6 weeks',
    positioning: `<p><strong>Optimal Placement:</strong> Horizontal through skin on underside of penile shaft, typically behind corona. Can be single or ladder (multiple piercings).</p>
      <p><strong>Anatomical Considerations:</strong> Requires adequate loose skin on shaft. Circumcision status affects available skin. Must avoid visible blood vessels and ensure adequate tissue depth.</p>`,
    safety: `<ul>
      <li><strong>ADVANCED PROFESSIONAL ONLY:</strong> Genital piercing requiring specialized training</li>
      <li><strong>Vessel Avoidance:</strong> Must carefully mark to avoid visible blood vessels on shaft</li>
      <li><strong>Migration Risk:</strong> Can migrate if tissue insufficient or gauge too thin</li>
      <li><strong>Sexual Activity:</strong> Abstain minimum 6-8 weeks</li>
      <li><strong>Multiple Piercings:</strong> Frenum ladder requires careful spacing and angle consistency</li>
    </ul>`,
    refuse: `<ul>
      <li>Insufficient shaft skin (too tight or lacking mobility)</li>
      <li>Prominent blood vessels that cannot be avoided in desired placement</li>
      <li>Active STI or genital infection</li>
      <li>Scar tissue from previous piercings preventing safe placement</li>
      <li>Client cannot abstain from sexual activity during healing</li>
    </ul>`,
    aftercare: `<p><strong>Cleaning:</strong> Saline spray or sea salt soaks 2x daily. Thorough cleaning with soap and water daily. Pat dry completely.</p>
      <p><strong>First 6-8 Weeks:</strong> No sexual activity. Wear loose-fitting underwear and clothing. Monitor for signs of migration or irritation.</p>
      <p><strong>Professional Follow-Up:</strong> All genital piercings require professional monitoring during healing. Any concerns require immediate evaluation.</p>`
  }
};

// =====================================================
// INTERACTIVE FUNCTIONALITY
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
  const piercingButtons = document.querySelectorAll('.piercing-btn');
  const piercingDetails = document.getElementById('piercingDetails');
  const piercingName = document.getElementById('piercingName');

  // Specification elements
  const optimalAngle = document.getElementById('optimalAngle');
  const insertionDepth = document.getElementById('insertionDepth');
  const tissueType = document.getElementById('tissueType');
  const healingTime = document.getElementById('healingTime');
  const jewelryGauge = document.getElementById('jewelryGauge');
  const jewelryLength = document.getElementById('jewelryLength');
  const jewelryType = document.getElementById('jewelryType');
  const downsizeTime = document.getElementById('downsizeTime');

  // Content sections
  const positioningContent = document.getElementById('positioningContent');
  const safetyContent = document.getElementById('safetyContent');
  const refuseContent = document.getElementById('refuseContent');
  const aftercareContent = document.getElementById('aftercareContent');

  // Add click event listeners to all piercing buttons
  piercingButtons.forEach(button => {
    button.addEventListener('click', function() {
      const piercingType = this.getAttribute('data-piercing');
      const data = piercingData[piercingType];

      if (data) {
        // Remove active class from all buttons
        piercingButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        this.classList.add('active');

        // Update display
        piercingDetails.style.display = 'block';
        piercingName.textContent = data.name;

        // Update specifications
        optimalAngle.textContent = data.optimalAngle;
        insertionDepth.textContent = data.insertionDepth;
        tissueType.textContent = data.tissueType;
        healingTime.textContent = data.healingTime;
        jewelryGauge.textContent = data.jewelryGauge;
        jewelryLength.textContent = data.jewelryLength;
        jewelryType.textContent = data.jewelryType;
        downsizeTime.textContent = data.downsizeTime;

        // Update content sections
        positioningContent.innerHTML = data.positioning;
        safetyContent.innerHTML = data.safety;
        refuseContent.innerHTML = data.refuse;
        aftercareContent.innerHTML = data.aftercare;

        // Scroll to details section
        piercingDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
