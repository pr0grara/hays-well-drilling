/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'dripping-springs',
    name: 'Dripping Springs',
    state: 'TX',
    intro:
      'Dripping Springs sits in the heart of the Texas Hill Country west of Austin, and almost everything outside the small town core runs on a private water well. The ranchettes, new builds, and acreage spreads out toward Henly, Fitzhugh, and the Highway 290 corridor draw their water from the Trinity aquifer beneath the limestone — there is no city water out on most of these lots. We drill, pump, and service water wells all over the Dripping Springs area. The local pattern is its own thing: a wave of new rural builds that each need a new well, older shallow wells on long-held land that struggle when the drought drops the aquifer, and homes with steep caliche driveways well off the road. We see dry wells, declining yields, pumps that have worn out, and pressure tanks short-cycling. Trinity wells here can run deep, and depth and yield change from one ridge to the next. Tell us whether you are building new, have lost water, or have a pressure problem, and we will give you a straight answer, a real price, and a crew that knows Dripping Springs wells and the aquifer under them.',
    neighborhoods: ['Henly', 'Fitzhugh', 'Sycamore Creek', 'Caliterra', 'Belterra', 'Rim Rock'],
    landmarks: ['Hamilton Pool Preserve', 'Pedernales River', 'Dripping Springs 290 corridor', 'Trinity aquifer country'],
    issues: [
      {
        title: 'New rural builds that each need a well',
        body: 'Dripping Springs is one of the fastest-growing parts of the Hill Country, and nearly every new home on acreage out here starts with drilling a new well into the Trinity aquifer. Siting the well, hitting a reliable water-bearing zone, and casing it correctly are the foundation of the whole build, and we drill new residential wells across the area.',
      },
      {
        title: 'Older Trinity wells declining in drought',
        body: 'Many long-held properties around Dripping Springs have shallower wells drilled decades ago into the upper Trinity, and when a drought drops the aquifer those wells lose yield or run dry by afternoon. We diagnose whether it is the pump or the water level, and tell you honestly whether a deeper replacement well is the real fix.',
      },
      {
        title: 'Steep caliche lots and remote access',
        body: 'Out toward Henly and Fitzhugh, homes sit well off the road on steep caliche drives. We bring the right rig and trucks for the access and the drill site and work with you on where the well and equipment go, so you get a well drilled and serviced without tearing up the property.',
      },
    ],
    nearby: ['driftwood', 'wimberley', 'manchaca'],
    faqs: [
      {
        q: 'Do you cover all of the Dripping Springs area?',
        a: 'Yes. We cover Dripping Springs and the surrounding country — Henly, Fitzhugh, the 290 corridor, and the acreage subdivisions like Belterra, Caliterra, and Rim Rock. If you are not sure we reach your lot, call and ask; out here on Trinity wells, we likely do.',
      },
      {
        q: 'How deep do wells go in Dripping Springs?',
        a: 'It varies across the area, but Trinity wells around Dripping Springs often run several hundred feet, and some go past 600 to reach reliable water. We check your location and nearby well records before drilling so you have a realistic idea of depth and cost rather than a guess.',
      },
      {
        q: 'My well is going dry in the drought — what are my options?',
        a: 'First we determine whether it is truly the water level dropping or a pump problem. If the aquifer has fallen below an older shallow well, no pump change fixes that — a deeper replacement well into a more reliable zone is usually the answer. We give you the honest call instead of selling a pump that will not solve it.',
      },
    ],
  },
  {
    slug: 'wimberley',
    name: 'Wimberley',
    state: 'TX',
    intro:
      'Wimberley sits in a valley where Cypress Creek meets the Blanco River, a Hill Country village surrounded by ranch land, hills, and the homes that climb the ridges around town. Outside the small center, nearly everything runs on a private water well drawing from the Trinity aquifer, and water is a serious subject here — Wimberley has seen both major floods and hard droughts, and the local aquifer levels are watched closely. We drill, pump, and service water wells throughout the Wimberley and Woodcreek area. The local mix brings older wells on long-held ranch land, second homes and short-term rentals scattered up the hills, and newer builds carving into the limestone. We see wells declining in drought, pumps worn out from years of cycling, pressure tanks short-cycling, and water that needs testing after a flood. Trinity wells here can be deep and yields vary from one hillside to the next. Tell us where your well is and what it is doing — building new, no water, low pressure, or dirty water after high water — and we will give you a straight answer and a real price.',
    neighborhoods: ['Woodcreek', 'Cypress Creek', 'River Road', 'Flite Acres', 'Saddleridge', 'Paradise Hills'],
    landmarks: ['Blue Hole Regional Park', 'Cypress Creek', 'Blanco River', 'Jacob’s Well'],
    issues: [
      {
        title: 'Drought and watched aquifer levels',
        body: 'Wimberley sits over a much-watched stretch of the Trinity aquifer, and during drought local well levels drop and water-use cutbacks are common. Older or shallower wells lose yield first. We diagnose whether low water is the pump or a falling water level, and advise honestly on whether a deeper well is needed.',
      },
      {
        title: 'Flooding and water quality',
        body: 'The Cypress Creek and Blanco River valleys around Wimberley flood, and floodwater can contaminate a wellhead with bacteria. After high water we test the well for coliform and shock-chlorinate when needed, so you know the water coming out of the tap is safe to drink.',
      },
      {
        title: 'Second homes and rentals left idle',
        body: 'A lot of Wimberley and Woodcreek properties are second homes and short-term rentals that sit idle, then host a full house. That on-off pattern is easy to neglect — a tired pump or pressure tank goes unnoticed until guests arrive. Maintenance and a pre-season check keep a quiet well from failing during a stay.',
      },
    ],
    nearby: ['woodcreek', 'san-marcos', 'driftwood'],
    faqs: [
      {
        q: 'Do you cover Wimberley and Woodcreek?',
        a: 'Yes. We cover Wimberley, Woodcreek, and the surrounding ranch country — River Road, Flite Acres, Cypress Creek, and up the hills around town. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'My well level dropped during the drought — can you help?',
        a: 'Yes. We first confirm whether it is truly a falling water level or a pump issue, since they need different fixes. If the Trinity has dropped below an older shallow well, a deeper replacement well is usually the real answer. We give you the honest picture rather than chasing it with pump swaps.',
      },
      {
        q: 'We had flooding near our well — should I test the water?',
        a: 'Absolutely. Floodwater can carry bacteria into a wellhead, so after high water you should test for coliform before drinking it. We test the well and, if it shows bacteria, shock-chlorinate the well and plumbing and retest to confirm the water is clean.',
      },
    ],
  },
  {
    slug: 'san-marcos',
    name: 'San Marcos',
    state: 'TX',
    intro:
      'San Marcos sits at the southern edge of Hays County where the Edwards aquifer feeds the famously clear San Marcos River, with Texas State University in the center of town. The city core is on municipal water, but the rural country around it — out toward the Devils Backbone, Hunter, Martindale, and the hills west of town — runs on private wells drawing from the Edwards and Trinity aquifers. We drill, pump, and service water wells throughout the San Marcos area. The mix here ranges from acreage homes and small ranches on long-held land to newer rural builds on lots carved out toward the county lines. We see older wells declining in drought, worn pumps, short-cycling pressure tanks, and homes on the edge of the service area where city water never reached. Depths and aquifer vary depending on which side of town you are on. Tell us where your well is and what is going on — a new build, no water, low pressure, or a pump that keeps cycling — and we will give you a straight answer and a price you can count on.',
    neighborhoods: ['Hunter', 'Martindale', 'Devils Backbone', 'Redwood', 'Spring Lake hills', 'Purgatory Creek area'],
    landmarks: ['San Marcos River', 'Spring Lake', 'Texas State University', 'Devils Backbone'],
    issues: [
      {
        title: 'Edwards and Trinity wells, depending on location',
        body: 'Around San Marcos some wells tap the Edwards aquifer and others the Trinity, depending on which side of town you are on, and that changes depth, yield, and how a well behaves in drought. We use the area well records and local geology to drill and service wells correctly for your specific location rather than a one-size approach.',
      },
      {
        title: 'Rural edges beyond city water',
        body: 'The country around San Marcos — out toward Hunter, Martindale, and the western hills — sits beyond where city water reaches, so homes there depend entirely on a private well. We drill new wells for builds out here and keep existing wells, pumps, and tanks running for homes that have no municipal backup.',
      },
      {
        title: 'Drought-stressed wells and worn pumps',
        body: 'Like the rest of the Hill Country, San Marcos sees drought that drops aquifer levels and stresses older wells and pumps. We diagnose whether low water is a falling level or a failing pump, and we replace worn pumps and short-cycling tanks with correctly sized equipment built to last.',
      },
    ],
    nearby: ['wimberley', 'kyle', 'uhland'],
    faqs: [
      {
        q: 'Do you serve the San Marcos area?',
        a: 'Yes. We cover the rural country around San Marcos — Hunter, Martindale, Redwood, the Devils Backbone, and the hills west of town where homes are on private wells. If you are not sure you are in our area, call and ask.',
      },
      {
        q: 'Is my well on the Edwards or the Trinity aquifer?',
        a: 'It depends on where you are around San Marcos — both aquifers are tapped in different parts of the area, and that affects depth and how the well behaves in drought. We can tell from your location and well records, and we service the well correctly for whichever aquifer feeds it.',
      },
      {
        q: 'My rural home has low water pressure — what could it be?',
        a: 'Low pressure can come from a worn pump, a failing or undersized pressure tank, a misadjusted pressure switch, or a dropping water level. We test each so the fix addresses the real cause rather than a guess — and so you get steady pressure back without paying for parts you do not need.',
      },
    ],
  },
  {
    slug: 'buda',
    name: 'Buda',
    state: 'TX',
    intro:
      'Buda sits along I-35 in eastern Hays County between Austin and San Marcos, a fast-growing town where new subdivisions on city water meet the rural acreage and ranch land that still run on private wells. The neighborhoods in town are typically on municipal water, but the country out toward Niederwald, Mountain City, and the western edges of Buda depends on wells drawing from the Trinity and Edwards aquifers. We drill, pump, and service water wells throughout the Buda area. The local pattern is suburban and rural at once: newer homes on subdivided acreage that each need a well, and long-held properties with older wells and pumps. We see wells declining in drought, pumps worn out from years of service, pressure tanks short-cycling, and the steady demand for inspections as rural properties change hands in this hot market. Tell us where your well is and what it is doing — a new build, no water, low pressure, or an inspection for a sale — and we will give you a straight answer and a real price.',
    neighborhoods: ['Mountain City', 'Ruby Ranch', 'Elm Grove', 'Garlic Creek area', 'Sunfield edges', 'Cole Springs'],
    landmarks: ['Onion Creek', 'Garison Park', 'I-35 corridor', 'Buda Mill & Grain'],
    issues: [
      {
        title: 'Rural acreage beyond the city water lines',
        body: 'Buda’s subdivisions are growing fast on city water, but the acreage and ranch land at the edges — toward Mountain City, Niederwald, and the west — still depend on private wells. We drill new wells for rural builds out here and keep existing wells, pumps, and tanks running for homes the municipal lines never reached.',
      },
      {
        title: 'A hot resale market and well inspections',
        body: 'Rural properties around Buda change hands often in this fast market, frequently with no record of the well’s condition. A well inspection at the sale — checking yield, pump, tank, and water quality — gives buyers and sellers a clear, honest picture instead of an expensive surprise after closing.',
      },
      {
        title: 'Drought-stressed wells and aging pumps',
        body: 'Eastern Hays County sees the same drought swings as the rest of the area, dropping aquifer levels and stressing older wells and pumps. We diagnose whether low water is a falling level or a failing pump, and replace worn pumps and short-cycling tanks with correctly sized equipment.',
      },
    ],
    nearby: ['kyle', 'mountain-city', 'niederwald'],
    faqs: [
      {
        q: 'Do you cover Buda and the surrounding area?',
        a: 'Yes. We cover Buda and the rural country around it — Mountain City, Ruby Ranch, the Garlic Creek and Elm Grove areas, and the acreage toward Niederwald. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'I’m buying acreage near Buda with a well — should I get it inspected?',
        a: 'Yes. On a rural property the well is the entire water supply, and a standard home inspection does not cover well yield, pump condition, or water quality. A dedicated well inspection tells you what the well produces and whether the water is safe before you own the problem.',
      },
      {
        q: 'My home near Buda is on a well but the pump keeps cycling — what’s wrong?',
        a: 'Rapid on-off cycling is almost always a pressure tank that has lost its air charge or failed its bladder, so it can no longer hold pressure between cycles. That cycling wears out the pump fast. We test the tank and switch and fix it before it costs you the pump.',
      },
    ],
  },
  {
    slug: 'kyle',
    name: 'Kyle',
    state: 'TX',
    intro:
      'Kyle sits on the I-35 corridor in central Hays County, one of the fastest-growing cities in Texas, where sprawling new subdivisions meet the rural land that still surrounds them. Most of the new neighborhoods are on city water, but the acreage and ranch country at the edges — out toward Niederwald, Uhland, and the western hills — run on private wells drawing from the Trinity and Edwards aquifers. We drill, pump, and service water wells throughout the Kyle area. The pattern here is rapid growth pressing against rural land: new builds on subdivided acreage that need a well, and older properties with wells and pumps that have been in service for years. We see drought-declining wells, worn pumps, short-cycling pressure tanks, and a steady demand for inspections as rural land changes hands. Tell us where your well is and what is going on — a new build, no water, low pressure, or an inspection for a sale — and we will give you a straight answer and a price you can count on.',
    neighborhoods: ['Plum Creek', 'Steeplechase', 'Bunton Creek', 'Niederwald edges', 'Uhland Road area', 'Goforth'],
    landmarks: ['Plum Creek', 'Lake Kyle', 'I-35 corridor', 'Blanco River nearby'],
    issues: [
      {
        title: 'Growth pressing against rural wells',
        body: 'Kyle is growing fast on city water, but the acreage and ranch land at the edges still depend on private wells. We drill new wells for rural builds out toward Niederwald and Uhland and keep existing wells, pumps, and tanks running for homes the city lines have not reached.',
      },
      {
        title: 'Rural properties changing hands',
        body: 'Land around Kyle turns over quickly in this market, often with no record of a well’s condition. A well inspection — checking yield, pump, tank, and water quality — gives buyers and sellers a real picture so the water supply does not become a last-minute problem in the deal.',
      },
      {
        title: 'Drought and aging equipment',
        body: 'Central Hays County sees the regional drought swings that drop aquifer levels and stress older wells and pumps. We diagnose whether low water is a dropping level or a worn pump, and replace failing pumps and short-cycling pressure tanks with correctly sized equipment built to last.',
      },
    ],
    nearby: ['buda', 'uhland', 'niederwald'],
    faqs: [
      {
        q: 'Do you serve Kyle and the surrounding area?',
        a: 'Yes. We cover Kyle and the rural country around it — the acreage toward Niederwald, Uhland, and the western hills, plus older properties on wells inside the area. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'My rural Kyle home suddenly has no water — what should I check?',
        a: 'Check the breaker for the well pump first — a tripped breaker is a common, easy cause. If it trips again right away, stop resetting it and call us; that points to an electrical or pump fault. If the breaker is fine and there is still no water, the pump, switch, or tank likely needs a look.',
      },
      {
        q: 'I’m building on acreage near Kyle — when should the well go in?',
        a: 'Early. On most rural lots there is no city water, so the well comes before the rest of the build can connect to anything. We help site the well, drill to a reliable water-bearing zone, case it correctly, and then set the pump and tank so your build has water when it needs it.',
      },
    ],
  },
  {
    slug: 'driftwood',
    name: 'Driftwood',
    state: 'TX',
    intro:
      'Driftwood is quintessential Hill Country — rolling ranch land, vineyards, and the famous barbecue and wineries along the back roads between Dripping Springs and Wimberley. There is no town water out here to speak of; nearly every home, ranch, and winery runs on a private water well drawing from the Trinity aquifer. We drill, pump, and service water wells throughout the Driftwood area. The local mix is acreage and ranchettes on long-held land, larger ranch and agricultural wells, and a steady stream of new rural builds on subdivided tracts. We see Trinity wells that run deep, older wells declining in drought, worn pumps, short-cycling pressure tanks, and the long, rough caliche drives that come with country property. Depth and yield vary from one ridge to the next out here. Tell us whether you are building new, have lost water, have a pressure problem, or need a well inspected, and we will give you a straight answer, a real price, and a crew that knows Driftwood wells and the Trinity beneath them.',
    neighborhoods: ['Howard Ranch', 'La Ventana', 'Rim Rock', 'Mount Sharp', 'Elder Hill', 'FM 150 area'],
    landmarks: ['Salt Lick BBQ', 'Driftwood wineries', 'Onion Creek headwaters', 'Trinity aquifer ranch country'],
    issues: [
      {
        title: 'Deep Trinity wells on ranch land',
        body: 'Driftwood sits squarely in Trinity aquifer country, and wells out here can run deep — depth and yield change a lot from one ridge to the next. We use area well records and local geology to drill and case wells correctly, and to size pumps to the real depth and water level rather than guessing.',
      },
      {
        title: 'New rural builds and subdivided tracts',
        body: 'A lot of Driftwood land is being subdivided into ranchettes, and every new home needs a well drilled before anything else. We site the well, drill to a reliable water-bearing zone, and case it to code so the foundation of the property’s water supply is done right.',
      },
      {
        title: 'Long, rough caliche access',
        body: 'Country property out here means long, rough caliche drives and well sites well off the road. We come with the right rig and trucks for the access, work with you on placement, and get a well drilled or serviced without tearing up the land.',
      },
    ],
    nearby: ['dripping-springs', 'wimberley', 'woodcreek'],
    faqs: [
      {
        q: 'Do you cover Driftwood and the surrounding ranch land?',
        a: 'Yes. We cover Driftwood and the country around it — Howard Ranch, La Ventana, Rim Rock, Mount Sharp, and the FM 150 and Elder Hill areas. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'How deep are wells in Driftwood?',
        a: 'Driftwood is Trinity aquifer country and wells here often run several hundred feet, sometimes past 600 to reach reliable water, with depth varying from ridge to ridge. We check your location and nearby well records before drilling so you get a realistic depth and cost estimate.',
      },
      {
        q: 'I’m putting in a winery/ranch with high water needs — can you size for that?',
        a: 'Yes. Agricultural and commercial water demand is very different from a single home, and it changes the well, pump, and tank sizing. We evaluate your expected demand against the well’s yield and design the system to deliver it reliably rather than dropping in a residential setup that cannot keep up.',
      },
    ],
  },
  {
    slug: 'woodcreek',
    name: 'Woodcreek',
    state: 'TX',
    intro:
      'Woodcreek is a small city tucked into the hills just north of Wimberley, built around a golf course and wooded lots, where nearly every home runs on a private water well drawing from the Trinity aquifer. There is no large municipal supply out here — the neighborhoods on the ridges and in the creek bottoms depend on their own wells, pumps, and pressure tanks. We drill, pump, and service water wells throughout Woodcreek and the surrounding Wimberley area. The local mix leans toward established homes with wells and pumps that have been in service for years, plus second homes and weekend properties that sit idle between visits. We see Trinity wells declining when the drought drops the aquifer, worn pumps, short-cycling pressure tanks, and water that needs testing after the area’s floods. Wooded, hilly lots make access its own consideration. Tell us where your well is and what it is doing — no water, low pressure, dirty water, or a pump that keeps cycling — and we will give you a straight answer and a real price.',
    neighborhoods: ['Woodcreek North', 'Woodcreek South', 'Cypress Creek', 'Champions', 'Fairway Hills', 'Brookhollow'],
    landmarks: ['Quicksand Golf Course', 'Cypress Creek', 'Blue Hole nearby', 'Wimberley Valley'],
    issues: [
      {
        title: 'Established wells aging out',
        body: 'Many Woodcreek homes have wells, pumps, and pressure tanks that have been in service for years and are reaching the end of their life. Aging pumps fail and tired tanks short-cycle. Regular maintenance and an honest look at the equipment catch trouble before it leaves a home without water.',
      },
      {
        title: 'Drought on a watched Trinity aquifer',
        body: 'Woodcreek sits over the same closely watched stretch of the Trinity as Wimberley, and drought drops well levels here. Older or shallower wells lose yield first. We diagnose whether low water is a falling level or a failing pump and advise honestly on whether a deeper well is the real fix.',
      },
      {
        title: 'Weekend homes left idle',
        body: 'A lot of Woodcreek properties are second homes and weekend places that sit idle, then fill up. A tired pump or pressure tank goes unnoticed until a visit. Maintenance and a check before the season keep a quiet well from failing while you or guests are there.',
      },
    ],
    nearby: ['wimberley', 'driftwood', 'san-marcos'],
    faqs: [
      {
        q: 'Do you cover Woodcreek?',
        a: 'Yes. We cover Woodcreek — North and South — and the surrounding Wimberley Valley, including the wooded ridge and creek-bottom neighborhoods. Tell us where the property is and how the access looks and we will come prepared.',
      },
      {
        q: 'Our weekend place in Woodcreek lost water — can you help fast?',
        a: 'Yes. No water on a private well is an emergency because there is no backup supply. We come out, find why the system stopped — often a tripped breaker, a failed switch or tank, or a worn pump — and get water back on, then tell you straight what failed and how to prevent a repeat.',
      },
      {
        q: 'How long do well pumps and tanks last out here?',
        a: 'A quality submersible pump typically lasts 10 to 15 years and a bladder pressure tank 8 to 12, though hard water and heavy cycling shorten both. On an established Woodcreek home with original equipment, it is worth a check so you can plan a replacement on your schedule instead of during a failure.',
      },
    ],
  },
  {
    slug: 'mountain-city',
    name: 'Mountain City',
    state: 'TX',
    intro:
      'Mountain City is a small, leafy community tucked between Buda and Kyle in eastern Hays County, made up mostly of large wooded lots where homes have long relied on private water wells. Surrounded by the growth along the I-35 corridor, it has kept its rural, low-density character, and many properties here draw their water from the Trinity and Edwards aquifers rather than city lines. We drill, pump, and service water wells throughout Mountain City and the surrounding Buda–Kyle area. The local pattern is established homes on big lots with wells and pumps that have been in service for years, plus the occasional new build. We see wells declining in drought, worn pumps, short-cycling pressure tanks, and homes that need an inspection or a water test. Tell us where your well is and what it is doing — no water, low pressure, dirty water, or a pump that keeps cycling — and we will give you a straight answer and a real price from a crew that knows eastern Hays County wells.',
    neighborhoods: ['Old Mountain City', 'Live Oak', 'Cedar Ridge', 'Buda edges', 'Kyle edges'],
    landmarks: ['Onion Creek nearby', 'I-35 corridor', 'Buda–Kyle area', 'Hill Country oaks'],
    issues: [
      {
        title: 'Big wooded lots on long-standing wells',
        body: 'Mountain City is built around large wooded lots where homes have relied on private wells for decades. Pumps, tanks, and switches on these established systems wear out, so regular maintenance and an honest look at the equipment keep a small problem from becoming a no-water day.',
      },
      {
        title: 'Surrounded by growth but still on wells',
        body: 'Even as Buda and Kyle expand on city water around it, Mountain City has kept its rural character and many homes stay on private wells. We drill new wells where needed and keep existing wells, pumps, and tanks running for properties that depend on their own water.',
      },
      {
        title: 'Drought and water testing',
        body: 'Eastern Hays County sees the regional drought swings that drop aquifer levels and stress older wells. We diagnose whether low water is a falling level or a failing pump, and because the water comes straight from the ground, we test for bacteria and basic chemistry when a home needs it.',
      },
    ],
    nearby: ['buda', 'kyle', 'niederwald'],
    faqs: [
      {
        q: 'Do you cover Mountain City?',
        a: 'Yes. We cover Mountain City and the surrounding eastern Hays County area between Buda and Kyle, including the large wooded-lot neighborhoods on private wells. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'My older well home has low pressure throughout the house — why?',
        a: 'Steady low pressure can come from a worn pump, a failing or undersized pressure tank, a misadjusted pressure switch, or a dropping water level. We test each to find the real cause so the fix actually restores your pressure instead of masking the problem.',
      },
      {
        q: 'Should I test my well water, and how often?',
        a: 'Yes — because the water comes straight from the aquifer, an annual test for coliform bacteria and basic chemistry is good practice, and you should test after any flooding or well work. If a test shows bacteria, we shock-chlorinate the well and plumbing and retest to confirm it is clean.',
      },
    ],
  },
  {
    slug: 'niederwald',
    name: 'Niederwald',
    state: 'TX',
    intro:
      'Niederwald is a small rural community straddling the Hays–Caldwell county line southeast of Kyle and Buda, a stretch of farm and ranch land where homes run almost entirely on private water wells. There is no municipal supply reaching most of these properties — they draw from the Trinity and the deeper aquifers beneath this eastern edge of Hays County. We drill, pump, and service water wells throughout the Niederwald area. The local pattern is long-held farm and ranch land with older wells and pumps, plus newer rural homes on subdivided tracts as growth from Kyle and Buda pushes outward. We see wells declining in drought, worn pumps, short-cycling pressure tanks, and homes well off the road on rough access. Tell us where your well is and what is going on — a new build, no water, low pressure, or a pump that keeps cycling — and we will give you a straight answer and a real price from a crew that drives out and knows eastern Hays County wells.',
    neighborhoods: ['Niederwald core', 'FM 2001 area', 'Hays–Caldwell line', 'Kyle edges', 'Rural Niederwald'],
    landmarks: ['FM 2001', 'Hays–Caldwell county line', 'Plum Creek nearby', 'Eastern Hays farmland'],
    issues: [
      {
        title: 'Farm and ranch land on private wells',
        body: 'Niederwald is rural farm and ranch country where homes depend entirely on private wells — there is no city water reaching most of these properties. We drill new wells, and we keep existing wells, pumps, and tanks running for households that have no municipal backup if the system goes down.',
      },
      {
        title: 'Older wells on long-held land',
        body: 'Much of the land here has been held for generations, with wells and pumps that have been in service for many years. Aging pumps fail and old pressure tanks short-cycle. Regular maintenance and an honest look at the equipment keep these older systems from leaving a home without water.',
      },
      {
        title: 'Drought-stressed wells and rough access',
        body: 'This eastern edge of Hays County sees the regional drought that drops aquifer levels and stresses older wells, and many homes sit well off the road on rough drives. We diagnose low-water problems honestly and come prepared with the right equipment for the access.',
      },
    ],
    nearby: ['kyle', 'buda', 'uhland'],
    faqs: [
      {
        q: 'Do you really drive out to Niederwald?',
        a: 'Yes. We cover Niederwald and the surrounding rural area along the Hays–Caldwell line, including properties well off the road. Tell us about the access and where the well is and we will come prepared with the right rig and trucks.',
      },
      {
        q: 'My well pump quit and I have no water — how fast can you come?',
        a: 'Call with your location and what is happening and we will give you a real time. No-water calls get priority because on a private well there is no backup supply. Same-day service is often available out this way — ask when you call.',
      },
      {
        q: 'I’m building on rural land near Niederwald — do I need a permit to drill?',
        a: 'Most of the area falls under a groundwater conservation district, and new wells generally need to be registered or permitted and drilled by a licensed driller. We drill to code and walk you through what the local district requires so it is done right and on record.',
      },
    ],
  },
  {
    slug: 'uhland',
    name: 'Uhland',
    state: 'TX',
    intro:
      'Uhland is a small town along the San Marcos River corridor southeast of Kyle, straddling the Hays–Caldwell line in a stretch of farm and ranch land where private water wells are the norm. As growth from Kyle and Buda pushes outward, new rural homes are going in alongside long-held agricultural land, and nearly all of it depends on wells drawing from the Trinity and deeper aquifers. We drill, pump, and service water wells throughout the Uhland area. The local mix is older wells on farm land, newer builds on subdivided tracts, and the steady demand for pumps, tanks, and inspections that comes with rural property. We see wells declining in drought, worn pumps, short-cycling pressure tanks, and homes off the road on rough access. Tell us where your well is and what it is doing — a new build, no water, low pressure, or an inspection for a sale — and we will give you a straight answer and a real price from a crew that knows eastern Hays County wells.',
    neighborhoods: ['Uhland core', 'Cottonwood Creek', 'Hays–Caldwell line', 'Kyle edges', 'San Marcos River corridor'],
    landmarks: ['San Marcos River corridor', 'Cottonwood Creek', 'Hays–Caldwell county line', 'FM 2001 nearby'],
    issues: [
      {
        title: 'Farm land turning into rural homes',
        body: 'Uhland is farm and ranch country where growth from Kyle and Buda is adding new rural homes on subdivided tracts. Each new build needs a well drilled into the Trinity or deeper aquifers, and we site, drill, and case new wells as the foundation of the property’s water supply.',
      },
      {
        title: 'Older wells and aging pumps',
        body: 'Long-held land around Uhland often has wells and pumps in service for many years. Aging pumps fail and old pressure tanks short-cycle. Maintenance and an honest look at the equipment keep these systems from leaving a home without water at the worst time.',
      },
      {
        title: 'Drought and rough rural access',
        body: 'This corner of Hays County sees the regional drought that drops aquifer levels and stresses older wells, and many properties sit off the road on rough drives. We diagnose low-water problems honestly and arrive with the right equipment for the access.',
      },
    ],
    nearby: ['kyle', 'san-marcos', 'niederwald'],
    faqs: [
      {
        q: 'Do you serve Uhland and the surrounding area?',
        a: 'Yes. We cover Uhland and the rural country along the San Marcos River corridor and the Hays–Caldwell line, including properties off the road. Tell us where the well is and how the access looks and we will come prepared.',
      },
      {
        q: 'I’m buying rural land near Uhland with a well — what should I check?',
        a: 'Get a well inspection before closing. The well is the entire water supply on rural land, and a standard home inspection does not cover yield, pump condition, or water quality. We test what the well produces and whether the water is safe so you know what you are buying.',
      },
      {
        q: 'My pump runs constantly and never shuts off — what’s wrong?',
        a: 'A pump that runs nonstop can mean a leak in the system, a dropping water level so the pump cannot build pressure, a stuck pressure switch, or a worn pump that can no longer reach cutoff. Running constantly will burn it out, so call us — we find the cause and stop it before the pump fails.',
      },
    ],
  },
  {
    slug: 'hays',
    name: 'Hays',
    state: 'TX',
    intro:
      'Hays is a small community in the central part of the county that shares its name, set among the ranch land and low hills between Buda, Kyle, and Dripping Springs. It is rural, low-density country where homes run on private water wells drawing from the Trinity and Edwards aquifers — there is no municipal supply reaching most of these properties. We drill, pump, and service water wells throughout the Hays area. The local pattern is acreage homes and small ranches on long-held land, with older wells and pumps, plus newer rural builds as growth spreads through the county. We see Trinity wells declining in drought, worn pumps, short-cycling pressure tanks, and homes set well off the road. Depth and yield vary across this central stretch of the county. Tell us where your well is and what is going on — a new build, no water, low pressure, or a pump that keeps cycling — and we will give you a straight answer and a real price from a crew that knows central Hays County wells.',
    neighborhoods: ['Hays core', 'Niederwald Road area', 'Cole Springs', 'Buda edges', 'Dripping Springs edges'],
    landmarks: ['Onion Creek', 'Hill Country ranch land', 'Central Hays County', 'FM 967 / FM 150 area'],
    issues: [
      {
        title: 'Rural ranch land on private wells',
        body: 'The community of Hays sits in low-density ranch country where homes depend entirely on private wells, with no city water reaching most lots. We drill new wells and keep existing wells, pumps, and tanks running for households that have no municipal backup if the system goes down.',
      },
      {
        title: 'Trinity and Edwards wells across the county’s middle',
        body: 'Wells around Hays tap the Trinity and Edwards aquifers depending on location, and depth and yield vary across this central stretch. We use area well records and local geology to drill and service wells correctly for your specific spot rather than a one-size approach.',
      },
      {
        title: 'Drought-stressed wells and aging pumps',
        body: 'Central Hays County sees the regional drought that drops aquifer levels and stresses older wells and pumps. We diagnose whether low water is a falling level or a failing pump, and replace worn pumps and short-cycling tanks with correctly sized equipment built to last.',
      },
    ],
    nearby: ['buda', 'dripping-springs', 'kyle'],
    faqs: [
      {
        q: 'Do you cover the Hays community and central Hays County?',
        a: 'Yes. We cover the community of Hays and the surrounding ranch country between Buda, Kyle, and Dripping Springs, including properties well off the road. Tell us where the well is and we will confirm and come prepared.',
      },
      {
        q: 'How do I know whether to repair or replace my well pump?',
        a: 'It depends on the cause and the pump’s age. A bad switch, breaker, or pressure tank is a repair that can get years more out of a good pump, while a worn-out or burned-up pump near the end of its life is usually better replaced. We give you the honest call based on what we find.',
      },
      {
        q: 'I’m building on acreage near Hays — when should the well go in?',
        a: 'Early. On most rural lots there is no city water, so the well comes before the rest of the build can connect to anything. We help site the well, drill to a reliable water-bearing zone, case it correctly, and set the pump and tank so your build has water when it needs it.',
      },
    ],
  },
  {
    slug: 'manchaca',
    name: 'Manchaca',
    state: 'TX',
    intro:
      'Manchaca sits at the northern edge of the Hays County area in far south Austin, a community where suburban growth meets the rural acreage and wooded lots that still draw their water from private wells. While much of the surrounding area is on city water, plenty of homes here — especially the larger lots and older properties off the main roads — run on wells drawing from the Edwards and Trinity aquifers. We drill, pump, and service water wells throughout the Manchaca and far south Austin area. The local mix leans toward established homes on wells and pumps that have been in service for years, plus rural builds on the wooded lots that have kept their acreage. We see wells declining in drought, worn pumps, short-cycling pressure tanks, and homes that need an inspection or a water test as properties change hands in this hot market. Tell us where your well is and what it is doing — no water, low pressure, dirty water, or a pump that keeps cycling — and we will give you a straight answer and a real price.',
    neighborhoods: ['Manchaca core', 'Bear Creek', 'Twin Creeks', 'Bliss Spillar area', 'FM 1626 area', 'Hays County edge'],
    landmarks: ['Bear Creek', 'Onion Creek nearby', 'FM 1626 corridor', 'South Austin / Hays line'],
    issues: [
      {
        title: 'Suburban edge still on private wells',
        body: 'Manchaca sits where south Austin growth meets rural acreage, and while much of the area is on city water, plenty of larger lots and older homes still depend on private wells. We keep those wells, pumps, and tanks running and drill new wells where city lines have not reached.',
      },
      {
        title: 'Established wells aging out',
        body: 'Many Manchaca-area homes on wells have pumps, tanks, and switches that have been in service for years and are nearing the end of their life. Aging pumps fail and tired tanks short-cycle. Maintenance and an honest equipment check catch trouble before it leaves a home without water.',
      },
      {
        title: 'Hot market and well inspections',
        body: 'Property around Manchaca changes hands often in this market, frequently with no record of a well’s condition. A well inspection — checking yield, pump, tank, and water quality — gives buyers and sellers a clear, honest picture so the water supply does not become a surprise after closing.',
      },
    ],
    nearby: ['dripping-springs', 'buda', 'kyle'],
    faqs: [
      {
        q: 'Do you cover Manchaca and far south Austin?',
        a: 'Yes. We cover Manchaca and the far south Austin / northern Hays County edge, including the larger wooded lots and older properties still on private wells. Tell us where the property is and we will confirm and come prepared.',
      },
      {
        q: 'My Manchaca home is on city water — could part of it still be on a well?',
        a: 'It happens — some properties have city water for the house but keep a well for irrigation or as a holdover. If you have a wellhead, pressure tank, or pump on the property, it still needs servicing to stay usable. We can check the setup and tell you what condition it is in.',
      },
      {
        q: 'How do I know when my pressure tank needs replacing?',
        a: 'The classic sign is the pump short-cycling — clicking on and off rapidly as you use water — along with pressure that surges and drops or a tank that feels heavy and waterlogged. That means the tank has lost its air charge or failed its bladder. Replacing it promptly protects the pump from the constant cycling.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
