'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { 
  HelpCircle, 
  Mail, 
  MessageCircle, 
  Phone, 
  Send,
  BookOpen,
  Video,
  FileQuestion,
  ChevronDown
} from 'lucide-react'

interface FAQ {
  question: string
  questionBn: string
  answer: string
  answerBn: string
}

export default function HelpPage() {
  const { t, language } = useI18n()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [subject, setSubject] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const faqs: FAQ[] = [
    {
      question: 'How do I file my income tax return?',
      questionBn: 'আমি কিভাবে আমার আয়কর রিটার্ন দাখিল করব?',
      answer: 'You can file your income tax return through our platform by uploading your documents in the Workspace section. Our AI assistant will guide you through the process step-by-step.',
      answerBn: 'আপনি ওয়ার্কস্পেস বিভাগে আপনার নথি আপলোড করে আমাদের প্ল্যাটফর্মের মাধ্যমে আপনার আয়কর রিটার্ন দাখিল করতে পারেন। আমাদের এআই সহায়ক আপনাকে ধাপে ধাপে প্রক্রিয়ার মাধ্যমে গাইড করবে।'
    },
    {
      question: 'What documents do I need for tax filing?',
      questionBn: 'কর দাখিলের জন্য আমার কোন নথি প্রয়োজন?',
      answer: 'Common documents include: salary certificates, bank statements, investment proofs, property documents, and previous tax returns. The exact requirements depend on your income sources.',
      answerBn: 'সাধারণ নথিগুলির মধ্যে রয়েছে: বেতন সার্টিফিকেট, ব্যাংক স্টেটমেন্ট, বিনিয়োগের প্রমাণ, সম্পত্তির নথি এবং পূর্ববর্তী কর রিটার্ন। সঠিক প্রয়োজনীয়তা আপনার আয়ের উৎসের উপর নির্ভর করে।'
    },
    {
      question: 'How can I calculate my tax liability?',
      questionBn: 'আমি কিভাবে আমার কর দায় গণনা করতে পারি?',
      answer: 'Use our Tax Calculator tool available in the menu. Enter your income sources and deductions to get an instant calculation based on current tax laws.',
      answerBn: 'মেনুতে উপলব্ধ আমাদের ট্যাক্স ক্যালকুলেটর টুল ব্যবহার করুন। বর্তমান কর আইনের উপর ভিত্তি করে তাত্ক্ষণিক গণনা পেতে আপনার আয়ের উৎস এবং কর্তন লিখুন।'
    },
    {
      question: 'What is the deadline for tax return submission?',
      questionBn: 'কর রিটার্ন জমার সময়সীমা কী?',
      answer: 'The standard deadline is November 30th for individual taxpayers in Bangladesh. However, extensions may be granted. Always check for the latest deadlines.',
      answerBn: 'বাংলাদেশে ব্যক্তিগত করদাতাদের জন্য মানক সময়সীমা ৩০ নভেম্বর। তবে, বর্ধিতকরণ দেওয়া হতে পারে। সর্বশেষ সময়সীমার জন্য সবসময় পরীক্ষা করুন।'
    },
    {
      question: 'Can I claim tax rebate on investments?',
      questionBn: 'আমি কি বিনিয়োগে কর ছাড় দাবি করতে পারি?',
      answer: 'Yes, you can claim up to 15% tax rebate on eligible investments like life insurance, DPS, savings certificates, and provident fund contributions, subject to certain limits.',
      answerBn: 'হ্যাঁ, আপনি জীবন বীমা, ডিপিএস, সঞ্চয়পত্র এবং ভবিষ্য তহবিল অবদানের মতো যোগ্য বিনিয়োগে ১৫% পর্যন্ত কর ছাড় দাবি করতে পারেন, নির্দিষ্ট সীমার সাপেক্ষে।'
    },
    {
      question: 'How do I track my tax return status?',
      questionBn: 'আমি কিভাবে আমার কর রিটার্নের অবস্থা ট্র্যাক করব?',
      answer: 'You can track your submitted tax returns through the Dashboard. We provide real-time updates on the processing status.',
      answerBn: 'আপনি ড্যাশবোর্ডের মাধ্যমে আপনার জমাকৃত কর রিটার্ন ট্র্যাক করতে পারেন। আমরা প্রক্রিয়াকরণ অবস্থার উপর রিয়েল-টাইম আপডেট প্রদান করি।'
    },
    {
      question: 'Is my data secure on this platform?',
      questionBn: 'এই প্ল্যাটফর্মে আমার ডেটা কি নিরাপদ?',
      answer: 'Yes, we use bank-level encryption and security measures to protect your data. We comply with all data protection regulations and never share your information without consent.',
      answerBn: 'হ্যাঁ, আমরা আপনার ডেটা সুরক্ষার জন্য ব্যাংক-স্তরের এনক্রিপশন এবং নিরাপত্তা ব্যবস্থা ব্যবহার করি। আমরা সমস্ত ডেটা সুরক্ষা নিয়মকানুন মেনে চলি এবং সম্মতি ছাড়া কখনও আপনার তথ্য শেয়ার করি না।'
    },
    {
      question: 'How do I get my TIN certificate?',
      questionBn: 'আমি কিভাবে আমার টিআইএন সার্টিফিকেট পাব?',
      answer: 'You can download the TIN application form from our Forms section, fill it out, and submit it to your nearest tax office. We can help you prepare the application.',
      answerBn: 'আপনি আমাদের ফর্ম বিভাগ থেকে টিআইএন আবেদন ফর্ম ডাউনলোড করতে পারেন, এটি পূরণ করতে পারেন এবং আপনার নিকটতম কর অফিসে জমা দিতে পারেন। আমরা আপনাকে আবেদন প্রস্তুত করতে সাহায্য করতে পারি।'
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle contact form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' ? 'সাহায্য ও সহায়তা কেন্দ্র' : 'Help & Support Center'}
          </h1>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' 
              ? 'আপনার প্রশ্নের উত্তর খুঁজুন বা আমাদের সাথে যোগাযোগ করুন' 
              : 'Find answers to your questions or get in touch with us'}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Quick Links */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' ? 'দ্রুত লিংক' : 'Quick Links'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span className={language === 'bn' ? 'bangla-text' : ''}>
                    {language === 'bn' ? 'ব্যবহারকারী গাইড' : 'User Guide'}
                  </span>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Video className="h-4 w-4 mr-2" />
                  <span className={language === 'bn' ? 'bangla-text' : ''}>
                    {language === 'bn' ? 'ভিডিও টিউটোরিয়াল' : 'Video Tutorials'}
                  </span>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileQuestion className="h-4 w-4 mr-2" />
                  <span className={language === 'bn' ? 'bangla-text' : ''}>
                    {language === 'bn' ? 'সচরাচর জিজ্ঞাসা' : 'FAQ'}
                  </span>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' ? 'যোগাযোগের তথ্য' : 'Contact Information'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">support@taxassistant.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+880 1234-567890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className={`text-sm font-medium ${language === 'bn' ? 'bangla-text' : ''}`}>
                      {language === 'bn' ? 'লাইভ চ্যাট' : 'Live Chat'}
                    </p>
                    <p className={`text-sm text-muted-foreground ${language === 'bn' ? 'bangla-text' : ''}`}>
                      {language === 'bn' ? 'সোম-শুক্র, ৯ এএম - ৬ পিএম' : 'Mon-Fri, 9 AM - 6 PM'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - FAQ and Contact Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* FAQ Section */}
            <Card>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  <HelpCircle className="h-5 w-5" />
                  <span>
                    {language === 'bn' ? 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী' : 'Frequently Asked Questions'}
                  </span>
                </CardTitle>
                <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' 
                    ? 'সাধারণ প্রশ্নের উত্তর খুঁজে বের করুন' 
                    : 'Find answers to common questions'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className={language === 'bn' ? 'bangla-text' : ''}>
                        {language === 'bn' ? faq.questionBn : faq.question}
                      </AccordionTrigger>
                      <AccordionContent className={language === 'bn' ? 'bangla-text' : ''}>
                        {language === 'bn' ? faq.answerBn : faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' ? 'আমাদের সাথে যোগাযোগ করুন' : 'Get in Touch'}
                </CardTitle>
                <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' 
                    ? 'আপনার প্রশ্ন বা মন্তব্য পাঠান এবং আমরা শীঘ্রই উত্তর দেব' 
                    : 'Send us your questions or feedback and we\'ll respond shortly'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={`text-sm font-medium ${
                          language === 'bn' ? 'bangla-text' : ''
                        }`}>
                          {language === 'bn' ? 'নাম' : 'Name'}
                        </label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={language === 'bn' ? 'আপনার নাম' : 'Your name'}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={`text-sm font-medium ${
                          language === 'bn' ? 'bangla-text' : ''
                        }`}>
                          {language === 'bn' ? 'ইমেইল' : 'Email'}
                        </label>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={language === 'bn' ? 'আপনার ইমেইল' : 'Your email'}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className={`text-sm font-medium ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {language === 'bn' ? 'বিষয়' : 'Subject'}
                      </label>
                      <Input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder={language === 'bn' ? 'বিষয় লিখুন' : 'Enter subject'}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-sm font-medium ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {language === 'bn' ? 'বার্তা' : 'Message'}
                      </label>
                      <Textarea
                        value={message}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        placeholder={language === 'bn' ? 'আপনার বার্তা লিখুন' : 'Type your message'}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      {language === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className={`text-lg font-medium mb-2 ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'বার্তা পাঠানো হয়েছে!' : 'Message Sent!'}
                    </h3>
                    <p className={`text-muted-foreground ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' 
                        ? 'আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।' 
                        : 'We\'ll get back to you shortly.'}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
