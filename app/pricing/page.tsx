'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, Zap, Crown, Sparkles } from 'lucide-react'

export default function PricingPage() {
  const { t, language } = useI18n()

  const plans = [
    {
      name: language === 'bn' ? 'বিনামূল্যে' : 'Free',
      nameBn: 'বিনামূল্যে',
      price: '৳0',
      priceEn: '৳0',
      period: language === 'bn' ? '/মাস' : '/month',
      description: language === 'bn' 
        ? 'ব্যক্তিগত ব্যবহারের জন্য আদর্শ' 
        : 'Perfect for personal use',
      icon: Sparkles,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      features: [
        { text: language === 'bn' ? 'বছরে ১টি কর রিটার্ন' : '1 tax return per year', included: true },
        { text: language === 'bn' ? 'মৌলিক এআই সহায়তা' : 'Basic AI assistance', included: true },
        { text: language === 'bn' ? '৫টি নথি আপলোড' : '5 document uploads', included: true },
        { text: language === 'bn' ? 'ইমেইল সহায়তা' : 'Email support', included: true },
        { text: language === 'bn' ? 'কর ক্যালকুলেটর' : 'Tax calculator', included: true },
        { text: language === 'bn' ? 'অগ্রাধিকার সহায়তা' : 'Priority support', included: false },
        { text: language === 'bn' ? 'ট্যাক্স বিশেষজ্ঞ পরামর্শ' : 'Tax expert consultation', included: false },
      ],
      cta: language === 'bn' ? 'শুরু করুন' : 'Get Started',
      popular: false
    },
    {
      name: language === 'bn' ? 'প্রো' : 'Pro',
      nameBn: 'প্রো',
      price: '৳499',
      priceEn: '৳499',
      period: language === 'bn' ? '/মাস' : '/month',
      description: language === 'bn' 
        ? 'পেশাদার ও ব্যবসার জন্য' 
        : 'For professionals & businesses',
      icon: Zap,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      features: [
        { text: language === 'bn' ? 'সীমাহীন কর রিটার্ন' : 'Unlimited tax returns', included: true },
        { text: language === 'bn' ? 'উন্নত এআই সহায়তা' : 'Advanced AI assistance', included: true },
        { text: language === 'bn' ? 'সীমাহীন নথি আপলোড' : 'Unlimited document uploads', included: true },
        { text: language === 'bn' ? 'অগ্রাধিকার সহায়তা' : 'Priority support', included: true },
        { text: language === 'bn' ? 'সব বৈশিষ্ট্য অ্যাক্সেস' : 'All features access', included: true },
        { text: language === 'bn' ? 'মাসিক ১টি বিশেষজ্ঞ পরামর্শ' : '1 expert consultation/month', included: true },
        { text: language === 'bn' ? 'কাস্টম রিপোর্ট' : 'Custom reports', included: true },
      ],
      cta: language === 'bn' ? 'আপগ্রেড করুন' : 'Upgrade Now',
      popular: true
    },
    {
      name: language === 'bn' ? 'এন্টারপ্রাইজ' : 'Enterprise',
      nameBn: 'এন্টারপ্রাইজ',
      price: language === 'bn' ? 'কাস্টম' : 'Custom',
      priceEn: 'Custom',
      period: '',
      description: language === 'bn' 
        ? 'বড় সংস্থা ও টিমের জন্য' 
        : 'For large organizations & teams',
      icon: Crown,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      features: [
        { text: language === 'bn' ? 'সব প্রো বৈশিষ্ট্য' : 'All Pro features', included: true },
        { text: language === 'bn' ? 'সীমাহীন ব্যবহারকারী' : 'Unlimited users', included: true },
        { text: language === 'bn' ? 'ডেডিকেটেড একাউন্ট ম্যানেজার' : 'Dedicated account manager', included: true },
        { text: language === 'bn' ? 'কাস্টম ইন্টিগ্রেশন' : 'Custom integrations', included: true },
        { text: language === 'bn' ? '২৪/৭ ফোন সহায়তা' : '24/7 phone support', included: true },
        { text: language === 'bn' ? 'সীমাহীন বিশেষজ্ঞ পরামর্শ' : 'Unlimited expert consultations', included: true },
        { text: language === 'bn' ? 'এসএলএ গ্যারান্টি' : 'SLA guarantee', included: true },
      ],
      cta: language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' ? 'সহজ এবং স্বচ্ছ মূল্য' : 'Simple & Transparent Pricing'}
          </h1>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' 
              ? 'আপনার প্রয়োজন অনুযায়ী সঠিক পরিকল্পনা বেছে নিন' 
              : 'Choose the perfect plan for your needs'}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Card 
                key={index} 
                className={`relative ${
                  plan.popular 
                    ? 'border-primary shadow-xl scale-105' 
                    : 'border-muted'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'জনপ্রিয়' : 'Most Popular'}
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${plan.bgColor} flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 ${plan.color}`} />
                  </div>
                  
                  <CardTitle className={`text-2xl mb-2 ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {plan.name}
                  </CardTitle>
                  
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-muted-foreground ml-1 ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  
                  <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className={`flex items-start space-x-3 ${
                          !feature.included ? 'opacity-40' : ''
                        }`}
                      >
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          feature.included ? 'text-green-500' : 'text-muted-foreground'
                        }`} />
                        <span className={`text-sm ${
                          language === 'bn' ? 'bangla-text' : ''
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className={`text-3xl font-bold text-center mb-8 ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' ? 'প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className={`text-lg ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  {language === 'bn' 
                    ? 'আমি কি যেকোনো সময় আমার প্ল্যান পরিবর্তন করতে পারি?' 
                    : 'Can I change my plan at any time?'}
                </CardTitle>
              </CardHeader>
              <CardContent className={language === 'bn' ? 'bangla-text' : ''}>
                <p className="text-muted-foreground">
                  {language === 'bn'
                    ? 'হ্যাঁ, আপনি যেকোনো সময় আপগ্রেড বা ডাউনগ্রেড করতে পারেন। পরিবর্তন আপনার পরবর্তী বিলিং চক্র থেকে কার্যকর হবে।'
                    : 'Yes, you can upgrade or downgrade at any time. Changes will be effective from your next billing cycle.'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className={`text-lg ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  {language === 'bn' 
                    ? 'কোন পেমেন্ট পদ্ধতি গৃহীত হয়?' 
                    : 'What payment methods are accepted?'}
                </CardTitle>
              </CardHeader>
              <CardContent className={language === 'bn' ? 'bangla-text' : ''}>
                <p className="text-muted-foreground">
                  {language === 'bn'
                    ? 'আমরা সব প্রধান ক্রেডিট কার্ড, ডেবিট কার্ড, মোবাইল ব্যাংকিং (বিকাশ, নগদ, রকেট) এবং ব্যাংক ট্রান্সফার গ্রহণ করি।'
                    : 'We accept all major credit cards, debit cards, mobile banking (bKash, Nagad, Rocket), and bank transfers.'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className={`text-lg ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  {language === 'bn' 
                    ? 'রিফান্ড নীতি কী?' 
                    : 'What is the refund policy?'}
                </CardTitle>
              </CardHeader>
              <CardContent className={language === 'bn' ? 'bangla-text' : ''}>
                <p className="text-muted-foreground">
                  {language === 'bn'
                    ? 'আমরা ৩০ দিনের মানি-ব্যাক গ্যারান্টি অফার করি। আপনি যদি সন্তুষ্ট না হন, সম্পূর্ণ রিফান্ডের জন্য আমাদের সাথে যোগাযোগ করুন।'
                    : 'We offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="py-12">
              <h3 className={`text-2xl font-bold mb-4 ${
                language === 'bn' ? 'bangla-text' : ''
              }`}>
                {language === 'bn' 
                  ? 'এখনও নিশ্চিত নন?' 
                  : 'Still not sure?'}
              </h3>
              <p className={`text-muted-foreground mb-6 ${
                language === 'bn' ? 'bangla-text' : ''
              }`}>
                {language === 'bn'
                  ? 'আমাদের টিমের সাথে কথা বলুন এবং আপনার জন্য সেরা পরিকল্পনা খুঁজুন।'
                  : 'Talk to our team and find the best plan for you.'}
              </p>
              <Button size="lg" className={language === 'bn' ? 'bangla-text' : ''}>
                {language === 'bn' ? 'আমাদের সাথে যোগাযোগ করুন' : 'Contact Us'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
