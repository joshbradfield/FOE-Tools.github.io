const { bonus } = require("../bonus");

module.exports = {
  Havre: {
    key: "Havre",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [{ key: "basalt", value: 50, type: bonus.good }, { key: "tar", value: 25, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [{ key: "silk", value: 60, type: bonus.good }, { key: "coffee", value: 25, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [{ key: "brass", value: 60, type: bonus.good }, { key: "paper", value: 25, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [{ key: "gunpowder", value: 60, type: bonus.good }, { key: "wire", value: 25, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [{ key: "talc_powder", value: 60, type: bonus.good }, { key: "porcelain", value: 25, type: bonus.good }]
      }
    ]
  },
  Uxrow: {
    key: "Uxrow",
    reward: [{ type: "coin", value: 75000 }, { type: "supply", value: 25000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "paper", value: 20, type: bonus.good },
          { key: "wire", value: 15, type: bonus.good },
          { key: "whale_oil", value: 25, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "coffee", value: 20, type: bonus.good },
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "rubber", value: 20, type: bonus.good },
          { key: "textiles", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "paper", value: 20, type: bonus.good },
          { key: "tar", value: 15, type: bonus.good },
          { key: "coke", value: 25, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "wire", value: 20, type: bonus.good },
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "rubber", value: 20, type: bonus.good },
          { key: "whale_oil", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Gaelford: {
    key: "Gaelford",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "wire", value: 15, type: bonus.good },
          { key: "tar", value: 20, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "textiles", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "coffee", value: 20, type: bonus.good },
          { key: "tar", value: 15, type: bonus.good },
          { key: "coke", value: 25, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "tar", value: 20, type: bonus.good },
          { key: "rubber", value: 25, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "porcelain", value: 20, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good },
          { key: "fertilizer", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "porcelain", value: 20, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "wire", value: 20, type: bonus.good },
          { key: "rubber", value: 25, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Omoien: {
    key: "Omoien",
    reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "basalt", value: 25, type: bonus.good },
          { key: "porcelain", value: 30, type: bonus.good },
          { key: "coke", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "basalt", value: 25, type: bonus.good },
          { key: "paper", value: 30, type: bonus.good },
          { key: "textiles", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "silk", value: 25, type: bonus.good },
          { key: "paper", value: 30, type: bonus.good },
          { key: "rubber", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "brass", value: 25, type: bonus.good },
          { key: "coffee", value: 30, type: bonus.good },
          { key: "textiles", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "gunpowder", value: 25, type: bonus.good },
          { key: "coffee", value: 30, type: bonus.good },
          { key: "whale_oil", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "silk", value: 25, type: bonus.good },
          { key: "porcelain", value: 30, type: bonus.good },
          { key: "rubber", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "brass", value: 25, type: bonus.good },
          { key: "wire", value: 30, type: bonus.good },
          { key: "coke", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "talc_powder", value: 25, type: bonus.good },
          { key: "tar", value: 30, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "gunpowder", value: 25, type: bonus.good },
          { key: "tar", value: 30, type: bonus.good },
          { key: "whale_oil", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "talc_powder", value: 25, type: bonus.good },
          { key: "wire", value: 30, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Kriegreich: {
    key: "Kriegreich",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "basalt", value: 20, type: bonus.good },
          { key: "wire", value: 30, type: bonus.good },
          { key: "whale_oil", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "gunpowder", value: 20, type: bonus.good },
          { key: "porcelain", value: 30, type: bonus.good },
          { key: "textiles", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "silk", value: 25, type: bonus.good },
          { key: "tar", value: 30, type: bonus.good },
          { key: "coke", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "brass", value: 20, type: bonus.good },
          { key: "paper", value: 30, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "gunpowder", value: 20, type: bonus.good },
          { key: "coffee", value: 30, type: bonus.good },
          { key: "rubber", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "talc_powder", value: 20, type: bonus.good },
          { key: "porcelain", value: 30, type: bonus.good },
          { key: "textiles", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "basalt", value: 20, type: bonus.good },
          { key: "wire", value: 30, type: bonus.good },
          { key: "whale_oil", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "silk", value: 20, type: bonus.good },
          { key: "tar", value: 30, type: bonus.good },
          { key: "coke", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "talc_powder", value: 25, type: bonus.good },
          { key: "paper", value: 30, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "brass", value: 20, type: bonus.good },
          { key: "coffee", value: 30, type: bonus.good },
          { key: "rubber", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Sud: {
    key: "Sud",
    reward: [{ type: "coin", value: 125000 }, { type: "medal", value: 150 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "basalt", value: 40, type: bonus.good },
          { key: "wire", value: 20, type: bonus.good },
          { key: "coke", value: 25, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "silk", value: 45, type: bonus.good },
          { key: "tar", value: 20, type: bonus.good },
          { key: "whale_oil", value: 25, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "brass", value: 40, type: bonus.good },
          { key: "porcelain", value: 20, type: bonus.good },
          { key: "rubber", value: 25, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "gunpowder", value: 40, type: bonus.good },
          { key: "coffee", value: 20, type: bonus.good },
          { key: "textiles", value: 25, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "talc_powder", value: 45, type: bonus.good },
          { key: "paper", value: 20, type: bonus.good },
          { key: "fertilizer", value: 25, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 2500 }],
        cost: [
          { key: "brass", value: 40, type: bonus.good },
          { key: "porcelain", value: 20, type: bonus.good },
          { key: "textiles", value: 25, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "basalt", value: 40, type: bonus.good },
          { key: "wire", value: 20, type: bonus.good },
          { key: "fertilizer", value: 25, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Ostrand: {
    key: "Ostrand",
    reward: [{ type: "coin", value: 90000 }, { type: "supply", value: 50000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "silk", value: 20, type: bonus.good },
          { key: "coffee", value: 30, type: bonus.good },
          { key: "textiles", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "basalt", value: 20, type: bonus.good },
          { key: "paper", value: 30, type: bonus.good },
          { key: "rubber", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "brass", value: 20, type: bonus.good },
          { key: "porcelain", value: 30, type: bonus.good },
          { key: "whale_oil", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "gunpowder", value: 20, type: bonus.good },
          { key: "wire", value: 30, type: bonus.good },
          { key: "coke", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "talc_powder", value: 20, type: bonus.good },
          { key: "tar", value: 30, type: bonus.good },
          { key: "fertilizer", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "gunpowder", value: 20, type: bonus.good },
          { key: "tar", value: 30, type: bonus.good },
          { key: "coke", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Langenreich: {
    key: "Langenreich",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "rubber", value: 30, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "wire", value: 15, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "tar", value: 15, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Uceria: {
    key: "Uceria",
    reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "rubber", value: 30, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "tar", value: 15, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "wire", value: 15, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Gorski: {
    key: "Gorski",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "wire", value: 15, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "wire", value: 15, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "tar", value: 15, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "tar", value: 15, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "wire", value: 15, type: bonus.good },
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "tar", value: 15, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "tar", value: 15, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "coffee", value: 15, type: bonus.good },
          { key: "tar", value: 15, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 7000 }],
        cost: [
          { key: "paper", value: 15, type: bonus.good },
          { key: "wire", value: 15, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "wire", value: 15, type: bonus.good },
          { key: "porcelain", value: 15, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      }
    ]
  }
};
