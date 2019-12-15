const { bonus } = require("../bonus");

module.exports = {
  Okahe: {
    key: "Okahe",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 100 }],
        cost: [
          { key: "salt", value: 42, type: bonus.good },
          { key: "gunpowder", value: 50, type: bonus.good },
          { key: "tar", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100 }],
        cost: [
          { key: "glass", value: 42, type: bonus.good },
          { key: "talc_powder", value: 50, type: bonus.good },
          { key: "paper", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100 }],
        cost: [
          { key: "rope", value: 42, type: bonus.good },
          { key: "talc_powder", value: 50, type: bonus.good },
          { key: "wire", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100 }],
        cost: [
          { key: "dried_herbs", value: 42, type: bonus.good },
          { key: "gunpowder", value: 50, type: bonus.good },
          { key: "tar", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 100 }],
        cost: [
          { key: "rope", value: 42, type: bonus.good },
          { key: "gunpowder", value: 50, type: bonus.good },
          { key: "wire", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 100 }],
        cost: [
          { key: "glass", value: 42, type: bonus.good },
          { key: "gunpowder", value: 50, type: bonus.good },
          { key: "paper", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  NewCragshire: {
    key: "NewCragshire",
    reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "brick", value: 32, type: bonus.good },
          { key: "brass", value: 35, type: bonus.good },
          { key: "porcelain", value: 50, type: bonus.good },
          { key: "tar", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "salt", value: 32, type: bonus.good },
          { key: "brass", value: 35, type: bonus.good },
          { key: "paper", value: 60, type: bonus.good },
          { key: "coffee", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "dried_herbs", value: 32, type: bonus.good },
          { key: "silk", value: 35, type: bonus.good },
          { key: "paper", value: 60, type: bonus.good },
          { key: "porcelain", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "brick", value: 32, type: bonus.good },
          { key: "silk", value: 35, type: bonus.good },
          { key: "coffee", value: 50, type: bonus.good },
          { key: "porcelain", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Rantford: {
    key: "Rantford",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "brass", value: 47, type: bonus.good },
          { key: "coffee", value: 35, type: bonus.good },
          { key: "tar", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "silk", value: 47, type: bonus.good },
          { key: "wire", value: 55, type: bonus.good },
          { key: "porcelain", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "talc_powder", value: 47, type: bonus.good },
          { key: "coffee", value: 55, type: bonus.good },
          { key: "wire", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "basalt", value: 47, type: bonus.good },
          { key: "paper", value: 35, type: bonus.good },
          { key: "porcelain", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "talc_powder", value: 47, type: bonus.good },
          { key: "paper", value: 55, type: bonus.good },
          { key: "tar", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "silk", value: 47, type: bonus.good },
          { key: "wire", value: 55, type: bonus.good },
          { key: "tar", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Desperation: {
    key: "Desperation",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "dried_herbs", value: 32, type: bonus.good },
          { key: "silk", value: 35, type: bonus.good },
          { key: "coffee", value: 50, type: bonus.good },
          { key: "wire", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "dried_herbs", value: 32, type: bonus.good },
          { key: "basalt", value: 35, type: bonus.good },
          { key: "porcelain", value: 50, type: bonus.good },
          { key: "tar", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "rope", value: 42, type: bonus.good },
          { key: "gunpowder", value: 32, type: bonus.good },
          { key: "paper", value: 47, type: bonus.good },
          { key: "tar", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "glass", value: 22, type: bonus.good },
          { key: "basalt", value: 40, type: bonus.good },
          { key: "wire", value: 50, type: bonus.good },
          { key: "porcelain", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "salt", value: 42, type: bonus.good },
          { key: "talc_powder", value: 35, type: bonus.good },
          { key: "coffee", value: 60, type: bonus.good },
          { key: "tar", value: 47, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "brick", value: 32, type: bonus.good },
          { key: "brass", value: 35, type: bonus.good },
          { key: "paper", value: 60, type: bonus.good },
          { key: "coffee", value: 50, type: bonus.good }
        ]
      }
    ]
  },
  Las_Penas: {
    key: "Las_Penas",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "gunpowder", value: 47, type: bonus.good },
          { key: "porcelain", value: 60, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "talc_powder", value: 47, type: bonus.good },
          { key: "coffee", value: 60, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "brass", value: 47, type: bonus.good },
          { key: "wire", value: 60, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "basalt", value: 47, type: bonus.good },
          { key: "porcelain", value: 60, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "brass", value: 47, type: bonus.good },
          { key: "tar", value: 60, type: bonus.good },
          { key: "rubber", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "basalt", value: 47, type: bonus.good },
          { key: "wire", value: 60, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  DragonCity: {
    key: "DragonCity",
    reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [{ key: "wire", value: 85, type: bonus.good }, { key: "rubber", value: 65, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [{ key: "tar", value: 85, type: bonus.good }, { key: "coke", value: 65, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [{ key: "coffee", value: 85, type: bonus.good }, { key: "whale_oil", value: 65, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [{ key: "porcelain", value: 85, type: bonus.good }, { key: "textiles", value: 65, type: bonus.good }]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [{ key: "coffee", value: 85, type: bonus.good }, { key: "coke", value: 65, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [{ key: "paper", value: 85, type: bonus.good }, { key: "fertilizer", value: 65, type: bonus.good }]
      }
    ]
  },
  Garrincton: {
    key: "Garrincton",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "paper", value: 55, type: bonus.good },
          { key: "wire", value: 48, type: bonus.good },
          { key: "rubber", value: 30, type: bonus.good },
          { key: "fertilizer", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "coffee", value: 55, type: bonus.good },
          { key: "porcelain", value: 48, type: bonus.good },
          { key: "whale_oil", value: 25, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "paper", value: 48, type: bonus.good },
          { key: "porcelain", value: 55, type: bonus.good },
          { key: "coke", value: 25, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "porcelain", value: 55, type: bonus.good },
          { key: "tar", value: 48, type: bonus.good },
          { key: "rubber", value: 25, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "wire", value: 55, type: bonus.good },
          { key: "tar", value: 48, type: bonus.good },
          { key: "rubber", value: 30, type: bonus.good },
          { key: "whale_oil", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "paper", value: 55, type: bonus.good },
          { key: "coffee", value: 48, type: bonus.good },
          { key: "textiles", value: 25, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  St_Marque: {
    key: "St_Marque",
    reward: [{ type: "coin", value: 40000 }, { type: "supply", value: 40000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "basalt", value: 45, type: bonus.good },
          { key: "wire", value: 43, type: bonus.good },
          { key: "rubber", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "talc_powder", value: 45, type: bonus.good },
          { key: "tar", value: 43, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "brass", value: 45, type: bonus.good },
          { key: "porcelain", value: 43, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "silk", value: 45, type: bonus.good },
          { key: "coffee", value: 43, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "basalt", value: 45, type: bonus.good },
          { key: "paper", value: 43, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  Embruniez: {
    key: "Embruniez",
    reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }, { type: "medal", value: 150 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good },
          { key: "whale_oil", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "textiles", value: 10, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "rubber", value: 10, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 10, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "textiles", value: 10, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good },
          { key: "whale_oil", value: 10, type: bonus.good }
        ]
      }
    ]
  },
  Gabordeaux: {
    key: "Gabordeaux",
    reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }, { type: "medal", value: 150 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "coke", value: 20, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  Ydine: {
    key: "Ydine",
    reward: [{ type: "coin", value: 100000 }, { type: "supply", value: 100000 }, { type: "medal", value: 200 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "whale_oil", value: 60, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "coke", value: 50, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "rubber", value: 60, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "rubber", value: 60, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "coke", value: 50, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  Wenoevre: {
    key: "Wenoevre",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "coke", value: 70, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 70, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "rubber", value: 60, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "fertilizer", value: 70, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "whale_oil", value: 70, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "textiles", value: 70, type: bonus.good },
          { key: "whale_oil", value: 60, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "coke", value: 70, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "rubber", value: 70, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 60, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "fertilizer", value: 70, type: bonus.good }
        ]
      }
    ]
  },
  Nevarrone: {
    key: "Nevarrone",
    reward: [{ type: "coin", value: 50000 }, { type: "supply", value: 50000 }, { type: "medal", value: 100 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 60, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 60, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "rubber", value: 60, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 60, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 4000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "coke", value: 60, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 4000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "fertilizer", value: 60, type: bonus.good }
        ]
      }
    ]
  },
  SantaCatalina: {
    key: "SantaCatalina",
    reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }, { type: "medal", value: 100 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 10, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "rubber", value: 10, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "coke", value: 10, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 10, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 5000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good },
          { key: "fertilizer", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 10, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "rubber", value: 10, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 5000 }],
        cost: [
          { key: "coke", value: 10, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  Dorango: {
    key: "Dorango",
    reward: [{ type: "coin", value: 70000 }, { type: "supply", value: 70000 }, { type: "medal", value: 100 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 50, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "rubber", value: 50, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 6000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 50, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 6000 }],
        cost: [
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 50, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  ElFuego: {
    key: "ElFuego",
    reward: [
      { type: "coin", value: 80000 },
      { type: "supply", value: 80000 },
      { type: "medal", value: 150 },
      { type: "diamond", value: 150 }
    ],
    sectors: [
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "whale_oil", value: 10, type: bonus.good },
          { key: "fertilizer", value: 5, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 15000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 10, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 5, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "rubber", value: 10, type: bonus.good },
          { key: "coke", value: 5, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "rubber", value: 5, type: bonus.good },
          { key: "textiles", value: 10, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "fertilizer", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 15000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 20, type: bonus.good },
          { key: "whale_oil", value: 10, type: bonus.good },
          { key: "fertilizer", value: 5, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 5, type: bonus.good },
          { key: "whale_oil", value: 20, type: bonus.good },
          { key: "fertilizer", value: 10, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 15000 }],
        cost: [
          { key: "rubber", value: 20, type: bonus.good },
          { key: "coke", value: 10, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "whale_oil", value: 5, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 15000 }],
        cost: [
          { key: "rubber", value: 10, type: bonus.good },
          { key: "coke", value: 5, type: bonus.good },
          { key: "textiles", value: 20, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good }
        ]
      }
    ]
  }
};
