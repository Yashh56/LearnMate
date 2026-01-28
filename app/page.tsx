"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
    const { isSignedIn, isLoaded } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            router.push("/search");
        }
    }, [isLoaded, isSignedIn, router]);

    if (!isLoaded) {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-700" />
            </div>
        );
    }

    if (isSignedIn) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-8 w-8 text-sky-700" />
                            <span className="text-xl font-bold text-slate-800">LearnMate</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/sign-in">
                                <Button variant="ghost" className="text-slate-600 hover:text-slate-800">
                                    Sign In
                                </Button>
                            </Link>
                            <Link href="/sign-up">
                                <Button className="bg-sky-700 hover:bg-sky-800 text-white">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
                        </span>
                        New courses added weekly
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6">
                        Learn New Skills.
                        <br />
                        <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                            Advance Your Career.
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                        Discover thousands of courses taught by industry experts. Start learning today and unlock your full potential.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/sign-up">
                            <Button size="lg" className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-6 text-lg">
                                Start Learning Free
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-slate-300">
                            <Play className="mr-2 h-5 w-5" />
                            Watch Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">10K+</div>
                            <div className="text-slate-400">Active Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">500+</div>
                            <div className="text-slate-400">Courses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">50+</div>
                            <div className="text-slate-400">Expert Instructors</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">95%</div>
                            <div className="text-slate-400">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Why Choose LearnMate?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Everything you need to succeed in your learning journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                                <BookOpen className="h-7 w-7 text-sky-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                Expert-Led Courses
                            </h3>
                            <p className="text-slate-600">
                                Learn from industry professionals with years of real-world experience. Get practical knowledge that applies directly to your career.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                                <Users className="h-7 w-7 text-emerald-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                Community Learning
                            </h3>
                            <p className="text-slate-600">
                                Connect with fellow learners, participate in discussions, and grow together. Learning is better when done with others.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-shadow">
                            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                                <Award className="h-7 w-7 text-amber-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                Verified Certificates
                            </h3>
                            <p className="text-slate-600">
                                Earn recognized certificates upon completion. Showcase your skills to employers and stand out in the job market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-700 to-indigo-700">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-xl text-sky-100 mb-8">
                        Join thousands of students already learning on LearnMate
                    </p>
                    <Link href="/sign-up">
                        <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100 px-8 py-6 text-lg font-semibold">
                            Create Free Account
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <BookOpen className="h-6 w-6 text-sky-500" />
                            <span className="text-lg font-semibold text-white">LearnMate</span>
                        </div>
                        <div className="text-slate-400 text-sm">
                            © {new Date().getFullYear()} LearnMate. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
