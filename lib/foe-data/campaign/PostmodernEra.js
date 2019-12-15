const { bonus } = require("../bonus");

module.exports = {
  CaiChetNui: {
    key: "CaiChetNui",
    reward: [{ type: "pvp_tower" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "fertilizer", value: 25, type: bonus.good },
          { key: "explosives", value: 25, type: bonus.good },
          { key: "luxury_materials", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "textiles", value: 25, type: bonus.good },
          { key: "asbestos", value: 25, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "whale_oil", value: 25, type: bonus.good },
          { key: "asbestos", value: 25, type: bonus.good },
          { key: "flavorants", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "whale_oil", value: 25, type: bonus.good },
          { key: "machine_parts", value: 25, type: bonus.good },
          { key: "ferroconcrete", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "fertilizer", value: 25, type: bonus.good },
          { key: "gasoline", value: 25, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "coke", value: 25, type: bonus.good },
          { key: "machine_parts", value: 25, type: bonus.good },
          { key: "ferroconcrete", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "textiles", value: 25, type: bonus.good },
          { key: "tinplate", value: 25, type: bonus.good },
          { key: "convenience_food", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  SotDamLay: {
    key: "SotDamLay",
    reward: [{ type: "coin", value: 150000 }, { type: "supply", value: 150000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 12000 }],
        cost: [
          { key: "coke", value: 30, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "asbestos", value: 25, type: bonus.good },
          { key: "ferroconcrete", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "coke", value: 30, type: bonus.good },
          { key: "gasoline", value: 25, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "explosives", value: 25, type: bonus.good },
          { key: "luxury_materials", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12000 }],
        cost: [
          { key: "rubber", value: 30, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "machine_parts", value: 25, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12000 }],
        cost: [
          { key: "textiles", value: 30, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good },
          { key: "machine_parts", value: 25, type: bonus.good },
          { key: "ferroconcrete", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12000 }],
        cost: [
          { key: "coke", value: 30, type: bonus.good },
          { key: "textiles", value: 30, type: bonus.good },
          { key: "gasoline", value: 25, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12000 }],
        cost: [
          { key: "textiles", value: 30, type: bonus.good },
          { key: "fertilizer", value: 30, type: bonus.good },
          { key: "asbestos", value: 25, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12000 }],
        cost: [
          { key: "coke", value: 30, type: bonus.good },
          { key: "whale_oil", value: 30, type: bonus.good },
          { key: "tinplate", value: 25, type: bonus.good },
          { key: "convenience_food", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  TrungDoi: {
    key: "TrungDoi",
    reward: [{ type: "coin", value: 200000 }, { type: "supply", value: 200000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 14000 }],
        cost: [
          { key: "textiles", value: 40, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good },
          { key: "luxury_materials", value: 25, type: bonus.good },
          { key: "steel", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "flavorants", value: 25, type: bonus.good },
          { key: "genome_data", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good },
          { key: "ferroconcrete", value: 25, type: bonus.good },
          { key: "industrial_filters", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 14000 }],
        cost: [
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good },
          { key: "convenience_food", value: 25, type: bonus.good },
          { key: "semiconductors", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "machine_parts", value: 30, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good },
          { key: "steel", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 14000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "gasoline", value: 30, type: bonus.good },
          { key: "flavorants", value: 25, type: bonus.good },
          { key: "renewable_resources", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  DayDuAo: {
    key: "DayDuAo",
    reward: [{ type: "coin", value: 180000 }, { type: "supply", value: 180000 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "gasoline", value: 30, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 14000 }],
        cost: [
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "gasoline", value: 30, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "luxury_materials", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 14000 }],
        cost: [
          { key: "textiles", value: 40, type: bonus.good },
          { key: "tinplate", value: 30, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good },
          { key: "flavorants", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good },
          { key: "explosives", value: 30, type: bonus.good },
          { key: "ferroconcrete", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "asbestos", value: 30, type: bonus.good },
          { key: "machine_parts", value: 30, type: bonus.good },
          { key: "ferroconcrete", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "gasoline", value: 30, type: bonus.good },
          { key: "machine_parts", value: 30, type: bonus.good },
          { key: "convenience_food", value: 25, type: bonus.good }
        ]
      }
    ]
  },
  KhayHuyenBayGio: {
    key: "KhayHuyenBayGio",
    reward: [{ type: "good_bonus", age: "IndustrialAge" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 14000 }],
        cost: [
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "flavorants", value: 35, type: bonus.good },
          { key: "renewable_resources", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "ferroconcrete", value: 35, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "convenience_food", value: 35, type: bonus.good },
          { key: "genome_data", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good },
          { key: "packaging", value: 35, type: bonus.good },
          { key: "industrial_filters", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 14000 }],
        cost: [
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "luxury_materials", value: 35, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 14000 }],
        cost: [
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "convenience_food", value: 35, type: bonus.good },
          { key: "steel", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 14000 }],
        cost: [
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good },
          { key: "flavorants", value: 35, type: bonus.good },
          { key: "semiconductors", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  RungTrai: {
    key: "RungTrai",
    reward: [{ type: "diamond", value: 100 }],
    sectors: [
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "packaging", value: 45, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "convenience_food", value: 45, type: bonus.good },
          { key: "industrial_filters", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "gasoline", value: 50, type: bonus.good },
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "flavorants", value: 45, type: bonus.good },
          { key: "renewable_resources", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 15000 }],
        cost: [
          { key: "gasoline", value: 50, type: bonus.good },
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "ferroconcrete", value: 45, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "flavorants", value: 45, type: bonus.good },
          { key: "steel", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "packaging", value: 45, type: bonus.good },
          { key: "genome_data", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 15000 }],
        cost: [
          { key: "tinplate", value: 50, type: bonus.good },
          { key: "explosives", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 45, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 15000 }],
        cost: [
          { key: "asbestos", value: 50, type: bonus.good },
          { key: "machine_parts", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 45, type: bonus.good },
          { key: "semiconductors", value: 40, type: bonus.good }
        ]
      }
    ]
  },
  OngChuCuoiCung: {
    key: "OngChuCuoiCung",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good },
          { key: "semiconductors", value: 55, type: bonus.good },
          { key: "industrial_filters", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "ferroconcrete", value: 30, type: bonus.good },
          { key: "packaging", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 55, type: bonus.good },
          { key: "steel", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "flavorants", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 30, type: bonus.good },
          { key: "steel", value: 35, type: bonus.good },
          { key: "genome_data", value: 65, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "convenience_food", value: 50, type: bonus.good },
          { key: "flavorants", value: 30, type: bonus.good },
          { key: "steel", value: 55, type: bonus.good },
          { key: "industrial_filters", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "flavorants", value: 30, type: bonus.good },
          { key: "renewable_resources", value: 45, type: bonus.good },
          { key: "semiconductors", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "convenience_food", value: 30, type: bonus.good },
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "industrial_filters", value: 55, type: bonus.good },
          { key: "genome_data", value: 45, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "ferroconcrete", value: 50, type: bonus.good },
          { key: "luxury_materials", value: 30, type: bonus.good },
          { key: "renewable_resources", value: 45, type: bonus.good },
          { key: "industrial_filters", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 20000 }],
        cost: [
          { key: "ferroconcrete", value: 20, type: bonus.good },
          { key: "flavorants", value: 60, type: bonus.good },
          { key: "semiconductors", value: 45, type: bonus.good },
          { key: "industrial_filters", value: 55, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 20000 }],
        cost: [
          { key: "convenience_food", value: 30, type: bonus.good },
          { key: "luxury_materials", value: 50, type: bonus.good },
          { key: "renewable_resources", value: 55, type: bonus.good },
          { key: "genome_data", value: 45, type: bonus.good }
        ]
      }
    ]
  },
  RungChienDau: {
    key: "RungChienDau",
    reward: [{ type: "good_bonus", age: "IronAge" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "textiles", value: 25, type: bonus.good },
          { key: "asbestos", value: 25, type: bonus.good },
          { key: "packaging", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "whale_oil", value: 25, type: bonus.good },
          { key: "explosives", value: 25, type: bonus.good },
          { key: "convenience_food", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "fertilizer", value: 25, type: bonus.good },
          { key: "machine_parts", value: 25, type: bonus.good },
          { key: "flavorants", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "rubber", value: 25, type: bonus.good },
          { key: "tinplate", value: 25, type: bonus.good },
          { key: "luxury_materials", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "fertilizer", value: 25, type: bonus.good },
          { key: "gasoline", value: 25, type: bonus.good },
          { key: "ferroconcrete", value: 25, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 7500 }],
        cost: [
          { key: "whale_oil", value: 25, type: "good" },
          { key: "gasoline", value: 25, type: "good" },
          { key: "convenience_food", value: 25, type: "good" }
        ]
      }
    ]
  },
  PhucKich: {
    key: "PhucKich",
    reward: [{ type: "coin", value: 80000 }, { type: "supply", value: 80000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "ferroconcrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "textiles", value: 40, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "packaging", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good },
          { key: "ferroconcrete", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "flavorants", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good },
          { key: "flavorants", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good },
          { key: "convenience_food", value: 30, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "luxury_materials", value: 30, type: bonus.good }
        ]
      }
    ]
  },
  GiaiCuuBinhMinh: {
    key: "GiaiCuuBinhMinh",
    reward: [{ type: "coin", value: 60000 }, { type: "supply", value: 60000 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [{ key: "machine_parts", value: 20, type: bonus.good }, { key: "tinplate", value: 40, type: bonus.good }]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "asbestos", value: 20, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "textiles", value: 40, type: bonus.good },
          { key: "whale_oil", value: 40, type: bonus.good },
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 10000 }],
        cost: [
          { key: "coke", value: 40, type: bonus.good },
          { key: "textiles", value: 40, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 10000 }],
        cost: [
          { key: "rubber", value: 40, type: bonus.good },
          { key: "fertilizer", value: 40, type: bonus.good },
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "machine_parts", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  MauMatDat: {
    key: "MauMatDat",
    reward: [{ type: "expansion" }],
    sectors: [
      {
        reward: [{ type: "supply", value: 11000 }],
        cost: [
          { key: "gasoline", value: 40, type: bonus.good },
          { key: "explosives", value: 20, type: bonus.good },
          { key: "ferroconcrete", value: 20, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 11000 }],
        cost: [
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "tinplate", value: 20, type: bonus.good },
          { key: "flavorants", value: 40, type: bonus.good },
          { key: "packaging", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 11000 }],
        cost: [
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "machine_parts", value: 40, type: bonus.good },
          { key: "convenience_food", value: 20, type: bonus.good },
          { key: "packaging", value: 40, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 11000 }],
        cost: [
          { key: "asbestos", value: 20, type: bonus.good },
          { key: "explosives", value: 40, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "convenience_food", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 11000 }],
        cost: [
          { key: "asbestos", value: 40, type: bonus.good },
          { key: "gasoline", value: 20, type: bonus.good },
          { key: "ferroconcrete", value: 40, type: bonus.good },
          { key: "flavorants", value: 20, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 11000 }],
        cost: [
          { key: "asbestos", value: 20, type: bonus.good },
          { key: "tinplate", value: 40, type: bonus.good },
          { key: "convenience_food", value: 40, type: bonus.good },
          { key: "luxury_materials", value: 20, type: bonus.good }
        ]
      }
    ]
  },
  DongBangSong: {
    key: "DongBangSong",
    reward: [{ type: "diamond", value: 100 }],
    sectors: [
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "asbestos", value: 60, type: bonus.good },
          { key: "luxury_materials", value: 60, type: bonus.good },
          { key: "genome_data", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "gasoline", value: 60, type: bonus.good },
          { key: "luxury_materials", value: 60, type: bonus.good },
          { key: "genome_data", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "gasoline", value: 60, type: bonus.good },
          { key: "ferroconcrete", value: 60, type: bonus.good },
          { key: "industrial_filters", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "asbestos", value: 60, type: bonus.good },
          { key: "flavorants", value: 60, type: bonus.good },
          { key: "semiconductors", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "machine_parts", value: 60, type: bonus.good },
          { key: "packaging", value: 60, type: bonus.good },
          { key: "renewable_resources", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "machine_parts", value: 60, type: bonus.good },
          { key: "convenience_food", value: 60, type: bonus.good },
          { key: "renewable_resources", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "supply", value: 12500 }],
        cost: [
          { key: "tinplate", value: 60, type: bonus.good },
          { key: "luxury_materials", value: 60, type: bonus.good },
          { key: "steel", value: 60, type: bonus.good }
        ]
      },
      {
        reward: [{ type: "coin", value: 12500 }],
        cost: [
          { key: "explosives", value: 60, type: bonus.good },
          { key: "convenience_food", value: 60, type: bonus.good },
          { key: "steel", value: 60, type: bonus.good }
        ]
      }
    ]
  }
};
