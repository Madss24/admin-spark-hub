
import { Users, Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Students() {
  // Sample student data
  const students = [
    { 
      id: "S12345", 
      name: "John Smith", 
      grade: "10th", 
      courses: ["Math 101", "Physics 201", "English 101"], 
      status: "Active" 
    },
    { 
      id: "S12346", 
      name: "Emily Johnson", 
      grade: "11th", 
      courses: ["Chemistry 101", "Biology 201", "History 101"], 
      status: "Active" 
    },
    { 
      id: "S12347", 
      name: "Michael Brown", 
      grade: "9th", 
      courses: ["Math 101", "English 101", "History 101"], 
      status: "Active" 
    },
    { 
      id: "S12348", 
      name: "Sarah Davis", 
      grade: "12th", 
      courses: ["Physics 201", "Chemistry 101", "Computer Science"], 
      status: "Active" 
    },
    { 
      id: "S12349", 
      name: "James Wilson", 
      grade: "10th", 
      courses: ["Math 101", "Biology 201", "Art 101"], 
      status: "Inactive" 
    },
    { 
      id: "S12350", 
      name: "Jessica Moore", 
      grade: "11th", 
      courses: ["English 101", "History 101", "Art 101"], 
      status: "Active" 
    },
    { 
      id: "S12351", 
      name: "Robert Taylor", 
      grade: "9th", 
      courses: ["Math 101", "Physics 201", "Computer Science"], 
      status: "Active" 
    },
    { 
      id: "S12352", 
      name: "Jennifer Anderson", 
      grade: "12th", 
      courses: ["Chemistry 101", "Biology 201", "English 101"], 
      status: "Active" 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground mt-1">
            Manage all student information and enrollments
          </p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          <span>Add Student</span>
        </Button>
      </div>

      <div className="dashboard-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search students..." 
              className="pl-8"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                <SelectItem value="9">9th Grade</SelectItem>
                <SelectItem value="10">10th Grade</SelectItem>
                <SelectItem value="11">11th Grade</SelectItem>
                <SelectItem value="12">12th Grade</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="math">Math 101</SelectItem>
                <SelectItem value="english">English 101</SelectItem>
                <SelectItem value="physics">Physics 201</SelectItem>
                <SelectItem value="chemistry">Chemistry 101</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="active">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon" className="h-10 w-10">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="rounded-md border">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/5">
                  <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Grade</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Courses</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {students.map((student) => (
                  <tr key={student.id} className="border-b transition-colors hover:bg-muted/5">
                    <td className="p-4 align-middle font-mono text-xs">{student.id}</td>
                    <td className="p-4 align-middle">
                      <div className="font-medium">{student.name}</div>
                    </td>
                    <td className="p-4 align-middle">{student.grade}</td>
                    <td className="p-4 align-middle">
                      <div className="flex flex-wrap gap-1">
                        {student.courses.map((course, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-secondary"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        student.status === "Active" 
                          ? "bg-emerald-50 text-emerald-700" 
                          : "bg-rose-50 text-rose-700"
                      }`}>
                        {student.status}
                      </div>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">View</Button>
                        <Button variant="ghost" size="sm">Edit</Button>
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
