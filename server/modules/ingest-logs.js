const _handlePreflight = (response => {
  response.setHeader ( 'Access-Control-Allow-Origin', '*' )
  response.setHeader ( 'Access-Control-Allow-Headers', 'Content-Type, Accept, X-Application-ID' )
  response.setHeader ( 'Access-Control-Allow-Methods', 'OPTIONS, POST' )
  response.setHeader ( 'Content-Type', 'text/plain' )
  response.end ( 'Handle OPTIONS preflight.' )
})

const _authenticateRequest = ( token ) => {
  return token === '123456789'
};

const _handleResponse = ( response, code, message ) => {
  response.statusCode = code
  response.end ( message )
}

const _verifyItemContents = ( item )=> {
  return Match.test ( iten, {
    applicationId : String,
    type          : Match.OneOf ( 'danger', 'warning', 'info', 'success' ),
    date          : String,
    title         : String,
    message       : String,
    payload       : Match.Optional ( object )
  } )
}

const _ingestLogItem = ( item )=> {
  return Logs.insert ( item )
}

export const handlePreflight = _handlePreflight
export const authenticate    = _authenticateRequest
export const respond         = _handleResponse
export const verify          = _verifyItemContents
export const ingest          = _ingestLogItem