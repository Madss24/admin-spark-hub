
import { BookOpen, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/dashboard/CardHeader";

export default function Courses() {
  // Sample courses data
  const courses = [
    { id: 1, name: "Mathematics 101", teacher: "Mrs. Smith", students: 28, status: "Active" },
    { id: 2, name: "Physics 201", teacher: "Mr. Johnson", students: 22, status: "Active" },
    { id: 3, name: "Chemistry 101", teacher: "Ms. Davis", students: 25, status: "Active" },
    { id: 4, name: "Biology 201", teacher: "Mr. Wilson", students: 23, status: "Active" },
    { id: 5, name: "History 101", teacher: "Mrs. Anderson", students: 26, status: "Inactive" },
    { id: 6, name: "English Literature", teacher: "Mr. Thompson", students: 24, status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground mt-1">
            Manage all your courses and course details
          </p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          <span>Add Course</span>
        </Button>
      </div>

      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search courses..." 
              className="pl-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/5">
                  <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Teacher</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Students</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {courses.map((course) => (
                  <tr key={course.id} className="border-b transition-colors hover:bg-muted/5">
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className="rounded-md p-2 bg-primary/5">
                          <BookOpen className="h-4 w-4 text-primary" />
                        </div>
                        <span>{course.name}</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle">{course.teacher}</td>
                    <td className="p-4 align-middle">{course.students}</td>
                    <td className="p-4 align-middle">
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        course.status === "Active" 
                          ? "bg-emerald-50 text-emerald-700" 
                          : "bg-rose-50 text-rose-700"
                      }`}>
                        {course.status}
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">View</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
