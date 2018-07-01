const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: '',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    // 服务器配置
    serverHost: '',

    // 信道服务
    tunnelServerUrl: '',
    tunnelSignatureKey: '',

    // 腾讯云配置
    qcloudAppId: '',
    qcloudSecretId: '',
    qcloudSecretKey: '',

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: '',
        port: 3306,
        user: '',
        db: '',
        pass: '',
        char: ''
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: '',
        // Bucket 名称
        fileBucket: '',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: ''
}

module.exports = CONF