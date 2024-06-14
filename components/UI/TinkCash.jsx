"use client"

import Tinkoff from 'react-tinkoff-pay'

export default function TinkCash() {

  const form = {	
    terminalkey: process.env.NEXT_PUBLIC_TERMINAL_KEY,
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
