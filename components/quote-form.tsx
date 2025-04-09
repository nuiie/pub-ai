"use client"

import type React from "react"

import { useState } from "react"

export function QuoteForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
    timeline: "30-60 days",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your server
    alert("Quote request submitted! We'll contact you shortly.")
  }

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 p-6">
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Contact Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="projectDetails" className="mb-2 block text-sm font-semibold">
            Project Details
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={4}
            value={formData.projectDetails}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm focus:outline-none"
            placeholder="Please provide any specific requirements or questions about the products in your quote."
          ></textarea>
        </div>

        <div>
          <label htmlFor="timeline" className="mb-2 block text-sm font-semibold">
            Project Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white p-3 text-sm focus:outline-none"
          >
            <option value="Immediate">Immediate (0-30 days)</option>
            <option value="30-60 days">30-60 days</option>
            <option value="60-90 days">60-90 days</option>
            <option value="90+ days">90+ days</option>
          </select>
        </div>
      </div>

      <div className="mb-6 flex items-start">
        <input
          type="checkbox"
          id="termsAccepted"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          required
          className="mt-1 h-4 w-4 border border-gray-300"
        />
        <label htmlFor="termsAccepted" className="ml-2 text-sm">
          I agree to the terms and conditions and authorize Telecom Hardware Supply to contact me regarding my quote
          request. *
        </label>
      </div>

      <button
        type="submit"
        className="bg-black px-8 py-3 text-sm text-white hover:bg-gray-800"
        disabled={!formData.termsAccepted}
      >
        Submit Quote Request
      </button>
    </form>
  )
}
