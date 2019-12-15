const { bonus } = require("../bonus");

module.exports = {
  Amaryah_City: {
    key: "Amaryah_City",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "explosives", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "explosives", value: 50, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 25000 }],
        cost: [
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "electromagnets", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Khail: {
    key: "Khail",
    reward: [{ type: "good_bonus", age: "EarlyMiddleAges" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "gasoline", value: 50, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "electromagnets", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "gasoline", value: 60, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 30000 }],
        cost: [
          { key: "explosives", value: 50, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Batif: {
    key: "Batif",
    reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "explosives", value: 50, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "gasoline", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "electromagnets", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 40000 }],
        cost: [
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "electromagnets", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Hafar_Al_Karak: {
    key: "Hafar_Al_Karak",
    reward: [{ type: "coin", value: 35000 }, { type: "supply", value: 35000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "gasoline", value: 75, type: bonus.good },
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "asbestos", value: 75, type: bonus.good },
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "tinplate", value: 75, type: bonus.good },
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      { reward: [{ type: "coin", value: 50000 }], cost: [] },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "asbestos", value: 75, type: bonus.good },
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "gasoline", value: 75, type: bonus.good },
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "machine_parts", value: 75, type: bonus.good },
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 50000 }],
        cost: [
          { key: "explosives", value: 75, type: bonus.good },
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Salfah: {
    key: "Salfah",
    reward: [{ type: "good_bonus", age: "ProgressiveEra" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "cloth", value: 35, type: bonus.good },
          { key: "whale_oil", value: 35, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "genome_data", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "iron", value: 35, type: bonus.good },
          { key: "coke", value: 35, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good },
          { key: "steel", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "jewelry", value: 35, type: bonus.good },
          { key: "rubber", value: 35, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good },
          { key: "semiconductors", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "ebony", value: 35, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "cloth", value: 35, type: bonus.good },
          { key: "whale_oil", value: 35, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good },
          { key: "genome_data", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "ebony", value: 35, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 25000 }],
        cost: [
          { key: "limestone", value: 35, type: bonus.good },
          { key: "textiles", value: 35, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Al_Shadyra: {
    key: "Al_Shadyra",
    reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "stone", value: 30, type: bonus.good },
          { key: "wire", value: 30, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good },
          { key: "ferroconcrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "lumber", value: 30, type: bonus.good },
          { key: "paper", value: 30, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "packaging", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "dye", value: 30, type: bonus.good },
          { key: "tar", value: 30, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "flavorants", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "marble", value: 30, type: bonus.good },
          { key: "porcelain", value: 30, type: bonus.good },
          { key: "machine_parts", value: 30, type: bonus.good },
          { key: "ferroconcrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "wine", value: 30, type: bonus.good },
          { key: "coffee", value: 30, type: bonus.good },
          { key: "gasoline", value: 30, type: bonus.good },
          { key: "convenience_food", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "lumber", value: 30, type: bonus.good },
          { key: "paper", value: 30, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good },
          { key: "packaging", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Ain_Al_Khansa: {
    key: "Ain_Al_Khansa",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "gold", value: 40, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "renewable_resources", value: 50, type: bonus.good },
          { key: "robots", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "honey", value: 40, type: bonus.good },
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "semiconductors", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "alabaster", value: 40, type: bonus.good },
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "steel", value: 50, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "copper", value: 40, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 50, type: bonus.good },
          { key: "electromagnets", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "granite", value: 40, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good },
          { key: "steel", value: 50, type: bonus.good },
          { key: "gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "alabaster", value: 40, type: bonus.good },
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "genome_data", value: 50, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "granite", value: 40, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 50, type: bonus.good },
          { key: "gas", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 30000 }],
        cost: [
          { key: "gold", value: 40, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "semiconductors", value: 50, type: bonus.good },
          { key: "robots", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Suqqah: {
    key: "Suqqah",
    reward: [{ type: "supply", value: 1000000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "glass", value: 45, type: bonus.good },
          { key: "silk", value: 45, type: bonus.good },
          { key: "ferroconcrete", value: 45, type: bonus.good },
          { key: "electromagnets", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "rope", value: 45, type: bonus.good },
          { key: "brass", value: 45, type: bonus.good },
          { key: "packaging", value: 45, type: bonus.good },
          { key: "plastics", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "salt", value: 45, type: bonus.good },
          { key: "basalt", value: 45, type: bonus.good },
          { key: "flavorants", value: 45, type: bonus.good },
          { key: "robots", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "dried_herbs", value: 45, type: bonus.good },
          { key: "silk", value: 45, type: bonus.good },
          { key: "convenience_food", value: 45, type: bonus.good },
          { key: "electromagnets", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "brick", value: 45, type: bonus.good },
          { key: "gunpowder", value: 45, type: bonus.good },
          { key: "luxury_materials", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 35000 }],
        cost: [
          { key: "dried_herbs", value: 45, type: bonus.good },
          { key: "talc_powder", value: 45, type: bonus.good },
          { key: "convenience_food", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Shayhour: {
    key: "Shayhour",
    reward: [{ type: "coin", value: 250000 }, { type: "supply", value: 250000 }, { type: "medal", value: 400 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "steel", value: 30, type: bonus.good },
          { key: "semiconductors", value: 35, type: bonus.good },
          { key: "electromagnets", value: 20, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "industrial_filters", value: 35, type: bonus.good },
          { key: "plastics", value: 20, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 35, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good },
          { key: "electromagnets", value: 20, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 30, type: bonus.good },
          { key: "steel", value: 35, type: bonus.good },
          { key: "electromagnets", value: 25, type: bonus.good },
          { key: "gas", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 35, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good },
          { key: "electromagnets", value: 20, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "industrial_filters", value: 30, type: bonus.good },
          { key: "genome_data", value: 35, type: bonus.good },
          { key: "robots", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "steel", value: 30, type: bonus.good },
          { key: "genome_data", value: 35, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Kardad: {
    key: "Kardad",
    reward: [{ type: bonus.good, age: "ContemporaryEra", value: 20 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 35, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "steel", value: 35, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "semiconductors", value: 35, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "steel", value: 40, type: bonus.good },
          { key: "semiconductors", value: 35, type: bonus.good },
          { key: "plastics", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "steel", value: 40, type: bonus.good },
          { key: "genome_data", value: 35, type: bonus.good },
          { key: "electromagnets", value: 25, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "industrial_filters", value: 35, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "robots", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "industrial_filters", value: 35, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 35, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "gas", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Qumeira: {
    key: "Qumeira",
    reward: [{ type: "diamond", value: 150 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "steel", value: 40, type: bonus.good },
          { key: "genome_data", value: 45, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "steel", value: 40, type: bonus.good },
          { key: "semiconductors", value: 45, type: bonus.good },
          { key: "electromagnets", value: 30, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "semiconductors", value: 45, type: bonus.good },
          { key: "plastics", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 40, type: bonus.good },
          { key: "steel", value: 45, type: bonus.good },
          { key: "gas", value: 30, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 45, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "industrial_filters", value: 45, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "semiconductors", value: 40, type: bonus.good },
          { key: "genome_data", value: 45, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "robots", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Jandahar: {
    key: "Jandahar",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "steel", value: 50, type: bonus.good },
          { key: "semiconductors", value: 45, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 50, type: bonus.good },
          { key: "steel", value: 45, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "industrial_filters", value: 45, type: bonus.good },
          { key: "genome_data", value: 50, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 50, type: bonus.good },
          { key: "genome_data", value: 45, type: bonus.good },
          { key: "gas", value: 40, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 45, type: bonus.good },
          { key: "semiconductors", value: 50, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 45, type: bonus.good },
          { key: "semiconductors", value: 50, type: bonus.good },
          { key: "electromagnets", value: 35, type: bonus.good },
          { key: "robots", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "renewable_resources", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 45, type: bonus.good },
          { key: "gas", value: 35, type: bonus.good },
          { key: "plastics", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "industrial_filters", value: 50, type: bonus.good },
          { key: "genome_data", value: 45, type: bonus.good },
          { key: "electromagnets", value: 40, type: bonus.good },
          { key: "plastics", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "steel", value: 45, type: bonus.good },
          { key: "genome_data", value: 50, type: bonus.good },
          { key: "gas", value: 40, type: bonus.good },
          { key: "robots", value: 35, type: bonus.good }
        ]
      }
    ]
  }
};
