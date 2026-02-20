/**
 * MASTER CONTENT CONFIGURATION
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
        p2: "Long promised mergers are completing. AI is changing how we operate. Investments are being redistributed. And 6G needs a different story if it’s going to avoid 5G’s stumbles."
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
            title: "The Merger Era",
            desc: "Vodafone and Three are finally one. There’s a window of opportunity to communicate with clarity while the biggest player is distracted.",
            implication: "Examine your proposition and don’t get bogged down in what worked before – this is a new playing field.",
            stat: "Scale Gap",
            statDesc: "With a new giant in the market, differentiation is now the only way to compete.",
            icon: "fa-handshake",
            color: "#D6883A" // Agate
        },
        {
            id: 2,
            tag: "AI",
            title: "Real-World AI",
            desc: "AI is already in the network and the benefit is real. But the AI narrative is stuck in either futuristic hype or technical weeds.",
            implication: "Communicate what AI actually does in your solution, specifically for a real customer. Address trust and security head-on.",
            stat: "Measurable ROI",
            statDesc: "Move the story from 'futuristic' to tangible customer outcomes and infrastructure security.",
            icon: "fa-brain",
            color: "#842366" // Azurite
        },
        {
            id: 3,
            tag: "FIBRE",
            title: "Fibre Narrative",
            desc: "Fibre is winning the infrastructure race but losing the public narrative to confusion and affordability anxiety.",
            implication: "Battle the idea that fibre is a utility by showcasing the innovations it enables, like rural productivity and digital inclusion.",
            stat: "Utility Shift",
            statDesc: "Shift the conversation from speed and price to economic development and human impact.",
            icon: "fa-network-wired",
            color: "#3E9B9B" // Aventurine
        },
        {
            id: 4,
            tag: "SUSTAINABILITY",
            title: "Proof of Net-Zero",
            desc: "Sustainability pledges are no longer enough. The industry is facing a credibility problem that demands tangible proof.",
            implication: "Make it tangible using data, visualisation, and customer case studies. Transparency is key to being a preferred supplier.",
            stat: "Credibility Gap",
            statDesc: "Move beyond announcements to data-backed trials and radical transparency.",
            icon: "fa-leaf",
            color: "#00d2ff" // Brighter Blue
        },
        {
            id: 5,
            tag: "6G",
            title: "The 6G Strategy",
            desc: "The race to 6G is on but commercial reception is cool. 5G overpromised; 6G needs a narrative of evolution, not revolution.",
            implication: "Lead your comms with business benefits and commercial outcomes rather than the 'next-gen mobile' hype.",
            stat: "Evolution > Rev",
            statDesc: "Maintain the UK's position by focusing on demand-led innovation and outcomes.",
            icon: "fa-bolt",
            color: "#ff00ff" // Brighter Magenta
        }
    ]
};

// Export for use in prototypes
if (typeof module !== 'undefined') {
    module.exports = TELECOMS_CONFIG;
}
