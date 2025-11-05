'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { FileUploader } from '@/components/FileUploader'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Upload, 
  FileText, 
  Image, 
  Shield,
  CheckCircle,
  Calendar,
  AlertCircle
} from 'lucide-react'

export default function UploadPage() {
  const { t } = useI18n()
  const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([])

  const handleFilesUpload = (files: File[]) => {
    setUploadedFiles(prev => [...prev, ...files])
  }

  const supportedDocuments = [
    {
      icon: FileText,
      title: "Salary Certificate",
      description: "Annual salary certificate from employer",
      formats: "PDF, DOC, DOCX"
    },
    {
      icon: FileText,
      title: "TIN Certificate",
      description: "Taxpayer Identification Number certificate",
      formats: "PDF, JPG, PNG"
    },
    {
      icon: FileText,
      title: "Bank Statements",
      description: "12 months bank statements",
      formats: "PDF, JPG, PNG"
    },
    {
      icon: Image,
      title: "Investment Documents",
      description: "FDR, DPS, Insurance certificates",
      formats: "PDF, JPG, PNG"
    }
  ]

  const processingSteps = [
    {
      step: 1,
      title: "Upload Documents",
      description: "Drag and drop or select your tax documents",
      status: uploadedFiles.length > 0 ? "completed" : "current"
    },
    {
      step: 2,
      title: "AI Processing",
      description: "Our AI extracts and validates information",
      status: uploadedFiles.length > 0 ? "current" : "pending"
    },
    {
      step: 3,
      title: "Review & Submit",
      description: "Review extracted data and submit your return",
      status: "pending"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Upload className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">
              {t('upload.title')}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('upload.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upload Interface */}
          <div className="lg:col-span-2 space-y-6">
            <FileUploader onFilesUpload={handleFilesUpload} />
            
            {/* Processing Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Processing Steps</CardTitle>
                <CardDescription>
                  Follow these steps to complete your tax filing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {processingSteps.map((step) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className={`
                        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                        ${step.status === 'completed' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' 
                          : step.status === 'current'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                        }
                      `}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : step.status === 'current' ? (
                          <Calendar className="h-4 w-4" />
                        ) : (
                          step.step
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Supported Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Supported Documents</CardTitle>
                <CardDescription>
                  Documents you can upload for tax filing
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
                        <h4 className="font-medium text-sm">{doc.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">
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

            {/* Security Notice */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Secure Upload</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>All uploads are encrypted end-to-end</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Documents are processed locally when possible</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Your data is never shared with third parties</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Files are automatically deleted after processing</span>
                </div>
              </CardContent>
            </Card>

            {/* Upload Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-blue-500" />
                  <span>Upload Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Ensure documents are clear and readable</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Maximum file size: 10MB per file</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Upload up to 5 files at once</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Supported formats: PDF, JPG, PNG, DOC, DOCX</span>
                </div>
              </CardContent>
            </Card>

            {/* Help Button */}
            <Button className="w-full" variant="outline">
              Need Help? Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}