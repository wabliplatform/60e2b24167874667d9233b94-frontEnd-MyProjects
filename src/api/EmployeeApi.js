/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Employee from '../model/Employee';

/**
* Employee service.
* @module api/EmployeeApi
* @version 1.0.0
*/
export default class EmployeeApi {

    /**
    * Constructs a new EmployeeApi. 
    * @alias module:api/EmployeeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createemployee operation.
     * @callback module:api/EmployeeApi~createemployeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Employee} employee data to be created
     * @param {module:api/EmployeeApi~createemployeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */
    createemployee(employee, callback) {
      let postBody = employee;
      // verify the required parameter 'employee' is set
      if (employee === undefined || employee === null) {
        throw new Error("Missing the required parameter 'employee' when calling createemployee");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Employee;
      return this.apiClient.callApi(
        '/employee', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteemployee operation.
     * @callback module:api/EmployeeApi~deleteemployeeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} employeeId the Id parameter
     * @param {module:api/EmployeeApi~deleteemployeeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteemployee(employeeId, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling deleteemployee");
      }

      let pathParams = {
        'employeeId': employeeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/employee/{employeeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllemployee operation.
     * @callback module:api/EmployeeApi~getAllemployeeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Employee>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/EmployeeApi~getAllemployeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Employee>}
     */
    getAllemployee(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Employee];
      return this.apiClient.callApi(
        '/employee/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getemployee operation.
     * @callback module:api/EmployeeApi~getemployeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} employeeId the Id parameter
     * @param {module:api/EmployeeApi~getemployeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */
    getemployee(employeeId, callback) {
      let postBody = null;
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling getemployee");
      }

      let pathParams = {
        'employeeId': employeeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Employee;
      return this.apiClient.callApi(
        '/employee/{employeeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateemployee operation.
     * @callback module:api/EmployeeApi~updateemployeeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} employeeId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Employee} opts.employee data to be updated
     * @param {module:api/EmployeeApi~updateemployeeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */
    updateemployee(employeeId, opts, callback) {
      opts = opts || {};
      let postBody = opts['employee'];
      // verify the required parameter 'employeeId' is set
      if (employeeId === undefined || employeeId === null) {
        throw new Error("Missing the required parameter 'employeeId' when calling updateemployee");
      }

      let pathParams = {
        'employeeId': employeeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Employee;
      return this.apiClient.callApi(
        '/employee/{employeeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
