export const COLORS = Object.freeze({
  BLACK:   Symbol.for("black"),
  WHITE:  Symbol.for("white"),
  BLUE: Symbol.for("blue"),
  RED: Symbol.for("red")
});

export const COLOR_TEXT = Object.freeze({
  BLACK:   "Черный",
  WHITE:  "Белый",
  BLUE: "Синий",
  RED: "Красный"
});

export const INTERIORS = Object.freeze({
  OLIVA: Symbol.for("oliva"),
  ROSE: Symbol.for("rose"),
  ETIMOE: Symbol.for("etimoe")
});

export const INTERIOR_TEXT = Object.freeze({
  OLIVA: "Оливковое дерево",
  ROSE: "Розовое дерево",
  ETIMOE: "Дерево этимое"
});


export const getColorName = (color) => COLOR_TEXT[Symbol.keyFor(color).toUpperCase()];
export const getInteriorName = (interior) => INTERIOR_TEXT[Symbol.keyFor(interior).toUpperCase()];