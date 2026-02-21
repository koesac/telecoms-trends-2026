/**
 * MASTER CONTENT CONFIGURATION - FULL VERSION
 * Edit the text below to update all prototypes simultaneously.
 */

const TELECOMS_CONFIG = {
    branding: {
        companyName: "Innovate Comms",
        website: "https://www.innovatecomms.co.uk/",
        email: "hello@innovatecomms.co.uk"
    },
    intro: {
        title: "5 THINGS SHAPING UK TELECOMS",
        subtitle: "And what it means for your comms",
        p1: "UK telecoms is in the middle of something significant – a period that's reshaping competitive dynamics, investment priorities, and the fundamental question of what telecoms is.",
        p2: "Long promised mergers are completing. AI is changing how we operate. Investments are being redistributed. And 6G needs a different story if it’s going to avoid 5G’s stumbles. These shifts create both urgency and opportunity and how you communicate matters more now than ever."
    },
    outro: {
        title: "The Common Thread",
        p1: "The next phase of UK telecoms will hinge on smart collaborations to create advanced, sustainable networks that are genuinely useful for the UK’s digital ambitions.",
        p2: "Ready to do things differently? Say hello@innovatecomms.co.uk"
    },
    trends: [
        {
            id: 1,
            tag: "MARKET",
            title: "Market Consolidation",
            desc: "Vodafone and Three are finally one, consuming them in a quagmire of integration. There’s a window of opportunity to communicate with clarity while the biggest player is distracted.",
            implication: "With a new giant in the market, no one can compete on scale. Where you can compete is innovation, differentiation and focusing on what’s close to the hearts of your customers. Examine your proposition and don’t get bogged down in what worked before – this is a new playing field.",
            stat: "Scale Shift",
            statDesc: "Competition moves from scale to innovation.",
            icon: "fa-handshake",
            color: "#D6883A" // Agate
        },
        {
            id: 2,
            tag: "AI",
            title: "AI Reality Check",
            desc: "AI is already in the network and the benefit is real and measurable. But the AI narrative is stuck in either being futuristic or in the technical weeds. There’s an opportunity to tell it properly.",
            implication: "Communicate what AI actually does in your solution, specifically for a real customer. That’s the story that cuts through. Don’t be afraid to tackle the issues and concerns around it – trust and security are paramount.",
            stat: "Measurable AI",
            statDesc: "Trust and security are paramount for national infrastructure.",
            icon: "fa-brain",
            color: "#842366", // Azurite
            powerupIcon: "fa-robot"
        },
        {
            id: 3,
            tag: "FIBRE",
            title: "The Fibre Narrative",
            desc: "Fibre is winning the infrastructure race but losing the public narrative. Confusion in a crowded market and affordability anxiety is currently winning over the impressive achievement.",
            implication: "Battle the idea that fibre is a utility by showcasing the innovations it can enable. Shift the conversation from speed and price to impacts for remote business, rural productivity, and economic development.",
            stat: "Narrative Gap",
            statDesc: "Move the conversation from price to human impact.",
            icon: "fa-network-wired",
            color: "#3E9B9B", // Aventurine
            powerupIcon: "fa-bolt"
        },
        {
            id: 4,
            tag: "SUSTAINABILITY",
            title: "Sustainability Proof",
            desc: "Sustainability pledges are no longer enough, proof is needed and the industry is facing a credibility problem. Tangible trials, data and transparency around net-zero is key.",
            implication: "The era of sustainability-by-announcement is over. Make it tangible for increasingly savvy audiences using data, visualisation, and customer case studies to become a preferred supplier.",
            stat: "Credibility",
            statDesc: "Data and transparency are the new net-zero standards.",
            icon: "fa-leaf",
            color: "#15404F", // Bloodstone
            powerupIcon: "fa-leaf"
        },
        {
            id: 5,
            tag: "6G",
            title: "The 6G Evolution",
            desc: "The global race to 6G is on but commercial reception is cool. 5G overpromised and while research is focused, the comms strategy framing it as 'next gen mobile' is not.",
            implication: "Against a backdrop of demand-led innovation, your comms needs to support a world where 6G is evolution, not revolution. Lead with business benefits and commercial outcomes.",
            stat: "Outcome-Led",
            statDesc: "Maintain UK position through commercial impact, not hype.",
            icon: "fa-bolt",
            color: "#4C194C", // Alexandrite
            powerupIcon: "fa-tower-broadcast"
        }
    ]
};

// Export for use in prototypes
if (typeof module !== 'undefined') {
    module.exports = TELECOMS_CONFIG;
}
