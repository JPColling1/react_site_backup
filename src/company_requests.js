//import API
import * as SwaggerJsClient from '../@jpcolling/swagger-js-client';

//test if API can be called
function testAPI(){
    let apiInstance = new SwaggerJsClient.DefaultApi();
    apiInstance.apiDocJsonGet((error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
    });
}

//return list of dicts of all companies
function get_Companies(){
    let apiInstance = new SwaggerJsClient.DefaultApi();
    apiInstance.getCompanies((error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ');
        console.log(response["body"]);
    }
    });
}

//return dict of one company
function get_Company(idNum){
    let apiInstance = new SwaggerJsClient.DefaultApi();

    apiInstance.getCompany(idNum, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ');
        console.log(response["body"]);
    }
    });
}

//patch request
function patch_Company(idNum, name){
    let apiInstance = new SwaggerJsClient.DefaultApi(); 
    let opts = { 
    'body': new SwaggerJsClient.Company(name) // Company | 
    };
    apiInstance.partiallyUpdateCompany(idNum, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
    });
}

//put request
function put_Company(idNum, name){
    let apiInstance = new SwaggerJsClient.DefaultApi(); 
    let opts = { 
    'body': new SwaggerJsClient.Company(name) // Company | 
    };
    apiInstance.updateCompany(idNum, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
    });
}

//post request
function post_Company(name){
    let apiInstance = new SwaggerJsClient.DefaultApi();
    let opts = { 
    'body': new SwaggerJsClient.Company(name) // Company | 
    };
    apiInstance.postNewCompany(opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ');
        console.log(response["body"]);
    }
    });
}

//delete request
function delete_Company(idNum){
    let apiInstance = new SwaggerJsClient.DefaultApi();

    apiInstance.deleteCompany(idNum, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
    });
}