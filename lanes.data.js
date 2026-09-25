/* Single source of truth for the lane map.
 * Used by spencer-lanes-deck.html (print/PDF) and live.html (web).
 *
 * NOTE: this file previously began with `window.const LANES` — a syntax
 * error that kept the whole lanes section from rendering on the live site.
 * Fixed to a plain assignment on the grant-radar branch, Sept 16 2026.
 */
window.LANES = [
  { id:"L0", now:"Your head, a few texts, and a run-through the night before.", name:"Run of Show", hot:true,
    tag:"Counter of Sheep · Aug 21–22",
    blurb:"The only lane with a hard deadline. Ships first.",
    does:[
      "Countdown, run sheet, load-in and strike checklists",
      "Staffing and volunteer roster — call times, who brings what",
      "Merch inventory, cash and card handling",
      "Day-of contact card that works offline on a phone in a bad-wifi venue",
      "Invoice and payment tracking for the two assistants and Samantha"
    ],
    fill:["What's actually unfinished right now","What you'd cut first if you had to cut something","Who's confirmed to staff it, and who's a maybe"] },

  { id:"L1", now:"Five apps, your memory, and whatever you thought of at 2am.", name:"Producer",
    tag:"Your daily command center",
    blurb:"One screen every morning, assembled from every other lane.",
    does:[
      "Today's work ordered by consequence, not by category",
      "Meetings, leave-by times, and what to bring",
      "Waiting-on list — everyone who owes you something",
      "Money in, money out, payroll due",
      "\u201cWhat did I promise that isn't done?\u201d",
      "A plan B when the day breaks, instead of a guilt trip"
    ],
    fill:["What you want to see at 8am","What you never want to see","How you want to be interrupted — or not"] },

  { id:"L2", now:"Folder names, file suffixes, and remembering which machine it rendered on.", name:"Project Brain",
    tag:"Production pipeline and assets",
    blurb:"Concept through export, with every file findable a year later.",
    does:[
      "Stage tracking per scene, with real dependencies",
      "Blender and Premiere versions — which file is current, which is stale",
      "Render queue across desktop and laptop, with time estimates",
      "Asset library so rigs, props, and materials get reused instead of rebuilt",
      "Backup and archive discipline — grants and pitches both need masters",
      "Deadline pressure surfaced before it becomes a crisis"
    ],
    fill:["Your folder structure and naming convention","The exact VR and mocap software, and version","Hardware specs for both machines"] },

  { id:"L3", now:"Google Sheets, email, your memory, your calendar.", name:"Network",
    tag:"The relationship layer",
    blurb:"Meet, remember, remember why, follow up, collaborate.",
    does:[
      "A record per person: where you met, why they matter",
      "Meeting notes attached to the person, not lost in a document",
      "Follow-up nudges on a cadence you set — never nagging",
      "Plain-language recall: \u201cwho have I met at Nike?\u201d",
      "Warm paths — who can introduce you to the person you actually want",
      "Institutional memory per org: PAM, RACC, OCF, Miller, AGOG"
    ],
    fill:["The Google Sheet — we import it, you don't retype it","Who matters most right now and why","Anyone you've been meaning to follow up with for months"] },

  { id:"L4", now:"Email threads, deadline anxiety, and hoping you remembered the report.", name:"Money, Grants & Reporting",
    tag:"Where artists get burned",
    blurb:"Not just deadlines to apply — deadlines to report.",
    does:[
      "Grant calendar covering application dates and reporting dates",
      "Reusable narrative library: bio, mission, org description, impact language, budget templates",
      "Application drafting against that library, in your voice",
      "Invoices out, contractor payments, reimbursements, 1099 prep",
      "Budget versus actual, per project",
      "Entity of record per award — who applied, who received, who reports"
    ],
    fill:["Every open grant and its reporting deadline","What you were awarded and what you still owe them","Whether you want help with the nonprofit question"] },

  { id:"L5", now:"Nowhere. Right now this does not exist in any form.", name:"Rights & Provenance",
    tag:"The one that protects the kids",
    blurb:"Your students made real work. That has to be documented properly.",
    does:[
      "Asset register — every piece, who made it, when, for what project",
      "Student attribution and release tracking, by name and by asset",
      "Release form templates, guardian consent, expiry tracking",
      "A chain-of-title packet that survives legal review",
      "Contractor agreements and work-for-hire terms for paid artists",
      "A written position on what you'll license and what you never will"
    ],
    fill:["What releases exist today and where they live","Which projects included student-authored work","Anything you've already promised a partner"] },

  { id:"L6", now:"A deck you rebuild from scratch every time somebody asks.", name:"Pitch & Distribution",
    tag:"The Hollywood problem",
    blurb:"You keep pitching a film. You're holding a franchise.",
    does:[
      "An always-current one-pager and logline, never rebuilt from scratch",
      "Deck export using verified credits only",
      "Target list: who to pitch, what stage, what they said last time",
      "Follow-up discipline after every single pitch",
      "Festival and submission calendar",
      "Reframe support — lead with the world and the table, not the runtime"
    ],
    fill:["Everyone you've pitched","The exact objection each one gave you","What you'd actually be willing to give up in a deal"] },

  { id:"L7", now:"Whenever you remember, in the gaps between renders.", name:"Social & Content",
    tag:"Your process is the content",
    blurb:"You already work in public. Nothing here auto-posts.",
    does:[
      "One render becomes a reel, a still, a newsletter GIF, a post, a pitch slide",
      "A posting calendar tied to real milestones, not invented ones",
      "Captions and copy drafted in your voice — you approve every one",
      "Newsletter drafting plus the asset checklist (GIF, event photo, RSVP link)",
      "Comments and DMs triaged into the network lane when someone matters",
      "Nothing posts without you. Ever."
    ],
    fill:["Every handle","Which platforms you actually care about","Anything you'd never want posted"] },

  { id:"L8", now:"A live site with a headline and three sentences on it.", name:"Web, SEO & Press Kit",
    tag:"brendaarts.org is three sentences",
    blurb:"The site is live but a stranger can't see your work or hire you.",
    does:[
      "Full rebuild on the domain you already own",
      "Project pages: Counter of Sheep, Fifth Space, BRENDA LAB, Albina Dream Survey, BRENDAWORLD, Quantum Phantom Basketball",
      "Work samples — reels, stills, process footage, cleared student work",
      "Press kit: bio, headshots, stills, logline, credits, press — one link you send",
      "Speaking page and rate card",
      "Booking form that lands straight in the network lane",
      "SEO so your name and every project resolve to your site first",
      "Analytics — who visits, from where, after which talk"
    ],
    fill:["Who hosts it and who has the login","Rebuild, or just keep it fed?","Headshots, stills, and reels we can use"] },

  { id:"L9", now:"Your memory of roughly how many kids were in the room.", name:"Teaching & Impact",
    tag:"The numbers funders renew on",
    blurb:"You're best at this and it's the least documented thing you do.",
    does:[
      "Curriculum library — Roundhouse, PAM CUT, BRENDAWORLD, Fifth Space challenges",
      "Session planning and materials lists",
      "Impact metrics: students served, hours, schools, sessions, outcomes",
      "Student and alumni tracking over years — the fundraising story and the duty of care",
      "Documentation pipeline: footage becomes grant reports and pitch material",
      "Curriculum packaged as something museums and districts can license"
    ],
    fill:["How many kids, how many schools, how many hours — every year you can remember","Which curriculum is written down and which is in your head","Whether you'd license it"] },

  { id:"L10", now:"Two machines, whichever drive was closest, and hope.", name:"Studio Infrastructure",
    tag:"Unglamorous, immediately felt",
    blurb:"The plumbing under the creative work.",
    does:[
      "Render scheduling across desktop and laptop",
      "Storage, backup, and archive strategy for masters",
      "Tool inventory and subscription tracking",
      "Local AI running on your machine — no student data leaves it",
      "Email triage, with commitments pulled out into the Producer lane",
      "One calendar across teaching, production, and events"
    ],
    fill:["Every tool and subscription you pay for","Where your masters currently live","How your email is set up"] },

  { id:"L11", now:"An LLC registered to your apartment.", name:"Business Operations",
    tag:"Where the money leaks",
    blurb:"Mostly not software. Mostly the highest return on this page.",
    does:[
      "Entity: LLC versus fiscal sponsorship versus 501(c)(3) — which money can reach you in each case",
      "Bookkeeping, categorized per project and per grant",
      "Tax support: 1099s for contractors, quarterly estimates, deductions",
      "A written rate card for teaching, speaking, commissions, and licensing",
      "Contract templates: contractor, work-for-hire, commission, licensing, venue",
      "Insurance — liability, certificates for venues, equipment",
      "Revenue lines mapped: grants, teaching, speaking, commissions, merch, royalties, licensing",
      "Business and personal banking separated"
    ],
    fill:["Your bookkeeping setup, if any, and your accountant","What you currently charge for teaching and for speaking","Whether business and personal money are separate"] }
];
