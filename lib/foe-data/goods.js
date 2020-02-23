const moment = require("moment");

const agesCost = {
  BronzeAge: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 100,
      supplies: 100,
      unrefined: null
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 200,
      supplies: 200,
      unrefined: null
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 400,
      supplies: 400,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 600,
      supplies: 600,
      unrefined: null
    }
  ],
  IronAge: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 200,
      supplies: 200,
      unrefined: null
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 400,
      supplies: 400,
      unrefined: null
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 800,
      supplies: 800,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 1200,
      supplies: 1200,
      unrefined: null
    }
  ],
  EarlyMiddleAges: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 400,
      supplies: 400,
      unrefined: null
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 800,
      supplies: 800,
      unrefined: null
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 1600,
      supplies: 1600,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 2400,
      supplies: 2400,
      unrefined: null
    }
  ],
  HighMiddleAges: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 800,
      supplies: 800,
      unrefined: null
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 1600,
      supplies: 1600,
      unrefined: null
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 3200,
      supplies: 3200,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 4800,
      supplies: 4800,
      unrefined: null
    }
  ],
  LateMiddleAges: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 1600,
      supplies: 1600,
      unrefined: null
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 3200,
      supplies: 3200,
      unrefined: null
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 6400,
      supplies: 6400,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 9600,
      supplies: 9600,
      unrefined: null
    }
  ],
  ColonialAge: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 2400,
      supplies: 2400,
      unrefined: null
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 4800,
      supplies: 4800,
      unrefined: null
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 9600,
      supplies: 9600,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 14400,
      supplies: 14400,
      unrefined: null
    }
  ],
  IndustrialAge: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 3200,
      supplies: 3200,
      unrefined: null
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 6400,
      supplies: 6400,
      unrefined: null
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 12800,
      supplies: 12800,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 19200,
      supplies: 19200,
      unrefined: null
    }
  ],
  ProgressiveEra: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 4000,
      supplies: 4000,
      unrefined: null
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 8000,
      supplies: 8000,
      unrefined: null
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 16000,
      supplies: 16000,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 24000,
      supplies: 24000,
      unrefined: null
    }
  ],
  ModernEra: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 2400,
      supplies: 2400,
      unrefined: "ColonialAge"
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 4800,
      supplies: 4800,
      unrefined: "ColonialAge"
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 9600,
      supplies: 9600,
      unrefined: "ColonialAge"
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 14400,
      supplies: 14400,
      unrefined: "ColonialAge"
    }
  ],
  PostmodernEra: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 2800,
      supplies: 2800,
      unrefined: "IndustrialAge"
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 5600,
      supplies: 5600,
      unrefined: "IndustrialAge"
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 11200,
      supplies: 11200,
      unrefined: "IndustrialAge"
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 16800,
      supplies: 16800,
      unrefined: "IndustrialAge"
    }
  ],
  ContemporaryEra: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 3200,
      supplies: 3200,
      unrefined: "ProgressiveEra"
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 6400,
      supplies: 6400,
      unrefined: "ProgressiveEra"
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 12800,
      supplies: 12800,
      unrefined: "ProgressiveEra"
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 19200,
      supplies: 19200,
      unrefined: "ProgressiveEra"
    }
  ],
  Tomorrow: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 3600,
      supplies: 3600,
      unrefined: "ModernEra"
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 7200,
      supplies: 7200,
      unrefined: "ModernEra"
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 14400,
      supplies: 14400,
      unrefined: "ModernEra"
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 21600,
      supplies: 21600,
      unrefined: "ModernEra"
    }
  ],
  TheFuture: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 4000,
      supplies: 4000,
      unrefined: "PostmodernEra"
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 8000,
      supplies: 8000,
      unrefined: "PostmodernEra"
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 16000,
      supplies: 16000,
      unrefined: "PostmodernEra"
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 24000,
      supplies: 24000,
      unrefined: "PostmodernEra"
    }
  ],
  ArcticFuture: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 4500,
      supplies: 4500,
      unrefined: "ContemporaryEra"
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 9000,
      supplies: 9000,
      unrefined: "ContemporaryEra"
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 18000,
      supplies: 18000,
      unrefined: "ContemporaryEra"
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 27000,
      supplies: 27000,
      unrefined: "ContemporaryEra"
    }
  ],
  OceanicFuture: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 4500,
      supplies: 4500,
      unrefined: "Tomorrow"
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 9000,
      supplies: 9000,
      unrefined: "Tomorrow"
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 18000,
      supplies: 18000,
      unrefined: "Tomorrow"
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 27000,
      supplies: 27000,
      unrefined: "Tomorrow"
    }
  ],
  VirtualFuture: [
    {
      quantity: 1,
      duration: moment.duration({ hours: 4 }),
      coins: 6000,
      supplies: 6000,
      unrefined: "TheFuture"
    },
    {
      quantity: 2,
      duration: moment.duration({ hours: 8 }),
      coins: 12000,
      supplies: 12000,
      unrefined: "TheFuture"
    },
    {
      quantity: 4,
      duration: moment.duration({ days: 1 }),
      coins: 24000,
      supplies: 24000,
      unrefined: "TheFuture"
    },
    {
      quantity: 6,
      duration: moment.duration({ days: 2 }),
      coins: 36000,
      supplies: 36000,
      unrefined: "TheFuture"
    }
  ],
  // For SAM, values are not the values in production building.
  // This is due to keep 2:1 ratio here.
  SpaceAgeMars: [
    {
      quantity: 3,
      duration: moment.duration({ hours: 4 }),
      coins: 96000,
      supplies: 96000,
      unrefined: null
    },
    {
      quantity: 6,
      duration: moment.duration({ hours: 8 }),
      coins: 192000,
      supplies: 192000,
      unrefined: null
    },
    {
      quantity: 12,
      duration: moment.duration({ days: 1 }),
      coins: 384000,
      supplies: 384000,
      unrefined: null
    },
    {
      quantity: 18,
      duration: moment.duration({ days: 2 }),
      coins: 576000,
      supplies: 576000,
      unrefined: null
    }
  ]
};

