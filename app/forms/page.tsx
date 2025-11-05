'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  Download, 
  FileText, 
  Filter,
  Calendar,
  Building2,
  Receipt,
  Landmark,
  Users,
  TrendingUp
} from 'lucide-react'

interface TaxForm {
  id: string
  name: string
  nameBn: string
  category: string
  categoryBn: string
  year: string
  description: string
  descriptionBn: string
  icon: React.ReactNode
  downloadUrl: string
}

export default function FormsPage() {
  const { t, language } = useI18n()
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const [selectedYear, setSelectedYear] = React.useState('all')

  const categories = [
    { value: 'all', label: language === 'bn' ? 'সব ফর্ম' : 'All Forms' },
    { value: 'income-tax', label: language === 'bn' ? 'আয়কর' : 'Income Tax' },
    { value: 'vat', label: language === 'bn' ? 'ভ্যাট' : 'VAT' },
    { value: 'company', label: language === 'bn' ? 'কোম্পানি' : 'Company' },
    { value: 'investment', label: language === 'bn' ? 'বিনিয়োগ' : 'Investment' },
    { value: 'property', label: language === 'bn' ? 'সম্পত্তি' : 'Property' },
  ]

  const years = [
    { value: 'all', label: language === 'bn' ? 'সব বছর' : 'All Years' },
    { value: '2024-25', label: '2024-25' },
    { value: '2023-24', label: '2023-24' },
    { value: '2022-23', label: '2022-23' },
    { value: '2021-22', label: '2021-22' },
  ]

  const taxForms: TaxForm[] = [
    {
      id: '1',
      name: 'Individual Income Tax Return',
      nameBn: 'ব্যক্তিগত আয়কর রিটার্ন',
      category: 'income-tax',
      categoryBn: 'আয়কর',
      year: '2024-25',
      description: 'Annual income tax return form for individual taxpayers',
      descriptionBn: 'ব্যক্তিগত করদাতাদের বার্ষিক আয়কর রিটার্ন ফর্ম',
      icon: <FileText className="h-6 w-6" />,
      downloadUrl: '#'
    },
    {
      id: '2',
      name: 'Company Tax Return',
      nameBn: 'কোম্পানি কর রিটার্ন',
      category: 'company',
      categoryBn: 'কোম্পানি',
      year: '2024-25',
      description: 'Corporate income tax return form',
      descriptionBn: 'কর্পোরেট আয়কর রিটার্ন ফর্ম',
      icon: <Building2 className="h-6 w-6" />,
      downloadUrl: '#'
    },
    {
      id: '3',
      name: 'VAT Return Form',
      nameBn: 'ভ্যাট রিটার্ন ফর্ম',
      category: 'vat',
      categoryBn: 'ভ্যাট',
      year: '2024-25',
      description: 'Value Added Tax (VAT) return form',
      descriptionBn: 'মূল্য সংযোজন কর (ভ্যাট) রিটার্ন ফর্ম',
      icon: <Receipt className="h-6 w-6" />,
      downloadUrl: '#'
    },
    {
      id: '4',
      name: 'TIN Certificate Application',
      nameBn: 'টিআইএন সার্টিফিকেট আবেদন',
      category: 'income-tax',
      categoryBn: 'আয়কর',
      year: '2024-25',
      description: 'Application form for Tax Identification Number (TIN) certificate',
      descriptionBn: 'কর শনাক্তকরণ নম্বর (টিআইএন) সার্টিফিকেটের আবেদন ফর্ম',
      icon: <Users className="h-6 w-6" />,
      downloadUrl: '#'
    },
    {
      id: '5',
      name: 'Investment Tax Credit Form',
      nameBn: 'বিনিয়োগ কর ক্রেডিট ফর্ম',
      category: 'investment',
      categoryBn: 'বিনিয়োগ',
      year: '2024-25',
      description: 'Form for claiming tax credit on approved investments',
      descriptionBn: 'অনুমোদিত বিনিয়োগে কর ক্রেডিট দাবির ফর্ম',
      icon: <TrendingUp className="h-6 w-6" />,
      downloadUrl: '#'
    },
    {
      id: '6',
      name: 'Property Tax Declaration',
      nameBn: 'সম্পত্তি কর ঘোষণা',
      category: 'property',
      categoryBn: 'সম্পত্তি',
      year: '2024-25',
      description: 'Declaration form for property tax assessment',
      descriptionBn: 'সম্পত্তি কর মূল্যায়নের ঘোষণা ফর্ম',
      icon: <Landmark className="h-6 w-6" />,
      downloadUrl: '#'
    },
    {
      id: '7',
      name: 'Partnership Tax Return',
      nameBn: 'অংশীদারিত্ব কর রিটার্ন',
      category: 'company',
      categoryBn: 'কোম্পানি',
      year: '2023-24',
      description: 'Tax return form for partnership firms',
      descriptionBn: 'অংশীদারিত্ব প্রতিষ্ঠানের কর রিটার্ন ফর্ম',
      icon: <Building2 className="h-6 w-6" />,
      downloadUrl: '#'
    },
    {
      id: '8',
      name: 'Advance Tax Payment Form',
      nameBn: 'অগ্রিম কর পরিশোধ ফর্ম',
      category: 'income-tax',
      categoryBn: 'আয়কর',
      year: '2024-25',
      description: 'Form for advance tax payment',
      descriptionBn: 'অগ্রিম কর পরিশোধের ফর্ম',
      icon: <FileText className="h-6 w-6" />,
      downloadUrl: '#'
    },
  ]

  const filteredForms = taxForms.filter(form => {
    const matchesSearch = 
      form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.nameBn.includes(searchQuery) ||
      form.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.descriptionBn.includes(searchQuery)
    
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory
    const matchesYear = selectedYear === 'all' || form.year === selectedYear

    return matchesSearch && matchesCategory && matchesYear
  })

  const handleDownload = (form: TaxForm) => {
    // Handle download logic here
    console.log('Downloading form:', form.id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' ? 'কর ফর্ম লাইব্রেরি' : 'Tax Forms Library'}
          </h1>
          <p className={`text-muted-foreground ${
            language === 'bn' ? 'bangla-text' : ''
          }`}>
            {language === 'bn' 
              ? 'সব প্রয়োজনীয় কর ফর্ম ডাউনলোড করুন এক জায়গায়' 
              : 'Download all necessary tax forms in one place'}
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Search */}
              <div className="relative md:col-span-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={language === 'bn' ? 'ফর্ম খুঁজুন...' : 'Search forms...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`w-full h-10 pl-10 pr-4 border border-input bg-background rounded-md text-sm ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className={`w-full h-10 pl-10 pr-4 border border-input bg-background rounded-md text-sm ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}
                >
                  {years.map(year => (
                    <option key={year.value} value={year.value}>
                      {year.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className={`mb-4 text-sm text-muted-foreground ${
          language === 'bn' ? 'bangla-text' : ''
        }`}>
          {language === 'bn' 
            ? `${filteredForms.length} টি ফর্ম পাওয়া গেছে` 
            : `${filteredForms.length} forms found`}
        </div>

        {/* Forms Grid */}
        {filteredForms.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredForms.map(form => (
              <Card key={form.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      {form.icon}
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {form.year}
                    </span>
                  </div>
                  <CardTitle className={`text-lg mt-4 ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? form.nameBn : form.name}
                  </CardTitle>
                  <CardDescription className={language === 'bn' ? 'bangla-text' : ''}>
                    {language === 'bn' ? form.categoryBn : form.category.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm text-muted-foreground mb-4 ${
                    language === 'bn' ? 'bangla-text' : ''
                  }`}>
                    {language === 'bn' ? form.descriptionBn : form.description}
                  </p>
                  <Button 
                    onClick={() => handleDownload(form)}
                    className="w-full"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {language === 'bn' ? 'ডাউনলোড করুন' : 'Download'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className={`text-muted-foreground ${
                language === 'bn' ? 'bangla-text' : ''
              }`}>
                {language === 'bn' 
                  ? 'কোন ফর্ম পাওয়া যায়নি। অনুগ্রহ করে অন্য ফিল্টার চেষ্টা করুন।' 
                  : 'No forms found. Please try different filters.'}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
