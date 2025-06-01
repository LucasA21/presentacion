'use client'

import { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'

export default function DarkModeSwitch() {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let mode = localStorage.getItem('theme')
    if (!mode) {
      mode = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    const isDark = mode === 'dark'
    setChecked(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  function onToggle(next: boolean | ((prevState: boolean) => boolean) | undefined) {
    const value = typeof next === 'boolean' ? next : false
    setChecked(value)
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem('theme', value ? 'dark' : 'light')
  }

  return (
    <Switch
      checked={checked}
      onCheckedChange={onToggle}
      className="peer mb-2"
    />
  )
}
