const log4js = require('log4js');
const path = require('path');
log4js.configure({
	appenders:{
		http_console:{type:"console"},
		http_file:{type:"file", filename:path.join(__dirname,"../logs/http.log"), pattern: "_yyyy-MM-dd.log"},
		app_console:{type:"console"},
		app_file:{type:"file", filename:path.join(__dirname,"../logs/app.log"), pattern: "_yyyy-MM-dd.log"},
		error_console:{type:"console"},
		error_file:{type:"file", filename:path.join(__dirname,"../logs/error.log"), pattern: "_yyyy-MM-dd.log"},

		http:{type:"console", filename:path.join(__dirname,"../logs/http.log"), pattern: "_yyyy-MM-dd.log"},
		app:{type:"console", filename:path.join(__dirname,"../logs/app.log"), pattern: "_yyyy-MM-dd.log"},
		error:{type:"file", filename:path.join(__dirname,"../logs/error.log"), pattern: "_yyyy-MM-dd.log"}
	},
	categories:{
		default:{appenders:['app'],level:'info'},
		http:{appenders:['http'],level:'info'},
		error:{appenders:['error'],level:'info'},

		app_file:{appenders:['app_file'],level:'info'},
		app_console:{appenders:['app_console'],level:'info'},
		http_file:{appenders:['http_file'],level:'info'},
		http_console:{appenders:['http_console'],level:'info'},
		error_file:{appenders:['error_file'],level:'error'},
		error_console:{appenders:['error_console'],level:'error'}
	}
});

// single logger
exports.httpLogger = log4js.getLogger('http');
exports.appLogger = log4js.getLogger('app');
exports.errorLogger = log4js.getLogger('error');
exports.scheduleLogger = log4js.getLogger('schedule');

//console and file double logger function
module.exports.app_logger = (info)=>{
	log4js.getLogger('app_file').info(info);
	log4js.getLogger('app_console').info(info);
}

module.exports.http_logger = (info)=>{
	log4js.getLogger('http_file').info(info);
	log4js.getLogger('http_console').info(info);
}

module.exports.error_logger = (error)=>{
	log4js.getLogger('error_file').error(error);
	log4js.getLogger('error_console').error(error);
}