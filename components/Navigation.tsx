'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
}

interface MenuItem {
  label: string;
  href?: string;
  items?: DropdownItem[];
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const dropdown = dropdownRefs.current[activeDropdown];
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeDropdown]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setHoveredDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: 'Products',
      items: [
        { label: 'ChattiLive Overview', href: '/products/chattlive' }, // P2
        { label: 'Web-Chat Node', href: '/products/web-chat-node' }, // P3
        { label: 'SMS Node', href: '/products/sms-node' }, // P4
        { label: 'Social & Messenger Node', href: '/products/social-messenger-node' }, // P5
        { label: 'WhatsApp Node', href: '/products/whatsapp-node' }, // P6
        { label: 'Dotti DeepLink™', href: '/products/dotti-deeplink' }, // P7
      ],
    },
    {
      label: 'Platform',
      items: [
        { label: 'How It Works', href: '/platform/how-it-works' },
        { label: 'Workflow Builder', href: '/platform/workflow-builder' },
        { label: 'Analytics & Reporting', href: '/platform/analytics-reporting' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { label: 'Blog', href: 'https://www.conversioniq.ai/blog', external: true }, // P12
        { label: 'Customer Stories', href: '/customers' }, // P9
        { label: 'FAQ', href: '/faq' }, // P8
        { label: 'Help Center', href: '/help' }, // P10
        { label: 'Webinars', href: '/webinars' },
        { label: 'Integrations', href: '/integrations' },
      ],
    },
    {
      label: 'Pricing', // P11
      href: '/pricing',
    },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] h-[72px] transition-all duration-300',
          'bg-white border-b border-[#ebebf8]',
          isScrolled && 'shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ConversionIQAi_Logo.png"
                alt="ConversionIQ.ai"
                width={140}
                height={32}
                className="w-[120px] h-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={(el) => {
                  if (el) dropdownRefs.current[item.label] = el;
                }}
                onMouseEnter={() => item.items && setHoveredDropdown(item.label)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        'text-slate-600 font-medium text-sm transition-all duration-200 flex items-center gap-1 px-3 py-1.5 rounded-md',
                        (activeDropdown === item.label || hoveredDropdown === item.label)
                          ? 'bg-slate-50 text-slate-800'
                          : 'hover:bg-slate-50 hover:text-slate-800'
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          (activeDropdown === item.label || hoveredDropdown === item.label) && 'rotate-180'
                        )}
                      />
                    </button>
                    {(activeDropdown === item.label || hoveredDropdown === item.label) && (
                      <>
                        {/* Invisible bridge to prevent hover loss */}
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 w-56 h-2 z-40"
                          onMouseEnter={() => setHoveredDropdown(item.label)}
                        />
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[#ebebf8] py-2 z-50 transition-all duration-200 ease-out"
                          onMouseEnter={() => setHoveredDropdown(item.label)}
                          onMouseLeave={() => setHoveredDropdown(null)}
                        >
                        {item.items.map((subItem) => {
                          if (subItem.external) {
                            return (
                              <a
                                key={subItem.href}
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-[#383299] hover:bg-[#ebebf8] hover:text-[#ef2d60] transition-colors"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setHoveredDropdown(null);
                                }}
                              >
                                {subItem.label}
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-[#383299] hover:bg-[#ebebf8] hover:text-[#ef2d60] transition-colors"
                              onClick={() => {
                                setActiveDropdown(null);
                                setHoveredDropdown(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className="text-slate-600 font-medium text-sm transition-all duration-200 px-3 py-1.5 rounded-md hover:bg-slate-50 hover:text-slate-800"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons - Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              className="border-2 border-[#ef2d60] text-[#ef2d60] hover:bg-[#ef2d60] hover:text-white transition-all duration-200"
            >
              Login
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="bg-[#ef2d60] hover:bg-[#d92655] transition-all duration-200"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#383299] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-50 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={cn(
              'fixed right-0 top-[72px] h-[calc(100vh-72px)] w-[85vw] max-w-[360px] z-50 lg:hidden',
              'bg-white border-l border-[#ebebf8]',
              'transform transition-transform duration-300 ease-out',
              isOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="flex flex-col h-full p-[18px] overflow-y-auto">
              <div className="flex flex-col gap-3 flex-1">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.items ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={cn(
                            'w-full text-left text-lg font-bold text-[#383299] py-3 px-[15px] flex items-center justify-between',
                            'hover:text-[#ef2d60] transition-colors'
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 transition-transform duration-200',
                              activeDropdown === item.label && 'rotate-180'
                            )}
                          />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="pl-[15px] pb-1.5 transition-all duration-200 ease-out">
                            {item.items.map((subItem) => {
                              if (subItem.external) {
                                return (
                                  <a
                                    key={subItem.href}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 text-base text-[#383299] hover:text-[#ef2d60] transition-colors"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {subItem.label}
                                  </a>
                                );
                              }
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block py-2 text-base text-[#383299] hover:text-[#ef2d60] transition-colors"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '/'}
                        className="block text-lg font-bold text-[#383299] py-3 px-[15px] hover:text-[#ef2d60] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-[#ebebf8]">
                <Button
                  variant="secondary"
                  size="default"
                  className="w-full border-2 border-[#ef2d60] text-[#ef2d60] hover:bg-[#ef2d60] hover:text-white"
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="default"
                  className="w-full bg-[#ef2d60] hover:bg-[#d92655]"
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
