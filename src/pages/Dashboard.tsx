
import { Users, User, BookOpen, Calendar, UserPlus, BookCheck, CalendarClock } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityItem } from "@/components/dashboard/ActivityItem";
import { CardHeader } from "@/components/dashboard/CardHeader";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";

export default function Dashboard() {
  // Sample data - would come from API in real app
  const stats = [
    { 
      title: "Total Students", 
      value: 512, 
      icon: <Users className="h-5 w-5" />, 
      trend: { value: 12, isPositive: true },
      description: "Active enrollments" 
    },
    { 
      title: "Total Teachers", 
      value: 24, 
      icon: <User className="h-5 w-5" />, 
      trend: { value: 5, isPositive: true },
      description: "Qualified staff" 
    },
    { 
      title: "Total Courses", 
      value: 16, 
      icon: <BookOpen className="h-5 w-5" />, 
      trend: { value: 2, isPositive: true },
      description: "Active courses" 
    },
    { 
      title: "Upcoming Schedule", 
      value: "Math 101", 
      icon: <Calendar className="h-5 w-5" />, 
      description: "Today at 10:00 AM" 
    }
  ];

  const recentActivities = [
    { 
      icon: <UserPlus className="h-4 w-4" />, 
      title: "Ms. Johnson was onboarded as a new teacher", 
      timestamp: "1 hour ago", 
      description: "Science Department" 
    },
    { 
      icon: <BookCheck className="h-4 w-4" />, 
      title: "New student enrolled in Physics 101", 
      timestamp: "3 hours ago", 
      description: "Student ID: S12345" 
    },
    { 
      icon: <CalendarClock className="h-4 w-4" />, 
      title: "Chemistry 202 schedule updated", 
      timestamp: "Yesterday", 
      description: "Now on Tuesdays and Thursdays" 
    },
    { 
      icon: <UserPlus className="h-4 w-4" />, 
      title: "5 new students enrolled in Literature", 
      timestamp: "2 days ago"
    },
    { 
      icon: <UserPlus className="h-4 w-4" />, 
      title: "Mr. Davis was onboarded as a new teacher", 
      timestamp: "3 days ago", 
      description: "Math Department" 
    }
  ];

  const upcomingSchedules = [
    { 
      title: "Math 101", 
      time: "10:00 AM - 11:30 AM", 
      teacher: "Mrs. Smith", 
      location: "Room 204" 
    },
    { 
      title: "Biology Lab", 
      time: "1:00 PM - 2:30 PM", 
      teacher: "Mr. Johnson", 
      location: "Lab 3" 
    },
    { 
      title: "History 201", 
      time: "3:00 PM - 4:30 PM", 
      teacher: "Ms. Davis", 
      location: "Room 105" 
    }
  ];

  // Chart data
  const studentsByGradeData = [
    { name: '9th Grade', students: 132 },
    { name: '10th Grade', students: 156 },
    { name: '11th Grade', students: 124 },
    { name: '12th Grade', students: 100 },
  ];

  const studentsByCourseData = [
    { name: 'Math', students: 85 },
    { name: 'English', students: 78 },
    { name: 'Science', students: 92 },
    { name: 'History', students: 65 },
    { name: 'Art', students: 42 },
    { name: 'PE', students: 55 },
    { name: 'CS', students: 45 },
  ];

  const attendanceData = [
    { month: 'Jan', attendance: 92 },
    { month: 'Feb', attendance: 94 },
    { month: 'Mar', attendance: 91 },
    { month: 'Apr', attendance: 89 },
    { month: 'May', attendance: 95 },
    { month: 'Jun', attendance: 88 },
    { month: 'Jul', attendance: 0 }, // Summer break
    { month: 'Aug', attendance: 90 },
    { month: 'Sep', attendance: 93 },
    { month: 'Oct', attendance: 92 },
    { month: 'Nov', attendance: 90 },
    { month: 'Dec', attendance: 87 },
  ];

  const coursesDistributionData = [
    { name: 'Mathematics', value: 4 },
    { name: 'Science', value: 3 },
    { name: 'English', value: 3 },
    { name: 'History', value: 2 },
    { name: 'Arts', value: 2 },
    { name: 'PE', value: 1 },
    { name: 'CS', value: 1 },
  ];

  const COLORS = ['#FF8042', '#FF5733', '#FFC300', '#36A2EB', '#4BC0C0', '#9966FF', '#FF6384'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back to your school admin dashboard.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Student grade distribution chart */}
        <div className="dashboard-card">
          <CardHeader
            title="Students by Grade"
            description="Distribution of students across grades"
          />
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={studentsByGradeData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Course distribution chart */}
        <div className="dashboard-card">
          <CardHeader
            title="Course Distribution"
            description="Number of courses by department"
          />
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={coursesDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {coursesDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Attendance trend chart */}
        <div className="dashboard-card">
          <CardHeader
            title="Attendance Trend"
            description="Monthly attendance percentage"
          />
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={300}
                data={attendanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="attendance" stroke="#FF8042" fill="#FF8042" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Students by course */}
        <div className="dashboard-card">
          <CardHeader
            title="Students by Course Category"
            description="Number of students enrolled by subject"
          />
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={studentsByCourseData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="students" fill="#FF5733" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="dashboard-card flex flex-col space-y-4">
          <CardHeader
            title="Recent Activities"
            description="Latest actions in your school"
            action={
              <Button variant="ghost" size="sm" className="text-xs h-8">
                View all
              </Button>
            }
          />
          <div className="space-y-1 -mx-3">
            {recentActivities.map((activity, index) => (
              <ActivityItem
                key={index}
                icon={activity.icon}
                title={activity.title}
                timestamp={activity.timestamp}
                description={activity.description}
              />
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <CardHeader
            title="Today's Schedule"
            description="Upcoming classes for today"
            action={
              <Button variant="ghost" size="sm" className="text-xs h-8">
                Full calendar
              </Button>
            }
          />
          <div className="space-y-4">
            {upcomingSchedules.map((schedule, index) => (
              <div 
                key={index} 
                className="flex items-start py-2 border-b last:border-0 border-border/50"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{schedule.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{schedule.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{schedule.teacher}</p>
                  <p className="text-xs text-muted-foreground mt-1">{schedule.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
