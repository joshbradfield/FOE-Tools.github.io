const { bonus } = require("../bonus");

module.exports = {
  Nutarniq: {
    key: "Nutarniq",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "bionics_data", value: 60, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "robots", value: 60, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "electromagnets", value: 60, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "bionics_data", value: 60, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "plastics", value: 60, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "gas", value: 60, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "algae", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "robots", value: 60, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Iluliaq: {
    key: "Iluliaq",
    reward: [{ type: "medal", value: 3000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "electromagnets", value: 65, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "robots", value: 65, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "gas", value: 65, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "bionics_data", value: 65, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "plastics", value: 65, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "algae", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "electromagnets", value: 65, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "plastics", value: 65, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "gas", value: 65, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Aurora_s_Dale: {
    key: "Aurora_s_Dale",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1400000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "papercrete", value: 45, type: bonus.good },
          { key: "biogeochemical_data", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "gas", value: 35, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "smart_materials", value: 45, type: bonus.good },
          { key: "purified_water", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "gas", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "preservatives", value: 45, type: bonus.good },
          { key: "algae", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "nutrition_research", value: 45, type: bonus.good },
          { key: "algae", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "gas", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "preservatives", value: 45, type: bonus.good },
          { key: "biogeochemical_data", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "smart_materials", value: 45, type: bonus.good },
          { key: "nanoparticles", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 45, type: bonus.good },
          { key: "purified_water", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Arctic_Horizon: {
    key: "Arctic_Horizon",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bionics_data", value: 30, type: bonus.good },
          { key: "gas", value: 50, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "algae", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "gas", value: 30, type: bonus.good },
          { key: "plastics", value: 50, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "robots", value: 50, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "plastics", value: 50, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "electromagnets", value: 50, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bionics_data", value: 50, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "gas", value: 30, type: bonus.good },
          { key: "robots", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "algae", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "electromagnets", value: 50, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "gas", value: 50, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Cold_Bay: {
    key: "Cold_Bay",
    reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "plastics", value: 50, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 30, type: bonus.good },
          { key: "purified_water", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "gas", value: 50, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 20, type: bonus.good },
          { key: "superconductors", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "plastics", value: 50, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "algae", value: 20, type: bonus.good },
          { key: "superconductors", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "robots", value: 50, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "purified_water", value: 20, type: bonus.good },
          { key: "superconductors", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "bionics_data", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 20, type: bonus.good },
          { key: "nanoparticles", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "electromagnets", value: 50, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 30, type: bonus.good },
          { key: "superconductors", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Tuklavik: {
    key: "Tuklavik",
    reward: [{ type: "good_bonus", age: "ColonialAge" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "gas", value: 70, type: bonus.good },
          { key: "preservatives", value: 45, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "bionics_data", value: 70, type: bonus.good },
          { key: "nutrition_research", value: 45, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "plastics", value: 70, type: bonus.good },
          { key: "nutrition_research", value: 45, type: bonus.good },
          { key: "algae", value: 25, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "bionics_data", value: 70, type: bonus.good },
          { key: "nutrition_research", value: 45, type: bonus.good },
          { key: "algae", value: 25, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "robots", value: 70, type: bonus.good },
          { key: "papercrete", value: 45, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "electromagnets", value: 70, type: bonus.good },
          { key: "translucent_concrete", value: 45, type: bonus.good },
          { key: "algae", value: 25, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "robots", value: 70, type: bonus.good },
          { key: "smart_materials", value: 45, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "electromagnets", value: 70, type: bonus.good },
          { key: "papercrete", value: 45, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Ananevut: {
    key: "Ananevut",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "plastics", value: 70, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good },
          { key: "purified_water", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "bionics_data", value: 70, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good },
          { key: "superconductors", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "robots", value: 70, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 30, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "bionics_data", value: 70, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "algae", value: 25, type: bonus.good },
          { key: "superconductors", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "electromagnets", value: 70, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "algae", value: 30, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "plastics", value: 70, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 30, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Qaniit: {
    key: "Qaniit",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "preservatives", value: 55, type: bonus.good },
          { key: "nanoparticles", value: 20, type: bonus.good },
          { key: "superconductors", value: 35, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "nutrition_research", value: 55, type: bonus.good },
          { key: "biogeochemical_data", value: 20, type: bonus.good },
          { key: "superconductors", value: 35, type: bonus.good },
          { key: "ai_data", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "translucent_concrete", value: 55, type: bonus.good },
          { key: "biogeochemical_data", value: 20, type: bonus.good },
          { key: "nanoparticles", value: 35, type: bonus.good },
          { key: "ai_data", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "translucent_concrete", value: 55, type: bonus.good },
          { key: "biogeochemical_data", value: 35, type: bonus.good },
          { key: "purified_water", value: 20, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "nutrition_research", value: 55, type: bonus.good },
          { key: "algae", value: 20, type: bonus.good },
          { key: "nanoparticles", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "smart_materials", value: 55, type: bonus.good },
          { key: "biogeochemical_data", value: 20, type: bonus.good },
          { key: "purified_water", value: 35, type: bonus.good },
          { key: "ai_data", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "smart_materials", value: 55, type: bonus.good },
          { key: "algae", value: 35, type: bonus.good },
          { key: "superconductors", value: 20, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "translucent_concrete", value: 55, type: bonus.good },
          { key: "algae", value: 20, type: bonus.good },
          { key: "biogeochemical_data", value: 35, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "papercrete", value: 55, type: bonus.good },
          { key: "algae", value: 35, type: bonus.good },
          { key: "biogeochemical_data", value: 20, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "preservatives", value: 55, type: bonus.good },
          { key: "algae", value: 35, type: bonus.good },
          { key: "purified_water", value: 20, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "papercrete", value: 55, type: bonus.good },
          { key: "biogeochemical_data", value: 35, type: bonus.good },
          { key: "superconductors", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  White_Gate: {
    key: "White_Gate",
    reward: [{ type: "coin", value: 1400000 }, { type: "supply", value: 1200000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "algae", value: 40, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "purified_water", value: 25, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "algae", value: 25, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "nanoparticles", value: 25, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "biogeochemical_data", value: 40, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 25, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Median_Waters: {
    key: "Median_Waters",
    reward: [{ type: "medal", value: 3000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "ai_data", value: 20, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "algae", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 70000 }],
        cost: [
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "ai_data", value: 20, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Snowdrifts: {
    key: "Snowdrifts",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 10 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "nanoparticles", value: 50, type: bonus.good },
          { key: "bioplastics", value: 15, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "algae", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "superconductors", value: 50, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "purified_water", value: 50, type: bonus.good },
          { key: "ai_data", value: 15, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 50, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "nanowire", value: 15, type: bonus.good }
        ]
      }
    ]
  },
  Frosty_Mountain: {
    key: "Frosty_Mountain",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 10 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "algae", value: 40, type: bonus.good },
          { key: "purified_water", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 40, type: bonus.good },
          { key: "superconductors", value: 30, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 40, type: bonus.good },
          { key: "nanoparticles", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 30, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "purified_water", value: 30, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good },
          { key: "ai_data", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "biogeochemical_data", value: 30, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Southern_Valley: {
    key: "Southern_Valley",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 10, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 25, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "transester_gas", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 25, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "transester_gas", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 10, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 10, type: bonus.good },
          { key: "paper_batteries", value: 25, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanowire", value: 10, type: bonus.good },
          { key: "paper_batteries", value: 25, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 10, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 25, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "transester_gas", value: 10, type: bonus.good }
        ]
      }
    ]
  },
  Ilug: {
    key: "Ilug",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "preservatives", value: 70, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "translucent_concrete", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "translucent_concrete", value: 70, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "smart_materials", value: 70, type: bonus.good },
          { key: "ai_data", value: 20, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "papercrete", value: 70, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "smart_materials", value: 70, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Chugiak: {
    key: "Chugiak",
    reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "gas", value: 90, type: bonus.good },
          { key: "purified_water", value: 60, type: bonus.good },
          { key: "bioplastics", value: 15, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "robots", value: 90, type: bonus.good },
          { key: "biogeochemical_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "bionics_data", value: 90, type: bonus.good },
          { key: "nanoparticles", value: 60, type: bonus.good },
          { key: "nanowire", value: 15, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "bionics_data", value: 90, type: bonus.good },
          { key: "superconductors", value: 60, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "transester_gas", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "electromagnets", value: 90, type: bonus.good },
          { key: "biogeochemical_data", value: 60, type: bonus.good },
          { key: "nanowire", value: 15, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "plastics", value: 90, type: bonus.good },
          { key: "biogeochemical_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "robots", value: 90, type: bonus.good },
          { key: "purified_water", value: 60, type: bonus.good },
          { key: "bioplastics", value: 15, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "gas", value: 90, type: bonus.good },
          { key: "purified_water", value: 60, type: bonus.good },
          { key: "ai_data", value: 15, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "electromagnets", value: 90, type: bonus.good },
          { key: "nanoparticles", value: 60, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "transester_gas", value: 15, type: bonus.good }
        ]
      }
    ]
  },
  Kesukavut: {
    key: "Kesukavut",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "purified_water", value: 75, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "algae", value: 75, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "superconductors", value: 75, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 75, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "nanoparticles", value: 75, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "purified_water", value: 75, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 75, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 75, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "algae", value: 75, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Adlartok: {
    key: "Adlartok",
    reward: [{ type: "medal", value: 3000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "superconductors", value: 80, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 80, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 80, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "purified_water", value: 80, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "superconductors", value: 80, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "purified_water", value: 80, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "algae", value: 80, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "algae", value: 80, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Northern_Passage: {
    key: "Northern_Passage",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 10 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 25, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 25, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 25, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Avalanche: {
    key: "Avalanche",
    reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1200000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Manirak: {
    key: "Manirak",
    reward: [{ type: "medal", value: 3500 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "algae", value: 80, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "nanoparticles", value: 80, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "superconductors", value: 80, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "algae", value: 80, type: bonus.good },
          { key: "ai_data", value: 30, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "purified_water", value: 80, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "biogeochemical_data", value: 80, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Tundra_Rock: {
    key: "Tundra_Rock",
    reward: [{ type: "good_bonus", age: "BronzeAge" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "transester_gas", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 35, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Patuktuq: {
    key: "Patuktuq",
    reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "nanoparticles", value: 80, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "purified_water", value: 80, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "superconductors", value: 80, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "algae", value: 80, type: bonus.good },
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "biogeochemical_data", value: 80, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "superconductors", value: 80, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "nanoparticles", value: 80, type: bonus.good },
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "algae", value: 80, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Kilalurak: {
    key: "Kilalurak",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 25 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 50000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      }
    ]
  },
  Summit_Ice: {
    key: "Summit_Ice",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 40 }],
    sectors: [
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 10 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Nilak: {
    key: "Nilak",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 85, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "purified_water", value: 85, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "algae", value: 85, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "superconductors", value: 85, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "algae", value: 85, type: bonus.good },
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "superconductors", value: 85, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "algae", value: 85, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 85, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "superconductors", value: 85, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "purified_water", value: 85, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 85, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 85, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Chulyin: {
    key: "Chulyin",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 25 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Tattilgat: {
    key: "Tattilgat",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1600000 }, { type: "medal", value: 2000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 10, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
        cost: [
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 75, type: bonus.good },
          { key: "transester_gas", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "nanowire", value: 10, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 75, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 10, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good },
          { key: "transester_gas", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 10, type: bonus.good },
          { key: "nanowire", value: 75, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 10, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      }
    ]
  },
  Atka: {
    key: "Atka",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 25 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "transester_gas", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 75, type: bonus.good },
          { key: "transester_gas", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 75, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 15, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 75, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 15, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "nanowire", value: 15, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 15, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 15, type: bonus.good },
          { key: "nanowire", value: 75, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 15, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good },
          { key: "transester_gas", value: 15, type: bonus.good }
        ]
      }
    ]
  },
  Glacial_Peak: {
    key: "Glacial_Peak",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "bioplastics", value: 75, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 25, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "nanowire", value: 75, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good }
        ]
      }
    ]
  },
  Nunataq: {
    key: "Nunataq",
    reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "superconductors", value: 110, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 110, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "algae", value: 110, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 25, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "superconductors", value: 110, type: bonus.good },
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 110, type: bonus.good },
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "bioplastics", value: 25, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "algae", value: 110, type: bonus.good },
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 110, type: bonus.good },
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "nanowire", value: 25, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 110, type: bonus.good },
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "paper_batteries", value: 50, type: bonus.good },
          { key: "transester_gas", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Precipice: {
    key: "Precipice",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 50 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 85, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "nanowire", value: 85, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 85, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "transester_gas", value: 85, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 65000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 85, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 85, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 65000 }],
        cost: [
          { key: "ai_data", value: 85, type: bonus.good },
          { key: "nanowire", value: 65, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Nanuq: {
    key: "Nanuq",
    reward: [{ type: "medal", value: 3500 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 80, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "transester_gas", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 80, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "transester_gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 80, type: bonus.good },
          { key: "nanowire", value: 50, type: bonus.good },
          { key: "paper_batteries", value: 30, type: bonus.good },
          { key: "transester_gas", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 50, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 65, type: bonus.good },
          { key: "transester_gas", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 65, type: bonus.good },
          { key: "bioplastics", value: 30, type: bonus.good },
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "transester_gas", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 50, type: bonus.good },
          { key: "bioplastics", value: 65, type: bonus.good },
          { key: "nanowire", value: 30, type: bonus.good },
          { key: "paper_batteries", value: 80, type: bonus.good }
        ]
      }
    ]
  },
  Neural_Rites: {
    key: "Neural_Rites",
    reward: [{ type: "coin", value: 1500000 }, { type: "supply", value: 1500000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 90, type: bonus.good },
          { key: "nanowire", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "nanowire", value: 90, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 90, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 90, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "nanowire", value: 90, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 90, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 90, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "transester_gas", value: 90, type: bonus.good }
        ]
      }
    ]
  },
  Unalaq: {
    key: "Unalaq",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "superconductors", value: 120, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanoparticles", value: 120, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "nanoparticles", value: 120, type: bonus.good },
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "algae", value: 120, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "purified_water", value: 120, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "nanoparticles", value: 120, type: bonus.good },
          { key: "nanowire", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "purified_water", value: 120, type: bonus.good },
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "transester_gas", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "purified_water", value: 120, type: bonus.good },
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "superconductors", value: 120, type: bonus.good },
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "purified_water", value: 120, type: bonus.good },
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "algae", value: 120, type: bonus.good },
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "transester_gas", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Anyu: {
    key: "Anyu",
    reward: [{ type: "coin", value: 1200000 }, { type: "supply", value: 1200000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "superconductors", value: 100, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 100, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 20, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nanoparticles", value: 100, type: bonus.good },
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "purified_water", value: 100, type: bonus.good },
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "superconductors", value: 100, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 60000 }],
        cost: [
          { key: "biogeochemical_data", value: 100, type: bonus.good },
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "algae", value: 100, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 45, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Frozen_Steppe: {
    key: "Frozen_Steppe",
    reward: [{ type: bonus.good, age: "ArcticFuture", value: 30 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 35, type: bonus.good },
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "paper_batteries", value: 95, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "bioplastics", value: 95, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 95, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 35, type: bonus.good },
          { key: "transester_gas", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 95, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 95, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 70, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 35, type: bonus.good },
          { key: "transester_gas", value: 95, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 70, type: bonus.good },
          { key: "nanowire", value: 95, type: bonus.good },
          { key: "transester_gas", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "bioplastics", value: 35, type: bonus.good },
          { key: "paper_batteries", value: 70, type: bonus.good },
          { key: "transester_gas", value: 95, type: bonus.good }
        ]
      }
    ]
  },
  Pimniq: {
    key: "Pimniq",
    reward: [{ type: "medal", value: 3500 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 45, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 20, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 20, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "bioplastics", value: 75, type: bonus.good },
          { key: "nanowire", value: 45, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "transester_gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 55, type: bonus.good },
          { key: "bioplastics", value: 75, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 80000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 45, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "transester_gas", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 80000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "nanowire", value: 20, type: bonus.good },
          { key: "paper_batteries", value: 55, type: bonus.good },
          { key: "transester_gas", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  The_Grotto: {
    key: "The_Grotto",
    reward: [{ type: "medal", value: 3500 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 55, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "nanowire", value: 75, type: bonus.good },
          { key: "paper_batteries", value: 95, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "nanowire", value: 95, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "ai_data", value: 95, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 75000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 75, type: bonus.good },
          { key: "paper_batteries", value: 95, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 75000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 95, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Temple_Floe: {
    key: "Temple_Floe",
    reward: [{ type: "coin", value: 1800000 }, { type: "supply", value: 1800000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 100, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 100, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 100, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 100, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 75, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 100, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 75, type: bonus.good },
          { key: "transester_gas", value: 100, type: bonus.good }
        ]
      },
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
        cost: [
          { key: "ai_data", value: 100, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 75, type: bonus.good }
        ]
      }
    ]
  },
  Spirit_Plane: {
    key: "Spirit_Plane",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: bonus.special_good, good: "promethium", value: 20 }],
        cost: [
          { key: "ai_data", value: 100, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "transester_gas", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 100, type: bonus.good },
          { key: "paper_batteries", value: 80, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 100, type: bonus.good },
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 80, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 60, type: bonus.good },
          { key: "nanowire", value: 40, type: bonus.good },
          { key: "paper_batteries", value: 80, type: bonus.good },
          { key: "transester_gas", value: 100, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 80, type: bonus.good },
          { key: "bioplastics", value: 40, type: bonus.good },
          { key: "nanowire", value: 100, type: bonus.good },
          { key: "transester_gas", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "ai_data", value: 40, type: bonus.good },
          { key: "bioplastics", value: 80, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 100, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 90000 }],
        cost: [
          { key: "ai_data", value: 60, type: bonus.good },
          { key: "nanowire", value: 100, type: bonus.good },
          { key: "paper_batteries", value: 80, type: bonus.good },
          { key: "transester_gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 90000 }],
        cost: [
          { key: "bioplastics", value: 100, type: bonus.good },
          { key: "nanowire", value: 60, type: bonus.good },
          { key: "paper_batteries", value: 40, type: bonus.good },
          { key: "transester_gas", value: 80, type: bonus.good }
        ]
      }
    ]
  }
};
