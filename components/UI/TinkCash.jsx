"use client"

import Tinkoff from 'react-tinkoff-pay'

export default function TinkCash() {

  const form = {	
    terminalkey: '1657472280541',
    frame: 'true',
    language: 'ru',
    amount: '65000'
  }

  let closeButton = {
    display: 'none'
  };

  const style = {
    closeButton,
  }

  return (
    <Tinkoff.Pay form={form} style={style}/>
  )
}
