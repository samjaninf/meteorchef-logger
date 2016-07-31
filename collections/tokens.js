Tokens = new Mongo.Collection ( 'logs' );

if ( Meteor.isServer ) {
//  Tokens._ensureIndex ( { 'date' : 1 } );
}

Tokens.allow ( {
  insert : () => false,
  update : () => false,
  remove : () => false
} );

Tokens.deny ( {
  insert : () => true,
  update : () => true,
  remove : () => true
} );

let TokensSchema = new SimpleSchema ( {
  'applicationId' : {
    type  : String,
    label : 'The ID of the application this token belongs to.'
  },
  'date'          : {
    type  : Date,
    label : 'The date and time when this token was issued.'
  },
  'type'          : {
    type          : String,
    allowedValues : [ 'server', 'browser' ],
    label         : 'The type of token.'
  },
  'token'         : {
    type  : String,
    label : 'The actual authentication token for the application.',
  }
} );

Logs.attachSchema ( LogsSchema );