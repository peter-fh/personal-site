import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

import {
  ItemMedia,
} from "@/components/ui/item"

function Experience() {
  const timeline_content_width = 80
  return (
    <div style={{ "--timeline-content-width": `${timeline_content_width}%` } as React.CSSProperties}>
      <Timeline defaultValue={5} className="w-[82%]">
        <TimelineItem step={1}>
          <div className="flex flex-row justify-between gap-6">
            <div className="flex-1">
              <TimelineHeader>
                <TimelineDate>Winter 2026</TimelineDate>
                <TimelineTitle>Ubisoft - Online Programmer</TimelineTitle>
              </TimelineHeader>
              <TimelineContent className="max-w-(--timeline-content-width)">
                <ul className="list-disc space-y-3 pl-3 pt-1">
                  <li>
                    Overhauled WinHTTP implementation by decoupling the WebSocket and HTTP implementations and replacing global mutexes with fine-grained locks, improving concurrency and reducing thread contention
                  </li>
                  <li>
                    Modernized a legacy CI/CD system by consolidating 140+ scripts into a single CMake Presets configuration, simplifying build orchestration and maintainability
                  </li>
                  <li>
                    Refactored a 6,000-line SWIG interface into 75 modular components, reducing code size by 96% and enabling scalable, maintainable C# API integration
                  </li>
                  <li>
                    Replaced legacy HTTP engine string implementation with a copy-on-write design using move semantics, improving performance and memory efficiency; validated via Clang-Tidy CI checks
                  </li>
                  <li>
                    Collaborated with platform SDKs (PlayStation, Xbox, Android) to implement production-ready cross-platform features
                  </li>
                </ul>
              </TimelineContent>
            </div>
            <ItemMedia variant="image" className="size-16 shrink-0 mt-1">
              <img src="/ubisoft.jpg" alt="Ubisoft" className="object-contain rounded-sm scale-140" />
            </ItemMedia>
          </div>
          <TimelineIndicator />
          <TimelineSeparator />
        </TimelineItem>

        <TimelineItem step={2}>
          <div className="flex flex-row justify-between gap-6">
            <div className="flex-1">
              <TimelineHeader>
                <TimelineDate>Fall 2024 & Winter 2025</TimelineDate>
                <TimelineTitle>Ubisoft - Online Programmer</TimelineTitle>
              </TimelineHeader>
              <TimelineContent className="max-w-(--timeline-content-width)">
                <ul className="list-disc space-y-3 pl-3 pt-1">
                  <li>
                    Redesigned SWIG-generated C# bindings across 11 platforms, transitioning from standalone clients to a modular architecture while preserving backward compatibility with Google Test
                  </li>
                  <li>
                    Diagnosed and resolved critical crashes affecting Rainbow Six Siege Mobile on Android
                  </li>
                  <li>
                    Integrated a bandwidth profiler into our SDK via CMake, enabling profiling of HTTP engine bandwidth on PlayStation for network diagnostics
                  </li>
                  <li>
                    Updated and maintained complex CI/CD pipelines, automating development workflows with Python
                  </li>
                </ul>
              </TimelineContent>
            </div>
            <ItemMedia variant="image" className="size-16 shrink-0 mt-1">
              <img src="/ubisoft.jpg" alt="Ubisoft" className="object-contain rounded-sm scale-140" />
            </ItemMedia>
          </div>
          <TimelineIndicator />
          <TimelineSeparator />
        </TimelineItem>

        <TimelineItem step={3}>
          <div className="flex flex-row justify-between gap-6">
            <div className="flex-1">
              <TimelineHeader>
                <TimelineDate>Ongoing since Aug 2024</TimelineDate>
                <TimelineTitle>Concordia Math Tutoring Center - Lead Developer</TimelineTitle>
              </TimelineHeader>
              <TimelineContent className="max-w-(--timeline-content-width)">
                <ul className="list-disc space-y-3 pl-3 pt-1">
                  <li>
                    Conceived and developed a specialized GenAI tutoring system that incorporates course knowledge and context to curate a personalized tutoring experience, made available to thousands of students annually
                  </li>
                  <li>
                    Independently developed a full-stack application in Python/Flask and Typescript/React, handling student data with PostgreSQL, authentication with Azure AD, and deployment with Docker 
                  </li>
                  <li>
                    Presented the platform to the Learning Specialist 2025 Conference and internally at Concordia
                  </li>
                </ul>
              </TimelineContent>
            </div>
            <ItemMedia variant="image" className="size-16 shrink-0 mt-1">
              <img src="/concordia.png" alt="Concordia" className="object-contain rounded-sm" />
            </ItemMedia>
          </div>
          <TimelineIndicator />
          <TimelineSeparator />
        </TimelineItem>
        <TimelineItem step={3}>
          <div className="flex flex-row justify-between gap-6">
            <div className="flex-1">
              <TimelineHeader>
                <TimelineDate>Sept 2023 - Apr 2025</TimelineDate>
                <TimelineTitle>Concordia Math Tutoring Center - Peer Tutor</TimelineTitle>
              </TimelineHeader>
              <TimelineContent className="max-w-(--timeline-content-width)">
                <ul className="list-disc space-y-3 pl-3 pt-1">
                  <li>
                    Provided 1-on-1 tutoring in calculus and linear algebra, helping students build foundational math skills for upper-level science and engineering courses
                  </li>
                </ul>
              </TimelineContent>
            </div>
            <ItemMedia variant="image" className="size-16 shrink-0 mt-1">
              <img src="/concordia.png" alt="Concordia" className="object-contain rounded-sm" />
            </ItemMedia>
          </div>
          <TimelineIndicator />
          <TimelineSeparator />
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export { Experience }
