const { bonus } = require("../bonus");

module.exports = {
  Natsuishu: {
    key: "Natsuishu",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "paper", value: 40, type: bonus.good },
          { key: "porcelain", value: 20, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "whale_oil", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "coffee", value: 40, type: bonus.good },
          { key: "tar", value: 20, type: bonus.good },
          { key: "rubber", value: 50, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "coffee", value: 20, type: bonus.good },
          { key: "wire", value: 40, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "paper", value: 20, type: bonus.good },
          { key: "tar", value: 40, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "wire", value: 20, type: bonus.good },
          { key: "porcelain", value: 40, type: bonus.good },
          { key: "rubber", value: 60, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "coffee", value: 20, type: bonus.good },
          { key: "porcelain", value: 40, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "wire", value: 40, type: bonus.good },
          { key: "tar", value: 20, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "paper", value: 20, type: bonus.good },
          { key: "porcelain", value: 40, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "porcelain", value: 20, type: bonus.good },
          { key: "tar", value: 40, type: bonus.good },
          { key: "rubber", value: 50, type: bonus.good },
          { key: "whale_oil", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "paper", value: 40, type: bonus.good },
          { key: "wire", value: 20, type: bonus.good },
          { key: "rubber", value: 60, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "paper", value: 20, type: bonus.good },
          { key: "coffee", value: 40, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Inashu: {
    key: "Inashu",
    reward: [{ type: "coin", value: 75000 }, { type: "supply", value: 75000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "coffee", value: 25, type: bonus.good },
          { key: "rubber", value: 60, type: bonus.good },
          { key: "whale_oil", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "tar", value: 20, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good },
          { key: "fertilizer", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "paper", value: 25, type: bonus.good },
          { key: "rubber", value: 45, type: bonus.good },
          { key: "whale_oil", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "wire", value: 25, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "fertilizer", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Chigikawa: {
    key: "Chigikawa",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 65, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "machine_parts", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "coke", value: 65, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "gasoline", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "textiles", value: 65, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "coke", value: 65, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "fertilizer", value: 65, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 65, type: bonus.good },
          { key: "machine_parts", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "whale_oil", value: 65, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "gasoline", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 65, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "whale_oil", value: 65, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "textiles", value: 65, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "whale_oil", value: 65, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "machine_parts", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 65, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "fertilizer", value: 65, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Igujima: {
    key: "Igujima",
    reward: [{ type: "good_bonus", age: "BronzeAge" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "coke", value: 45, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "coke", value: 30, type: bonus.good },
          { key: "whale_oil", value: 45, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "textiles", value: 45, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 45, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good },
          { key: "asbestos", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "textiles", value: 50, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 45, type: bonus.good },
          { key: "gasoline", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "textiles", value: 45, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "fertilizer", value: 45, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 45, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "coke", value: 45, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "gasoline", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Kyushima: {
    key: "Kyushima",
    reward: [{ type: bonus.good, age: "ColonialAge", value: 25 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "porcelain", value: 30, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good },
          { key: "ferroconcrete", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "tar", value: 30, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "flavorants", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "tar", value: 30, type: bonus.good },
          { key: "rubber", value: 60, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "flavorants", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "paper", value: 30, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "tinplate", value: 60, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "coffee", value: 30, type: bonus.good },
          { key: "rubber", value: 40, type: bonus.good },
          { key: "whale_oil", value: 60, type: bonus.good },
          { key: "luxury_materials", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "coffee", value: 30, type: bonus.good },
          { key: "rubber", value: 40, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good },
          { key: "ferroconcrete", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "wire", value: 30, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "convenience_food", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "porcelain", value: 30, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good },
          { key: "convenience_food", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "paper", value: 30, type: bonus.good },
          { key: "rubber", value: 60, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "wire", value: 30, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "luxury_materials", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Igioka: {
    key: "Igioka",
    reward: [{ type: "coin", value: 115000 }, { type: "supply", value: 115000 }, { type: "medal", value: 250 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "whale_oil", value: 60, type: bonus.good },
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "flavorants", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "textiles", value: 60, type: bonus.good },
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "convenience_food", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 60, type: bonus.good },
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "flavorants", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "coke", value: 60, type: bonus.good },
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "coke", value: 60, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "packaging", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "textiles", value: 60, type: bonus.good },
          { key: "gasoline", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Igamoto: {
    key: "Igamoto",
    reward: [{ type: "good_bonus", age: "ColonialAge" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "whale_oil", value: 35, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good },
          { key: "machine_parts", value: 45, type: bonus.good },
          { key: "flavorants", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "coke", value: 50, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good },
          { key: "machine_parts", value: 45, type: bonus.good },
          { key: "convenience_food", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "coke", value: 35, type: bonus.good },
          { key: "asbestos", value: 45, type: bonus.good },
          { key: "luxury_materials", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "coke", value: 35, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "asbestos", value: 45, type: bonus.good },
          { key: "packaging", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "textiles", value: 35, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good },
          { key: "machine_parts", value: 45, type: bonus.good },
          { key: "packaging", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good },
          { key: "explosives", value: 45, type: bonus.good },
          { key: "flavorants", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 35, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good },
          { key: "gasoline", value: 45, type: bonus.good },
          { key: "convenience_food", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "coke", value: 50, type: bonus.good },
          { key: "whale_oil", value: 35, type: bonus.good },
          { key: "tinplate", value: 45, type: bonus.good },
          { key: "luxury_materials", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Higematsu: {
    key: "Higematsu",
    reward: [{ type: "coin", value: 125000 }, { type: "supply", value: 125000 }, { type: "medal", value: 250 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "gasoline", value: 50, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Kibakuguchi: {
    key: "Kibakuguchi",
    reward: [{ type: "coin", value: 135000 }, { type: "supply", value: 135000 }, { type: "medal", value: 250 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 25, type: bonus.good },
          { key: "tinplate", value: 55, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good },
          { key: "luxury_materials", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "fertilizer", value: 25, type: bonus.good },
          { key: "gasoline", value: 55, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "ferroconcrete", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "whale_oil", value: 25, type: bonus.good },
          { key: "asbestos", value: 55, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good },
          { key: "convenience_food", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "textiles", value: 25, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "explosives", value: 55, type: bonus.good },
          { key: "packaging", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "textiles", value: 25, type: bonus.good },
          { key: "machine_parts", value: 30, type: bonus.good },
          { key: "tinplate", value: 55, type: bonus.good },
          { key: "luxury_materials", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "textiles", value: 25, type: bonus.good },
          { key: "gasoline", value: 30, type: bonus.good },
          { key: "machine_parts", value: 55, type: bonus.good },
          { key: "flavorants", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "rubber", value: 25, type: bonus.good },
          { key: "asbestos", value: 55, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "packaging", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "whale_oil", value: 25, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good },
          { key: "gasoline", value: 55, type: bonus.good },
          { key: "ferroconcrete", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Toimuro: {
    key: "Toimuro",
    reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 150000 }, { type: "diamond", value: 200 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "gasoline", value: 35, type: bonus.good },
          { key: "tinplate", value: 55, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "packaging", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "machine_parts", value: 55, type: bonus.good },
          { key: "explosives", value: 35, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "luxury_materials", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "machine_parts", value: 55, type: bonus.good },
          { key: "tinplate", value: 35, type: bonus.good },
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "gasoline", value: 55, type: bonus.good },
          { key: "machine_parts", value: 35, type: bonus.good },
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "asbestos", value: 35, type: bonus.good },
          { key: "tinplate", value: 55, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "luxury_materials", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "asbestos", value: 55, type: bonus.good },
          { key: "machine_parts", value: 35, type: bonus.good },
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "tinplate", value: 35, type: bonus.good },
          { key: "explosives", value: 55, type: bonus.good },
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "asbestos", value: 35, type: bonus.good },
          { key: "gasoline", value: 55, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "convenience_food", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "asbestos", value: 55, type: bonus.good },
          { key: "explosives", value: 35, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "flavorants", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "gasoline", value: 35, type: bonus.good },
          { key: "explosives", value: 55, type: bonus.good },
          { key: "packaging", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Hiromaguchi: {
    key: "Hiromaguchi",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good },
          { key: "luxury_materials", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "flavorants", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "luxury_materials", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "gasoline", value: 50, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good },
          { key: "ferroconcrete", value: 20, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "gasoline", value: 50, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good },
          { key: "flavorants", value: 20, type: bonus.good },
          { key: "luxury_materials", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "tinplate", value: 20, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "flavorants", value: 20, type: bonus.good }
        ]
      }
    ]
  }
};
