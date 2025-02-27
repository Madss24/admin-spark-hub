
import { BarChart, BookOpen, Clock, Users, Music2, Mic2, Piano, Guitar } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ActivityItem } from "@/components/dashboard/ActivityItem";
import { CardHeader } from "@/components/dashboard/CardHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader as UICardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart as CustomBarChart } from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  // Mock data for course distribution by instrument
  const courseData = [
    { name: "Piano", value: 35 },
    { name: "Guitar", value: 28 },
    { name: "Violin", value: 15 },
    { name: "Voice", value: 22 },
  ];

  // Generate shades of orange for each bar
  const orangeColors = [
    "hsl(24, 100%, 59%)",  // Primary orange
    "hsl(24, 100%, 65%)",  // Lighter orange
    "hsl(24, 100%, 50%)",  // Darker orange
    "hsl(24, 90%, 72%)",   // Soft orange
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to Harmony Academy Music School Dashboard
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value="342" 
          icon={<Users className="h-5 w-5" />} 
          description="Active students enrolled"
          trend={{ value: 12, isPositive: true }}
          className="note-accent"
        />
        <StatCard 
          title="Music Courses" 
          value="24" 
          icon={<BookOpen className="h-5 w-5" />} 
          description="Across all departments"
          trend={{ value: 4, isPositive: true }}
          className="note-accent"
        />
        <StatCard 
          title="Practice Rooms" 
          value="18" 
          icon={<Music2 className="h-5 w-5" />} 
          description="Available for bookings"
          trend={{ value: 2, isPositive: true }}
          className="note-accent"
        />
        <StatCard 
          title="Weekly Lessons" 
          value="156" 
          icon={<Clock className="h-5 w-5" />} 
          description="Scheduled this week"
          trend={{ value: 8, isPositive: true }}
          className="note-accent"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="md:col-span-3 lg:col-span-4 music-card">
          <UICardHeader>
            <CardTitle>Students by Instrument</CardTitle>
            <CardDescription>
              Distribution of students across musical instruments
            </CardDescription>
          </UICardHeader>
          <CardContent>
            <CustomBarChart
              data={courseData}
              categories={["value"]}
              index="name"
              colors={orangeColors}
              valueFormatter={(value) => `${value} students`}
              className="aspect-[4/3]"
            />
          </CardContent>
        </Card>

        <Card className="md:col-span-3 lg:col-span-3 piano-keys">
          <UICardHeader>
            <CardTitle>Recent Recitals</CardTitle>
            <CardDescription>Latest student performances</CardDescription>
          </UICardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Instrument</TableHead>
                  <TableHead>Piece</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Sarah Chen</TableCell>
                  <TableCell>Piano</TableCell>
                  <TableCell>Moonlight Sonata</TableCell>
                  <TableCell className="text-right">95/100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>David Kim</TableCell>
                  <TableCell>Violin</TableCell>
                  <TableCell>Four Seasons</TableCell>
                  <TableCell className="text-right">92/100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Emma Johnson</TableCell>
                  <TableCell>Voice</TableCell>
                  <TableCell>Ave Maria</TableCell>
                  <TableCell className="text-right">98/100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>James Wilson</TableCell>
                  <TableCell>Guitar</TableCell>
                  <TableCell>Classical Gas</TableCell>
                  <TableCell className="text-right">90/100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="md:col-span-3 lg:col-span-4 groove-pattern">
          <UICardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              School concerts and recitals
            </CardDescription>
          </UICardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Music2 className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Spring Recital Series
                  </p>
                  <p className="text-sm text-muted-foreground">
                    May 15th, 2024 • Main Hall
                  </p>
                  <p className="text-sm">
                    All piano and string students will perform selections from classical and contemporary pieces.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Mic2 className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Vocal Ensemble Concert
                  </p>
                  <p className="text-sm text-muted-foreground">
                    May 22nd, 2024 • Community Center
                  </p>
                  <p className="text-sm">
                    Choral and solo performances featuring works from various musical traditions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <Guitar className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Guitar & Jazz Showcase
                  </p>
                  <p className="text-sm text-muted-foreground">
                    June 5th, 2024 • Black Box Theater
                  </p>
                  <p className="text-sm">
                    Student ensembles and soloists performing contemporary and jazz selections.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3 lg:col-span-3">
          <CardHeader title="Recent Activities" />
          <CardContent className="space-y-0">
            <ActivityItem
              icon={<Piano className="h-4 w-4" />}
              title="New Piano Course Added"
              timestamp="Just now"
              description="Advanced Jazz Piano with Prof. Martinez"
            />
            <ActivityItem
              icon={<Users className="h-4 w-4" />}
              title="5 New Students Enrolled"
              timestamp="2 hours ago"
              description="In Beginning Guitar class"
            />
            <ActivityItem
              icon={<BookOpen className="h-4 w-4" />}
              title="Curriculum Updated"
              timestamp="Yesterday"
              description="Music Theory 101 course materials"
            />
            <ActivityItem
              icon={<Music2 className="h-4 w-4" />}
              title="Practice Room Renovations"
              timestamp="2 days ago"
              description="Rooms 3-5 now have new acoustic treatment"
            />
            <ActivityItem
              icon={<Mic2 className="h-4 w-4" />}
              title="Voice Faculty Meeting"
              timestamp="3 days ago"
              description="Summer workshop planning"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
