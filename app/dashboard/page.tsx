'use client'

import React from 'react'
import { useI18n } from '@/lib/i18n-provider'
import { Navbar } from '@/components/Navbar'
import { DashboardCard, StatsCard } from '@/components/DashboardCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BarChart3,
  TrendingUp,
  FileText,
  AlertCircle,
  Calendar,
  DollarSign,
  PieChart,
  Download,
  Eye,
  Edit,
  
} from 'lucide-react'

export default function DashboardPage() {
  const { t } = useI18n()

  const stats = [
    {
      title: t('dashboard.income'),
      value: '৳ 8,50,000',
      icon: DollarSign,
      trend: { value: 12, isPositive: true },
      color: 'green' as const
    },
    {
      title: t('dashboard.tax'),
      value: '৳ 45,000',
      icon: PieChart,
      trend: { value: 5, isPositive: false },
      color: 'red' as const
    },
    {
      title: t('dashboard.refund'),
      value: '৳ 12,500',
      icon: TrendingUp,
      trend: { value: 8, isPositive: true },
      color: 'blue' as const
    },
    {
      title: 'Tax Returns Filed',
      value: '3',
      icon: FileText,
      trend: { value: 0, isPositive: true },
      color: 'purple' as const
    }
  ]

  const taxReturns = [
    {
      year: '2023-24',
      status: 'Submitted',
      submittedDate: '2024-06-15',
      amount: '৳ 45,000',
      statusColor: 'text-green-600 bg-green-50 dark:bg-green-900/20'
    },
    {
      year: '2022-23',
      status: 'Approved',
      submittedDate: '2023-07-20',
      amount: '৳ 38,000',
      statusColor: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
    },
    {
      year: '2021-22',
      status: 'Completed',
      submittedDate: '2022-08-10',
      amount: '৳ 32,000',
      statusColor: 'text-gray-600 bg-gray-50 dark:bg-gray-900/20'
    }
  ]

  const pendingActions = [
    {
      title: 'Update Bank Statement',
      description: 'Upload latest 3 months bank statement for 2024',
      priority: 'High',
      dueDate: '2024-07-15',
      priorityColor: 'text-red-600 bg-red-50 dark:bg-red-900/20'
    },
    {
      title: 'Investment Declaration',
      description: 'Declare your FDR and DPS investments',
      priority: 'Medium',
      dueDate: '2024-07-30',
      priorityColor: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      title: 'Address Verification',
      description: 'Verify your current address information',
      priority: 'Low',
      dueDate: '2024-08-15',
      priorityColor: 'text-green-600 bg-green-50 dark:bg-green-900/20'
    }
  ]

  const taxAdvice = [
    {
      title: 'Maximize Your Tax Savings',
      description: 'You can save up to ৳15,000 more by investing in approved savings schemes',
      action: 'Learn More',
      icon: TrendingUp
    },
    {
      title: 'Upcoming Deadline',
      description: 'Tax return submission deadline is approaching. File by November 30, 2024',
      action: 'File Now',
      icon: Calendar
    },
    {
      title: 'Document Reminder',
      description: 'Keep your salary certificate and bank statements ready for next year',
      action: 'Upload',
      icon: FileText
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {t('dashboard.title')}
              </h1>
              <p className="text-xl text-muted-foreground">
                Welcome back! Here's your tax overview.
              </p>
            </div>
            <Button className="flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              color={stat.color}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col h-full">
            {/* Tax Returns */}
            <Card className="flex-1 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>{t('dashboard.returns')}</span>
                </CardTitle>
                <CardDescription>
                  Your tax return filing history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {taxReturns.map((taxReturn, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Tax Year {taxReturn.year}</h4>
                          <p className="text-sm text-muted-foreground">
                            Submitted on {new Date(taxReturn.submittedDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="font-medium">{taxReturn.amount}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${taxReturn.statusColor}`}>
                          {taxReturn.status}
                        </span>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pending Actions */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5" />
                  <span>{t('dashboard.pending')}</span>
                </CardTitle>
                <CardDescription>
                  Actions that require your attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingActions.map((action, index) => (
                    <div key={index} className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-medium">{action.title}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${action.priorityColor}`}>
                            {action.priority}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {action.description}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          Due: {new Date(action.dueDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Action
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col h-full">
            {/* Tax Advice */}
            <Card className="flex-1 mb-6 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>{t('dashboard.advice')}</span>
                </CardTitle>
                <CardDescription>
                  Personalized tax tips and recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div className="h-full flex flex-col justify-around">
                  {taxAdvice.map((advice, index) => {
                  const Icon = advice.icon
                  return (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm mb-1">{advice.title}</h4>
                          <p className="text-xs text-muted-foreground mb-3">
                            {advice.description}
                          </p>
                          <Button variant="outline" size="sm" className="h-7 px-3 text-xs">
                            {advice.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  File New Return
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Forms
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Tax Calculator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}