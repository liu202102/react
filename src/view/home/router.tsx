import React from 'react'

import RouterView from '../../router/routerView'

export default function Homer ( props: any ) {
  const { route } = props
  return <RouterView route={ route } />
}
