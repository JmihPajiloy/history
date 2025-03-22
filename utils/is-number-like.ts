export const isNumberLike = (val: unknown): val is `${number}` => {
  return typeof val === "string" && /^[0-9]+$/g.test(val);
}