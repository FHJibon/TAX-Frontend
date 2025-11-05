'use client'

import React from 'react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, ArrowLeft, CheckCircle, Receipt } from 'lucide-react'

export default function ForgotPasswordPage() {
  const { t, language } = useI18n()
  const [email, setEmail] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Receipt className="h-10 w-10 text-white" strokeWidth={2} />
            </div>
          </Link>
        </div>

        {/* Forgot Password Form */}
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className={`text-2xl font-bold ${
              language === 'bn' ? 'bangla-text' : ''
            }`}>
              {language === 'bn' ? 'পাসওয়ার্ড ভুলে গেছেন?' : 'Forgot Password?'}
            </CardTitle>
            <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
              {language === 'bn' 
                ? 'চিন্তা করবেন না! আপনার ইমেইল ঠিকানা লিখুন এবং আমরা আপনাকে পাসওয়ার্ড রিসেট লিংক পাঠাব।' 
                : "Don't worry! Enter your email address and we'll send you a password reset link."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === 'bn' ? 'আপনার ইমেইল লিখুন' : 'Enter your email'}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  {language === 'bn' ? 'রিসেট লিংক পাঠান' : 'Send Reset Link'}
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className={`text-lg font-medium mb-2 ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? 'ইমেইল পাঠানো হয়েছে!' : 'Email Sent!'}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' 
                      ? `আমরা ${email} ঠিকানায় একটি পাসওয়ার্ড রিসেট লিংক পাঠিয়েছি। আপনার ইনবক্স দেখুন।` 
                      : `We've sent a password reset link to ${email}. Please check your inbox.`}
                  </p>
                </div>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline"
                  className="w-full"
                >
                  {language === 'bn' ? 'আবার চেষ্টা করুন' : 'Try Again'}
                </Button>
              </div>
            )}

            {/* Back to Login */}
            <div className="text-center mt-6">
              <Link 
                href="/login" 
                className="text-sm text-primary hover:underline flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' ? 'লগইনে ফিরে যান' : 'Back to Login'}
                </span>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Help */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p className={language === 'bn' ? 'bangla-text' : ''}>
            {language === 'bn' 
              ? 'সমস্যা হচ্ছে? আমাদের সাথে যোগাযোগ করুন ' 
              : 'Having trouble? Contact us at '}
            <Link href="mailto:support@example.com" className="text-primary hover:underline">
              support@taxassistant.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
