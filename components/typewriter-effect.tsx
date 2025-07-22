"use client"

import { useState, useEffect } from "react"

interface TypewriterEffectProps {
  words: string[]
  speed?: number // Speed in ms per character
  delayBetweenWords?: number // Delay in ms before typing next word
  loop?: boolean
}

export function TypewriterEffect({
  words,
  speed = 70, // Default speed
  delayBetweenWords = 1500, // Default delay
  loop = true,
}: TypewriterEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleTyping = () => {
      const currentWord = words[wordIndex]

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)

        if (charIndex === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      } else {
        setCurrentText(currentWord.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)

        if (charIndex === currentWord.length) {
          setIsDeleting(true)
          timer = setTimeout(() => {}, delayBetweenWords) // Pause before deleting
        }
      }
    }

    const typingSpeed = isDeleting ? speed / 2 : speed // Faster deletion

    timer = setTimeout(handleTyping, typingSpeed)

    // If not looping and finished, clear timeout
    if (!loop && wordIndex === words.length - 1 && charIndex === words[wordIndex].length && !isDeleting) {
      clearTimeout(timer)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, wordIndex, words, speed, delayBetweenWords, loop])

  return <span className="inline-block min-h-[1.5em]">{currentText}</span>
}
