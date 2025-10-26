'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registrationSchema, type RegistrationFormData } from '@/lib/validation'
import { RegistrationResponse } from '@/types'
import Image from 'next/image'

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submitPressed, setSubmitPressed] = useState(false)
  const [isDisclaimerExpanded, setIsDisclaimerExpanded] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  })

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const result: RegistrationResponse = await response.json()
      
      if (result.success) {
        // Redirect to game
        window.location.href = result.redirectUrl
      } else {
        throw new Error('Registration failed')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="landing-page">
      <div className="landing-container">
        {/* Header with Logo and Title */}
        <div className="landing-header">
          
          {/* Dynamics Explorer Title Image */}
          <h1 className="sr-only">DYNAMICS EXPLORER</h1>
          <Image 
            src="/landing/images/Dynamics explorer.png" 
            alt="DYNAMICS EXPLORER"
            className="landing-title"
            width={500}
            height={120}
            priority
          />
          
          {/* Subtitle */}
          <p className="landing-text-large">
            Register to start your conference challenge
          </p>
        </div>

        {/* Form Tile */}
        <div className="landing-form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="landing-form">
            {/* Name Field */}
            <div className="landing-form-field">
              <input
                type="text"
                {...register('name')}
                placeholder="Full Name"
                className="landing-form-input"
              />
              {errors.name && (
                <p className="landing-form-error">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="landing-form-field">
              <input
                type="email"
                {...register('email')}
                placeholder="Email Address"
                className="landing-form-input"
              />
              {errors.email && (
                <p className="landing-form-error">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Company Field */}
            <div className="landing-form-field">
              <input
                type="text"
                {...register('company')}
                placeholder="Company/Organization"
                className="landing-form-input"
              />
              {errors.company && (
                <p className="landing-form-error">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="landing-form-error-container">
                <p className="landing-form-error-text">
                  {error}
                </p>
              </div>
            )}

            {/* GDPR Disclaimer - Collapsible */}
            <div className="landing-disclaimer">
              <button
                type="button"
                onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
                className="landing-disclaimer-toggle"
                aria-expanded={isDisclaimerExpanded}
              >
                <span className="landing-disclaimer-title">
                  Privacy & Data Processing Notice
                </span>
                <span className="landing-disclaimer-icon">
                  {isDisclaimerExpanded ? '▼' : '▶'}
                </span>
              </button>
              
              {isDisclaimerExpanded && (
                <div className="landing-disclaimer-content">
                  <p className="landing-disclaimer-text">
                    By registering, you acknowledge that this activity is part of Companial&apos;s marketing engagement. 
                    Your contact details will be used to follow up with you after the event about our products, services, 
                    and future events. We process your personal data in accordance with our{' '}
                    <a 
                      href="/data-protection-notice" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="landing-disclaimer-link"
                    >
                      Data Protection Notice
                    </a>
                    , where you can learn how we handle your data, who we share it with, and how you can withdraw your 
                    consent at any time. Please note: participation in the game requires providing your contact details 
                    for this purpose.
                  </p>
                </div>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="landing-consent">
              <input
                type="checkbox"
                id="consent"
                {...register('consent')}
                className="landing-consent-checkbox"
              />
              <label htmlFor="consent" className="landing-consent-label">
                I agree that Companial may contact me by email about its products, services, and events, 
                in accordance with the{' '}
                <a 
                  href="/data-protection-notice" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="landing-disclaimer-link"
                >
                  Data Protection Notice
                </a>
                .
              </label>
            </div>
            {errors.consent && (
              <p className="landing-consent-error">
                {errors.consent.message}
              </p>
            )}

            {/* Submit Button */}
            <div className="landing-submit-wrapper">
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ width: '100%', background: 'none', border: 'none', padding: 0, cursor: isSubmitting ? 'not-allowed' : 'pointer', position: 'relative' }}
                onMouseDown={() => setSubmitPressed(true)}
                onMouseUp={() => setSubmitPressed(false)}
                onMouseLeave={() => setSubmitPressed(false)}
                onTouchStart={() => setSubmitPressed(true)}
                onTouchEnd={() => setSubmitPressed(false)}
                onTouchCancel={() => setSubmitPressed(false)}
                aria-label={isSubmitting ? 'Registering' : 'Start playing'}
              >
                <Image 
                  src={submitPressed || isSubmitting ? '/landing/images/BTN-orange DARK.png' : '/landing/images/BTN-orange.png'} 
                  alt="Start Playing"
                  className="landing-button"
                  width={450}
                  height={60}
                  style={{ opacity: isSubmitting ? 0.6 : 1, transition: 'opacity 0.2s' }}
                />
                <div className="landing-button-text">
                  {isSubmitting ? 'Registering...' : 'Start Playing'}
                </div>
              </button>
            </div>
          </form>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
} 