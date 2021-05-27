var url = require('url')
var api = 'http://www.itying.com?name=zhangsan&age=20';

var getValue=url.parse(api, true).query;
