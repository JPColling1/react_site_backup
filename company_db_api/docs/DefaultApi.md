# SwaggerJsClient.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDocJsonGet**](DefaultApi.md#apiDocJsonGet) | **GET** /api/doc.json | 
[**deleteCompany**](DefaultApi.md#deleteCompany) | **DELETE** /api/companies/{company_id} | 
[**deleteVendor**](DefaultApi.md#deleteVendor) | **DELETE** /api/vendors/{vendor_id} | 
[**getCompanies**](DefaultApi.md#getCompanies) | **GET** /api/companies | 
[**getCompany**](DefaultApi.md#getCompany) | **GET** /api/companies/{company_id} | 
[**getVendor**](DefaultApi.md#getVendor) | **GET** /api/vendors/{vendor_id} | 
[**getVendors**](DefaultApi.md#getVendors) | **GET** /api/vendors | 
[**partiallyUpdateCompany**](DefaultApi.md#partiallyUpdateCompany) | **PATCH** /api/companies/{company_id} | 
[**partiallyUpdateVendor**](DefaultApi.md#partiallyUpdateVendor) | **PATCH** /api/vendors/{vendor_id} | 
[**postNewCompany**](DefaultApi.md#postNewCompany) | **POST** /api/companies | 
[**postNewVendor**](DefaultApi.md#postNewVendor) | **POST** /api/vendors | 
[**updateCompany**](DefaultApi.md#updateCompany) | **PUT** /api/companies/{company_id} | 
[**updateVendor**](DefaultApi.md#updateVendor) | **PUT** /api/vendors/{vendor_id} | 

<a name="apiDocJsonGet"></a>
# **apiDocJsonGet**
> apiDocJsonGet()



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
apiInstance.apiDocJsonGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCompany"></a>
# **deleteCompany**
> &#x27;String&#x27; deleteCompany(companyId)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let companyId = 789; // Number | 

apiInstance.deleteCompany(companyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteVendor"></a>
# **deleteVendor**
> &#x27;String&#x27; deleteVendor(vendorId)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let vendorId = 789; // Number | 

apiInstance.deleteVendor(vendorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Number**|  | 

### Return type

**&#x27;String&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCompanies"></a>
# **getCompanies**
> [Company] getCompanies()



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
apiInstance.getCompanies((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Company]**](Company.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCompany"></a>
# **getCompany**
> Company getCompany(companyId)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let companyId = 789; // Number | 

apiInstance.getCompany(companyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendor"></a>
# **getVendor**
> Vendor getVendor(vendorId)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let vendorId = 789; // Number | 

apiInstance.getVendor(vendorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Number**|  | 

### Return type

[**Vendor**](Vendor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVendors"></a>
# **getVendors**
> [Vendor] getVendors()



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
apiInstance.getVendors((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Vendor]**](Vendor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="partiallyUpdateCompany"></a>
# **partiallyUpdateCompany**
> partiallyUpdateCompany(companyId, opts)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let companyId = 789; // Number | 
let opts = { 
  'body': new SwaggerJsClient.Company() // Company | 
};
apiInstance.partiallyUpdateCompany(companyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 
 **body** | [**Company**](Company.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="partiallyUpdateVendor"></a>
# **partiallyUpdateVendor**
> partiallyUpdateVendor(vendorId, opts)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let vendorId = 789; // Number | 
let opts = { 
  'body': new SwaggerJsClient.Vendor() // Vendor | 
};
apiInstance.partiallyUpdateVendor(vendorId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Number**|  | 
 **body** | [**Vendor**](Vendor.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="postNewCompany"></a>
# **postNewCompany**
> &#x27;Number&#x27; postNewCompany(opts)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let opts = { 
  'body': new SwaggerJsClient.Company() // Company | 
};
apiInstance.postNewCompany(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Company**](Company.md)|  | [optional] 

### Return type

**&#x27;Number&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postNewVendor"></a>
# **postNewVendor**
> &#x27;Number&#x27; postNewVendor(opts)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let opts = { 
  'body': new SwaggerJsClient.Vendor() // Vendor | 
};
apiInstance.postNewVendor(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Vendor**](Vendor.md)|  | [optional] 

### Return type

**&#x27;Number&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCompany"></a>
# **updateCompany**
> updateCompany(companyId, opts)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let companyId = 789; // Number | 
let opts = { 
  'body': new SwaggerJsClient.Company() // Company | 
};
apiInstance.updateCompany(companyId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**|  | 
 **body** | [**Company**](Company.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="updateVendor"></a>
# **updateVendor**
> updateVendor(vendorId, opts)



### Example
```javascript
import {SwaggerJsClient} from 'swagger-js-client';

let apiInstance = new SwaggerJsClient.DefaultApi();
let vendorId = 789; // Number | 
let opts = { 
  'body': new SwaggerJsClient.Vendor() // Vendor | 
};
apiInstance.updateVendor(vendorId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Number**|  | 
 **body** | [**Vendor**](Vendor.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

