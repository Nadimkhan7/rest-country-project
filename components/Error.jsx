import React, { use } from 'react'
import { useRouteError } from 'react-router';

function Error() {
    const error=useRouteError();
    console.log(error.status);
   
  return (
    <div>{error.statusText}</div>
  )
}

export default Error;