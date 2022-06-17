
export default class CompanyRequests{

    testTheAPI() {
        var SwaggerJsClient = require('swagger-js-client');

        var api = new SwaggerJsClient.DefaultApi()
        var callback = function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully.');
        }
        };
        api.apiDocJsonGet(callback);
    }
}