const { bonus } = require("../bonus");

module.exports = {
  Coral_Depths: {
    key: "Coral_Depths",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 45, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good },
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "papercrete", value: 45, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "papercrete", value: 35, type: bonus.good },
          { key: "preservatives", value: 45, type: bonus.good },
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 45, type: bonus.good },
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "papercrete", value: 35, type: bonus.good },
          { key: "smart_materials", value: 45, type: bonus.good },
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 45, type: bonus.good },
          { key: "algae", value: 50, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Murky_Waters: {
    key: "Murky_Waters",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "papercrete", value: 65, type: bonus.good },
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "preservatives", value: 65, type: bonus.good },
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "smart_materials", value: 65, type: bonus.good },
          { key: "algae", value: 50, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 65, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "translucent_concrete", value: 65, type: bonus.good },
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Cursed_Current: {
    key: "Cursed_Current",
    reward: [{ type: "medal", value: 3500 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "smart_materials", value: 60, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "ai_data", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "papercrete", value: 60, type: bonus.good },
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "translucent_concrete", value: 60, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "preservatives", value: 60, type: bonus.good },
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "algae", value: 50, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Dark_Abyss: {
    key: "Dark_Abyss",
    reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1800000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "translucent_concrete", value: 80, type: bonus.good },
          { key: "nanoparticles", value: 45, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "papercrete", value: 80, type: bonus.good },
          { key: "biogeochemical_data", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "smart_materials", value: 80, type: bonus.good },
          { key: "superconductors", value: 45, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "nutrition_research", value: 80, type: bonus.good },
          { key: "purified_water", value: 45, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "preservatives", value: 80, type: bonus.good },
          { key: "algae", value: 45, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Fresh_Flow: {
    key: "Fresh_Flow",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "purified_water", value: 70, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "transester_gas", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "algae", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 70, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "purified_water", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "superconductors", value: 70, type: bonus.good },
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "biogeochemical_data", value: 70, type: bonus.good },
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "ai_data", value: 25, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Strong_Tide: {
    key: "Strong_Tide",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "papercrete", value: 30, type: bonus.good },
          { key: "translucent_concrete", value: 55, type: bonus.good },
          { key: "algae", value: 50, type: bonus.good },
          { key: "ai_data", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "papercrete", value: 55, type: bonus.good },
          { key: "translucent_concrete", value: 30, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nutrition_research", value: 30, type: bonus.good },
          { key: "smart_materials", value: 55, type: bonus.good },
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "preservatives", value: 30, type: bonus.good },
          { key: "translucent_concrete", value: 55, type: bonus.good },
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nutrition_research", value: 55, type: bonus.good },
          { key: "translucent_concrete", value: 30, type: bonus.good },
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "smart_materials", value: 55, type: bonus.good },
          { key: "translucent_concrete", value: 30, type: bonus.good },
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "papercrete", value: 30, type: bonus.good },
          { key: "preservatives", value: 55, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "papercrete", value: 55, type: bonus.good },
          { key: "smart_materials", value: 30, type: bonus.good },
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Rough_Expanse: {
    key: "Rough_Expanse",
    reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "algae", value: 50, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "ai_data", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "algae", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Serene_Waves: {
    key: "Serene_Waves",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 35, type: bonus.good },
          { key: "plankton", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "corals", value: 35, type: bonus.good },
          { key: "plankton", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 35, type: bonus.good },
          { key: "biolight", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "corals", value: 35, type: bonus.good },
          { key: "plankton", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 35, type: bonus.good },
          { key: "pearls", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 20, type: bonus.good },
          { key: "pearls", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "corals", value: 20, type: bonus.good },
          { key: "plankton", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "biolight", value: 20, type: bonus.good },
          { key: "plankton", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "biolight", value: 20, type: bonus.good },
          { key: "pearls", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "biolight", value: 35, type: bonus.good },
          { key: "pearls", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "biolight", value: 35, type: bonus.good },
          { key: "corals", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 20, type: bonus.good },
          { key: "biolight", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "corals", value: 20, type: bonus.good },
          { key: "pearls", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 20, type: bonus.good },
          { key: "plankton", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "biolight", value: 35, type: bonus.good },
          { key: "pearls", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Tideless_Deep: {
    key: "Tideless_Deep",
    reward: [{ type: "medal", value: 4000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "algae", value: 65, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "biogeochemical_data", value: 65, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 65, type: bonus.good },
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "superconductors", value: 65, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "purified_water", value: 65, type: bonus.good },
          { key: "paper_batteries", value: 25, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "superconductors", value: 65, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "purified_water", value: 65, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "biogeochemical_data", value: 65, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "algae", value: 65, type: bonus.good },
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Red_Sea: {
    key: "Red_Sea",
    reward: [{ type: "medal", value: 4000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "pearls", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "corals", value: 15, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "artificial_scales", value: 15, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "plankton", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "biolight", value: 15, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "pearls", value: 15, type: bonus.good }
        ]
      }
    ]
  },
  Glimmering_Surf: {
    key: "Glimmering_Surf",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Wondering_Ocean: {
    key: "Wondering_Ocean",
    reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 20, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Foam_Ceiling: {
    key: "Foam_Ceiling",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 20, type: bonus.good },
          { key: "plankton", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biolight", value: 10, type: bonus.good },
          { key: "pearls", value: 20, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "biolight", value: 50, type: bonus.good },
          { key: "corals", value: 10, type: bonus.good },
          { key: "pearls", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "corals", value: 20, type: bonus.good },
          { key: "pearls", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "artificial_scales", value: 10, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "artificial_scales", value: 20, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "plankton", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "artificial_scales", value: 10, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Walled_Gulf: {
    key: "Walled_Gulf",
    reward: [{ type: "medal", value: 3500 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "superconductors", value: 75, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "corals", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "algae", value: 75, type: bonus.good },
          { key: "biolight", value: 25, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanoparticles", value: 75, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "biogeochemical_data", value: 75, type: bonus.good },
          { key: "artificial_scales", value: 25, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "biogeochemical_data", value: 75, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "plankton", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "biogeochemical_data", value: 75, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanoparticles", value: 75, type: bonus.good },
          { key: "pearls", value: 25, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "algae", value: 75, type: bonus.good },
          { key: "corals", value: 25, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Lower_Grotto: {
    key: "Lower_Grotto",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanoparticles", value: 100, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "corals", value: 15, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "algae", value: 100, type: bonus.good },
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "pearls", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "purified_water", value: 100, type: bonus.good },
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "corals", value: 15, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "superconductors", value: 100, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good },
          { key: "biolight", value: 15, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "biogeochemical_data", value: 100, type: bonus.good },
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 15, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "algae", value: 100, type: bonus.good },
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good },
          { key: "plankton", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanoparticles", value: 100, type: bonus.good },
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "pearls", value: 15, type: bonus.good }
        ]
      }
    ]
  },
  Silver_Swarms: {
    key: "Silver_Swarms",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 80, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good },
          { key: "corals", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good },
          { key: "plankton", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "paper_batteries", value: 80, type: bonus.good },
          { key: "biolight", value: 55, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "transester_gas", value: 80, type: bonus.good },
          { key: "biolight", value: 55, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "paper_batteries", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 55, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "ai_data", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "pearls", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "corals", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "biolight", value: 55, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "transester_gas", value: 80, type: bonus.good },
          { key: "pearls", value: 55, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "ai_data", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 55, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Rocky_Domain: {
    key: "Rocky_Domain",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1400000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "biolight", value: 30, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "biolight", value: 70, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "corals", value: 30, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Upper_Grotto: {
    key: "Upper_Grotto",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 90, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 90, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanowire", value: 90, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nanowire", value: 90, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "transester_gas", value: 90, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 90, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 90, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Nautical_Parlay: {
    key: "Nautical_Parlay",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [{ key: "bioplastics", value: 40, type: bonus.good }, { key: "biolight", value: 50, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Restless_Buoy: {
    key: "Restless_Buoy",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Ripped_Sails: {
    key: "Ripped_Sails",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Nautilus_Mirage: {
    key: "Nautilus_Mirage",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good }
        ]
      }
    ]
  },
  Ravenous_Tides: {
    key: "Ravenous_Tides",
    reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good },
          { key: "pearls", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "artificial_scales", value: 20, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "corals", value: 20, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "biolight", value: 20, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "biolight", value: 60, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "plankton", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "artificial_scales", value: 20, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good }
        ]
      }
    ]
  },
  Deep_Dive: {
    key: "Deep_Dive",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "promethium", value: 70, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Furious_Storm: {
    key: "Furious_Storm",
    reward: [{ type: "good_bonus", age: "IndustrialAge" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "corals", value: 30, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "biolight", value: 50, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "biolight", value: 50, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "corals", value: 30, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Translucent_Algae: {
    key: "Translucent_Algae",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good }
        ]
      }
    ]
  },
  Silver_Crest: {
    key: "Silver_Crest",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Single_Wave: {
    key: "Single_Wave",
    reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "orichalcum", value: 60, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "promethium", value: 65, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "algae", value: 50, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Grey_Clouds: {
    key: "Grey_Clouds",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "orichalcum", value: 50, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Treacherous_Surf: {
    key: "Treacherous_Surf",
    reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanoparticles", value: 90, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "superconductors", value: 90, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good },
          { key: "orichalcum", value: 65, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "algae", value: 90, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "purified_water", value: 90, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "biogeochemical_data", value: 65, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Coral_Kingdom: {
    key: "Coral_Kingdom",
    reward: [{ type: "coin", value: 1100000 }, { type: "supply", value: 1100000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good },
          { key: "orichalcum", value: 50, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Telescopic_Barrel: {
    key: "Telescopic_Barrel",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "corals", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      }
    ]
  },
  Sponge_Sands: {
    key: "Sponge_Sands",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "nanoparticles", value: 100, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "purified_water", value: 100, type: bonus.good },
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "biogeochemical_data", value: 100, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "promethium", value: 50, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "algae", value: 100, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "superconductors", value: 100, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 95000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      }
    ]
  },
  Cursed_Lip: {
    key: "Cursed_Lip",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "corals", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "corals", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      }
    ]
  },
  Scuba_Bay: {
    key: "Scuba_Bay",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Seagull_Domain: {
    key: "Seagull_Domain",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "nanoparticles", value: 75, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "superconductors", value: 75, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "purified_water", value: 75, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "biogeochemical_data", value: 75, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "algae", value: 75, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      }
    ]
  },
  Tangled_Fins: {
    key: "Tangled_Fins",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "purified_water", value: 60, type: bonus.good },
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "nanoparticles", value: 60, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 95000 }],
        cost: [
          { key: "biogeochemical_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "superconductors", value: 60, type: bonus.good },
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Breakwater_Wharf: {
    key: "Breakwater_Wharf",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 25 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "biolight", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Adrift_Liner: {
    key: "Adrift_Liner",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good },
          { key: "orichalcum", value: 70, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "pearls", value: 30, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "biolight", value: 30, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good },
          { key: "corals", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good },
          { key: "plankton", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 30, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good }
        ]
      }
    ]
  },
  Bermuda_Quay: {
    key: "Bermuda_Quay",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1400000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Sextant_Mast: {
    key: "Sextant_Mast",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "ai_data", value: 35, type: bonus.good },
          { key: "biolight", value: 80, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "paper_batteries", value: 85, type: bonus.good },
          { key: "transester_gas", value: 35, type: bonus.good },
          { key: "plankton", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "nanowire", value: 85, type: bonus.good },
          { key: "pearls", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "bioplastics", value: 85, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "artificial_scales", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "ai_data", value: 35, type: bonus.good },
          { key: "transester_gas", value: 85, type: bonus.good },
          { key: "pearls", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "ai_data", value: 85, type: bonus.good },
          { key: "transester_gas", value: 35, type: bonus.good },
          { key: "biolight", value: 80, type: bonus.good }
        ]
      }
    ]
  },
  Grog_Wash: {
    key: "Grog_Wash",
    reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  R_lyeh_Reef: {
    key: "R_lyeh_Reef",
    reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "plankton", value: 55, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "pearls", value: 55, type: bonus.good },
          { key: "orichalcum", value: 60, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good },
          { key: "corals", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "plankton", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "corals", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 55, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      }
    ]
  },
  Capricorn_Waterway: {
    key: "Capricorn_Waterway",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 40 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "promethium", value: 65, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      }
    ]
  },
  Barnacle_Deck: {
    key: "Barnacle_Deck",
    reward: [{ type: "coin", value: 1700000 }, { type: "supply", value: 1700000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 55, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "transester_gas", value: 65, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "plankton", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 45, type: bonus.good },
          { key: "plankton", value: 55, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "biolight", value: 45, type: bonus.good },
          { key: "pearls", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "biolight", value: 55, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good },
          { key: "orichalcum", value: 70, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "biolight", value: 55, type: bonus.good },
          { key: "plankton", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Ahab_s_Tomb: {
    key: "Ahab_s_Tomb",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "orichalcum", value: 50, type: bonus.special_good }
        ]
      }
    ]
  },
  Galley_Commodore: {
    key: "Galley_Commodore",
    reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "ai_data", value: 35, type: bonus.good },
          { key: "nanowire", value: 75, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "biolight", value: 60, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "ai_data", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 85000 }],
        cost: [
          { key: "bioplastics", value: 75, type: bonus.good },
          { key: "transester_gas", value: 35, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Adamastor: {
    key: "Adamastor",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "paper_batteries", value: 25, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 85000 }],
        cost: [
          { key: "ai_data", value: 25, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "paper_batteries", value: 25, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Deadeye_Admiral: {
    key: "Deadeye_Admiral",
    reward: [{ type: "coin", value: 1600000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "ai_data", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "orichalcum", value: 70, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Monkey_s_Fist: {
    key: "Monkey_s_Fist",
    reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "plankton", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "biolight", value: 55, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good },
          { key: "corals", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "pearls", value: 55, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "pearls", value: 55, type: bonus.good }
        ]
      }
    ]
  },
  Dagon_s_Dagger: {
    key: "Dagon_s_Dagger",
    reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "biolight", value: 60, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "orichalcum", value: 65, type: bonus.special_good }
        ]
      }
    ]
  },
  Sunken_Leviathan: {
    key: "Sunken_Leviathan",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 35 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "transester_gas", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "orichalcum", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "pearls", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 120000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good }
        ]
      }
    ]
  },
  Behemoth: {
    key: "Behemoth",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 35 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "pearls", value: 65, type: bonus.good },
          { key: "promethium", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "corals", value: 65, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 65, type: bonus.good },
          { key: "corals", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "artificial_scales", value: 65, type: bonus.good },
          { key: "corals", value: 65, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "biolight", value: 65, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "corals", value: 65, type: bonus.good },
          { key: "orichalcum", value: 130, type: bonus.special_good }
        ]
      }
    ]
  },
  Privateer_Helm: {
    key: "Privateer_Helm",
    reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "transester_gas", value: 100, type: bonus.good },
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 100, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good },
          { key: "orichalcum", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 100, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nanowire", value: 100, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 100, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 100, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      }
    ]
  },
  Anchorage_Ruin: {
    key: "Anchorage_Ruin",
    reward: [{ type: "coin", value: 1600000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good },
          { key: "orichalcum", value: 75, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good }
        ]
      }
    ]
  },
  Man_O_War: {
    key: "Man_O_War",
    reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "transester_gas", value: 50, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good },
          { key: "promethium", value: 95, type: bonus.special_good }
        ]
      }
    ]
  },
  Nemo_s_Dock: {
    key: "Nemo_s_Dock",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good },
          { key: "orichalcum", value: 75, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "transester_gas", value: 65, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "orichalcum", value: 75, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      }
    ]
  },
  Medusa_Cove: {
    key: "Medusa_Cove",
    reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "biolight", value: 90, type: bonus.good },
          { key: "pearls", value: 90, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "plankton", value: 90, type: bonus.good },
          { key: "orichalcum", value: 125, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "corals", value: 90, type: bonus.good },
          { key: "pearls", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "biolight", value: 90, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "artificial_scales", value: 90, type: bonus.good },
          { key: "promethium", value: 115, type: bonus.special_good }
        ]
      }
    ]
  },
  Craggy_Cay: {
    key: "Craggy_Cay",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 80, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 80, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good },
          { key: "plankton", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "ai_data", value: 80, type: bonus.good },
          { key: "biolight", value: 40, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Buccaneer_Plateau: {
    key: "Buccaneer_Plateau",
    reward: [{ type: "good_bonus", age: "HighMiddleAges" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "bioplastics", value: 80, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "promethium", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "paper_batteries", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "ai_data", value: 80, type: bonus.good },
          { key: "biolight", value: 50, type: bonus.good },
          { key: "promethium", value: 105, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "promethium", value: 70, type: bonus.special_good },
          { key: "orichalcum", value: 70, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "transester_gas", value: 80, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Raging_Tides: {
    key: "Raging_Tides",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 40 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "biolight", value: 60, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "orichalcum", value: 105, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "biolight", value: 60, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "promethium", value: 105, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 130000 }],
        cost: [
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 120000 }],
        cost: [
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "biolight", value: 60, type: bonus.good },
          { key: "promethium", value: 65, type: bonus.special_good },
          { key: "orichalcum", value: 70, type: bonus.special_good }
        ]
      }
    ]
  },
  Ahoy_Alee: {
    key: "Ahoy_Alee",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 10 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "ai_data", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good },
          { key: "corals", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "transester_gas", value: 80, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "promethium", value: 70, type: bonus.special_good },
          { key: "orichalcum", value: 75, type: bonus.special_good }
        ]
      }
    ]
  },
  Ghost_Trench: {
    key: "Ghost_Trench",
    reward: [{ type: "coin", value: 1600000 }, { type: "supply", value: 1600000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 60, type: bonus.good },
          { key: "artificial_scales", value: 75, type: bonus.good },
          { key: "orichalcum", value: 170, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "corals", value: 70, type: bonus.good },
          { key: "pearls", value: 90, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 70, type: bonus.good },
          { key: "nanoparticles", value: 80, type: bonus.good },
          { key: "promethium", value: 65, type: bonus.special_good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "biolight", value: 80, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "plankton", value: 80, type: bonus.good }
        ]
      }
    ]
  },
  Ursula_s_Valley: {
    key: "Ursula_s_Valley",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 80, type: bonus.good },
          { key: "corals", value: 65, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "plankton", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "transester_gas", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 55, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "pearls", value: 50, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "biolight", value: 65, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good },
          { key: "pearls", value: 60, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "biolight", value: 55, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      }
    ]
  },
  Dungbie_Trough: {
    key: "Dungbie_Trough",
    reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "corals", value: 60, type: bonus.good },
          { key: "pearls", value: 65, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good },
          { key: "orichalcum", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "artificial_scales", value: 40, type: bonus.good },
          { key: "biolight", value: 55, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
          { key: "orichalcum", value: 95, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "pearls", value: 75, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good },
          { key: "orichalcum", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "corals", value: 60, type: bonus.good },
          { key: "pearls", value: 75, type: bonus.good },
          { key: "plankton", value: 50, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      }
    ]
  },
  Idlers_Range: {
    key: "Idlers_Range",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "pearls", value: 50, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "promethium", value: 95, type: bonus.special_good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "algae", value: 40, type: bonus.good },
          { key: "nanoparticles", value: 45, type: bonus.good },
          { key: "pearls", value: 75, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "algae", value: 60, type: bonus.good },
          { key: "biogeochemical_data", value: 60, type: bonus.good },
          { key: "artificial_scales", value: 85, type: bonus.good },
          { key: "biolight", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "biolight", value: 55, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "pearls", value: 45, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "artificial_scales", value: 60, type: bonus.good },
          { key: "corals", value: 40, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      }
    ]
  },
  Wherry_Gap: {
    key: "Wherry_Gap",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "corals", value: 80, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
          { key: "orichalcum", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "biolight", value: 95, type: bonus.good },
          { key: "pearls", value: 80, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "artificial_scales", value: 70, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "artificial_scales", value: 50, type: bonus.good },
          { key: "corals", value: 50, type: bonus.good },
          { key: "pearls", value: 55, type: bonus.good },
          { key: "promethium", value: 140, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "biolight", value: 40, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      }
    ]
  },
  Nock_s_Turn: {
    key: "Nock_s_Turn",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1400000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "plankton", value: 95, type: bonus.good },
          { key: "promethium", value: 70, type: bonus.special_good },
          { key: "orichalcum", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "promethium", value: 130, type: bonus.special_good },
          { key: "orichalcum", value: 160, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "algae", value: 75, type: bonus.good },
          { key: "artificial_scales", value: 90, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "purified_water", value: 75, type: bonus.good },
          { key: "superconductors", value: 55, type: bonus.good },
          { key: "plankton", value: 80, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good }
        ]
      }
    ]
  },
  Scuttle_Ridge: {
    key: "Scuttle_Ridge",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "corals", value: 45, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
          { key: "orichalcum", value: 140, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "biolight", value: 65, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "artificial_scales", value: 75, type: bonus.good },
          { key: "pearls", value: 80, type: bonus.good },
          { key: "orichalcum", value: 160, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "biolight", value: 65, type: bonus.good },
          { key: "corals", value: 75, type: bonus.good },
          { key: "plankton", value: 60, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      }
    ]
  },
  Neptune_s_Galleon: {
    key: "Neptune_s_Galleon",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "artificial_scales", value: 100, type: bonus.good },
          { key: "pearls", value: 100, type: bonus.good },
          { key: "promethium", value: 95, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "promethium", value: 145, type: bonus.special_good },
          { key: "orichalcum", value: 160, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 95, type: bonus.good },
          { key: "superconductors", value: 75, type: bonus.good },
          { key: "plankton", value: 135, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "algae", value: 65, type: bonus.good },
          { key: "purified_water", value: 45, type: bonus.good },
          { key: "biolight", value: 90, type: bonus.good },
          { key: "corals", value: 100, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "superconductors", value: 80, type: bonus.good },
          { key: "pearls", value: 75, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "pearls", value: 125, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good },
          { key: "orichalcum", value: 130, type: bonus.special_good }
        ]
      }
    ]
  },
  Scurvy_Atoll: {
    key: "Scurvy_Atoll",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "algae", value: 70, type: bonus.good },
          { key: "biolight", value: 140, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "corals", value: 60, type: bonus.good },
          { key: "plankton", value: 80, type: bonus.good },
          { key: "promethium", value: 60, type: bonus.special_good },
          { key: "orichalcum", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "artificial_scales", value: 140, type: bonus.good },
          { key: "biolight", value: 95, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 80, type: bonus.good },
          { key: "purified_water", value: 75, type: bonus.good },
          { key: "orichalcum", value: 145, type: bonus.special_good }
        ]
      }
    ]
  },
  Seafarer_s_Current: {
    key: "Seafarer_s_Current",
    reward: [{ type: "coin", value: 14400000 }, { type: "supply", value: 14400000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "nanowire", value: 85, type: bonus.good },
          { key: "paper_batteries", value: 80, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "corals", value: 75, type: bonus.good },
          { key: "plankton", value: 85, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 80, type: bonus.good },
          { key: "transester_gas", value: 90, type: bonus.good },
          { key: "orichalcum", value: 140, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "biolight", value: 80, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good },
          { key: "orichalcum", value: 140, type: bonus.special_good }
        ]
      }
    ]
  },
  Capsize_Lagoon: {
    key: "Capsize_Lagoon",
    reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "promethium", value: 120, type: bonus.special_good },
          { key: "orichalcum", value: 180, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "superconductors", value: 65, type: bonus.good },
          { key: "plankton", value: 95, type: bonus.good },
          { key: "promethium", value: 140, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "nanoparticles", value: 80, type: bonus.good },
          { key: "promethium", value: 110, type: bonus.special_good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "corals", value: 95, type: bonus.good },
          { key: "plankton", value: 85, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "biolight", value: 45, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good },
          { key: "pearls", value: 55, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      }
    ]
  },
  Corsair_s_Skerry: {
    key: "Corsair_s_Skerry",
    reward: [{ type: "coin", value: 187500000 }, { type: "supply", value: 187500000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "purified_water", value: 85, type: bonus.good },
          { key: "superconductors", value: 80, type: bonus.good },
          { key: "orichalcum", value: 160, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 110000 }],
        cost: [
          { key: "biogeochemical_data", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 75, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "nanoparticles", value: 70, type: bonus.good },
          { key: "artificial_scales", value: 90, type: bonus.good },
          { key: "promethium", value: 80, type: bonus.special_good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "algae", value: 65, type: bonus.good },
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "promethium", value: 140, type: bonus.special_good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      }
    ]
  },
  Undertow_Bank: {
    key: "Undertow_Bank",
    reward: [{ type: "coin", value: 1300000 }, { type: "supply", value: 1300000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "algae", value: 140, type: bonus.good },
          { key: "orichalcum", value: 170, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "artificial_scales", value: 85, type: bonus.good },
          { key: "biolight", value: 65, type: bonus.good },
          { key: "promethium", value: 75, type: bonus.special_good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "plankton", value: 135, type: bonus.good },
          { key: "promethium", value: 100, type: bonus.special_good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "biolight", value: 145, type: bonus.good },
          { key: "pearls", value: 75, type: bonus.good },
          { key: "promethium", value: 90, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 80, type: bonus.good },
          { key: "purified_water", value: 100, type: bonus.good },
          { key: "corals", value: 120, type: bonus.good }
        ]
      }
    ]
  },
  Blackwater_Cape: {
    key: "Blackwater_Cape",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "promethium", value: 130, type: bonus.special_good },
          { key: "orichalcum", value: 160, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "artificial_scales", value: 95, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "pearls", value: 85, type: bonus.good },
          { key: "plankton", value: 80, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 100, type: bonus.good },
          { key: "corals", value: 80, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "orichalcum", value: 80, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "corals", value: 95, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "paper_batteries", value: 90, type: bonus.good },
          { key: "artificial_scales", value: 100, type: bonus.good },
          { key: "biolight", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "transester_gas", value: 85, type: bonus.good },
          { key: "promethium", value: 140, type: bonus.special_good }
        ]
      }
    ]
  },
  Typhoon_Peninsula: {
    key: "Typhoon_Peninsula",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good },
          { key: "plankton", value: 80, type: bonus.good },
          { key: "orichalcum", value: 120, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "transester_gas", value: 95, type: bonus.good },
          { key: "biolight", value: 100, type: bonus.good },
          { key: "pearls", value: 100, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "corals", value: 45, type: bonus.good },
          { key: "promethium", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 70000 }],
        cost: [
          { key: "plankton", value: 70, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "corals", value: 70, type: bonus.good },
          { key: "plankton", value: 70, type: bonus.good },
          { key: "promethium", value: 110, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 95, type: bonus.good },
          { key: "orichalcum", value: 145, type: bonus.special_good }
        ]
      }
    ]
  },
  Mutiny_Canyon: {
    key: "Mutiny_Canyon",
    reward: [{ type: bonus.good, age: "OceanicFuture", value: 40 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "algae", value: 55, type: bonus.good },
          { key: "promethium", value: 120, type: bonus.special_good },
          { key: "orichalcum", value: 135, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 110000 }],
        cost: [
          { key: "nanoparticles", value: 60, type: bonus.good },
          { key: "corals", value: 100, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "promethium", value: 145, type: bonus.special_good },
          { key: "orichalcum", value: 145, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "biolight", value: 55, type: bonus.good },
          { key: "pearls", value: 70, type: bonus.good },
          { key: "plankton", value: 55, type: bonus.good },
          { key: "promethium", value: 130, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "artificial_scales", value: 85, type: bonus.good },
          { key: "pearls", value: 75, type: bonus.good },
          { key: "orichalcum", value: 150, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "biogeochemical_data", value: 75, type: bonus.good },
          { key: "biolight", value: 75, type: bonus.good },
          { key: "plankton", value: 65, type: bonus.good },
          { key: "orichalcum", value: 100, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "purified_water", value: 75, type: bonus.good },
          { key: "superconductors", value: 65, type: bonus.good },
          { key: "promethium", value: 150, type: bonus.special_good }
        ]
      }
    ]
  },
  Leviathan_Wreck: {
    key: "Leviathan_Wreck",
    reward: [{ type: "coin", value: 2000000 }, { type: "supply", value: 2000000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "corals", value: 80, type: bonus.good },
          { key: "plankton", value: 90, type: bonus.good },
          { key: "orichalcum", value: 140, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100000 }],
        cost: [
          { key: "pearls", value: 120, type: bonus.good },
          { key: "promethium", value: 175, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100000 }],
        cost: [
          { key: "promethium", value: 130, type: bonus.special_good },
          { key: "orichalcum", value: 160, type: bonus.special_good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "artificial_scales", value: 85, type: bonus.good },
          { key: "biolight", value: 70, type: bonus.good },
          { key: "corals", value: 60, type: bonus.good },
          { key: "orichalcum", value: 110, type: bonus.special_good }
        ]
      }
    ]
  }
};
