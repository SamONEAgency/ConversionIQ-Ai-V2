'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Bot, 
  Zap, 
  MessageSquare, 
  Globe, 
  Smartphone, 
  Instagram, 
  MessageCircle, 
  Fingerprint,
  Layers,
  GitBranch,
  BarChart3,
  FileText,
  Users,
  HelpCircle,
  BookOpen,
  Video,
  Plug,
  Loader2
} from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

interface DropdownItem {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
  description?: string;
  iconColor?: 'teal' | 'coral' | 'purple' | 'navy' | 'green';
}

interface MenuItem {
  label: string;
  href?: string;
  items?: DropdownItem[];
  panelWidth?: string;
}

export function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Button states
  const [loginHovered, setLoginHovered] = useState(false);
  const [loginFocused, setLoginFocused] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [loginDisabled, setLoginDisabled] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  
  const [demoHovered, setDemoHovered] = useState(false);
  const [demoFocused, setDemoFocused] = useState(false);
  const [demoActive, setDemoActive] = useState(false);
  const [demoDisabled, setDemoDisabled] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);

  // Smart Scroll states
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const heroHeightRef = useRef<number>(0);

  // Calculate hero height on mount
  useEffect(() => {
    const calculateHeroHeight = () => {
      // Hero section is 100vh, but we need to account for padding
      // The hero section has 25px padding, so the actual content height is viewport height
      heroHeightRef.current = window.innerHeight;
    };
    
    calculateHeroHeight();
    window.addEventListener('resize', calculateHeroHeight);
    return () => window.removeEventListener('resize', calculateHeroHeight);
  }, []);

  // Reset scroll state when pathname changes (page navigation)
  useEffect(() => {
    // Reset scroll position and direction when navigating between pages
    setScrollY(0);
    setLastScrollY(0);
    setScrollDirection(null);
    setIsScrolled(false);
  }, [pathname]);

  // Smart Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 50; // Threshold to determine scroll direction
      
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);

      // Determine scroll direction with threshold
      if (Math.abs(currentScrollY - lastScrollY) > threshold) {
        if (currentScrollY > lastScrollY) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection('up');
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      panelWidth: '450px',
      items: [
        { 
          label: 'ChattiLive Overview', 
          href: '/products/chattlive',
          icon: Bot,
          description: 'Automate sales and support across every channel with coordinated AI agents.',
          iconColor: 'teal'
        },
        { 
          label: 'Web-Chat Node', 
          href: '/products/web-chat-node',
          icon: Globe,
          description: 'Real-time website engagement that predicts intent and automates revenue.',
          iconColor: 'teal'
        },
        { 
          label: 'SMS Node', 
          href: '/products/sms-node',
          icon: Smartphone,
          description: 'Compliant two-way text campaigns with TCPA compliance and routing.',
          iconColor: 'coral'
        },
        { 
          label: 'Social & Messenger Node', 
          href: '/products/social-messenger-node',
          icon: Instagram,
          description: 'Autonomous DM and comment sales across Instagram and Facebook.',
          iconColor: 'purple'
        },
        { 
          label: 'WhatsApp Node', 
          href: '/products/whatsapp-node',
          icon: MessageCircle,
          description: 'Global conversational commerce via WhatsApp Business API.',
          iconColor: 'green'
        },
        { 
          label: 'Dotti DeepLink™', 
          href: '/products/dotti-deeplink',
          icon: Fingerprint,
          description: 'Real-time identity resolution connecting visitor behavior across devices.',
          iconColor: 'navy'
        },
      ],
    },
    {
      label: 'Platform',
      panelWidth: '390px',
      items: [
        { 
          label: 'How It Works', 
          href: '/platform/how-it-works',
          icon: Layers,
          description: 'Learn how our autonomous intelligence core coordinates agents across channels.',
          iconColor: 'purple'
        },
        { 
          label: 'Workflow Builder', 
          href: '/platform/workflow-builder',
          icon: GitBranch,
          description: 'Visual journey orchestration without code. Map and experiment safely.',
          iconColor: 'teal'
        },
        { 
          label: 'Analytics & Reporting', 
          href: '/platform/analytics-reporting',
          icon: BarChart3,
          description: 'Revenue attribution from first message to closed-won with full visibility.',
          iconColor: 'coral'
        },
      ],
    },
    {
      label: 'Resources',
      panelWidth: '420px',
      items: [
        { 
          label: 'Blog', 
          href: 'https://www.conversioniq.ai/blog', 
          external: true,
          icon: FileText,
          description: 'Playbooks, strategy guides, and product updates for scaling revenue.',
          iconColor: 'teal'
        },
        { 
          label: 'Customer Stories', 
          href: '/customers',
          icon: Users,
          description: 'Real results from teams eliminating manual work and improving conversion.',
          iconColor: 'coral'
        },
        { 
          label: 'FAQ', 
          href: '/faq',
          icon: HelpCircle,
          description: 'Common questions about deployment, compliance, pricing, and features.',
          iconColor: 'purple'
        },
        { 
          label: 'Help Center', 
          href: '/help',
          icon: BookOpen,
          description: 'Guides, documentation, and tutorials to get started and optimize.',
          iconColor: 'navy'
        },
        { 
          label: 'Webinars', 
          href: '/webinars',
          icon: Video,
          description: 'Live and on-demand sessions covering best practices and use cases.',
          iconColor: 'green'
        },
        { 
          label: 'Integrations', 
          href: '/integrations',
          icon: Plug,
          description: 'Connect your stack with native CRM sync and seamless integrations.',
          iconColor: 'teal'
        },
      ],
    },
    // Pricing removed - page is coming soon
    // {
    //   label: 'Pricing',
    //   href: '/pricing',
    // },
  ];

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    const timeout = setTimeout(() => {
      setHoveredDropdown(label);
      setActiveDropdown(null); // Close any click-opened dropdown
    }, 200);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredDropdown(null);
  };

  const getIconColorClasses = (color?: string) => {
    switch (color) {
      case 'teal':
        return {
          bg: 'rgba(0, 180, 216, 0.10)',
          icon: '#00B4D8'
        };
      case 'coral':
        return {
          bg: 'rgba(232, 52, 90, 0.10)',
          icon: '#E8345A'
        };
      case 'purple':
        return {
          bg: 'rgba(107, 77, 230, 0.10)',
          icon: '#6B4DE6'
        };
      case 'navy':
        return {
          bg: 'rgba(27, 19, 64, 0.08)',
          icon: '#1B1340'
        };
      case 'green':
        return {
          bg: 'rgba(16, 185, 129, 0.10)',
          icon: '#10B981'
        };
      default:
        return {
          bg: 'rgba(27, 19, 64, 0.08)',
          icon: '#1B1340'
        };
    }
  };

  // Determine which zone we're in
  const isInHero = scrollY < heroHeightRef.current;
  const isPastHero = scrollY >= heroHeightRef.current;
  
  // Zone A: Inside Hero - Visible, Transparent
  // Zone B: Past Hero, Scrolling Down - Hidden
  // Zone C: Past Hero, Scrolling Up - Visible, Purple Pill
  
  // Default to visible if we haven't scrolled yet or if scrollDirection is null
  const isVisible = isInHero || (isPastHero && (scrollDirection === 'up' || scrollDirection === null));
  const showPurplePill = isPastHero && scrollDirection === 'up';
  
  // Calculate transform for hide/show
  const navTransform = isVisible 
    ? 'translate(-50%, 0)' 
    : 'translate(-50%, -100px)'; // Hide by translating up
  
  // Calculate opacity
  const navOpacity = isVisible ? 1 : 0;
  
  // Background style - transparent in Zone A (all pages), purple pill in Zone C
  const navBackground = showPurplePill ? '#1B1340' : 'transparent';
  const navBorderRadius = showPurplePill ? '50px' : '0px';
  const navPadding = showPurplePill ? '12px' : '0px';
  const navBoxShadow = showPurplePill
    ? (isScrolled 
        ? '0 8px 32px rgba(27, 19, 64, 0.25)' 
        : '0 4px 24px rgba(27, 19, 64, 0.15)')
    : 'none';
  
  // Text/logo color logic: 
  // - White on homepage in hero
  // - White on non-homepage past hero (Zone C)
  // - Grey/colored on non-homepage in hero (Zone A)
  const useWhiteText = (isInHero && isHomePage) || (isPastHero && !isHomePage) || showPurplePill;

  return (
    <>
      <nav
        className={cn(
          'fixed left-1/2 z-[1000]',
          'w-full',
          'px-6 md:px-12 lg:px-20',
          'overflow-visible'
        )}
        style={{
          top: '36px',
          maxWidth: 'calc(1280px - 55px)',
          paddingTop: navPadding,
          paddingBottom: navPadding,
          background: navBackground,
          borderRadius: navBorderRadius,
          boxShadow: navBoxShadow,
          opacity: navOpacity,
          transform: navTransform,
          transition: 'all 0.3s ease-in-out',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div className="flex items-center justify-between h-full gap-2 md:gap-3 lg:gap-4 min-w-0">
          {/* Brand Logo - White on homepage hero and non-homepage past hero, colored on non-homepage hero */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/ConversionIQAi_Logo.png"
                alt="ConversionIQ.ai"
                width={140}
                height={32}
                className={cn(
                  "w-[120px] h-auto object-contain",
                  useWhiteText ? "brightness-0 invert" : ""
                )}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center min-w-0">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                ref={(el) => {
                  if (el) dropdownRefs.current[item.label] = el;
                }}
                onMouseEnter={() => item.items && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.items ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        'font-medium text-sm transition-all duration-200 flex items-center gap-1 px-3 xl:px-4 py-2 whitespace-nowrap rounded-lg',
                        useWhiteText
                          ? 'text-white/75 hover:text-white hover:bg-white/10'
                          : 'text-[#6B7280] hover:text-[#1B1340] hover:bg-[#F7F8FC]',
                        (activeDropdown === item.label || hoveredDropdown === item.label) && 
                          (useWhiteText 
                            ? 'text-white bg-white/10' 
                            : 'text-[#1B1340] bg-[#F7F8FC]')
                      )}
                      style={{ fontSize: '15px', fontWeight: 500 }}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          useWhiteText
                            ? 'opacity-60'
                            : 'text-[#6B7280]',
                          (activeDropdown === item.label || hoveredDropdown === item.label) && 
                            (useWhiteText ? 'opacity-100' : 'opacity-100')
                        )}
                        style={{
                          transform: (activeDropdown === item.label || hoveredDropdown === item.label) ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      />
                    </button>
                    {(activeDropdown === item.label || hoveredDropdown === item.label) && (
                      <>
                        {/* Invisible bridge to prevent hover loss */}
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 w-full h-3 z-40"
                          onMouseEnter={() => handleMouseEnter(item.label)}
                        />
                        {/* Mega Menu Panel */}
                        <div 
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-[20px] shadow-[0_20px_60px_rgba(27,19,64,0.10),0_4px_16px_rgba(27,19,64,0.05)] border border-black/6 z-[1001] transition-all duration-200 ease-out"
                          style={{
                            minWidth: item.panelWidth || '390px',
                            padding: '36px 30px',
                          }}
                          onMouseEnter={() => handleMouseEnter(item.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Arrow pointer */}
                          <div 
                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-black/6 rotate-45"
                            style={{ borderRight: 'none', borderBottom: 'none' }}
                          />
                          
                          {/* 2-Column Grid */}
                          <div className="grid grid-cols-2 gap-x-9 gap-y-9">
                            {item.items.map((subItem, idx) => {
                              const menuItemContent = (
                                <div className="flex flex-col">
                                  {/* Heading */}
                                  <div 
                                    className="font-semibold text-[#1B1340] mb-1.5"
                                    style={{ 
                                      fontSize: '15px',
                                      fontWeight: 600,
                                      lineHeight: '1.3'
                                    }}
                                  >
                                    {subItem.label}
                                  </div>
                                  {/* Description */}
                                  {subItem.description && (
                                    <div 
                                      className="text-[#6B7280]"
                                      style={{ 
                                        fontSize: '12px',
                                        fontWeight: 400,
                                        lineHeight: '1.4',
                                        maxWidth: '100%'
                                      }}
                                    >
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              );

                              if (subItem.external) {
                                return (
                                  <a
                                    key={subItem.href}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all duration-150 cursor-pointer hover:opacity-80"
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setHoveredDropdown(null);
                                    }}
                                  >
                                    {menuItemContent}
                                  </a>
                                );
                              }
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="transition-all duration-150 cursor-pointer hover:opacity-80"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setHoveredDropdown(null);
                                  }}
                                >
                                  {menuItemContent}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className={cn(
                      "font-medium text-sm transition-all duration-200 px-3 xl:px-4 py-2 rounded-lg whitespace-nowrap",
                      useWhiteText
                        ? "text-white/75 hover:text-white hover:bg-white/10"
                        : "text-[#6B7280] hover:text-[#1B1340] hover:bg-[#F7F8FC]"
                    )}
                    style={{ fontSize: '15px', fontWeight: 500 }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons - Right */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            {/* Login Button */}
            <button
              className={cn(
                "px-3 xl:px-4 py-1.5 rounded-[50px] text-sm font-medium transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed",
                useWhiteText ? "text-white" : "text-[#6B7280]"
              )}
              style={{
                background: useWhiteText
                  ? (loginActive 
                      ? 'rgba(255, 255, 255, 0.15)' 
                      : loginHovered 
                        ? 'rgba(255, 255, 255, 0.12)' 
                        : 'transparent')
                  : (loginActive 
                      ? '#E5E7EB' 
                      : loginHovered 
                        ? '#F3F4F6' 
                        : 'transparent'),
                border: useWhiteText
                  ? (loginFocused 
                      ? '1px solid rgba(255, 255, 255, 0.5)' 
                      : '1px solid rgba(255, 255, 255, 0.3)')
                  : (loginFocused 
                      ? '1px solid #9CA3AF' 
                      : '1px solid #D1D5DB'),
                transform: loginActive ? 'scale(0.98)' : loginHovered ? 'scale(1.02)' : 'scale(1)',
                boxShadow: useWhiteText
                  ? (loginFocused 
                      ? '0 0 0 3px rgba(255, 255, 255, 0.2)' 
                      : loginHovered 
                        ? '0 2px 8px rgba(255, 255, 255, 0.1)' 
                        : 'none')
                  : (loginFocused 
                      ? '0 0 0 3px rgba(107, 114, 128, 0.2)' 
                      : loginHovered 
                        ? '0 2px 8px rgba(107, 114, 128, 0.1)' 
                        : 'none'),
                opacity: loginDisabled ? 0.5 : 1,
                cursor: loginDisabled || loginLoading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={() => !loginDisabled && !loginLoading && setLoginHovered(true)}
              onMouseLeave={() => setLoginHovered(false)}
              onMouseDown={() => !loginDisabled && !loginLoading && setLoginActive(true)}
              onMouseUp={() => setLoginActive(false)}
              onFocus={() => !loginDisabled && !loginLoading && setLoginFocused(true)}
              onBlur={() => setLoginFocused(false)}
              disabled={loginDisabled || loginLoading}
              onClick={() => {
                if (!loginDisabled && !loginLoading) {
                  setLoginLoading(true);
                  // Simulate login action
                  setTimeout(() => {
                    setLoginLoading(false);
                  }, 2000);
                }
              }}
            >
              {loginLoading ? (
                <>
                  <Loader2 className="inline-block w-4 h-4 animate-spin mr-2" />
                  Loading...
                </>
              ) : (
                'Login'
              )}
            </button>
            
            {/* Request Demo Button */}
            <button
              className="px-3 xl:px-4 py-1.5 rounded-[50px] text-white text-sm font-medium transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: demoActive 
                  ? '#D12A4A' 
                  : demoHovered 
                    ? '#F04A6A' 
                    : '#E8345A',
                border: demoFocused 
                  ? '1px solid rgba(255, 255, 255, 0.5)' 
                  : 'none',
                transform: demoActive ? 'scale(0.98)' : demoHovered ? 'scale(1.02)' : 'scale(1)',
                boxShadow: demoFocused 
                  ? '0 0 0 3px rgba(232, 52, 90, 0.3)' 
                  : demoHovered 
                    ? '0 4px 12px rgba(232, 52, 90, 0.4)' 
                    : '0 2px 8px rgba(232, 52, 90, 0.2)',
                opacity: demoDisabled ? 0.5 : 1,
                cursor: demoDisabled || demoLoading ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={() => !demoDisabled && !demoLoading && setDemoHovered(true)}
              onMouseLeave={() => setDemoHovered(false)}
              onMouseDown={() => !demoDisabled && !demoLoading && setDemoActive(true)}
              onMouseUp={() => setDemoActive(false)}
              onFocus={() => !demoDisabled && !demoLoading && setDemoFocused(true)}
              onBlur={() => setDemoFocused(false)}
              disabled={demoDisabled || demoLoading}
              onClick={() => {
                if (!demoDisabled && !demoLoading) {
                  setDemoLoading(true);
                  // Simulate demo request action
                  setTimeout(() => {
                    setDemoLoading(false);
                  }, 2000);
                }
              }}
            >
              {demoLoading ? (
                <>
                  <Loader2 className="inline-block w-4 h-4 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                'Request Demo'
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
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
            className="fixed inset-0 bg-black/20 z-[999] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={cn(
              'absolute top-full left-0 right-0 mt-2 w-full z-[1000] lg:hidden',
              'bg-[#1B1340] rounded-2xl shadow-xl',
              'transform transition-transform duration-300 ease-out',
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0'
            )}
          >
            <div className="flex flex-col p-6 overflow-y-auto max-h-[calc(100vh-120px)]">
              <div className="flex flex-col gap-3 flex-1">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.items ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className={cn(
                            'w-full text-left text-lg font-bold text-white py-3 px-4 flex items-center justify-between',
                            'hover:text-white/80 transition-colors'
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'w-5 h-5 transition-transform duration-200 text-white/60',
                              activeDropdown === item.label && 'rotate-180'
                            )}
                          />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="pl-4 pb-1.5 transition-all duration-200 ease-out space-y-2">
                            {item.items.map((subItem) => {
                              const mobileItemContent = (
                                <div className="flex flex-col">
                                  <span className="font-semibold text-white mb-1">{subItem.label}</span>
                                  {subItem.description && (
                                    <span className="text-white/70 text-sm">{subItem.description}</span>
                                  )}
                                </div>
                              );

                              if (subItem.external) {
                                return (
                                  <a
                                    key={subItem.href}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 text-base text-white/80 hover:text-white transition-colors"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {mobileItemContent}
                                  </a>
                                );
                              }
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block py-2 text-base text-white/80 hover:text-white transition-colors"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                >
                                  {mobileItemContent}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '/'}
                        className="block text-lg font-bold text-white py-3 px-4 hover:text-white/80 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

                  <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/20">
                    {/* Mobile Login Button */}
                    <button
                      className="w-full px-4 py-1.5 rounded-[50px] text-white text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: loginActive 
                          ? 'rgba(255, 255, 255, 0.15)' 
                          : loginHovered 
                            ? 'rgba(255, 255, 255, 0.12)' 
                            : 'transparent',
                        border: loginFocused 
                          ? '1px solid rgba(255, 255, 255, 0.5)' 
                          : '1px solid rgba(255, 255, 255, 0.3)',
                        transform: loginActive ? 'scale(0.98)' : loginHovered ? 'scale(1.02)' : 'scale(1)',
                        boxShadow: loginFocused 
                          ? '0 0 0 3px rgba(255, 255, 255, 0.2)' 
                          : loginHovered 
                            ? '0 2px 8px rgba(255, 255, 255, 0.1)' 
                            : 'none',
                        opacity: loginDisabled ? 0.5 : 1,
                        cursor: loginDisabled || loginLoading ? 'not-allowed' : 'pointer',
                      }}
                      onMouseEnter={() => !loginDisabled && !loginLoading && setLoginHovered(true)}
                      onMouseLeave={() => setLoginHovered(false)}
                      onMouseDown={() => !loginDisabled && !loginLoading && setLoginActive(true)}
                      onMouseUp={() => setLoginActive(false)}
                      onFocus={() => !loginDisabled && !loginLoading && setLoginFocused(true)}
                      onBlur={() => setLoginFocused(false)}
                      disabled={loginDisabled || loginLoading}
                      onClick={() => {
                        setIsOpen(false);
                        if (!loginDisabled && !loginLoading) {
                          setLoginLoading(true);
                          setTimeout(() => {
                            setLoginLoading(false);
                          }, 2000);
                        }
                      }}
                    >
                      {loginLoading ? (
                        <>
                          <Loader2 className="inline-block w-4 h-4 animate-spin mr-2" />
                          Loading...
                        </>
                      ) : (
                        'Login'
                      )}
                    </button>
                    
                    {/* Mobile Request Demo Button */}
                    <button
                      className="w-full px-4 py-1.5 rounded-[50px] text-white text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: demoActive 
                          ? '#D12A4A' 
                          : demoHovered 
                            ? '#F04A6A' 
                            : '#E8345A',
                        border: demoFocused 
                          ? '1px solid rgba(255, 255, 255, 0.5)' 
                          : 'none',
                        transform: demoActive ? 'scale(0.98)' : demoHovered ? 'scale(1.02)' : 'scale(1)',
                        boxShadow: demoFocused 
                          ? '0 0 0 3px rgba(232, 52, 90, 0.3)' 
                          : demoHovered 
                            ? '0 4px 12px rgba(232, 52, 90, 0.4)' 
                            : '0 2px 8px rgba(232, 52, 90, 0.2)',
                        opacity: demoDisabled ? 0.5 : 1,
                        cursor: demoDisabled || demoLoading ? 'not-allowed' : 'pointer',
                      }}
                      onMouseEnter={() => !demoDisabled && !demoLoading && setDemoHovered(true)}
                      onMouseLeave={() => setDemoHovered(false)}
                      onMouseDown={() => !demoDisabled && !demoLoading && setDemoActive(true)}
                      onMouseUp={() => setDemoActive(false)}
                      onFocus={() => !demoDisabled && !demoLoading && setDemoFocused(true)}
                      onBlur={() => setDemoFocused(false)}
                      disabled={demoDisabled || demoLoading}
                      onClick={() => {
                        setIsOpen(false);
                        if (!demoDisabled && !demoLoading) {
                          setDemoLoading(true);
                          setTimeout(() => {
                            setDemoLoading(false);
                          }, 2000);
                        }
                      }}
                    >
                      {demoLoading ? (
                        <>
                          <Loader2 className="inline-block w-4 h-4 animate-spin mr-2" />
                          Processing...
                        </>
                      ) : (
                        'Request Demo'
                      )}
                    </button>
                  </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
