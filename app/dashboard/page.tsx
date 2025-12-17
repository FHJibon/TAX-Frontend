'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FileText,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Edit,
  
  
} from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter();
  const userData = {
    name: '',
    mobile: '',
    email: '',
    address: '',
    tin: '',
    nid: '',
    dateOfBirth: '',
    occupation: ''
  };


    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-2 sm:px-12 lg:px-32 py-16">
          {/* My Data Card - Large and Prominent */}
          <Card className="w-full max-w-6xl mx-auto mb-12 shadow-2xl border border-primary/20 animate-none bg-white/70 dark:bg-gray-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/50">
            <CardHeader className="pb-4 pt-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary text-xs font-medium mb-3">Profile</div>
                   <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-2 tracking-tight">
                    <User className="h-8 w-8 text-primary" />
                    My Data
                  </h1>
                  <p className="text-lg text-muted-foreground">Your personal information</p>
                </div>
                <Button variant="outline" size="lg" className="text-base px-6 py-2 hover:bg-primary/10" onClick={() => router.push('/profile')}>
                  <Edit className="h-5 w-5 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent className="py-10 px-4 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* ...existing code for userData fields... */}
                <div className="flex items-start gap-4 rounded-lg border bg-background/60 p-5 hover:shadow-md transition">
                  <div className="p-3 bg-primary/10 rounded-lg"><User className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-semibold text-xl">{userData.name || '—'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-background/60 p-5 hover:shadow-md transition">
                  <div className="p-3 bg-primary/10 rounded-lg"><Phone className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mobile Number</p>
                    <p className="font-semibold text-xl">{userData.mobile || '—'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-background/60 p-5 hover:shadow-md transition">
                  <div className="p-3 bg-primary/10 rounded-lg"><Mail className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Address</p>
                    <p className="font-semibold text-xl">{userData.email || '—'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-background/60 p-5 hover:shadow-md transition">
                  <div className="p-3 bg-primary/10 rounded-lg"><MapPin className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold text-xl">{userData.address || '—'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-background/60 p-5 hover:shadow-md transition">
                  <div className="p-3 bg-primary/10 rounded-lg"><CreditCard className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">TIN Number</p>
                    <p className="font-semibold text-xl">{userData.tin || '—'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-background/60 p-5 hover:shadow-md transition">
                  <div className="p-3 bg-primary/10 rounded-lg"><CreditCard className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">NID Number</p>
                    <p className="font-semibold text-xl">{userData.nid || '—'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-background/60 p-5 hover:shadow-md transition">
                  <div className="p-3 bg-primary/10 rounded-lg"><Calendar className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-semibold text-xl">{userData.dateOfBirth ? new Date(userData.dateOfBirth).toLocaleDateString('en-GB', { timeZone: 'UTC' }) : '—'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border bg-background/60 p-5 hover:shadow-md transition">
                  <div className="p-3 bg-primary/10 rounded-lg"><FileText className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Occupation</p>
                    <p className="font-semibold text-xl">{userData.occupation || '—'}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    );
  }
