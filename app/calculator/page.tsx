'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Calculator as CalculatorIcon,
  DollarSign,
  TrendingDown,
  Info,
  Download,
  RotateCcw
} from 'lucide-react'

export default function CalculatorPage() {
  const { t, language } = useI18n()
  
  const [income, setIncome] = React.useState({
    salary: '',
    business: '',
    rental: '',
    other: ''
  })
  
  const [deductions, setDeductions] = React.useState({
    investment: '',
    donation: '',
    insurance: '',
    providentFund: ''
  })
  
  const [result, setResult] = React.useState<{
    totalIncome: number
    taxableIncome: number
    totalTax: number
    effectiveRate: number
  } | null>(null)

  const calculateTax = () => {
    // Bangladesh tax calculation logic
    const totalIncome = 
      Number(income.salary || 0) + 
      Number(income.business || 0) + 
      Number(income.rental || 0) + 
      Number(income.other || 0)
    
    const totalDeductions = 
      Number(deductions.investment || 0) + 
      Number(deductions.donation || 0) + 
      Number(deductions.insurance || 0) + 
      Number(deductions.providentFund || 0)
    
    // Bangladesh tax slabs (2024-25)
    const exemptionLimit = 350000
    let taxableIncome = totalIncome - exemptionLimit - totalDeductions
    
    if (taxableIncome < 0) taxableIncome = 0
    
    let tax = 0
    
    // Tax calculation based on Bangladesh slabs
    if (taxableIncome <= 100000) {
      tax = 0
    } else if (taxableIncome <= 400000) {
      tax = (taxableIncome - 100000) * 0.05
    } else if (taxableIncome <= 700000) {
      tax = 15000 + (taxableIncome - 400000) * 0.10
    } else if (taxableIncome <= 1100000) {
      tax = 45000 + (taxableIncome - 700000) * 0.15
    } else if (taxableIncome <= 1600000) {
      tax = 105000 + (taxableIncome - 1100000) * 0.20
    } else {
      tax = 205000 + (taxableIncome - 1600000) * 0.25
    }
    
    // Minimum tax
    const minimumTax = Math.max(5000, totalIncome * 0.005)
    tax = Math.max(tax, minimumTax)
    
    const effectiveRate = totalIncome > 0 ? (tax / totalIncome) * 100 : 0
    
    setResult({
      totalIncome,
      taxableIncome: taxableIncome + exemptionLimit,
      totalTax: tax,
      effectiveRate
    })
  }

  const resetCalculator = () => {
    setIncome({ salary: '', business: '', rental: '', other: '' })
    setDeductions({ investment: '', donation: '', insurance: '', providentFund: '' })
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CalculatorIcon className="h-8 w-8 text-primary" />
            <h1 className={`text-3xl md:text-4xl font-bold ${
              language === 'bn' ? 'bangla-text' : ''
            }`}>
              {language === 'bn' ? 'কর ক্যালকুলেটর' : 'Tax Calculator'}
            </h1>
          </div>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' 
              ? 'আপনার কর দায় গণনা করুন এবং সম্ভাব্য সঞ্চয় দেখুন' 
              : 'Calculate your tax liability and see potential savings'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Income Section */}
            <Card>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  <DollarSign className="h-5 w-5" />
                  <span>{language === 'bn' ? 'আয়ের উৎস' : 'Income Sources'}</span>
                </CardTitle>
                <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' 
                    ? 'আপনার বিভিন্ন উৎস থেকে আয় লিখুন (৳ টাকায়)' 
                    : 'Enter your income from various sources (in ৳ BDT)'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'বেতন আয়' : 'Salary Income'}
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={income.salary}
                      onChange={(e) => setIncome({...income, salary: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'ব্যবসায়িক আয়' : 'Business Income'}
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={income.business}
                      onChange={(e) => setIncome({...income, business: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'ভাড়া আয়' : 'Rental Income'}
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={income.rental}
                      onChange={(e) => setIncome({...income, rental: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'অন্যান্য আয়' : 'Other Income'}
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={income.other}
                      onChange={(e) => setIncome({...income, other: e.target.value})}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deductions Section */}
            <Card>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  <TrendingDown className="h-5 w-5" />
                  <span>{language === 'bn' ? 'কর ছাড় ও ছাড়' : 'Tax Deductions & Exemptions'}</span>
                </CardTitle>
                <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                  {language === 'bn' 
                    ? 'কর ছাড়যোগ্য বিনিয়োগ এবং খরচ লিখুন' 
                    : 'Enter tax-deductible investments and expenses'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'বিনিয়োগ (এফডিআর, ডিপিএস)' : 'Investment (FDR, DPS)'}
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={deductions.investment}
                      onChange={(e) => setDeductions({...deductions, investment: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'দান' : 'Donations'}
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={deductions.donation}
                      onChange={(e) => setDeductions({...deductions, donation: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'জীবন বীমা' : 'Life Insurance'}
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={deductions.insurance}
                      onChange={(e) => setDeductions({...deductions, insurance: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-sm font-medium ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'প্রভিডেন্ট ফান্ড' : 'Provident Fund'}
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={deductions.providentFund}
                      onChange={(e) => setDeductions({...deductions, providentFund: e.target.value})}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <Button onClick={calculateTax} size="lg" className="flex-1">
                <CalculatorIcon className="h-4 w-4 mr-2" />
                {language === 'bn' ? 'কর গণনা করুন' : 'Calculate Tax'}
              </Button>
              <Button onClick={resetCalculator} variant="outline" size="lg">
                <RotateCcw className="h-4 w-4 mr-2" />
                {language === 'bn' ? 'রিসেট' : 'Reset'}
              </Button>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {result ? (
              <>
                <Card className="bg-primary/5 border-primary">
                  <CardHeader>
                    <CardTitle className={`text-center ${
                      language === 'bn' ? 'bangla-text' : ''
                    }`}>
                      {language === 'bn' ? 'আপনার কর গণনা' : 'Your Tax Calculation'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className={`font-medium ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {language === 'bn' ? 'মোট আয়' : 'Total Income'}
                      </span>
                      <span className="font-bold text-lg">
                        ৳ {result.totalIncome.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className={`font-medium ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {language === 'bn' ? 'করযোগ্য আয়' : 'Taxable Income'}
                      </span>
                      <span className="font-bold text-lg">
                        ৳ {result.taxableIncome.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b bg-primary/10 rounded-lg px-4">
                      <span className={`font-bold text-lg ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {language === 'bn' ? 'মোট কর' : 'Total Tax'}
                      </span>
                      <span className="font-bold text-2xl text-primary">
                        ৳ {result.totalTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className={`font-medium ${
                        language === 'bn' ? 'bangla-text' : ''
                      }`}>
                        {language === 'bn' ? 'কার্যকর হার' : 'Effective Rate'}
                      </span>
                      <span className="font-bold text-lg">
                        {result.effectiveRate.toFixed(2)}%
                      </span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      {language === 'bn' ? 'রিপোর্ট ডাউনলোড' : 'Download Report'}
                    </Button>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <CalculatorIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className={`text-muted-foreground ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' 
                      ? 'আপনার আয় এবং ছাড় লিখুন, তারপর কর গণনা করুন' 
                      : 'Enter your income and deductions, then calculate tax'}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Tax Slabs Info */}
            <Card>
              <CardHeader>
                <CardTitle className={`flex items-center space-x-2 text-sm ${
                  language === 'bn' ? 'bangla-text' : ''
                }`}>
                  <Info className="h-4 w-4" />
                  <span>{language === 'bn' ? 'কর হার (২০২৪-২৫)' : 'Tax Rates (2024-25)'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>৳ 0 - 3,50,000</span>
                  <span className="font-medium">{language === 'bn' ? 'করমুক্ত' : 'Tax Free'}</span>
                </div>
                <div className="flex justify-between">
                  <span>৳ 1,00,000</span>
                  <span className="font-medium">0%</span>
                </div>
                <div className="flex justify-between">
                  <span>৳ 4,00,000</span>
                  <span className="font-medium">5%</span>
                </div>
                <div className="flex justify-between">
                  <span>৳ 7,00,000</span>
                  <span className="font-medium">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>৳ 11,00,000</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>৳ 16,00,000</span>
                  <span className="font-medium">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Above ৳ 16,00,000</span>
                  <span className="font-medium">25%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
