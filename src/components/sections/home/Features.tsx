'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Receipt,
  Calculator,
  Clock,
  CreditCard,
  FileText,
  TrendingUp,
  Users,
  Shield,
  Smartphone,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Receipt,
      title: 'Professional Invoicing',
      description:
        'Create stunning, branded invoices in seconds with customizable templates and automated numbering.',
      badge: 'Invoicing',
    },
    {
      icon: Calculator,
      title: 'Automated Calculations',
      description:
        'Tax calculations, discounts, and totals handled automatically with multi-currency support.',
      badge: 'Automation',
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description:
        'Built-in time tracker to log billable hours and convert them directly into invoices.',
      badge: 'Productivity',
    },
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description:
        'Accept payments via credit cards, PayPal, and bank transfers with instant notifications.',
      badge: 'Payments',
    },
    {
      icon: FileText,
      title: 'Expense Management',
      description:
        'Track business expenses, categorize costs, and generate detailed expense reports.',
      badge: 'Expenses',
    },
    {
      icon: TrendingUp,
      title: 'Financial Reports',
      description: 'Comprehensive profit & loss statements, cash flow reports, and tax summaries.',
      badge: 'Analytics',
    },
    {
      icon: Users,
      title: 'Client Portal',
      description:
        'Dedicated client dashboard where customers can view invoices and make payments.',
      badge: 'Client Management',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: '256-bit SSL encryption and SOC 2 compliance to protect your financial data.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description:
        'Create invoices, track expenses, and manage finances on-the-go with our mobile app.',
      badge: 'Mobile',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Manage Your Finances
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Streamline your invoicing, track expenses, and get paid faster with our comprehensive
            financial management platform built for small businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to streamline your business finances?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Open Account
            </button>
            <button
              onClick={handleViewDemo}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Investment Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
