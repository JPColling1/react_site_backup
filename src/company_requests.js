//import API
import * as SwaggerJsClient from '@jpcolling/swagger-js-client';

//var returnData;


// class HoldData{
//     constructor(holding){
//         this.holding = holding;
//     }

//     setReturn(){
//         returnData = this.holding;
//         console.log(returnData);
//     }
// }

// var storeData = new HoldData();

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

    // callbackFunction(error, data, response){
    //     if (error) {
    //         console.error(error);
    //     } else {
    //         console.log('API called successfully. Returned data: ');
    //         console.log(response["body"]);
    //         returnData = JSON.stringify(response["body"]);
    //         console.log(returnData);
    //     }
    // }

    // get_Companies(){
    //     let apiInstance = new SwaggerJsClient.DefaultApi();
    //     var returnData = apiInstance.getCompanies((error, data, response) => {
    //         if (error) {
    //             console.error(error);
    //             //resolve(error);
    //         } else {
    //             console.log('API called successfully. Returned data: ');
    //             console.log(response["body"]);
    //             // var returnData = JSON.stringify(response["body"]);
    //             //console.log(returnData);
    //             //resolve(response["body"]);
    //             //returnData = response["body"];
    //         }
    //     });
    //     console.log(returnData);
    //     return returnData["body"];
    // }
    
    //return list of dicts of all companies
    async get_Companies(){
        let myPromise = new Promise(function(resolve){
            let apiInstance = new SwaggerJsClient.DefaultApi();
            apiInstance.getCompanies((error, data, response) => {
                if (error) {
                    console.error(error);
                    resolve(error);
                } else {
                    console.log('API called successfully. Returned data: ');
                    console.log(response["body"]);
                    // var returnData = JSON.stringify(response["body"]);
                    //console.log(returnData);
                    resolve(response["body"]);
                    //returnData = response["body"];
                }
            });
        });
        const returnData = await myPromise;
        // console.log(returnData);
        // const returnData1 = await returnData.json();
        //console.log(returnData);
        // console.log(returnData1)
        return returnData;
        // while (!returnData){}
        // return returnData;
        //console.log();
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