'use client'

import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Perf: defer heavy, below-the-fold sections & effects
const Particles = dynamic(
    () => import('@/components/ui/particles').then((mod) => mod.Particles),
    { ssr: false, loading: () => null }
)

const TestimonialCarouselDemo = dynamic(
    () => import('@/components/ui/testimonial-demo').then((mod) => mod.TestimonialCarouselDemo),
    { ssr: false, loading: () => null }
)

const BeforeAfterSection = dynamic(
    () => import('@/components/blocks/BeforeAfterSection'),
    { ssr: true, loading: () => null }
)

const WhoIsThisForSection = dynamic(
    () => import('@/components/blocks/WhoIsThisForSection'),
    { ssr: true, loading: () => null }
)

const PricingSection = dynamic(
    () => import('@/components/blocks/PricingSection'),
    { ssr: true, loading: () => null }
)

const VideoTestimonialsSection = dynamic(
    () => import('@/components/blocks/VideoTestimonialsSection'),
    { ssr: false, loading: () => null }
)

const BookingSection = dynamic(
    () => import('@/components/blocks/BookingSection'),
    { ssr: true, loading: () => null }
)


export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden relative">
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={120}
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
                        <div className="absolute inset-0 -z-20">
                            <img
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt=""
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Column - Content */}
                                <div className="lg:pr-8">
                                    <div className="space-y-6">
                                        {/* Eyebrow */}
                                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                                            Fix your Leaky Funnel
                                        </div>

                                        {/* Headline */}
                                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                            AI Lead Manager That Books You More Sales Calls
                                        </h1>

                                        {/* Subhead */}
                                        <p className="text-lg leading-8 text-muted-foreground max-w-2xl">
                                            Effortlessly create AI agents that automate followups, database reactivation, and appointment scheduling. Then whitelabel and resell these high-value services as a fully productized system to scale your agency.
                                        </p>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                                <Link href="https://dashboard.bookedin.ai/register" target="_blank" rel="noopener noreferrer" prefetch={false}>
                                                    Try out the platform
                                                </Link>
                                            </Button>
                                            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                                                <Link href="/book" prefetch={false}>
                                                    Let us build it for you
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Video */}
                                <div className="lg:pl-8">
                                    <div className="relative overflow-hidden">
                                        <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                            <div style={{ position: 'relative', boxSizing: 'content-box', maxHeight: '80vh', width: '100%', aspectRatio: '1.78', padding: '40px 0 40px 0' }}>
                                                <iframe
                                                    src="https://app.supademo.com/embed/cmit6la4z3275l821gamks9al?embed_v=2&utm_source=embed"
                                                    loading="lazy"
                                                    title="Bookedin ai product walkthrough"
                                                    allow="clipboard-write"
                                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Blog', href: '/blog' },
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
                                            target={item.href === '/blog' ? '_blank' : undefined}
                                            rel={item.href === '/blog' ? 'noopener noreferrer' : undefined}
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
                                                target={item.href === '/blog' ? '_blank' : undefined}
                                                rel={item.href === '/blog' ? 'noopener noreferrer' : undefined}
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
                                    <Link href="/book" prefetch={false} onClick={() => setMenuState(false)}>
                                        <span>Schedule a Demo</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm">
                                    <Link href="https://dashboard.bookedin.ai/register" target="_blank" rel="noopener noreferrer" prefetch={false} onClick={() => setMenuState(false)}>
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