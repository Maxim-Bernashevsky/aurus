export const getPrice = {
  senat: {
    base: 7800000,
    premiumPack: {
      value: 750000,
      label: "Премиальный пакет"
    },
  },
  arsenal: {
    base: 7100000,
    premiumPack: {
      value: 750000,
      label: "Премиальный пакет"
    },
  },
  comendant: {
    base: 7400000,
    premiumPack: {
      value: 750000,
      label: "Премиальный пакет"
    },
  }
};

export const getTextPrice = (price) =>
  price.toString()
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .map(i => i.split('')
      .reverse()
      .join('')
    ).reverse()
    .join(" ");


