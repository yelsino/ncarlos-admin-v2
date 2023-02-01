import moment from 'moment'
export const horaMes = (fecha:any) => {
  const hoyMes = moment(fecha)

  return hoyMes.format('HH:mm a | MMMM Do')
}
