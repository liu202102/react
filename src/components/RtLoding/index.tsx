import React from 'react'
import style from './index.module.less'

interface I_num {
  num: number
}

export default function NnHeader ( props: I_num ) {
  const list: Array<number> = []
  for ( let i = 0; i < props.num; i++ ) {
    list.push( i )
  }
  return (
    <div>
      { list.map( v => {
        return (
          <div
            key={ v }
            className={ style.lodin }
          />
        )
      } ) }
    </div>

  )
}
