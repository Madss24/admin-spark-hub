
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export default function Scheduling() {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const timeSlots = ["8:00 AM", "9:30 AM", "11:00 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
  
  // Sample schedule data
  const [currentWeek, setCurrentWeek] = useState("May 13 - May 17, 2024");
  
  // Sample schedules
  const schedules = {
    "Mon": {
      "8:00 AM": { course: "Math 101", teacher: "Mrs. Smith", room: "204" },
      "11:00 AM": { course: "Physics 201", teacher: "Mr. Johnson", room: "Lab 2" },
      "2:30 PM": { course: "English 101", teacher: "Ms. Brown", room: "105" },
    },
    "Tue": {
      "9:30 AM": { course: "Chemistry 101", teacher: "Ms. Davis", room: "Lab 1" },
      "1:00 PM": { course: "History 201", teacher: "Mr. Wilson", room: "302" },
    },
    "Wed": {
      "8:00 AM": { course: "Biology 101", teacher: "Mrs. Johnson", room: "203" },
      "11:00 AM": { course: "Math 101", teacher: "Mrs. Smith", room: "204" },
      "4:00 PM": { course: "Art 101", teacher: "Ms. Lee", room: "Art Studio" },
    },
    "Thu": {
      "9:30 AM": { course: "Physics 201", teacher: "Mr. Johnson", room: "Lab 2" },
      "1:00 PM": { course: "English 101", teacher: "Ms. Brown", room: "105" },
    },
    "Fri": {
      "8:00 AM": { course: "History 201", teacher: "Mr. Wilson", room: "302" },
      "11:00 AM": { course: "Chemistry 101", teacher: "Ms. Davis", room: "Lab 1" },
      "2:30 PM": { course: "Computer Science", teacher: "Mr. Adams", room: "IT Lab" },
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Course Scheduling</h1>
        <p className="text-muted-foreground">
          Manage and view all your course schedules
        </p>
      </div>

      <Card>
        <CardHeader className="px-6 pt-6 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Manage schedule by week</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-sm font-medium">{currentWeek}</div>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="ml-2">
                <CalendarDays className="h-4 w-4 mr-2" />
                Today
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <div className="rounded-md border">
            <div className="grid grid-cols-[auto_repeat(5,_1fr)]">
              {/* Time slots column */}
              <div className="border-r">
                <div className="h-12 border-b bg-muted/50" />
                {timeSlots.map((slot, index) => (
                  <div 
                    key={index} 
                    className="h-24 border-b last:border-0 flex items-center justify-center p-2"
                  >
                    <span className="text-xs font-medium">{slot}</span>
                  </div>
                ))}
              </div>
              
              {/* Days of the week */}
              {weekdays.map((day, dayIndex) => (
                <div key={dayIndex} className="border-r last:border-r-0">
                  <div className="h-12 border-b bg-muted/50 flex items-center justify-center">
                    <span className="font-medium">{day}</span>
                  </div>
                  
                  {/* Slots for each day */}
                  {timeSlots.map((timeSlot, slotIndex) => {
                    const schedule = schedules[day]?.[timeSlot];
                    
                    return (
                      <div 
                        key={slotIndex} 
                        className="h-24 border-b last:border-0 p-1 relative"
                      >
                        {schedule ? (
                          <div className="absolute inset-1 rounded-md bg-primary/10 p-2 flex flex-col hover:bg-primary/15 transition-colors">
                            <span className="text-sm font-medium line-clamp-1">
                              {schedule.course}
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">
                              {schedule.teacher}
                            </span>
                            <span className="text-xs text-muted-foreground mt-auto">
                              Room {schedule.room}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
