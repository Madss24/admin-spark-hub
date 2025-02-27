
import { User, Plus, Search, Mail, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function Teachers() {
  const [showAddTeacherForm, setShowAddTeacherForm] = useState(false);
  const { toast } = useToast();
  
  // Sample teacher data
  const [teachers, setTeachers] = useState([
    { 
      id: 1, 
      name: "Mrs. Smith", 
      email: "smith@school.edu", 
      phone: "(555) 123-4567", 
      department: "Mathematics", 
      courses: 3,
      joinedDate: "Jan 2022"
    },
    { 
      id: 2, 
      name: "Mr. Johnson", 
      email: "johnson@school.edu", 
      phone: "(555) 234-5678", 
      department: "Science", 
      courses: 2,
      joinedDate: "Mar 2021"
    },
    { 
      id: 3, 
      name: "Ms. Davis", 
      email: "davis@school.edu", 
      phone: "(555) 345-6789", 
      department: "Science", 
      courses: 2,
      joinedDate: "Sep 2022"
    },
    { 
      id: 4, 
      name: "Mr. Wilson", 
      email: "wilson@school.edu", 
      phone: "(555) 456-7890", 
      department: "History", 
      courses: 2,
      joinedDate: "Aug 2020"
    },
    { 
      id: 5, 
      name: "Mrs. Anderson", 
      email: "anderson@school.edu", 
      phone: "(555) 567-8901", 
      department: "English", 
      courses: 1,
      joinedDate: "Feb 2023"
    },
  ]);

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    department: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTeacher = () => {
    // Validate the form
    if (!newTeacher.name || !newTeacher.email || !newTeacher.department) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Add new teacher
    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const newTeacherWithId = {
      ...newTeacher,
      id: teachers.length + 1,
      courses: 0,
      joinedDate: `${months[now.getMonth()]} ${now.getFullYear()}`
    };

    setTeachers([...teachers, newTeacherWithId]);
    setNewTeacher({
      name: "",
      email: "",
      phone: "",
      department: ""
    });
    setShowAddTeacherForm(false);
    
    toast({
      title: "Teacher Onboarded",
      description: `${newTeacher.name} has been successfully added.`
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teachers</h1>
          <p className="text-muted-foreground mt-1">
            Manage teacher profiles and assignments
          </p>
        </div>
        <Button className="flex items-center gap-1" onClick={() => setShowAddTeacherForm(true)}>
          <Plus className="h-4 w-4" />
          <span>Onboard Teacher</span>
        </Button>
      </div>

      <div className="dashboard-card">
        <div className="flex items-center justify-between mb-4">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search teachers..." 
              className="pl-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Filter
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="rounded-lg border p-4 hover:border-primary/50 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{teacher.name}</h3>
                    <p className="text-sm text-muted-foreground">{teacher.department}</p>
                  </div>
                </div>
                <div className="rounded-full py-1 px-2 bg-secondary text-xs font-medium">
                  {teacher.courses} courses
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{teacher.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{teacher.phone}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Joined {teacher.joinedDate}
                </span>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Teacher Form Modal */}
      {showAddTeacherForm && (
        <div className="form-container">
          <div className="form-content animate-enter">
            <div className="form-header">
              <h3 className="font-semibold">Onboard New Teacher</h3>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowAddTeacherForm(false)}
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
                  value={newTeacher.name} 
                  onChange={handleInputChange} 
                  placeholder="e.g., Jane Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email"
                  value={newTeacher.email} 
                  onChange={handleInputChange} 
                  placeholder="e.g., jane.smith@school.edu"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={newTeacher.phone} 
                  onChange={handleInputChange} 
                  placeholder="e.g., (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <select 
                  id="department" 
                  name="department" 
                  value={newTeacher.department} 
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                >
                  <option value="">Select a department</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="English">English</option>
                  <option value="History">History</option>
                  <option value="Arts">Arts</option>
                  <option value="Physical Education">Physical Education</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
              </div>
            </div>
            <div className="form-footer">
              <Button 
                variant="outline" 
                onClick={() => setShowAddTeacherForm(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleAddTeacher}>
                Add Teacher
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
