import { isPackageExists } from 'local-pkg'

/** 检查是否安装了指定的 npm 包，若已经安装则跳过，否则安装 */
const checkAndInstallPackage = (packageName: string) => {
  if (isPackageExists(packageName)) {
    return
  }

  console.log(`Installing ${packageName}...`)
}

const init = () => {
  console.log('init fabric')
}

export default init
