/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

// TODO: replace these placeholder photos with real water-well / pump job photos before launch.
import wellServicesImg from '../assets/services/well-services.jpg';
import wellDrillingImg from '../assets/services/water-well-drilling.jpg';
import pumpInstallImg from '../assets/services/well-pump-installation.jpg';
import pumpRepairImg from '../assets/services/well-pump-repair.jpg';
import pressureTankImg from '../assets/services/pressure-tank-service.jpg';
import wellInspectionImg from '../assets/services/well-inspections.jpg';
import wellMaintenanceImg from '../assets/services/well-maintenance.jpg';
import emergencyWellImg from '../assets/services/emergency-well-service.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Water Well Drilling"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'well-services',
    name: 'Water Well Services',
    short: 'Well Services',
    blurb: 'Drilling, pumps, pressure tanks, inspections, and emergencies — one local crew for the whole water well across Hays County.',
    description:
      'We are a full-service water well company covering Hays County and the Texas Hill Country, from Dripping Springs and Wimberley down to San Marcos, Buda, and Kyle. If it has to do with a private water well, we handle it: drilling a new well for a rural build, installing and repairing submersible pumps, setting and servicing pressure tanks, inspecting wells for a home sale, routine maintenance, and emergency no-water calls. Out here almost nobody on acreage is on city water — homes run on a well drilled into the Trinity or Edwards aquifer, with a submersible pump pulling water up and a pressure tank feeding the house. That system has a lot of parts, and when one fails you can lose water entirely. You call, you tell us what is going on — building new, no water, low pressure, dirty water, or a pump that keeps cycling — and we give you a straight answer and a real price. No upsells, no scare tactics: an honest crew that knows Hill Country wells and the aquifers under them.',
    sections: [
      {
        h: 'One crew for the whole well system',
        body: 'A lot of folks call one company to drill, another to set the pump, and a third when the pressure drops. We do all of it. New well drilling, pump installation and repair, pressure tank service, well inspections, maintenance, and emergency no-water calls — it is one phone call and one crew that already knows your setup. That continuity matters: the people who drilled or serviced your well are the people who know your depth, your pump, your tank, and how your aquifer behaves in a dry year.',
      },
      {
        h: 'Built for Hill Country wells',
        body: 'Hays County well work is its own animal. Wells here tap the Trinity and Edwards aquifers, depths and water-bearing zones vary a lot from one ridge to the next, and the limestone and caliber of the rock make drilling unpredictable. Add steep caliche driveways, long rural lots, and a region that swings between flood and drought, and you need a crew that knows the local geology. We size the well, casing, pump, and tank to the property and the aquifer instead of guessing — the difference between a well that runs for decades and one that goes dry or burns up a pump.',
      },
      {
        h: 'Straight answers, honest pricing',
        body: 'Well work is easy to oversell because most of the system is underground and out of sight. We do not work that way. We tell you what your well actually needs, show you what we find when we pull the pump or test the system, and quote it up front. If your pump has years left, we say so. If a 20-year-old well is declining in a drought and a new pump is only buying time, we tell you that too — so you can plan instead of getting surprised with no water on a Saturday.',
      },
    ],
    points: [
      'Drilling, pumps, tanks, inspections, and emergencies — one crew',
      'New and existing private wells across Hays County',
      'Pumps and tanks sized to your well depth and aquifer',
      'Honest, up-front pricing with no surprise add-ons',
      'We show you what we find before recommending work',
      'Rigs and trucks set up for steep, rural Hill Country access',
    ],
    faqs: [
      {
        q: 'Do you handle the whole well or just one part?',
        a: 'The whole system. We drill new wells, install and repair submersible pumps, set and service pressure tanks, inspect wells for home sales, and answer emergency no-water calls. One call covers it, and the crew that works your well is the crew that knows your depth, pump, and tank.',
      },
      {
        q: 'How deep are wells in Hays County?',
        a: 'It varies a lot. Depending on where you are in the county and which aquifer your well taps — usually the Trinity or the Edwards — wells can run from a couple hundred feet to well over 600. We evaluate your location and nearby well records before we drill so you have a realistic idea of depth and cost.',
      },
      {
        q: 'My property is on a steep caliche lot way off the road — can you still reach it?',
        a: 'Almost always, yes. Rural Hill Country access is most of what we do. We bring the right rig and trucks for the drive and the drill site, and we work with you on where the well and equipment go. Tell us about the driveway and the lay of the land when you call and we will come prepared.',
      },
      {
        q: 'How do I know if the problem is the well, the pump, or the tank?',
        a: 'You often cannot tell from the symptom alone — no water, low pressure, or short-cycling can each come from several causes. That is why we diagnose before we sell anything: we test the pump, check the pressure tank and switch, and look at the well itself so the fix addresses the real problem instead of the easiest guess.',
      },
    ],
    image: wellServicesImg,
    imageAlt: 'Water well service truck at a rural Hill Country home in Hays County',
    hubOnly: true,
  },
  {
    slug: 'water-well-drilling',
    name: 'Water Well Drilling',
    short: 'Well Drilling',
    blurb: 'New rural build or a dry old well? We drill a new water well sized to your Hill Country property and aquifer.',
    description:
      'Drilling a new water well is the foundation of life on Hill Country acreage — if you are building a rural home in Hays County, the well comes before nearly everything else. We drill new residential water wells across the county, from Dripping Springs and Driftwood to Wimberley, San Marcos, Buda, and Kyle. We evaluate your property and the area well records, locate the best spot for a productive well, drill to a water-bearing zone in the Trinity or Edwards aquifer, set proper steel or PVC casing to protect the well and keep surface water out, and develop the well so it produces clean water. We also drill replacement wells when an old or shallow well has gone dry or declined in a drought. Every property is different out here — depth, water quality, and yield change from one ridge to the next — so we size the well to your land and your household instead of drilling blind.',
    sections: [
      {
        h: 'Drilling for a new Hill Country build',
        body: 'On most rural lots in Hays County there is no city water to tap, so a new build starts with a well. We help you site the well for the best chance at good yield and water quality, drill through the limestone to a reliable water-bearing zone, and case and grout the well to code so it is sealed against surface contamination. Get the well in early and the rest of the build — pump, tank, plumbing — has something to connect to.',
      },
      {
        h: 'Casing, depth, and why local geology matters',
        body: 'Hill Country drilling is unpredictable: the Trinity and Edwards aquifers sit at different depths across the county, the rock changes fast, and a well that hits good water at 300 feet on one lot may need to go past 600 on the next. Proper casing protects the borehole, keeps loose rock and surface runoff out, and sets up a clean column for the pump. We use the area well records and what the drill tells us to set the right depth and casing rather than guessing — it is what makes a well last decades.',
      },
      {
        h: 'Replacement wells for dry or declining wells',
        body: 'Drought hits Hill Country wells hard. Older, shallower wells — especially ones drilled decades ago into the upper Trinity — can drop in yield or go dry when the aquifer falls. If your well is producing sand, running dry by afternoon, or has steadily lost water over the years, a deeper replacement well is often the real fix rather than chasing it with pump changes. We will tell you honestly whether your well can be saved or whether drilling new is the smarter long-term call.',
      },
    ],
    points: [
      'New residential wells for rural Hill Country builds',
      'Well siting based on area records and local geology',
      'Drilled to a reliable Trinity or Edwards water-bearing zone',
      'Proper steel or PVC casing, sealed and grouted to code',
      'Well developed for clean, sediment-free water',
      'Replacement wells for dry or declining drought-hit wells',
    ],
    faqs: [
      {
        q: 'How much does it cost to drill a well in Hays County?',
        a: 'Cost depends mostly on depth, which varies a lot across the county, plus casing and the pump and tank you install afterward. Because Hill Country wells can range from a few hundred feet to over 600, we evaluate your location and nearby well records before quoting so you get a realistic number rather than a lowball that grows.',
      },
      {
        q: 'How long does it take to drill a new well?',
        a: 'The drilling itself is often a day or two once the rig is set, depending on depth and how the rock behaves. After drilling we case, develop, and then install the pump and pressure tank. We will give you a realistic timeline up front so you can plan your build around it.',
      },
      {
        q: 'Do I need a permit to drill a well here?',
        a: 'Most of Hays County falls under a groundwater conservation district, and new wells generally need to be registered or permitted and drilled by a licensed driller. We handle the well to code and walk you through what the local district requires so it is done right and on record.',
      },
      {
        q: 'My old well is going dry in the drought — should I drill a new one?',
        a: 'Often, yes. Older shallow wells lose yield when the aquifer drops, and no pump change fixes a well that has run out of water. We evaluate whether deepening or a new, deeper well into a more reliable zone makes sense, and give you the honest call instead of selling you a pump that will not solve it.',
      },
    ],
    image: wellDrillingImg,
    imageAlt: 'Water well drilling rig working at a rural property in Hays County, Texas',
  },
  {
    slug: 'well-pump-installation',
    name: 'Well Pump Installation',
    short: 'Pump Installation',
    blurb: 'New pump for a new well, or replacing a worn-out one? We size and install the right submersible pump for your well.',
    description:
      'The pump is the heart of a water well — it lifts water from deep in the aquifer up to your pressure tank and into the house, and the wrong pump means weak pressure, high power bills, or a pump that burns out early. We install well pumps across Hays County, on new wells and as replacements for failed or undersized ones. Most Hill Country wells use a submersible pump set down in the well casing, and getting it right means matching the pump horsepower and flow rate to your well depth, your water level, and your household demand. We pull and replace failed pumps, install the correct pump on a newly drilled well, run new drop pipe and wire where needed, and set the controls and pressure switch so the system runs efficiently. A pump sized correctly for your well and your home is the difference between strong, steady water and a system that struggles or fails early.',
    sections: [
      {
        h: 'Sizing the pump to your well and home',
        body: 'A pump is not one-size-fits-all. The right horsepower and flow rate depend on how deep your well is, how far down the water sits, and how much water your household uses at once — multiple bathrooms, irrigation, and livestock all add demand. Too small and you fight low pressure; too big and you waste power and stress the well. We size the pump to your actual well and home instead of dropping in whatever is on the truck.',
      },
      {
        h: 'Submersible pumps for deep Hill Country wells',
        body: 'Most wells in Hays County are deep enough that they use a submersible pump — a sealed motor and pump set far down in the casing, pushing water to the surface. When we install one we run fresh drop pipe and wire rated for the depth, set it at the right level above the well bottom to avoid pulling sand, and wire the controls so the motor is protected. Done right, a quality submersible pump runs reliably for many years.',
      },
      {
        h: 'Replacing a failed or undersized pump',
        body: 'If you have lost water, your pump may have failed — worn out, lost a seal, or had its motor give up after years of cycling. Sometimes the original pump was simply too small for the home and never kept up. We pull the old pump, inspect the wire and pipe, and install a correctly sized replacement, upgrading the drop pipe, wire, or controls if they are the weak link. You get water back and a system built to last instead of a quick swap that fails again.',
      },
    ],
    points: [
      'Pump sized to your well depth, water level, and household demand',
      'Submersible pump installation on new and existing wells',
      'New drop pipe and wire run where needed',
      'Pressure switch and controls set for efficient, protected operation',
      'Failed and undersized pumps pulled and replaced',
      'Honest recommendation — quality pump built to last',
    ],
    faqs: [
      {
        q: 'How long does a well pump last?',
        a: 'A quality submersible pump that is correctly sized typically lasts 10 to 15 years, sometimes longer. Frequent cycling, a failing pressure tank, sediment, or an undersized pump all shorten that. If yours is past a decade and acting up, it is worth planning for a replacement before it leaves you with no water.',
      },
      {
        q: 'What size pump do I need?',
        a: 'It depends on your well depth, how far down the water sits, and how much water your home uses at once. A small house is very different from one with several baths plus irrigation. We figure the right horsepower and flow rate for your specific well and household rather than guessing — an undersized pump struggles and an oversized one wastes power.',
      },
      {
        q: 'Can you replace just the pump, or do other parts need to go too?',
        a: 'Often the pump is the main item, but we always check the drop pipe, wire, pressure switch, and tank while the pump is out, since a failure there can take out a new pump fast. We will tell you straight what needs replacing and what is fine, so you are not paying for parts you do not need or skipping ones that will fail next.',
      },
      {
        q: 'How long does a pump installation take?',
        a: 'A straightforward pump replacement is often done in a day, sometimes a few hours once we have pulled the old one and confirmed the well. A new install on a fresh well, with new pipe and wire, can take a bit longer. We will give you a real timeline when we see the setup.',
      },
    ],
    image: pumpInstallImg,
    imageAlt: 'Submersible well pump being installed at a Hays County home',
  },
  {
    slug: 'well-pump-repair',
    name: 'Well Pump Repair',
    short: 'Pump Repair',
    blurb: 'No water, low pressure, or a pump that won’t stop running? We diagnose and repair well pump problems fast.',
    description:
      'When a well pump acts up, you feel it at every faucet — weak pressure, sputtering air, water that comes and goes, or no water at all. The pump and its controls are mechanical and electrical, and a lot can go wrong: a tripped breaker or burned wiring, a failed pressure switch, a worn or seized pump, a waterlogged pressure tank making the pump short-cycle, or a dropping water level in a drought. We diagnose and repair well pump problems across Hays County. We test the pump, the wiring and breaker, the pressure switch, and the tank to find the actual cause before pulling anything, then make the repair — replacing a switch, fixing the wiring, addressing the tank, or pulling and rebuilding or replacing the pump if it has failed. Because no water is urgent out here, we work to get you running quickly and tell you honestly whether you are looking at a small fix or a pump that is at the end of its life.',
    sections: [
      {
        h: 'Diagnosing the real cause first',
        body: 'No water and low pressure have several possible causes, and replacing the wrong part fixes nothing. We check the easy and inexpensive things first — the breaker, the pressure switch, the tank pressure — before assuming the pump itself is dead. A surprising number of "the pump is gone" calls turn out to be a tripped breaker, a stuck pressure switch, or a waterlogged tank. Diagnosing first saves you the cost of pulling a pump that did not need to come out.',
      },
      {
        h: 'Short-cycling, sputtering, and low pressure',
        body: 'A pump that clicks on and off rapidly is usually fighting a waterlogged or failed pressure tank, and that constant cycling will kill the pump if it is not fixed. Air sputtering at the faucets can mean a dropping water level, a leak in the drop pipe, or a tank problem. Steady low pressure can be a worn pump, a clogged screen, or an undersized setup. We trace the symptom to its source so the repair actually solves it instead of masking it.',
      },
      {
        h: 'When repair turns into replacement',
        body: 'Sometimes the honest answer is that the pump is done — worn out, a failed motor, or shorted wiring after years in the well. We will tell you when a repair is just buying a few months versus when replacing the pump is the smarter spend, and we factor in the age of the whole setup. No scare tactics: if a switch or tank fix gets you years more, that is what we do.',
      },
    ],
    points: [
      'No-water and low-pressure problems diagnosed and repaired',
      'Breaker, wiring, and pressure switch tested and replaced',
      'Short-cycling traced to the tank or switch and fixed',
      'Worn or failed pumps pulled, rebuilt, or replaced',
      'We check the cheap causes before condemning the pump',
      'Fast turnaround because no water can’t wait',
    ],
    faqs: [
      {
        q: 'I suddenly have no water — what should I check first?',
        a: 'Check your breaker or fuse for the well pump first — a tripped breaker is one of the most common causes and an easy fix. If it keeps tripping, do not keep resetting it; that points to an electrical or pump fault and you should call us. If the breaker is fine and you still have no water, the pump, switch, or tank likely needs a look.',
      },
      {
        q: 'My pump keeps turning on and off rapidly — is that bad?',
        a: 'Yes — that is short-cycling, and it wears out a pump fast. It usually means the pressure tank has lost its air charge or its bladder has failed, so the tank can no longer hold pressure between cycles. Fixing or replacing the tank stops the cycling and protects the pump. Call before it costs you the pump too.',
      },
      {
        q: 'My water sputters and spits air at the faucet — what causes that?',
        a: 'Air at the faucets can mean the water level in the well has dropped near the pump (common in a drought), a leak in the drop pipe pulling air, or a pressure tank problem. We diagnose which it is — a dropping aquifer is a different fix than a leaking pipe — so you are not throwing parts at it.',
      },
      {
        q: 'Should I repair my pump or replace it?',
        a: 'It depends on the cause and the pump’s age. A bad switch, breaker, or tank is a repair that can get years more out of a good pump. A worn-out or burned-up pump near the end of its life is usually better replaced than rebuilt. We give you the honest call based on what we find, not the most expensive option.',
      },
    ],
    image: pumpRepairImg,
    imageAlt: 'Technician repairing a well pump and pressure switch at a Hays County property',
  },
  {
    slug: 'pressure-tank-service',
    name: 'Pressure Tank Installation & Repair',
    short: 'Pressure Tanks',
    blurb: 'Banging pipes, fluctuating pressure, or a pump that won’t stop cycling? We install and service pressure tanks.',
    description:
      'The pressure tank is what gives your home steady water pressure and keeps your pump from running every time you open a faucet. Inside, a captured air charge (usually behind a rubber bladder) stores pressurized water so the pump only kicks on when the tank draws down — protecting the pump and smoothing out your pressure. When a tank fails, you get telltale problems: the pump short-cycles on and off, water pressure surges and drops, pipes bang, or the tank feels waterlogged and heavy. We install and repair pressure tanks across Hays County. We test the tank’s air charge and bladder, set the pressure switch correctly, and replace a failed or undersized tank with the right size for your home and pump. A correctly sized, healthy pressure tank is one of the cheapest ways to protect an expensive pump and get consistent water pressure throughout the house.',
    sections: [
      {
        h: 'What the pressure tank actually does',
        body: 'Without a pressure tank, your pump would start and stop every time anyone ran water — burning it out in no time. The tank stores a cushion of pressurized water using a captured air charge, so the pump runs in longer, less frequent cycles and your pressure stays steady. A tank that has lost its air charge or failed its bladder can no longer do that job, and the pump pays the price. Keeping the tank healthy is the simplest pump-protection there is.',
      },
      {
        h: 'Signs your tank is failing',
        body: 'A failing pressure tank shows itself fast: the pump clicks on and off rapidly (short-cycling), water pressure surges then drops as you use it, the tank feels completely full and heavy when you rock it, or you hear pipes hammering. Left alone, that constant cycling will take out the pump, which is a far bigger bill than a tank. If you notice these signs, getting the tank checked is cheap insurance.',
      },
      {
        h: 'Sizing and setting it right',
        body: 'A tank that is too small makes the pump cycle too often; one that is sized correctly and charged to the right pressure lets the pump rest. We match the tank to your pump and household demand, set the air charge a couple of pounds below the pump cut-in pressure, and dial in the pressure switch so the system runs smoothly. Done right, you get steady pressure and a pump that lasts.',
      },
    ],
    points: [
      'Pressure tanks installed and replaced — sized to your pump and home',
      'Air charge and bladder tested; failed tanks replaced',
      'Pressure switch set and dialed in for steady pressure',
      'Short-cycling and pressure-fluctuation problems fixed',
      'Protects your pump from premature failure',
      'Honest sizing — no oversized tank you don’t need',
    ],
    faqs: [
      {
        q: 'How do I know if my pressure tank is bad?',
        a: 'The classic sign is the pump short-cycling — clicking on and off rapidly as you use water. You may also see pressure that surges and drops, hear pipes banging, or find the tank feels heavy and waterlogged when you rock it. Any of those means the tank has likely lost its air charge or failed its bladder and needs service before it costs you the pump.',
      },
      {
        q: 'Can a bad pressure tank really damage my pump?',
        a: 'Yes. A failed tank can no longer cushion the system, so the pump cycles on and off constantly, and that rapid cycling wears out the pump motor and switch quickly. A pressure tank is far cheaper than a pump, so fixing the tank promptly is one of the best ways to protect the expensive part of your system.',
      },
      {
        q: 'How long do pressure tanks last?',
        a: 'A good bladder-style pressure tank often lasts 8 to 12 years or more, depending on water quality and how hard the system works. They can fail sooner if the bladder ruptures or the air charge is lost. If yours is aging and you are seeing cycling or pressure swings, it is worth replacing before it takes the pump with it.',
      },
      {
        q: 'What size pressure tank do I need?',
        a: 'It depends on your pump’s flow rate and your household demand — bigger homes and higher-flow pumps need larger tanks to keep cycling down. We size the tank to your specific pump and home and set the air charge and switch correctly, so you get steady pressure and the pump runs in efficient cycles.',
      },
    ],
    image: pressureTankImg,
    imageAlt: 'Well pressure tank and pump controls being serviced at a Hays County home',
  },
  {
    slug: 'well-inspections',
    name: 'Well Inspections',
    short: 'Inspections',
    blurb: 'Buying or selling Hill Country property? We inspect the well, pump, tank, and water quality and give you a clear picture.',
    description:
      'A well inspection tells you the true condition of a water system before it becomes your problem — which is exactly why it matters when Hill Country property changes hands. We inspect private water wells across Hays County for home buyers, sellers, and owners who simply want to know where they stand. We check the well itself and its casing, test the pump performance and the flow rate the well actually produces, evaluate the pressure tank and switch, measure the static and pumping water levels, and run a water-quality test for bacteria and basic chemistry. Because nearly every rural home out here runs on a well rather than city water, the well inspection is one of the most important — and most overlooked — parts of buying a place on acreage. You get a clear rundown of what is good, what is aging, what the well produces, and whether the water is safe to drink, so you can buy with confidence, sell without surprises, or budget for the work ahead.',
    sections: [
      {
        h: 'Why it matters most at a home sale',
        body: 'On a rural Hays County property, the well is the water supply — if it is weak, contaminated, or near failure, that is a major expense the new owner inherits. A well that does not produce enough, a pump on its last legs, or water that fails a bacteria test can all derail or reprice a deal. Because so many Hill Country homes — ranchettes, new builds, and long-held family land — run on private wells, the well inspection is as important as any other part of the transaction.',
      },
      {
        h: 'What a real inspection covers',
        body: 'A genuine well inspection is more than flipping the pump on. We check the casing and wellhead, test how much water the well actually produces and how it recovers, measure the static and pumping water levels, evaluate the pump and pressure tank, check the pressure switch and controls, and pull a water sample for bacteria and basic chemistry. Then you get a plain-language summary of the well’s yield, the equipment condition, and the water quality — the information to make a confident decision.',
      },
      {
        h: 'Water quality, not just equipment',
        body: 'Out here the water comes straight from the aquifer, so quality matters as much as the hardware. We test for coliform bacteria and basic chemistry, and we can flag issues like hardness, sediment, or contamination that a buyer needs to know about. If a problem turns up, we will tell you whether it is a simple fix — a shock chlorination, a treatment system — or a deeper concern, so nobody is buying a water problem blind.',
      },
    ],
    points: [
      'Full inspection for buyers, sellers, and owners',
      'Casing, wellhead, pump, and pressure tank checked',
      'Well yield and recovery tested, water levels measured',
      'Pressure switch and controls evaluated',
      'Water sampled for bacteria and basic chemistry',
      'Clear written summary of yield, condition, and water quality',
    ],
    faqs: [
      {
        q: 'Do I need a well inspection when buying a rural home?',
        a: 'If the home is on a private well — and most rural Hays County homes are — yes, absolutely. The well is the entire water supply, and a standard home inspection does not cover well yield, pump condition, or water quality in any depth. A dedicated well inspection tells you the real condition before you own it.',
      },
      {
        q: 'What does a well inspection test for?',
        a: 'We check the casing and wellhead, test the well’s flow rate and recovery, measure the water levels, evaluate the pump and pressure tank and controls, and pull a water sample for bacteria and basic chemistry. You get a clear picture of how much water the well makes, the condition of the equipment, and whether the water is safe to drink.',
      },
      {
        q: 'How long does an inspection take and what do I get?',
        a: 'Most inspections take an hour or two on-site, with water-quality lab results following separately. You get a clear summary: the well’s yield and recovery, the static and pumping water levels, the pump and tank condition, the water-quality findings, and any repairs or treatment it needs so you can plan or negotiate.',
      },
    ],
    image: wellInspectionImg,
    imageAlt: 'Technician inspecting a wellhead and pressure tank during a home-sale inspection in Hays County',
  },
  {
    slug: 'well-maintenance',
    name: 'Well Maintenance',
    short: 'Maintenance',
    blurb: 'Keep your well healthy with periodic checks, water testing, and small fixes before they turn into no water.',
    description:
      'A water well is easy to ignore — until the day it stops, usually at the worst possible time. Routine maintenance keeps a Hill Country well producing clean water and catches small problems while they are still cheap. We provide well maintenance across Hays County: periodic checks of the pump performance and pressure, testing the pressure tank’s air charge before it fails and short-cycles the pump, inspecting the wellhead and casing for a proper seal against surface contamination, checking the water level and yield against the aquifer’s seasonal swings, and water-quality testing for bacteria and basic chemistry. We also handle shock chlorination when a well shows bacteria, and we keep an eye on systems that are aging so you can plan a pump or tank replacement on your schedule instead of during an emergency. For a private well that has no utility behind it, a little upkeep is the cheapest insurance against a no-water day.',
    sections: [
      {
        h: 'What regular maintenance covers',
        body: 'A maintenance visit is a health check for the whole system: we test the pump’s pressure and performance, check the pressure tank’s air charge and bladder before they fail, inspect the wellhead and casing seal, look at the pressure switch and controls, and note the water level and how the well is yielding. Catching a tired tank or a worn switch on a routine visit is far cheaper than a no-water emergency call.',
      },
      {
        h: 'Water testing and shock chlorination',
        body: 'Because your water comes straight from the ground, periodic testing for coliform bacteria and basic chemistry is part of responsible well ownership — especially after flooding, which the Hill Country gets. If a test shows bacteria, shock chlorination disinfects the well and plumbing, and we retest to confirm it is clean. We can set you up on a sensible testing rhythm so problems are caught early.',
      },
      {
        h: 'Planning ahead on an aging system',
        body: 'Pumps, tanks, and switches wear out, and on a private well a failure means no water until it is fixed. When we maintain a well we keep track of the equipment’s age and condition so we can give you a heads-up — replace the pressure tank now on your schedule, or plan for a pump in the next year — rather than you finding out the hard way on a holiday weekend. That foresight is most of the value of maintenance.',
      },
    ],
    points: [
      'Periodic pump performance and pressure checks',
      'Pressure tank air charge tested before it fails',
      'Wellhead and casing seal inspected against contamination',
      'Water level and yield tracked against seasonal swings',
      'Water testing and shock chlorination when needed',
      'Heads-up on aging equipment so you replace on your schedule',
    ],
    faqs: [
      {
        q: 'How often should I have my well serviced or tested?',
        a: 'A good rhythm is a water-quality test every year — and after any flooding — plus a system check every couple of years to catch a tired tank, switch, or pump before it fails. If your well is older or you have noticed any pressure changes, more frequent checks are worth it. We can set a schedule that fits your well’s age and your usage.',
      },
      {
        q: 'What is shock chlorination and do I need it?',
        a: 'Shock chlorination is disinfecting the well and plumbing with a measured dose of chlorine to kill bacteria, then flushing and retesting. You need it if a water test shows coliform bacteria, after work that opened the well, or after flooding. It is a routine, effective fix — we do it correctly and confirm the water is clean afterward.',
      },
      {
        q: 'Can maintenance really prevent a no-water emergency?',
        a: 'Often, yes. A lot of emergency no-water calls trace back to a failed pressure tank that short-cycled the pump, or a switch and wiring that gave warning signs first. Catching those on a routine visit lets us fix the cheap part before it takes out the expensive one — and before it leaves you without water.',
      },
    ],
    image: wellMaintenanceImg,
    imageAlt: 'Well maintenance check on a wellhead and controls at a rural Hays County home',
  },
  {
    slug: 'emergency-well-service',
    name: 'Emergency Well Service',
    short: 'Emergency Service',
    blurb: 'No water at all? Pump quit, breaker tripping, or tank failed? Fast help to get water flowing again.',
    description:
      'No water is not a "next week" problem — out on a Hill Country well there is no utility to call, and when the system stops, the house stops with it. If you have turned on a faucet and gotten nothing, your pump breaker keeps tripping, you are suddenly getting air and sputtering instead of water, or your pressure has dropped to a trickle, that is an emergency and we treat it like one. We provide fast emergency well service across Hays County. We come out, find why the system quit — a tripped breaker or burned wiring, a failed pressure switch, a waterlogged tank short-cycling the pump, a worn-out pump, or a water level that has dropped in a drought — and get you running again as quickly as we can. The first priority is restoring water to your home; then we tell you straight what failed and what it takes to keep it from happening again. We know Hill Country wells, so we show up with the right gear instead of a guess.',
    sections: [
      {
        h: 'When a well problem can’t wait',
        body: 'Some symptoms mean call now: no water anywhere in the house, a pump breaker that trips the moment you reset it, air sputtering at every faucet, or pressure that has dropped to nothing. On a private well there is no backup supply — no water means no drinking, cooking, bathing, or flushing. The faster we get there, the faster you have water again, and the sooner we can keep a small failure from cascading into a bigger one.',
      },
      {
        h: 'What we do first, and what comes next',
        body: 'On an emergency call the first job is to find why the water stopped and restore it. We check the breaker and wiring, test the pressure switch and tank, and evaluate the pump and water level — often the fix is a switch, a breaker, or a tank rather than the whole pump, which gets you running fast. With water back on, we tell you honestly what failed and whether it was a one-off or a sign the pump or well needs attention soon, so you are not back in the dark next month.',
      },
    ],
    points: [
      'Fast response for no-water and total-loss-of-pressure calls',
      'Tripped breaker, burned wiring, and failed switches addressed',
      'Pump and pressure tank tested to find why water stopped',
      'Water level checked when a drought may have dropped the well',
      'Water restored first, honest diagnosis second',
      'Ask about same-day availability when you call',
    ],
    faqs: [
      {
        q: 'I have no water at all — what do I do right now?',
        a: 'First check the breaker or fuse for the well pump — a tripped breaker is a common, easy cause. If it trips again immediately, stop resetting it; that points to an electrical or pump fault. If the breaker is fine and there is still no water, the pump, switch, or tank likely failed. Call us with what you are seeing and we will come get the water back on.',
      },
      {
        q: 'My pump breaker keeps tripping — is that an emergency?',
        a: 'It can be, and you should not keep resetting it. A breaker that trips repeatedly usually means a fault in the wiring or the pump motor, and forcing it can cause more damage or a hazard. Leave it off and call us — we test the circuit and the pump to find the fault safely and get you running.',
      },
      {
        q: 'How fast can you get to me?',
        a: 'Call with your location and what is happening and we will give you a real time, not a runaround. No-water calls get priority because on a private well there is no backup supply. Same-day service is often available — ask when you call.',
      },
      {
        q: 'Will getting the pump running fix it for good?',
        a: 'Restoring water is the first job, but it may be addressing a symptom. If the cause is a failing tank, an aging pump, or a dropping water level, that needs to be dealt with or the problem returns. We get you water first, then tell you straight what it will take to keep it fixed.',
      },
    ],
    image: emergencyWellImg,
    imageAlt: 'Emergency well service truck responding to a no-water call at a Hays County home',
    emergency: true,
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
