import { animateScroll } from 'react-scroll'

export const scrollToBottom = (id: any) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 0
  })
}

export const scrollBottomAnimated = (id: any) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 250,
    smooth: true,
    isDynamic: true
  })
}
