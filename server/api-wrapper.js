let Future = require ( 'fibers/future' )

class LoggerApi {
  constructor () {
    this.appId = Meteor.settings.private.applicationId
  }

  request ( options ) {
    let handleRequest = new Future (),
        url           = 'http://localhost:3000/api/v1/logs/ingest'

    HTTP.call ( 'POST', url, {
      headers : { 'x-application-id' : this.appId },
      data    : options
    }, ( error, response ) => {
      if ( error ) {
        handleRequest.throw ( error )
      }
      else {
        handleRequest.return ( response )
      }
    } )
    return handleRequest.wait ()
  }
}

Logger = new LoggerApi ()