import React, { useEffect, useState } from 'react'
import './PageLoader.css'

export default function PageLoader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 18 + 5
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          setDone(true)
          setTimeout(onComplete, 600)
        }, 300)
      }
      setProgress(Math.round(current))
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`page-loader ${done ? 'done' : ''}`}>
      <div className="page-loader__content">
        <div className="page-loader__logo">LC</div>
        <div className="page-loader__bar-track">
          <div className="page-loader__bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="page-loader__label">{progress}%</p>
      </div>
    </div>
  )
}
