/**
 * Module dependencies
 */
var request = require('request');


module.exports = (function () {


  /**
   * XmlAdapter
   * 
   * @module      :: Adapter
   * @description :: A short summary of what this adapter is for and what interfaces it supports.
   * @docs        :: http://sailsjs.org/#!documentation/adapters
   *
   * @syncable    :: false
   * @schema      :: false
   */

  var Adapter = {



    /**
     * registerCollection() is run multiple times (once for each model, aka collection)
     * before the server ever starts.  It allows us to register our models with the
     * underlying adapter interface.  (don't forget to cb() when you're done!)
     */

    registerCollection: function (collection, cb) {
      console.log('!');
      cb();
    },


    /**
     * @param cid - all-lowercased identity of model
     * @param options
     *        template - the name of the XML file (located in adapter/templates/*.xml)
     */
    sendXML: function (cid, options, cb) {
      // options.template = '';
      console.log(cid,options);

      if (!cb) {
        throw new Error('`cb` argument is required.' + usage());
      }

      if (!options.template) {
        return cb('`template` argument is required.' + usage());
      }

      var verb = options.verb || 'post',
          template = options.template;

      request[verb](function (err, response, body) {
        if (err) return cb(err);


      });
      cb();


      function usage() {
        return '\nUsage: sendXML(options, cb)';
      }
    },


    /**
     * Parse an XML response into a javascript object/array
     */
    parseResponse: function (xml) {
      
    }

  };


	return Adapter;
})();
