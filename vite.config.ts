import { UserConfig } from 'vite'
const path = require( 'path' )

const config: UserConfig = {
  plugins: [],
  port: 8889,
  open: true,
  https: false,
  ssr: false,
  optimizeDeps: {
    include: [ 'axios', 'nprogress', 'vant' ]
  },
  alias: {
    '/@/': path.resolve( __dirname, './src' )
  },
  // proxy: {
  //   '/foo': ''
  // }
}

export default config
