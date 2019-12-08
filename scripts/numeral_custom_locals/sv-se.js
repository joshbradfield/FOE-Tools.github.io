// numeral.js locale configuration
// locale : swedish Sweden (sv-se)
// author : Victor Pegado : https://github.com/vpegado

function factory(numeral) {
  numeral.register("locale", "sv-se", {
    delimiters: {
      thousands: " ",
      decimal: ","
    },
    abbreviations: {
      thousand: "k",
      million: "mn",
      billion: "md",
      trillion: "bn"
    },
    ordinal: function(number) {
      let a = Math.abs(number) % 10,
        b = Math.abs(number) % 100;
      if ((a === 1 || a === 2) && b !== 11 && b !== 12) {
        return ":a";
      }
      return ":e";
    },
    currency: {
      symbol: "kr"
    }
  });
}

export function init(numeral) {
  factory(numeral);
}
