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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.Deliverable();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Deliverable', function() {
    it('should create an instance of Deliverable', function() {
      // uncomment below and update the code to test Deliverable
      //var instane = new TempApi.Deliverable();
      //expect(instance).to.be.a(TempApi.Deliverable);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TempApi.Deliverable();
      //expect(instance).to.be();
    });

    it('should have the property dName (base name: "dName")', function() {
      // uncomment below and update the code to test the property dName
      //var instance = new TempApi.Deliverable();
      //expect(instance).to.be();
    });

    it('should have the property dDate (base name: "dDate")', function() {
      // uncomment below and update the code to test the property dDate
      //var instance = new TempApi.Deliverable();
      //expect(instance).to.be();
    });

    it('should have the property dLeader (base name: "dLeader")', function() {
      // uncomment below and update the code to test the property dLeader
      //var instance = new TempApi.Deliverable();
      //expect(instance).to.be();
    });

    it('should have the property dStatus (base name: "dStatus")', function() {
      // uncomment below and update the code to test the property dStatus
      //var instance = new TempApi.Deliverable();
      //expect(instance).to.be();
    });

  });

}));
