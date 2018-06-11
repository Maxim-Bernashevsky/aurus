

export const COLORS = Object.freeze({
  BLACK: "black",
  WHITE: "white",
  BLUE: "blue",
  RED: "red"
});

export const COLOR_TEXT = Object.freeze({
  BLACK:   "Черный",
  WHITE:  "Белый",
  BLUE: "Синий",
  RED: "Красный"
});

export const INTERIORS = Object.freeze({
  OLIVA: "oliva",
  ROSE: "rose",
  ETIMOE: "etimoe"
});

export const INTERIOR_TEXT = Object.freeze({
  OLIVA: "Оливковое дерево",
  ROSE: "Розовое дерево",
  ETIMOE: "Дерево этимое"
});

export const getColorName = (color) => COLOR_TEXT[color.toUpperCase()];
export const getInteriorName = (interior) => INTERIOR_TEXT[interior.toUpperCase()];