//import API
import * as SwaggerJsClient from '@jpcolling/swagger-js-client';

export default class Company_Requests{
    //test if API can be called
    testAPI(){
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
    get_Companies(){
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
    get_Company(idNum){
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
    patch_Company(idNum, name){
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
    put_Company(idNum, name){
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
    post_Company(name){
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
    delete_Company(idNum){
        let apiInstance = new SwaggerJsClient.DefaultApi();

        apiInstance.deleteCompany(idNum, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data);
        }
        });
    }
}