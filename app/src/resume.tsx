import { Experience } from "./experience"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function Resume()
{
  return (
    <div className="flex items-center justify-center min-h-screen w-screen p-10">
      <Tabs defaultValue="summary" className="min-h-screen w-[600px]">
        <TabsList variant="line">
          <TabsTrigger value="summary">About Me</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="interest">Interests</TabsTrigger>
        </TabsList>

      <TabsContent value="summary" className="pt-5">
          <Card>
            <CardHeader>
            <CardTitle>
              About Me
            </CardTitle>
            </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
          Hello! I'm Peter Howe. I'm Computer science student specializing in low-level C++ networking libraries. I'm experienced in C++ development through multiple internships at Ubisoft.
            </CardContent>
          </Card>
      </TabsContent>
      <TabsContent value="experience" className="pt-5">
          <Card>
            <CardHeader>
            <CardTitle>
                Experience
            </CardTitle>
            </CardHeader>

            <CardContent>
        <Experience/>
            </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="projects" className="pt-5">
          <Card>
            <CardHeader>
            <CardTitle>
                Socket Library
            </CardTitle>
            <CardDescription>
                <Button asChild variant="link">
                  <a className="!no-underline !text-muted-foreground hover:!text-foreground" href="https://github.com/peter-fh/socket" target="_blank">GitHub</a>
                </Button>
            </CardDescription>
            </CardHeader>

            <CardContent>
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle>
                Chess Engine
              </CardTitle>
            </CardHeader>

            <CardContent>
            </CardContent>
        </Card>
      </TabsContent>
      </Tabs>
    </div>
  )
}
