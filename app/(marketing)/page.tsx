import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { BookOpen, TrendingUp, Award, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function LandingPage() {
    const { userId } = auth();

    // If user is logged in, redirect to dashboard
    if (userId) {
        return redirect("/dashboard");
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-sky-50 to-white px-6 py-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
                        Learn and Earn with <span className="text-sky-600">LearnMate</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Your one-stop platform to discover amazing courses, learn new skills,
                        and even create your own courses to share your knowledge with the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/sign-up">
                            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                                Get Started Free
                            </Button>
                        </Link>
                        <Link href="/sign-in">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8">
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-slate-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
                        Why Choose LearnMate?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-sky-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-900">Browse Courses</h3>
                            <p className="text-slate-600">
                                Explore a wide variety of courses across different categories and skill levels.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-900">Track Progress</h3>
                            <p className="text-slate-600">
                                Monitor your learning journey with detailed progress tracking and achievements.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Award className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-900">Teach & Share</h3>
                            <p className="text-slate-600">
                                Create your own courses and share your expertise with learners worldwide.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                <DollarSign className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-slate-900">Earn Money</h3>
                            <p className="text-slate-600">
                                Monetize your knowledge by selling courses with secure payment processing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-sky-600 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ready to Start Learning?
                    </h2>
                    <p className="text-xl text-sky-100">
                        Join thousands of students and teachers already using LearnMate
                    </p>
                    <Link href="/sign-up">
                        <Button size="lg" variant="secondary" className="text-lg px-8">
                            Create Your Free Account
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-8 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p>&copy; 2024 LearnMate. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