module.exports = {
  agesCost,

  goods: {
    dye: require("./goods-info/dye"),
    lumber: require("./goods-info/lumber"),
    marble: require("./goods-info/marble"),
    stone: require("./goods-info/stone"),
    wine: require("./goods-info/wine"),

    cloth: require("./goods-info/cloth"),
    ebony: require("./goods-info/ebony"),
    iron: require("./goods-info/iron"),
    jewelry: require("./goods-info/jewelry"),
    limestone: require("./goods-info/limestone"),

    alabaster: require("./goods-info/alabaster"),
    copper: require("./goods-info/copper"),
    gold: require("./goods-info/gold"),
    granite: require("./goods-info/granite"),
    honey: require("./goods-info/honey"),

    brick: require("./goods-info/brick"),
    dried_herbs: require("./goods-info/dried_herbs"),
    glass: require("./goods-info/glass"),
    rope: require("./goods-info/rope"),
    salt: require("./goods-info/salt"),

    basalt: require("./goods-info/basalt"),
    brass: require("./goods-info/brass"),
    gunpowder: require("./goods-info/gunpowder"),
    silk: require("./goods-info/silk"),
    talc_powder: require("./goods-info/talc_powder"),

    coffee: require("./goods-info/coffee"),
    porcelain: require("./goods-info/porcelain"),
    paper: require("./goods-info/paper"),
    tar: require("./goods-info/tar"),
    wire: require("./goods-info/wire"),

    coke: require("./goods-info/coke"),
    fertilizer: require("./goods-info/fertilizer"),
    rubber: require("./goods-info/rubber"),
    textiles: require("./goods-info/textiles"),
    whale_oil: require("./goods-info/whale_oil"),

    asbestos: require("./goods-info/asbestos"),
    explosives: require("./goods-info/explosives"),
    gasoline: require("./goods-info/gasoline"),
    machine_parts: require("./goods-info/machine_parts"),
    tinplate: require("./goods-info/tinplate"),

    convenience_food: require("./goods-info/convenience_food"),
    ferroconcrete: require("./goods-info/ferroconcrete"),
    flavorants: require("./goods-info/flavorants"),
    luxury_materials: require("./goods-info/luxury_materials"),
    packaging: require("./goods-info/packaging"),

    genome_data: require("./goods-info/genome_data"),
    industrial_filters: require("./goods-info/industrial_filters"),
    renewable_resources: require("./goods-info/renewable_resources"),
    semiconductors: require("./goods-info/semiconductors"),
    steel: require("./goods-info/steel"),

    bionics_data: require("./goods-info/bionics_data"),
    electromagnets: require("./goods-info/electromagnets"),
    gas: require("./goods-info/gas"),
    plastics: require("./goods-info/plastics"),
    robots: require("./goods-info/robots"),

    nutrition_research: require("./goods-info/nutrition_research"),
    papercrete: require("./goods-info/papercrete"),
    preservatives: require("./goods-info/preservatives"),
    smart_materials: require("./goods-info/smart_materials"),
    translucent_concrete: require("./goods-info/translucent_concrete"),

    algae: require("./goods-info/algae"),
    biogeochemical_data: require("./goods-info/biogeochemical_data"),
    nanoparticles: require("./goods-info/nanoparticles"),
    purified_water: require("./goods-info/purified_water"),
    superconductors: require("./goods-info/superconductors"),

    ai_data: require("./goods-info/ai_data"),
    bioplastics: require("./goods-info/bioplastics"),
    nanowire: require("./goods-info/nanowire"),
    paper_batteries: require("./goods-info/paper_batteries"),
    transester_gas: require("./goods-info/transester_gas"),

    artificial_scales: require("./goods-info/artificial_scales"),
    biolight: require("./goods-info/biolight"),
    corals: require("./goods-info/corals"),
    pearls: require("./goods-info/pearls"),
    plankton: require("./goods-info/plankton"),

    cryptocash: require("./goods-info/cryptocash"),
    data_crystals: require("./goods-info/data_crystals"),
    golden_rice: require("./goods-info/golden_rice"),
    nanites: require("./goods-info/nanites"),
    tea_silk: require("./goods-info/tea_silk"),

    lubricants: require("./goods-info/lubricants"),
    biotech_crops: require("./goods-info/biotech_crops"),
    mars_microbes: require("./goods-info/mars_microbes"),
    fusion_reactors: require("./goods-info/fusion_reactors"),
    superalloys: require("./goods-info/superalloys")
  },

  agesGoods: {
    BronzeAge: {
      cost: agesCost.BronzeAge,
      goods: [
        require("./goods-info/dye"),
        require("./goods-info/lumber"),
        require("./goods-info/marble"),
        require("./goods-info/stone"),
        require("./goods-info/wine")
      ],
      goodsKey: {
        dye: require("./goods-info/dye"),
        lumber: require("./goods-info/lumber"),
        marble: require("./goods-info/marble"),
        stone: require("./goods-info/stone"),
        wine: require("./goods-info/wine")
      }
    },
    IronAge: {
      cost: agesCost.IronAge,
      goods: [
        require("./goods-info/cloth"),
        require("./goods-info/ebony"),
        require("./goods-info/iron"),
        require("./goods-info/jewelry"),
        require("./goods-info/limestone")
      ],
      goodsKey: {
        cloth: require("./goods-info/cloth"),
        ebony: require("./goods-info/ebony"),
        iron: require("./goods-info/iron"),
        jewelry: require("./goods-info/jewelry"),
        limestone: require("./goods-info/limestone")
      }
    },
    EarlyMiddleAges: {
      cost: agesCost.EarlyMiddleAges,
      goods: [
        require("./goods-info/alabaster"),
        require("./goods-info/copper"),
        require("./goods-info/gold"),
        require("./goods-info/granite"),
        require("./goods-info/honey")
      ],
      goodsKey: {
        alabaster: require("./goods-info/alabaster"),
        copper: require("./goods-info/copper"),
        gold: require("./goods-info/gold"),
        granite: require("./goods-info/granite"),
        honey: require("./goods-info/honey")
      }
    },
    HighMiddleAges: {
      cost: agesCost.HighMiddleAges,
      goods: [
        require("./goods-info/brick"),
        require("./goods-info/dried_herbs"),
        require("./goods-info/glass"),
        require("./goods-info/rope"),
        require("./goods-info/salt")
      ],
      goodsKey: {
        brick: require("./goods-info/brick"),
        dried_herbs: require("./goods-info/dried_herbs"),
        glass: require("./goods-info/glass"),
        rope: require("./goods-info/rope"),
        salt: require("./goods-info/salt")
      }
    },
    LateMiddleAges: {
      cost: agesCost.LateMiddleAges,
      goods: [
        require("./goods-info/basalt"),
        require("./goods-info/brass"),
        require("./goods-info/gunpowder"),
        require("./goods-info/silk"),
        require("./goods-info/talc_powder")
      ],
      goodsKey: {
        basalt: require("./goods-info/basalt"),
        brass: require("./goods-info/brass"),
        gunpowder: require("./goods-info/gunpowder"),
        silk: require("./goods-info/silk"),
        talc_powder: require("./goods-info/talc_powder")
      }
    },
    ColonialAge: {
      cost: agesCost.ColonialAge,
      goods: [
        require("./goods-info/coffee"),
        require("./goods-info/porcelain"),
        require("./goods-info/paper"),
        require("./goods-info/tar"),
        require("./goods-info/wire")
      ],
      goodsKey: {
        coffee: require("./goods-info/coffee"),
        porcelain: require("./goods-info/porcelain"),
        paper: require("./goods-info/paper"),
        tar: require("./goods-info/tar"),
        wire: require("./goods-info/wire")
      }
    },
    IndustrialAge: {
      cost: agesCost.IndustrialAge,
      goods: [
        require("./goods-info/coke"),
        require("./goods-info/fertilizer"),
        require("./goods-info/rubber"),
        require("./goods-info/textiles"),
        require("./goods-info/whale_oil")
      ],
      goodsKey: {
        coke: require("./goods-info/coke"),
        fertilizer: require("./goods-info/fertilizer"),
        rubber: require("./goods-info/rubber"),
        textiles: require("./goods-info/textiles"),
        whale_oil: require("./goods-info/whale_oil")
      }
    },
    ProgressiveEra: {
      cost: agesCost.ProgressiveEra,
      goods: [
        require("./goods-info/asbestos"),
        require("./goods-info/explosives"),
        require("./goods-info/gasoline"),
        require("./goods-info/machine_parts"),
        require("./goods-info/tinplate")
      ],
      goodsKey: {
        asbestos: require("./goods-info/asbestos"),
        explosives: require("./goods-info/explosives"),
        gasoline: require("./goods-info/gasoline"),
        machine_parts: require("./goods-info/machine_parts"),
        tinplate: require("./goods-info/tinplate")
      }
    },
    ModernEra: {
      cost: agesCost.ModernEra,
      goods: [
        require("./goods-info/convenience_food"),
        require("./goods-info/ferroconcrete"),
        require("./goods-info/flavorants"),
        require("./goods-info/luxury_materials"),
        require("./goods-info/packaging")
      ],
      goodsKey: {
        convenience_food: require("./goods-info/convenience_food"),
        ferroconcrete: require("./goods-info/ferroconcrete"),
        flavorants: require("./goods-info/flavorants"),
        luxury_materials: require("./goods-info/luxury_materials"),
        packaging: require("./goods-info/packaging")
      }
    },
    PostmodernEra: {
      cost: agesCost.PostmodernEra,
      goods: [
        require("./goods-info/genome_data"),
        require("./goods-info/industrial_filters"),
        require("./goods-info/renewable_resources"),
        require("./goods-info/semiconductors"),
        require("./goods-info/steel")
      ],
      goodsKey: {
        genome_data: require("./goods-info/genome_data"),
        industrial_filters: require("./goods-info/industrial_filters"),
        renewable_resources: require("./goods-info/renewable_resources"),
        semiconductors: require("./goods-info/semiconductors"),
        steel: require("./goods-info/steel")
      }
    },
    ContemporaryEra: {
      cost: agesCost.ContemporaryEra,
      goods: [
        require("./goods-info/bionics_data"),
        require("./goods-info/electromagnets"),
        require("./goods-info/gas"),
        require("./goods-info/plastics"),
        require("./goods-info/robots")
      ],
      goodsKey: {
        bionics_data: require("./goods-info/bionics_data"),
        electromagnets: require("./goods-info/electromagnets"),
        gas: require("./goods-info/gas"),
        plastics: require("./goods-info/plastics"),
        robots: require("./goods-info/robots")
      }
    },
    Tomorrow: {
      cost: agesCost.Tomorrow,
      goods: [
        require("./goods-info/nutrition_research"),
        require("./goods-info/papercrete"),
        require("./goods-info/preservatives"),
        require("./goods-info/smart_materials"),
        require("./goods-info/translucent_concrete")
      ],
      goodsKey: {
        nutrition_research: require("./goods-info/nutrition_research"),
        papercrete: require("./goods-info/papercrete"),
        preservatives: require("./goods-info/preservatives"),
        smart_materials: require("./goods-info/smart_materials"),
        translucent_concrete: require("./goods-info/translucent_concrete")
      }
    },
    TheFuture: {
      cost: agesCost.TheFuture,
      goods: [
        require("./goods-info/algae"),
        require("./goods-info/biogeochemical_data"),
        require("./goods-info/nanoparticles"),
        require("./goods-info/purified_water"),
        require("./goods-info/superconductors")
      ],
      goodsKey: {
        algae: require("./goods-info/algae"),
        biogeochemical_data: require("./goods-info/biogeochemical_data"),
        nanoparticles: require("./goods-info/nanoparticles"),
        purified_water: require("./goods-info/purified_water"),
        superconductors: require("./goods-info/superconductors")
      }
    },
    ArcticFuture: {
      cost: agesCost.ArcticFuture,
      goods: [
        require("./goods-info/ai_data"),
        require("./goods-info/bioplastics"),
        require("./goods-info/nanowire"),
        require("./goods-info/paper_batteries"),
        require("./goods-info/transester_gas")
      ],
      goodsKey: {
        ai_data: require("./goods-info/ai_data"),
        bioplastics: require("./goods-info/bioplastics"),
        nanowire: require("./goods-info/nanowire"),
        paper_batteries: require("./goods-info/paper_batteries"),
        transester_gas: require("./goods-info/transester_gas")
      }
    },
    OceanicFuture: {
      cost: agesCost.OceanicFuture,
      goods: [
        require("./goods-info/artificial_scales"),
        require("./goods-info/biolight"),
        require("./goods-info/corals"),
        require("./goods-info/pearls"),
        require("./goods-info/plankton")
      ],
      goodsKey: {
        artificial_scales: require("./goods-info/artificial_scales"),
        biolight: require("./goods-info/biolight"),
        corals: require("./goods-info/corals"),
        pearls: require("./goods-info/pearls"),
        plankton: require("./goods-info/plankton")
      }
    },
    VirtualFuture: {
      cost: agesCost.VirtualFuture,
      goods: [
        require("./goods-info/cryptocash"),
        require("./goods-info/data_crystals"),
        require("./goods-info/golden_rice"),
        require("./goods-info/nanites"),
        require("./goods-info/tea_silk")
      ],
      goodsKey: {
        cryptocash: require("./goods-info/cryptocash"),
        data_crystals: require("./goods-info/data_crystals"),
        golden_rice: require("./goods-info/golden_rice"),
        nanites: require("./goods-info/nanites"),
        tea_silk: require("./goods-info/tea_silk")
      }
    },
    SpaceAgeMars: {
      cost: agesCost.SpaceAgeMars,
      goods: [
        require("./goods-info/lubricants"),
        require("./goods-info/biotech_crops"),
        require("./goods-info/mars_microbes"),
        require("./goods-info/fusion_reactors"),
        require("./goods-info/superalloys")
      ],
      goodsKey: {
        lubricants: require("./goods-info/lubricants"),
        biotech_crops: require("./goods-info/biotech_crops"),
        mars_microbes: require("./goods-info/mars_microbes"),
        fusion_reactors: require("./goods-info/fusion_reactors"),
        superalloys: require("./goods-info/superalloys")
      }
    }
  }
};
