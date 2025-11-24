import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <Card 
      className="hover-lift glass-effect animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-8 space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-display font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;