
import { BookOpen, Plus, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/dashboard/CardHeader";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function Courses() {
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const { toast } = useToast();
  
  // Sample courses data
  const [courses, setCourses] = useState([
    { id: 1, name: "Mathematics 101", teacher: "Mrs. Smith", students: 28, status: "Active", description: "Basic mathematics principles and problem-solving techniques." },
    { id: 2, name: "Physics 201", teacher: "Mr. Johnson", students: 22, status: "Active", description: "Advanced physics concepts focusing on mechanics and thermodynamics." },
    { id: 3, name: "Chemistry 101", teacher: "Ms. Davis", students: 25, status: "Active", description: "Introduction to basic chemistry including periodic elements and reactions." },
    { id: 4, name: "Biology 201", teacher: "Mr. Wilson", students: 23, status: "Active", description: "Study of advanced biological systems and cellular structures." },
    { id: 5, name: "History 101", teacher: "Mrs. Anderson", students: 26, status: "Inactive", description: "Overview of world history with emphasis on modern events." },
    { id: 6, name: "English Literature", teacher: "Mr. Thompson", students: 24, status: "Active", description: "Analysis of classic and contemporary literature works." },
  ]);

  const [newCourse, setNewCourse] = useState({
    name: "",
    teacher: "",
    description: "",
    status: "Active"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCourse = () => {
    // Validate the form
    if (!newCourse.name || !newCourse.teacher) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Add new course
    const newCourseWithId = {
      ...newCourse,
      id: courses.length + 1,
      students: 0
    };

    setCourses([...courses, newCourseWithId]);
    setNewCourse({
      name: "",
      teacher: "",
      description: "",
      status: "Active"
    });
    setShowAddCourseForm(false);
    
    toast({
      title: "Course Added",
      description: `${newCourse.name} has been added to the courses.`
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground mt-1">
            Manage all your courses and course details
          </p>
        </div>
        <Button className="flex items-center gap-1" onClick={() => setShowAddCourseForm(true)}>
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="course-image-placeholder">
                <BookOpen className="h-12 w-12 text-slate-400" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{course.name}</h3>
                  <div className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    course.status === "Active" 
                      ? "bg-emerald-50 text-emerald-700" 
                      : "bg-rose-50 text-rose-700"
                  }`}>
                    {course.status}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{course.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span>Teacher: {course.teacher}</span>
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center justify-end gap-2 mt-4">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-medium mb-4">All Courses</h3>
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

      {/* Add Course Form Modal */}
      {showAddCourseForm && (
        <div className="form-container">
          <div className="form-content animate-enter">
            <div className="form-header">
              <h3 className="font-semibold">Add New Course</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowAddCourseForm(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="form-body">
              <div className="space-y-2">
                <Label htmlFor="name">Course Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={newCourse.name} 
                  onChange={handleInputChange} 
                  placeholder="e.g., Advanced Mathematics"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher">Teacher</Label>
                <Input 
                  id="teacher" 
                  name="teacher" 
                  value={newCourse.teacher} 
                  onChange={handleInputChange} 
                  placeholder="e.g., Mrs. Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input 
                  id="description" 
                  name="description" 
                  value={newCourse.description} 
                  onChange={handleInputChange} 
                  placeholder="Brief description of the course"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select 
                  id="status" 
                  name="status" 
                  value={newCourse.status} 
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="form-footer">
              <Button 
                variant="outline" 
                onClick={() => setShowAddCourseForm(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleAddCourse}>
                Add Course
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
