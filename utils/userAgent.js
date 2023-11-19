export const checkBrowser = () => {
  const userAgent = navigator.userAgent || window.opera

  if (/Edge/.test(userAgent)) {
    return 'edge'
  } else if (/Firefox/.test(userAgent)) {
    return 'firefox'
  } else if (/Chrome/.test(userAgent)) {
    return 'chrome'
  } else if (/Safari/.test(userAgent)) {
    return 'safari'
  }

  return userAgent
}
