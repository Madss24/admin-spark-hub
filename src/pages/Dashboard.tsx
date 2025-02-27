
import { Users, User, BookOpen, Calendar, UserPlus, BookCheck, CalendarClock } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityItem } from "@/components/dashboard/ActivityItem";
import { CardHeader } from "@/components/dashboard/CardHeader";
import { Button } from "@/components/ui/button";

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
