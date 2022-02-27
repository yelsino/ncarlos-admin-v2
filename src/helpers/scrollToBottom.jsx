import { animateScroll } from 'react-scroll'

export const scrollToBottom = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 0,
  })
};

export const scrollBottomAnimated = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 250,
    smooth: true,
    isDynamic: true,
  })
}