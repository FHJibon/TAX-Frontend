'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { FileUploader } from '@/components/FileUploader'
import { ChatBox } from '@/components/ChatBox'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Upload, 
  FileText, 
  MessageSquare,
  Image,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle
} from 'lucide-react'

export default function WorkspacePage() {
  const { t, language } = useI18n()
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([])
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null)

  const handleFilesUpload = (files: File[]) => {
    setUploadedFiles(prev => [...prev, ...files])
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const supportedDocuments = [
    {
      icon: FileText,
      title: language === 'bn' ? 'বেতন সার্টিফিকেট' : 'Salary Certificate',
      description: language === 'bn' ? 'নিয়োগকর্তা থেকে বার্ষিক বেতন সার্টিফিকেট' : 'Annual salary certificate from employer',
      formats: 'PDF, DOC, DOCX'
    },
    {
      icon: FileText,
      title: language === 'bn' ? 'টিআইএন সার্টিফিকেট' : 'TIN Certificate',
      description: language === 'bn' ? 'করদাতা শনাক্তকরণ নম্বর সার্টিফিকেট' : 'Taxpayer Identification Number certificate',
      formats: 'PDF, JPG, PNG'
    },
    {
      icon: FileText,
      title: language === 'bn' ? 'ব্যাংক স্টেটমেন্ট' : 'Bank Statements',
      description: language === 'bn' ? '১২ মাসের ব্যাংক স্টেটমেন্ট' : '12 months bank statements',
      formats: 'PDF, JPG, PNG'
    },
    {
      icon: Image,
      title: language === 'bn' ? 'বিনিয়োগ নথি' : 'Investment Documents',
      description: language === 'bn' ? 'এফডিআর, ডিপিএস, বীমা সার্টিফিকেট' : 'FDR, DPS, Insurance certificates',
      formats: 'PDF, JPG, PNG'
    }
  ]

  const faqs = [
    {
      question: language === 'bn' ? 'কীভাবে আমি আমার কর রিটার্ন দাখিল করব?' : 'How do I file my tax return?',
      answer: language === 'bn' 
        ? 'আপনার সমস্ত প্রয়োজনীয় নথি আপলোড করুন এবং আমাদের এআই সহায়ক আপনাকে ধাপে ধাপে প্রক্রিয়া অনুসরণ করতে সাহায্য করবে।' 
        : 'Upload all your required documents and our AI assistant will guide you through the process step by step.'
    },
    {
      question: language === 'bn' ? 'কর দাখিলের জন্য কোন নথিগুলো প্রয়োজন?' : 'What documents do I need for tax filing?',
      answer: language === 'bn' 
        ? 'আপনার বেতন সার্টিফিকেট, টিআইএন সার্টিফিকেট, ব্যাংক স্টেটমেন্ট এবং বিনিয়োগ নথি প্রয়োজন।' 
        : 'You need your salary certificate, TIN certificate, bank statements, and investment documents.'
    },
    {
      question: language === 'bn' ? 'আমার তথ্য কি নিরাপদ?' : 'Is my information secure?',
      answer: language === 'bn' 
        ? 'হ্যাঁ, আপনার সমস্ত তথ্য ব্যাংক-স্তরের এনক্রিপশন দ্বারা সুরক্ষিত এবং আমরা কখনো আপনার ডেটা শেয়ার করি না।' 
        : 'Yes, all your information is protected with bank-level encryption and we never share your data.'
    },
    {
      question: language === 'bn' ? 'আমি কি বাংলায় সাহায্য পেতে পারি?' : 'Can I get help in Bengali?',
      answer: language === 'bn' 
        ? 'অবশ্যই! আমাদের এআই সহায়ক ইংরেজি এবং বাংলা উভয় ভাষায় সম্পূর্ণ সহায়তা প্রদান করে।' 
        : 'Absolutely! Our AI assistant provides full support in both English and Bengali.'
    },
    {
      question: language === 'bn' ? 'সর্বোচ্চ ফাইল সাইজ কত?' : 'What is the maximum file size?',
      answer: language === 'bn' 
        ? 'প্রতিটি ফাইলের সর্বোচ্চ সাইজ ১০ এমবি এবং আপনি একবারে সর্বোচ্চ ৫টি ফাইল আপলোড করতে পারেন।' 
        : 'Maximum file size is 10MB per file and you can upload up to 5 files at once.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className={`text-3xl md:text-4xl font-bold ${
              language === 'bn' ? 'bangla-text' : ''
            }`}>
              {language === 'bn' ? 'কর সহায়ক ওয়ার্কস্পেস' : 'Tax Assistant Workspace'}
            </h1>
          </div>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' 
              ? 'আপনার নথি আপলোড করুন এবং আমাদের এআই সহায়কের সাথে কথা বলুন' 
              : 'Upload your documents and chat with our AI assistant'}
          </p>
        </div>

        <div className="space-y-3">
          {/* Top Row - Upload and Chat */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left: Upload Section */}
            <div className="flex flex-col space-y-3">
              {/* Interactive Uploader */}
              <FileUploader onFilesUpload={handleFilesUpload} maxFiles={1} />

              {/* Uploaded Files Status */}
              {uploadedFiles.length > 0 ? (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className={`text-sm ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'আপলোড করা ফাইল' : 'Uploaded Files'}
                    </CardTitle>
                    <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                      {language === 'bn' 
                        ? `${uploadedFiles.length} টি ফাইল প্রক্রিয়াকরণ সম্পন্ন` 
                        : `${uploadedFiles.length} file${uploadedFiles.length > 1 ? 's' : ''} processed`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-green-600 dark:text-green-400 flex items-center">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {language === 'bn' ? 'সম্পন্ন' : 'Done'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-dashed">
                  <CardContent className="py-20 text-center">
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                    <p className={`text-base font-medium text-muted-foreground mb-2 ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' 
                        ? 'এখনও কোনো ফাইল আপলোড করা হয়নি' 
                        : 'No files uploaded yet'}
                    </p>
                    <p className={`text-sm text-muted-foreground ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' 
                        ? 'উপরে ক্লিক করে আপনার নথি আপলোড করুন' 
                        : 'Click above to upload your documents'}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right: Chat Section */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className={`flex items-center space-x-2 ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    <MessageSquare className="h-5 w-5" />
                    <span>{t('nav.chat')}</span>
                  </CardTitle>
                  <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                    {language === 'bn' 
                      ? 'কর সম্পর্কিত যেকোনো প্রশ্ন করুন' 
                      : 'Ask any tax-related questions'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChatBox className="w-full" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Row - Supported Documents and FAQ */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Supported Documents */}
            <Card>
              <CardHeader>
                <CardTitle className={`text-lg ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  {language === 'bn' ? 'সমর্থিত নথি' : 'Supported Documents'}
                </CardTitle>
                <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' 
                    ? 'কর দাখিলের জন্য আপলোড করা যায় এমন নথি' 
                    : 'Documents you can upload for tax filing'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportedDocuments.map((doc, index) => {
                  const Icon = doc.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium text-sm ${
                          language === 'bn' ? 'bangla-text' : ''
                        }`}>
                          {doc.title}
                        </h4>
                        <p className={`text-xs text-muted-foreground mb-1 ${
                          language === 'bn' ? 'bangla-text' : ''
                        }`}>
                          {doc.description}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {doc.formats}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardHeader className="pt-4">
                <CardTitle className={`flex items-center space-x-2 ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  <HelpCircle className="h-5 w-5" />
                  <span>{language === 'bn' ? 'প্রায়শই জিজ্ঞাসিত প্রশ্ন' : 'Frequently Asked Questions'}</span>
                </CardTitle>
                <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' 
                    ? 'সাধারণ প্রশ্নের দ্রুত উত্তর' 
                    : 'Quick answers to common questions'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-accent transition-colors"
                    >
                      <span className={`font-medium text-sm ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {faq.question}
                      </span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="h-4 w-4 flex-shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="h-4 w-4 flex-shrink-0 ml-2" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className={`p-4 pt-0 text-sm text-muted-foreground ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
