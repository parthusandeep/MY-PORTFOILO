"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast" // Assuming you have useToast hook

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    // Simulate API call
await new Promise((resolve) => setTimeout(resolve, 1500))

console.log("Form submitted:", formData)

toast({
  title: "Message Sent!",
  description: "Thanks for reaching out. I'll get back to you soon.",
  variant: "default",
})
try {
  const response = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

  if (response.ok) {
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default",
    })
    setFormData({ name: "", email: "", message: "" })
  }

} catch (error) {
  console.error("Submission error:", error)
  }


    
  }

  
  
  

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-card rounded-lg shadow-xl border border-border">
      <div className="grid gap-2">
        <Label htmlFor="name" className="text-foreground text-left">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-background border-border text-foreground focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-foreground text-left">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-background border-border text-foreground focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message" className="text-foreground text-left">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-background border-border text-foreground focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
