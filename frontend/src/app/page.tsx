import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Main Card */}
      <Card className="lg:col-span-2 shadow-xl border-2 border-black bg-white/90">
        <CardHeader>
          <CardTitle className="text-2xl font-bold tracking-tight uppercase text-gray-900">Welcome to Creative AI Studio</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            This is your Swiss Design dashboard. Use the grid, whitespace, and strong typography to build clear, modern UIs. Start by triggering an action:
          </p>
          <div className="flex gap-4">
            <Button>Primary Action</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">More</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
      {/* Info Card */}
      <Card className="shadow-lg border border-gray-300 bg-white/80 flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-lg font-semibold uppercase text-gray-800">Quick Info</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-gray-600 text-base space-y-2">
            <li>Swiss Design: Grid, whitespace, clarity</li>
            <li>Responsive, modern, accessible</li>
            <li>shadcn/ui components</li>
            <li>Ready for AI workflows</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
