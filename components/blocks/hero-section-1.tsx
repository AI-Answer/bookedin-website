'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'
import { Particles } from '@/components/ui/particles'

import { AnimatedTooltipPreview } from '@/components/ui/animated-tooltip-demo'
import { StarRating } from '@/components/ui/star-rating'
import { TestimonialCarouselDemo } from '@/components/ui/testimonial-demo'
import BeforeAfterSection from '@/components/blocks/BeforeAfterSection'
import WhoIsThisForSection from '@/components/blocks/WhoIsThisForSection'
import PricingSection from '@/components/blocks/PricingSection'
import VideoTestimonialsSection from '@/components/blocks/VideoTestimonialsSection'
import BookingSection from '@/components/blocks/BookingSection'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden relative">
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={200}
                    ease={80}
                    color="#305AE3"
                    refresh
                />
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    {/* Animated Tooltip Eyebrow with Stars */}
                                    <div className="mb-6 flex flex-col items-center justify-center gap-3">
                                        <StarRating
                                            rating={5}
                                            size={20}
                                            className="justify-center"
                                        />
                                        <div className="scale-75 sm:scale-90">
                                            <AnimatedTooltipPreview />
                                        </div>
                                    </div>

                                    <h1
                                        className="mt-4 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-8 xl:text-[5.25rem]">
                                        Convert leads into meetings for your clients
                                    </h1>
                                    <p
                                        className="mx-auto mt-6 max-w-2xl text-balance text-lg">
                                        BookedIn automatically reaches out and nurtures leads via Phone, SMS, Whatsapp, Email, and Social Media DMs and turns them into potential customers - under your brand.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.5,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}>
                                    <div className="relative mt-6 overflow-hidden px-2 sm:mt-8">
                                        <div
                                            aria-hidden
                                            className="bg-gradient-to-b to-background absolute inset-0 z-0 from-transparent from-35%"
                                        />
                                        <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-4xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 z-20">
                                            <div className="aspect-video relative rounded-2xl z-30">
                                                <iframe
                                                    src="https://fast.wistia.net/embed/iframe/vuxx1meqz9?seo=true&videoFoam=false"
                                                    title="BookedIn Demo Video"
                                                    allow="autoplay; fullscreen"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full rounded-2xl"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="https://www.skool.com/bookedin" target="_blank" rel="noopener noreferrer">
                                                <span className="text-nowrap">Get Started</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#demo" prefetch={false}>
                                            <span className="text-nowrap">Schedule a Demo</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>


                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="relative bg-background/50 py-12 md:py-16 overflow-hidden">
                    <Particles
                        className="absolute inset-0 z-0"
                        quantity={150}
                        ease={80}
                        color="#305AE3"
                        refresh
                    />
                    <div className="relative z-10 container mx-auto px-6">
                        <TestimonialCarouselDemo />
                    </div>
                </section>

                <div id="features">
                    <BeforeAfterSection />
                </div>

                <div id="solution">
                    <WhoIsThisForSection />
                </div>

                <div id="testimonials">
                    <VideoTestimonialsSection />
                </div>

                <div id="demo">
                    <BookingSection />
                </div>

                <div id="pricing">
                    <PricingSection />
                </div>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'How It Works', href: '#features' },
    { name: 'Who This Is For', href: '#solution' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-7xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-5xl rounded-2xl border backdrop-blur-lg lg:px-8')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-8 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            prefetch={false}
                                            className="text-foreground hover:text-primary block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-auto lg:gap-3 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                prefetch={false}
                                                onClick={() => setMenuState(false)}
                                                className="text-foreground hover:text-primary block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit lg:gap-3">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <Link href="#demo" prefetch={false} onClick={() => setMenuState(false)}>
                                        <span>Schedule a Demo</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="https://www.skool.com/bookedin" target="_blank" rel="noopener noreferrer" prefetch={false} onClick={() => setMenuState(false)}>
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <img
            src="/bookedin.svg"
            alt="BookedIn"
            className={cn('h-8 w-auto', className)}
        />
    )
}