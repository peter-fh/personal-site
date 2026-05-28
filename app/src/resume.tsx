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
      <Tabs defaultValue="experience" className="min-h-screen w-[80vw]">
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
                <a className="!text-foreground hover:!underline " href="https://github.com/peter-fh/socket" target="_blank"> 🔗 Socket Library</a>
            </CardTitle>
            </CardHeader>
            <CardContent>
              A TCP socket library using asynchronous sockets, built on top of the unix socket and polling API. The library combines these elements to create an efficient networking API. A work in progress HTTP engine is being built on top of this API, and will allow sending and receiving content over HTTP, built on nothing but Unix syscalls. 
            </CardContent>
          </Card>
          <Card className="mt-5">
            <CardHeader>
              <CardTitle>
                <a className="!text-foreground hover:!underline" href="https://github.com/peter-fh/Chess_Engine/tree/main" target="_blank">🔗 Chess Engine</a>
              </CardTitle>
            </CardHeader>

            <CardContent>
              A bitboard-based chess engine written in C++ from scratch. The bitboard library uses many bitwise optimizations, including pre-computed directional masks, ray casting, and many more to create a search space as efficiently as possible. The engine uses minimax search using search-space optimizations, including alpha-beta pruning and quiescent search.
            </CardContent>
        </Card>
      </TabsContent>
      </Tabs>
    </div>
  )
}
