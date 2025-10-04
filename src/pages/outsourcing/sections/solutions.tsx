import { Button } from '@/components/ui/button'

const solutions = [
    {
        id: 1,
        category: 'DEEL GLOBAL PAYROLL',
        title: 'Consolidate and simplify your international payroll operations',
        bgColor: 'bg-blue-200 dark:bg-blue-900/20',
        image: 'https://placehold.co/400x200/93c5fd/1e40af?text=Payroll',
    },
    {
        id: 2,
        category: 'DEEL CONTRACTOR MANAGEMENT',
        title: 'Onboard, manage, and pay contractors compliantly',
        bgColor: 'bg-yellow-200 dark:bg-yellow-900/20',
        image: 'https://placehold.co/400x200/fde047/854d0e?text=Contractor',
    },
    {
        id: 3,
        category: 'DEEL EMPLOYER OF RECORD',
        title: 'Let us hire global employees on your behalf',
        bgColor: 'bg-purple-200 dark:bg-purple-900/20',
        image: 'https://placehold.co/400x200/d8b4fe/6b21a8?text=EOR',
    },
    {
        id: 4,
        category: 'DEEL IMMIGRATION',
        title: 'Secure visas for international hires without law firms or local entities',
        bgColor: 'bg-yellow-200 dark:bg-yellow-900/20',
        image: 'https://placehold.co/400x200/fde047/854d0e?text=Immigration',
    },
    {
        id: 5,
        category: 'DEEL IT',
        title: 'Buy and lease equipment for your team',
        bgColor: 'bg-purple-200 dark:bg-purple-900/20',
        image: 'https://placehold.co/400x200/d8b4fe/6b21a8?text=IT',
    },
    {
        id: 6,
        category: 'DEEL HR',
        title: "Manage every stage of your team's journey",
        bgColor: 'bg-blue-200 dark:bg-blue-900/20',
        image: 'https://placehold.co/400x200/93c5fd/1e40af?text=HR',
    },
]

export default function Solutions() {
    return (
        <section className="w-full bg-white dark:bg-neutral-950 py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white text-center mb-12 md:mb-16">
                    Move faster with all of the solutions you need in one place
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution) => (
                        <div
                            key={solution.id}
                            className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className={`${solution.bgColor} p-8 flex items-center justify-center min-h-[200px]`}>
                                <img
                                    src={solution.image}
                                    alt={solution.title}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>

                            <div className="p-6 space-y-4">
                                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                                    {solution.category}
                                </p>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-tight">
                                    {solution.title}
                                </h3>
                                <Button
                                    variant="outline"
                                    className="border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full font-semibold"
                                >
                                    Book a demo
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
