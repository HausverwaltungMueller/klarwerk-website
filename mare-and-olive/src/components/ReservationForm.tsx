import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import Button from './Button'

type FormState = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  requests: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  requests: '',
}

const fieldClasses =
  'w-full border-0 border-b border-charcoal/25 bg-transparent py-3 font-sans text-base text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-0 transition-colors duration-300'

const labelClasses = 'mb-2 block text-xs font-medium uppercase tracking-widest2 text-charcoal/60'

export default function ReservationForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')

  const update = (key: keyof FormState) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!values.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (!values.phone.trim()) next.phone = 'Please add a phone number.'
    if (!values.date) next.date = 'Please choose a date.'
    if (!values.time) next.time = 'Please choose a time.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    // Mock submission — no backend. Simulates a brief processing delay.
    window.setTimeout(() => {
      setStatus('done')
    }, 900)
  }

  if (status === 'done') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-start gap-6 py-8"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-olive text-limestone-light">
          <Check className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <div>
          <h3 className="headline text-4xl text-charcoal sm:text-5xl">Thank you.</h3>
          <p className="mt-4 max-w-md text-base text-charcoal/70">
            Your reservation request has been received. We will contact you shortly to confirm your table.
          </p>
          <p className="mt-6 text-sm text-charcoal/50">
            A confirmation will be sent to <span className="text-charcoal/80">{values.email}</span>.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setValues(initialState)
            setStatus('idle')
          }}
          className="text-xs font-medium uppercase tracking-widest2 text-charcoal/60 underline underline-offset-4 transition-colors hover:text-terracotta"
        >
          Make another request
        </button>
      </motion.div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        noValidate
        className="space-y-8"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={update('name')}
              placeholder="Your full name"
              className={fieldClasses}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-xs text-terracotta-dark">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={update('email')}
              placeholder="you@example.com"
              className={fieldClasses}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-xs text-terracotta-dark">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={update('phone')}
              placeholder="+49 40 000 0000"
              className={fieldClasses}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-2 text-xs text-terracotta-dark">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="guests" className={labelClasses}>
              Number of guests
            </label>
            <select id="guests" value={values.guests} onChange={update('guests')} className={fieldClasses}>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className={labelClasses}>
              Date
            </label>
            <input
              id="date"
              type="date"
              value={values.date}
              onChange={update('date')}
              className={fieldClasses}
              aria-invalid={Boolean(errors.date)}
              aria-describedby={errors.date ? 'date-error' : undefined}
            />
            {errors.date && (
              <p id="date-error" className="mt-2 text-xs text-terracotta-dark">
                {errors.date}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="time" className={labelClasses}>
              Time
            </label>
            <input
              id="time"
              type="time"
              value={values.time}
              onChange={update('time')}
              className={fieldClasses}
              aria-invalid={Boolean(errors.time)}
              aria-describedby={errors.time ? 'time-error' : undefined}
            />
            {errors.time && (
              <p id="time-error" className="mt-2 text-xs text-terracotta-dark">
                {errors.time}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="requests" className={labelClasses}>
            Special requests <span className="text-charcoal/35">(optional)</span>
          </label>
          <textarea
            id="requests"
            rows={3}
            value={values.requests}
            onChange={update('requests')}
            placeholder="Allergies, celebrations, seating preferences…"
            className={`${fieldClasses} resize-none`}
          />
        </div>

        <div className="pt-2">
          <Button type="submit" size="lg" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Request Reservation'}
          </Button>
          <p className="mt-4 text-xs text-charcoal/45">
            This is a demonstration form. No reservation data is transmitted to a live booking system.
          </p>
        </div>
      </motion.form>
    </AnimatePresence>
  )
}
