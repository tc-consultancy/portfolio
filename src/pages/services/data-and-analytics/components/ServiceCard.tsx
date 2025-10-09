interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="dark:bg-gray-800 p-8 rounded-lg hover:shadow-md transition">
            <div className="mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}
