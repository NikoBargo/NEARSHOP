import { Card, CardContent } from "@/components/ui/card";

interface AuthCardProps {
  children: React.ReactNode;
}

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
}