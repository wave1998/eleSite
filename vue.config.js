module.exports ={
    devServer:{
        open:true,
        port:8083,
        host:"127.0.0.1",
        proxy:{
            "/ele":{
                target:"http://127.0.0.1:8088",//指定你要代理的服务器
                changeOrigin:true,//是否开启代理
                pathRewrite:{
                    "^/ele":" " //将ele替换为空
                }
            }
        }
    }
}