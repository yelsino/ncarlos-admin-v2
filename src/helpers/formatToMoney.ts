export const formatToMoney = (value:number) => {
  const format = (
    (Math.round(((Math.round(value * 100) / 5) * 5) / 5) * 5) /
    100
  ).toFixed(2)

  return Number(format)
}
