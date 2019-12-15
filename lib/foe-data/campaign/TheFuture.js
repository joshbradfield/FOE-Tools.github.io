const { bonus } = require("../bonus");

module.exports = {
  Agadar: {
    key: "Agadar",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "genome_data", value: 55, type: bonus.good },
          { key: "robots", value: 45, type: bonus.good },
          { key: "translucent_concrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "industrial_filters", value: 55, type: bonus.good },
          { key: "plastics", value: 45, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "steel", value: 55, type: bonus.good },
          { key: "electromagnets", value: 45, type: bonus.good },
          { key: "nutrition_research", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "semiconductors", value: 55, type: bonus.good },
          { key: "plastics", value: 45, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "industrial_filters", value: 55, type: bonus.good },
          { key: "bionics_data", value: 45, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "renewable_resources", value: 55, type: bonus.good },
          { key: "gas", value: 45, type: bonus.good },
          { key: "papercrete", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Esan_Ewu: {
    key: "Esan_Ewu",
    reward: [{ type: bonus.good, age: "TheFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "genome_data", value: 60, type: bonus.good },
          { key: "robots", value: 45, type: bonus.good },
          { key: "translucent_concrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "steel", value: 60, type: bonus.good },
          { key: "electromagnets", value: 45, type: bonus.good },
          { key: "nutrition_research", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "semiconductors", value: 60, type: bonus.good },
          { key: "plastics", value: 45, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "renewable_resources", value: 60, type: bonus.good },
          { key: "gas", value: 45, type: bonus.good },
          { key: "papercrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "industrial_filters", value: 60, type: bonus.good },
          { key: "bionics_data", value: 45, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Omogba: {
    key: "Omogba",
    reward: [{ type: "supply", value: 1500000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "genome_data", value: 30, type: bonus.good },
          { key: "renewable_resources", value: 55, type: bonus.good },
          { key: "plastics", value: 45, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "semiconductors", value: 55, type: bonus.good },
          { key: "gas", value: 45, type: bonus.good },
          { key: "nutrition_research", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "renewable_resources", value: 55, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "bionics_data", value: 45, type: bonus.good },
          { key: "translucent_concrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "steel", value: 55, type: bonus.good },
          { key: "electromagnets", value: 45, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "genome_data", value: 55, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "gas", value: 45, type: bonus.good },
          { key: "papercrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "genome_data", value: 55, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "robots", value: 45, type: bonus.good },
          { key: "translucent_concrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "genome_data", value: 30, type: bonus.good },
          { key: "industrial_filters", value: 55, type: bonus.good },
          { key: "bionics_data", value: 45, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Owopele: {
    key: "Owopele",
    reward: [{ type: "good_bonus", age: "LateMiddleAges" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "industrial_filters", value: 60, type: bonus.good },
          { key: "robots", value: 50, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "steel", value: 60, type: bonus.good },
          { key: "electromagnets", value: 50, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "algae", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "renewable_resources", value: 60, type: bonus.good },
          { key: "gas", value: 50, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "semiconductors", value: 60, type: bonus.good },
          { key: "plastics", value: 50, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "semiconductors", value: 60, type: bonus.good },
          { key: "plastics", value: 50, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "steel", value: 60, type: bonus.good },
          { key: "bionics_data", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "industrial_filters", value: 60, type: bonus.good },
          { key: "gas", value: 50, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "genome_data", value: 60, type: bonus.good },
          { key: "robots", value: 50, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "algae", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Jak: {
    key: "Jak",
    reward: [{ type: "coin", value: 1500000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "genome_data", value: 55, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "papercrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "industrial_filters", value: 55, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "steel", value: 55, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "genome_data", value: 55, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 55, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "nutrition_research", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "semiconductors", value: 55, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Pala: {
    key: "Pala",
    reward: [{ type: bonus.good, age: "TheFuture", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "steel", value: 55, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "semiconductors", value: 55, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "genome_data", value: 55, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "semiconductors", value: 55, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "industrial_filters", value: 55, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "preservatives", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "renewable_resources", value: 55, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "steel", value: 55, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "nutrition_research", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Kolabourg: {
    key: "Kolabourg",
    reward: [{ type: "coin", value: 300000 }, { type: "supply", value: 800000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "renewable_resources", value: 50, type: bonus.good },
          { key: "semiconductors", value: 50, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "industrial_filters", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 50, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "semiconductors", value: 50, type: bonus.good },
          { key: "steel", value: 50, type: bonus.good },
          { key: "nutrition_research", value: 40, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "industrial_filters", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 50, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "genome_data", value: 50, type: bonus.good },
          { key: "steel", value: 50, type: bonus.good },
          { key: "preservatives", value: 40, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "genome_data", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 50, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Bontaville: {
    key: "Bontaville",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 40, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "nutrition_research", value: 40, type: bonus.good },
          { key: "preservatives", value: 60, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "preservatives", value: 40, type: bonus.good },
          { key: "translucent_concrete", value: 60, type: bonus.good },
          { key: "algae", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "papercrete", value: 60, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "preservatives", value: 40, type: bonus.good },
          { key: "smart_materials", value: 60, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "papercrete", value: 40, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "smart_materials", value: 60, type: bonus.good },
          { key: "algae", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good },
          { key: "translucent_concrete", value: 60, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Botuku: {
    key: "Botuku",
    reward: [{ type: "coin", value: 1000000 }, { type: "supply", value: 1000000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "electromagnets", value: 40, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "gas", value: 40, type: bonus.good },
          { key: "robots", value: 40, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "bionics_data", value: 40, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "plastics", value: 40, type: bonus.good },
          { key: "robots", value: 40, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "purified_water", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 45000 }],
        cost: [
          { key: "electromagnets", value: 40, type: bonus.good },
          { key: "gas", value: 40, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "bionics_data", value: 40, type: bonus.good },
          { key: "robots", value: 40, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "superconductors", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "electromagnets", value: 40, type: bonus.good },
          { key: "gas", value: 40, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Kalabuye: {
    key: "Kalabuye",
    reward: [{ type: "medal", value: 2000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "plastics", value: 40, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "nanoparticles", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [
          { key: "robots", value: 40, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "purified_water", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "bionics_data", value: 40, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "algae", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [
          { key: "bionics_data", value: 40, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "superconductors", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 45000 }],
        cost: [
          { key: "electromagnets", value: 40, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "algae", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [
          { key: "gas", value: 40, type: bonus.good },
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Bisoraba: {
    key: "Bisoraba",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "smart_materials", value: 60, type: bonus.good },
          { key: "algae", value: 35, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "papercrete", value: 60, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 40, type: bonus.good },
          { key: "purified_water", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "preservatives", value: 60, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "algae", value: 35, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [
          { key: "smart_materials", value: 60, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "algae", value: 40, type: bonus.good },
          { key: "nanoparticles", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "preservatives", value: 60, type: bonus.good },
          { key: "nanoparticles", value: 35, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 35, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 55000 }],
        cost: [
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 60, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good },
          { key: "superconductors", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Fort_Buntu: {
    key: "Fort_Buntu",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "preservatives", value: 60, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "algae", value: 40, type: bonus.good },
          { key: "nanoparticles", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "papercrete", value: 60, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "algae", value: 35, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "papercrete", value: 60, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "purified_water", value: 35, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 60, type: bonus.good },
          { key: "biogeochemical_data", value: 40, type: bonus.good },
          { key: "superconductors", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 35, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "smart_materials", value: 60, type: bonus.good },
          { key: "purified_water", value: 35, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 35, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "papercrete", value: 60, type: bonus.good },
          { key: "nanoparticles", value: 35, type: bonus.good },
          { key: "superconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "preservatives", value: 50, type: bonus.good },
          { key: "algae", value: 35, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "smart_materials", value: 60, type: bonus.good },
          { key: "biogeochemical_data", value: 40, type: bonus.good },
          { key: "nanoparticles", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "papercrete", value: 60, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "algae", value: 40, type: bonus.good },
          { key: "biogeochemical_data", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "preservatives", value: 60, type: bonus.good },
          { key: "smart_materials", value: 50, type: bonus.good },
          { key: "algae", value: 40, type: bonus.good },
          { key: "biogeochemical_data", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "nutrition_research", value: 60, type: bonus.good },
          { key: "papercrete", value: 50, type: bonus.good },
          { key: "biogeochemical_data", value: 40, type: bonus.good },
          { key: "superconductors", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "smart_materials", value: 60, type: bonus.good },
          { key: "translucent_concrete", value: 50, type: bonus.good },
          { key: "algae", value: 35, type: bonus.good },
          { key: "purified_water", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 60000 }],
        cost: [
          { key: "nutrition_research", value: 50, type: bonus.good },
          { key: "translucent_concrete", value: 60, type: bonus.good },
          { key: "nanoparticles", value: 40, type: bonus.good },
          { key: "purified_water", value: 35, type: bonus.good }
        ]
      }
    ]
  }
};
