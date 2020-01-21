//set to false for production
export const buildForDev = false
export const webpackDevServer = buildForDev
const prodServerUrlSubfolder = 'partout'

export const serverAPILocation = 'api.php'
export const serverLocation = buildForDev ? '' : '/' + prodServerUrlSubfolder
export const serverImagePath = serverLocation + '/images/'

