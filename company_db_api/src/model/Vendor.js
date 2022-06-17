/*
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The Vendor model module.
 * @module model/Vendor
 * @version 0.0.0
 */
export class Vendor {
  /**
   * Constructs a new <code>Vendor</code>.
   * Vendor Model
   * @alias module:model/Vendor
   * @class
   * @param vendorName {String} 
   */
  constructor(vendorName) {
    this.vendorName = vendorName;
  }

  /**
   * Constructs a <code>Vendor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vendor} obj Optional instance to populate.
   * @return {module:model/Vendor} The populated <code>Vendor</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Vendor();
      if (data.hasOwnProperty('vendor_id'))
        obj.vendorId = ApiClient.convertToType(data['vendor_id'], 'Number');
      if (data.hasOwnProperty('vendor_name'))
        obj.vendorName = ApiClient.convertToType(data['vendor_name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} vendorId
 */
Vendor.prototype.vendorId = undefined;

/**
 * @member {String} vendorName
 */
Vendor.prototype.vendorName = undefined;

