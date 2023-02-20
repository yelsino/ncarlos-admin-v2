import 'moment/locale/es'

import moment from 'moment'

moment.locale('ES')
// create a function for format date with momen js
export const formatDate = (date, format = 'MMMM Do YYYY, h:mm:ss a') => {
  return moment(date).format(format)
}
