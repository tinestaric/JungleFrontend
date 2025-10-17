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
          <div style={{
            marginBottom: '1rem'
          }}>
            <Image 
              src="/landing/images/Dynamics explorer.png" 
              alt="DYNAMICS EXPLORER"
              className="landing-title"
              width={500}
              height={120}
            />
          </div>
          
          {/* Subtitle */}
          <p className="landing-text-large">
            Register to start your conference challenge
          </p>
        </div>

        {/* Form Tile */}
        <div className="landing-form-container">
          <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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

            {/* Submit Button */}
            <div style={{ position: 'relative', width: '100%' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  position: 'relative'
                }}
              >
                <Image 
                  src="/landing/images/BTN-orange.png" 
                  alt="Start Playing"
                  className="landing-button"
                  width={450}
                  height={60}
                  style={{
                    opacity: isSubmitting ? 0.6 : 1,
                    transition: 'opacity 0.2s'
                  }}
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