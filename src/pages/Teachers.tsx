
import { User, Plus, Search, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Teachers() {
  // Sample teacher data
  const teachers = [
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
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Teachers</h1>
          <p className="text-muted-foreground mt-1">
            Manage teacher profiles and assignments
          </p>
        </div>
        <Button className="flex items-center gap-1">
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
    </div>
  );
}
