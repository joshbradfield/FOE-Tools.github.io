const { bonus } = require("../bonus");

module.exports = {
  Torrinhos: {
    key: "Torrinhos",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "flavorants", value: 40, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "packaging", value: 50, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Villabaja: {
    key: "Villabaja",
    reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 230000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "ferroconcrete", value: 60, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "flavorants", value: 25, type: bonus.good },
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "ferroconcrete", value: 25, type: bonus.good },
          { key: "packaging", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 25, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "convenience_food", value: 25, type: bonus.good },
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Itabarai: {
    key: "Itabarai",
    reward: [{ type: "coin", value: 160000 }, { type: "supply", value: 220000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "ferroconcrete", value: 25, type: bonus.good },
          { key: "packaging", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 25, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "ferroconcrete", value: 25, type: bonus.good },
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 25, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "convenience_food", value: 25, type: bonus.good },
          { key: "packaging", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 40000 }],
        cost: [
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "flavorants", value: 25, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Bajatai: {
    key: "Bajatai",
    reward: [{ type: "good_bonus", age: "HighMiddleAges" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "flavorants", value: 75, type: bonus.good },
          { key: "semiconductors", value: 50, type: bonus.good },
          { key: "gas", value: 40, type: bonus.good },
          { key: "smart_materials", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "luxury_materials", value: 75, type: bonus.good },
          { key: "steel", value: 50, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good },
          { key: "nutrition_research", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "flavorants", value: 75, type: bonus.good },
          { key: "semiconductors", value: 50, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good },
          { key: "translucent_concrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "convenience_food", value: 75, type: bonus.good },
          { key: "steel", value: 50, type: bonus.good },
          { key: "robots", value: 40, type: bonus.good },
          { key: "preservatives", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "convenience_food", value: 75, type: bonus.good },
          { key: "industrial_filters", value: 50, type: bonus.good },
          { key: "robots", value: 40, type: bonus.good },
          { key: "papercrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "packaging", value: 75, type: bonus.good },
          { key: "industrial_filters", value: 50, type: bonus.good },
          { key: "bionics_data", value: 40, type: bonus.good },
          { key: "nutrition_research", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "flavorants", value: 75, type: bonus.good },
          { key: "genome_data", value: 50, type: bonus.good },
          { key: "electromagnets", value: 40, type: bonus.good },
          { key: "preservatives", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Villariba: {
    key: "Villariba",
    reward: [{ type: "coin", value: 170000 }, { type: "supply", value: 210000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "ferroconcrete", value: 30, type: bonus.good },
          { key: "luxury_materials", value: 25, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "convenience_food", value: 25, type: bonus.good },
          { key: "packaging", value: 30, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "ferroconcrete", value: 25, type: bonus.good },
          { key: "luxury_materials", value: 30, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "convenience_food", value: 30, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "ferroconcrete", value: 25, type: bonus.good },
          { key: "flavorants", value: 30, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "convenience_food", value: 30, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "ferroconcrete", value: 30, type: bonus.good },
          { key: "flavorants", value: 25, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "convenience_food", value: 25, type: bonus.good },
          { key: "packaging", value: 30, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Rio_Roxo: {
    key: "Rio_Roxo",
    reward: [{ type: bonus.good, age: "Tomorrow", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good },
          { key: "renewable_resources", value: 35, type: bonus.good },
          { key: "electromagnets", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "luxury_materials", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 35, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "flavorants", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "steel", value: 35, type: bonus.good },
          { key: "robots", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 35, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "plastics", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good },
          { key: "industrial_filters", value: 35, type: bonus.good },
          { key: "electromagnets", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "genome_data", value: 35, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "plastics", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "luxury_materials", value: 40, type: bonus.good },
          { key: "genome_data", value: 35, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "packaging", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "semiconductors", value: 35, type: bonus.good },
          { key: "bionics_data", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Sierra_Torrido: {
    key: "Sierra_Torrido",
    reward: [{ type: "coin", value: 550000 }, { type: "supply", value: 600000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good },
          { key: "translucent_concrete", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "electromagnets", value: 25, type: bonus.good },
          { key: "smart_materials", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good },
          { key: "nutrition_research", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "bionics_data", value: 25, type: bonus.good },
          { key: "preservatives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good },
          { key: "nutrition_research", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "packaging", value: 50, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good },
          { key: "translucent_concrete", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good },
          { key: "papercrete", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Santa_Nerea: {
    key: "Santa_Nerea",
    reward: [{ type: "supply", value: 1110000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "renewable_resources", value: 45, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "steel", value: 45, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "semiconductors", value: 45, type: bonus.good },
          { key: "steel", value: 45, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "renewable_resources", value: 45, type: bonus.good },
          { key: "semiconductors", value: 45, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "genome_data", value: 45, type: bonus.good },
          { key: "industrial_filters", value: 45, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "genome_data", value: 30, type: bonus.good },
          { key: "industrial_filters", value: 45, type: bonus.good },
          { key: "semiconductors", value: 45, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "genome_data", value: 45, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "semiconductors", value: 45, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  La_Huega: {
    key: "La_Huega",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "bionics_data", value: 20, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good },
          { key: "robots", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "electromagnets", value: 25, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good },
          { key: "plastics", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "bionics_data", value: 30, type: bonus.good },
          { key: "electromagnets", value: 20, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "bionics_data", value: 25, type: bonus.good },
          { key: "gas", value: 20, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "bionics_data", value: 20, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good },
          { key: "robots", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Jamenez: {
    key: "Jamenez",
    reward: [{ type: bonus.good, age: "Tomorrow", value: 20 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "steel", value: 40, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good },
          { key: "translucent_concrete", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "bionics_data", value: 30, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "smart_materials", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good },
          { key: "nutrition_research", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "papercrete", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "preservatives", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "preservatives", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "papercrete", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Falsa_Cruz: {
    key: "Falsa_Cruz",
    reward: [{ type: "coin", value: 770000 }, { type: "supply", value: 430000 }, { type: "medal", value: 500 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "steel", value: 35, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "preservatives", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "steel", value: 35, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "nutrition_research", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "renewable_resources", value: 35, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "papercrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "genome_data", value: 35, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "smart_materials", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "industrial_filters", value: 35, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "steel", value: 35, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "smart_materials", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "renewable_resources", value: 35, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "genome_data", value: 35, type: bonus.good },
          { key: "bionics_data", value: 35, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "nutrition_research", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Desierto_de_la_Muerte: {
    key: "Desierto_de_la_Muerte",
    reward: [{ type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "bionics_data", value: 50, type: bonus.good },
          { key: "plastics", value: 45, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "gas", value: 50, type: bonus.good },
          { key: "robots", value: 45, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "electromagnets", value: 45, type: bonus.good },
          { key: "gas", value: 50, type: bonus.good },
          { key: "nutrition_research", value: 35, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "bionics_data", value: 45, type: bonus.good },
          { key: "robots", value: 50, type: bonus.good },
          { key: "papercrete", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "gas", value: 45, type: bonus.good },
          { key: "plastics", value: 50, type: bonus.good },
          { key: "nutrition_research", value: 40, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "electromagnets", value: 50, type: bonus.good },
          { key: "plastics", value: 45, type: bonus.good },
          { key: "preservatives", value: 40, type: bonus.good },
          { key: "translucent_concrete", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Sao_Malvado: {
    key: "Sao_Malvado",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "electromagnets", value: 60, type: bonus.good },
          { key: "robots", value: 45, type: bonus.good },
          { key: "nutrition_research", value: 40, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "electromagnets", value: 60, type: bonus.good },
          { key: "gas", value: 45, type: bonus.good },
          { key: "papercrete", value: 35, type: bonus.good },
          { key: "preservatives", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "gas", value: 60, type: bonus.good },
          { key: "robots", value: 45, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "bionics_data", value: 45, type: bonus.good },
          { key: "robots", value: 60, type: bonus.good },
          { key: "nutrition_research", value: 35, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "bionics_data", value: 60, type: bonus.good },
          { key: "plastics", value: 45, type: bonus.good },
          { key: "nutrition_research", value: 35, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "bionics_data", value: 45, type: bonus.good },
          { key: "plastics", value: 60, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good },
          { key: "translucent_concrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "plastics", value: 45, type: bonus.good },
          { key: "robots", value: 60, type: bonus.good },
          { key: "preservatives", value: 40, type: bonus.good },
          { key: "smart_materials", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "bionics_data", value: 60, type: bonus.good },
          { key: "gas", value: 45, type: bonus.good },
          { key: "nutrition_research", value: 40, type: bonus.good },
          { key: "papercrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "electromagnets", value: 45, type: bonus.good },
          { key: "gas", value: 60, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "gas", value: 45, type: bonus.good },
          { key: "plastics", value: 60, type: bonus.good },
          { key: "papercrete", value: 40, type: bonus.good },
          { key: "translucent_concrete", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 35000 }],
        cost: [
          { key: "bionics_data", value: 45, type: bonus.good },
          { key: "electromagnets", value: 60, type: bonus.good },
          { key: "preservatives", value: 35, type: bonus.good },
          { key: "smart_materials", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "gas", value: 60, type: bonus.good },
          { key: "robots", value: 45, type: bonus.good },
          { key: "nutrition_research", value: 35, type: bonus.good },
          { key: "translucent_concrete", value: 40, type: bonus.good }
        ]
      }
    ]
  }
};
