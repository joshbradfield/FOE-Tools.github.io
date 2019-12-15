const { bonus } = require("../bonus");

module.exports = {
  Narcien: {
    key: "Narcien",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 1000 }],
        cost: [
          { key: "copper", value: 40, type: bonus.good },
          { key: "brick", value: 35, type: bonus.good },
          { key: "silk", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 1000 }],
        cost: [
          { key: "honey", value: 40, type: bonus.good },
          { key: "rope", value: 35, type: bonus.good },
          { key: "brass", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "alabaster", value: 40, type: bonus.good },
          { key: "glass", value: 35, type: bonus.good },
          { key: "talc_powder", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 1000 }],
        cost: [
          { key: "granite", value: 40, type: bonus.good },
          { key: "glass", value: 35, type: bonus.good },
          { key: "brass", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 1000 }],
        cost: [
          { key: "gold", value: 60, type: bonus.good },
          { key: "dried_herbs", value: 35, type: bonus.good },
          { key: "talc_powder", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  Lavignon: {
    key: "Lavignon",
    reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "granite", value: 50, type: bonus.good },
          { key: "rope", value: 45, type: bonus.good },
          { key: "talc_powder", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "honey", value: 50, type: bonus.good },
          { key: "brick", value: 45, type: bonus.good },
          { key: "brass", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "copper", value: 50, type: bonus.good },
          { key: "glass", value: 45, type: bonus.good },
          { key: "silk", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "alabaster", value: 50, type: bonus.good },
          { key: "salt", value: 45, type: bonus.good },
          { key: "gunpowder", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Troulope: {
    key: "Troulope",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "copper", value: 55, type: bonus.good },
          { key: "dried_herbs", value: 50, type: bonus.good },
          { key: "basalt", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "alabaster", value: 55, type: bonus.good },
          { key: "salt", value: 50, type: bonus.good },
          { key: "gunpowder", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "honey", value: 55, type: bonus.good },
          { key: "brick", value: 50, type: bonus.good },
          { key: "gunpowder", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "gold", value: 60, type: bonus.good },
          { key: "rope", value: 50, type: bonus.good },
          { key: "silk", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 1500 }],
        cost: [
          { key: "granite", value: 55, type: bonus.good },
          { key: "dried_herbs", value: 50, type: bonus.good },
          { key: "basalt", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 1500 }],
        cost: [
          { key: "gold", value: 75, type: bonus.good },
          { key: "salt", value: 60, type: bonus.good },
          { key: "basalt", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  Deuxerres: {
    key: "Deuxerres",
    reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "glass", value: 4, type: bonus.good },
          { key: "silk", value: 35, type: bonus.good },
          { key: "tar", value: 22, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "brick", value: 40, type: bonus.good },
          { key: "brass", value: 35, type: bonus.good },
          { key: "porcelain", value: 22, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "rope", value: 40, type: bonus.good },
          { key: "talc_powder", value: 35, type: bonus.good },
          { key: "tar", value: 22, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "salt", value: 40, type: bonus.good },
          { key: "gunpowder", value: 35, type: bonus.good },
          { key: "wire", value: 22, type: bonus.good }
        ]
      }
    ]
  },
  Lombardeaux: {
    key: "Lombardeaux",
    reward: [{ type: "good_bonus" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "alabaster", value: 50, type: bonus.good },
          { key: "dried_herbs", value: 40, type: bonus.good },
          { key: "basalt", value: 35, type: bonus.good },
          { key: "wire", value: 28, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "copper", value: 50, type: bonus.good },
          { key: "glass", value: 40, type: bonus.good },
          { key: "silk", value: 35, type: bonus.good },
          { key: "tar", value: 28, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "honey", value: 50, type: bonus.good },
          { key: "brick", value: 40, type: bonus.good },
          { key: "brass", value: 35, type: bonus.good },
          { key: "porcelain", value: 28, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "granite", value: 50, type: bonus.good },
          { key: "rope", value: 40, type: bonus.good },
          { key: "talc_powder", value: 35, type: bonus.good },
          { key: "porcelain", value: 28, type: bonus.good }
        ]
      }
    ]
  },
  Varseille: {
    key: "Varseille",
    reward: [{ type: "coin", value: 20000 }, { type: "supply", value: 20000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "salt", value: 28, type: bonus.good },
          { key: "brass", value: 22, type: bonus.good },
          { key: "paper", value: 42, type: bonus.good },
          { key: "wire", value: 22, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "glass", value: 28, type: bonus.good },
          { key: "gunpowder", value: 22, type: bonus.good },
          { key: "coffee", value: 42, type: bonus.good },
          { key: "porcelain", value: 22, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "brick", value: 28, type: bonus.good },
          { key: "silk", value: 22, type: bonus.good },
          { key: "porcelain", value: 42, type: bonus.good },
          { key: "tar", value: 22, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "salt", value: 28, type: bonus.good },
          { key: "brass", value: 22, type: bonus.good },
          { key: "paper", value: 22, type: bonus.good },
          { key: "wire", value: 42, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "rope", value: 28, type: bonus.good },
          { key: "basalt", value: 22, type: bonus.good },
          { key: "paper", value: 42, type: bonus.good },
          { key: "coffee", value: 22, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "dried_herbs", value: 28, type: bonus.good },
          { key: "talc_powder", value: 22, type: bonus.good },
          { key: "coffee", value: 42, type: bonus.good },
          { key: "tar", value: 22, type: bonus.good }
        ]
      }
    ]
  },
  Pisterrac: {
    key: "Pisterrac",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "basalt", value: 22, type: bonus.good },
          { key: "brass", value: 22, type: bonus.good },
          { key: "coffee", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "silk", value: 22, type: bonus.good },
          { key: "gunpowder", value: 22, type: bonus.good },
          { key: "wire", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "basalt", value: 22, type: bonus.good },
          { key: "silk", value: 22, type: bonus.good },
          { key: "paper", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "basalt", value: 22, type: bonus.good },
          { key: "gunpowder", value: 22, type: bonus.good },
          { key: "tar", value: 35, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "talc_powder", value: 22, type: bonus.good },
          { key: "gunpowder", value: 22, type: bonus.good },
          { key: "porcelain", value: 35, type: bonus.good }
        ]
      }
    ]
  },
  Haulenois: {
    key: "Haulenois",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "salt", value: 28, type: bonus.good },
          { key: "brass", value: 28, type: bonus.good },
          { key: "paper", value: 50, type: bonus.good },
          { key: "wire", value: 28, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "rope", value: 28, type: bonus.good },
          { key: "talc_powder", value: 28, type: bonus.good },
          { key: "paper", value: 50, type: bonus.good },
          { key: "porcelain", value: 28, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "glass", value: 28, type: bonus.good },
          { key: "basalt", value: 28, type: bonus.good },
          { key: "coffee", value: 50, type: bonus.good },
          { key: "wire", value: 28, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "glass", value: 28, type: bonus.good },
          { key: "gunpowder", value: 28, type: bonus.good },
          { key: "wire", value: 50, type: bonus.good },
          { key: "tar", value: 28, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 3500 }],
        cost: [
          { key: "brick", value: 28, type: bonus.good },
          { key: "silk", value: 28, type: bonus.good },
          { key: "paper", value: 28, type: bonus.good },
          { key: "coffee", value: 50, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 3500 }],
        cost: [
          { key: "dried_herbs", value: 28, type: bonus.good },
          { key: "talc_powder", value: 28, type: bonus.good },
          { key: "coffee", value: 28, type: bonus.good },
          { key: "tar", value: 50, type: bonus.good }
        ]
      }
    ]
  }
};
