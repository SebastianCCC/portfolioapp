export const replaceRoute = (path, router) => {
  if (!router.isReady) return
  if (path === router.pathname) return

  router.replace(path)
}
