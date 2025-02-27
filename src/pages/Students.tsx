
import { Users, Plus, Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

export default function Students() {
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const { toast } = useToast();
  
  // Available courses for enrollment
  const availableCourses = [
    "Math 101", 
    "Physics 201", 
    "English 101", 
    "History 101",
    "Chemistry 101",
    "Biology 201",
    "Art 101",
    "Computer Science"
  ];
  
  // Sample student data
  const [students, setStudents] = useState([
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
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    grade: "",
    status: "Active",
    selectedCourses: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleCourseToggle = (course) => {
    setNewStudent(prev => {
      if (prev.selectedCourses.includes(course)) {
        return {
          ...prev,
          selectedCourses: prev.selectedCourses.filter(c => c !== course)
        };
      } else {
        return {
          ...prev,
          selectedCourses: [...prev.selectedCourses, course]
        };
      }
    });
  };

  const handleAddStudent = () => {
    // Validate the form
    if (!newStudent.name || !newStudent.grade) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (newStudent.selectedCourses.length === 0) {
      toast({
        title: "No Courses Selected",
        description: "Please select at least one course.",
        variant: "destructive"
      });
      return;
    }

    // Generate a new student ID
    const lastId = students.length > 0 
      ? parseInt(students[students.length - 1].id.substring(1)) 
      : 12345;
    const newId = `S${lastId + 1}`;

    // Add new student
    const newStudentWithId = {
      id: newId,
      name: newStudent.name,
      grade: newStudent.grade,
      courses: newStudent.selectedCourses,
      status: newStudent.status
    };

    setStudents([...students, newStudentWithId]);
    setNewStudent({
      name: "",
      grade: "",
      status: "Active",
      selectedCourses: []
    });
    setShowAddStudentForm(false);
    
    toast({
      title: "Student Added",
      description: `${newStudent.name} has been successfully enrolled.`
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground mt-1">
            Manage all student information and enrollments
          </p>
        </div>
        <Button className="flex items-center gap-1" onClick={() => setShowAddStudentForm(true)}>
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

      {/* Add Student Form Modal */}
      {showAddStudentForm && (
        <div className="form-container">
          <div className="form-content animate-enter">
            <div className="form-header">
              <h3 className="font-semibold">Add New Student</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowAddStudentForm(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="form-body">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={newStudent.name} 
                  onChange={handleInputChange} 
                  placeholder="e.g., John Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <select 
                  id="grade" 
                  name="grade" 
                  value={newStudent.grade} 
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                >
                  <option value="">Select grade</option>
                  <option value="9th">9th Grade</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select 
                  id="status" 
                  name="status" 
                  value={newStudent.status} 
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="space-y-2 mt-4">
                <Label>Courses</Label>
                <div className="grid grid-cols-2 gap-2 mt-2 border rounded-md p-4 max-h-40 overflow-y-auto">
                  {availableCourses.map((course) => (
                    <div key={course} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`course-${course}`}
                        checked={newStudent.selectedCourses.includes(course)}
                        onCheckedChange={() => handleCourseToggle(course)}
                      />
                      <label 
                        htmlFor={`course-${course}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {course}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="form-footer">
              <Button 
                variant="outline" 
                onClick={() => setShowAddStudentForm(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleAddStudent}>
                Add Student
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
