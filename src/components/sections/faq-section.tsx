import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const defaultFaqs = [
    {
        question: "What are AI agents and how do they revolutionize business operations?",
        answer: "AI agents are intelligent software systems that can autonomously perform tasks, make decisions, and interact with users or other systems. They revolutionize business operations by automating complex processes, providing 24/7 availability, reducing human error, and scaling operations efficiently. Unlike traditional automation, AI agents can learn, adapt, and handle unexpected scenarios, making them invaluable for modern businesses."
    },
    {
        question: "What types of AI agents are available for enterprises?",
        answer: "We offer various AI agents including Customer Experience (CX) Agents for support and engagement, IT Operations Agents for infrastructure management, Security Operations Agents for threat detection, OCR Agents for document processing, and Marketing Agents for campaign automation. Each agent is designed for specific business functions and can be customized to meet your unique requirements."
    },
    {
        question: "How do AI-powered customer support agents enhance customer experience?",
        answer: "AI-powered customer support agents provide instant responses 24/7, handle multiple languages, maintain consistent service quality, and can resolve complex queries by accessing vast knowledge bases. They learn from each interaction to improve responses, can escalate to human agents when needed, and provide personalized experiences based on customer history and preferences."
    },
    {
        question: "What is the difference between AI agents and traditional chatbots?",
        answer: "Traditional chatbots follow pre-programmed scripts and can only handle specific, predetermined scenarios. AI agents, however, use advanced machine learning and natural language processing to understand context, learn from interactions, make autonomous decisions, and handle complex, multi-step processes. They can integrate with multiple systems and adapt their responses based on real-time data and user behavior."
    },
    {
        question: "How do AI Ops agents improve IT operations?",
        answer: "AI Ops agents continuously monitor IT infrastructure, predict potential issues before they occur, automate routine maintenance tasks, and provide intelligent incident response. They can analyze patterns across multiple systems, correlate events to identify root causes, and automatically implement fixes for common problems, significantly reducing downtime and improving system reliability."
    }
];

interface FAQ {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs?: FAQ[];
}

export function FAQSection({ faqs = defaultFaqs }: FAQSectionProps) {
    return (
        <section className="py-20 px-4 ">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                    <div>
                        <p className="text-purple-400 dark:text-purple-400 font-medium text-sm uppercase tracking-wide mb-2">
                            FREQUENTLY ASKED
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Questions
                        </h2>
                    </div>
                    <Button
                        variant="ghost"
                        className="text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 font-semibold mt-4 md:mt-0 self-start md:self-auto"
                    >
                        View all FAQs →
                    </Button>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value={`item-${index + 1}`} className="border-1 shadow-none">
                                    <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-700">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}