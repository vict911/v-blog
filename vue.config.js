const HtmlWebpackPlugin = require('html-webpack-plugin')

// vue.config.js
module.exports = {
	baseUrl:'/v-blog/',
	//build项目输出路径
	outputDir:'v-blog',
	//build输出主文件路径
	indexPath:'index.html',
	//webpack配置项
	configureWebpack:{
		//路径别名
		resolve:{
			alias:{
				'@styles':'@/assets/styles',
				'@common':'@/common'
			},
		},
		plugins:[
			//处理public/index.html模板
			new HtmlWebpackPlugin({
				filename:'./public/index.html',
				favicon:'./public/favicon2.ico',
			})
		],
		devServer:{
			proxy:{
				'/static':{
					target:'http://vict911.top',
					// pathRewrite: {'^/api' : ''}
				}
			}
		}
	}
}