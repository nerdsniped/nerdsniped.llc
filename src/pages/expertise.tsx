import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-8">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: React.ReactNode
  href?: string
  children?: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Expertise() {
  return (
    <>
      <Head>
        <title>Areas of Expertise - Nerdsniped LLC</title>
        <meta
          name="description"
          content="The technologies, tools, and processes we are experts in."
        />
      </Head>
      <SimpleLayout
        title="Areas of Expertise"
        intro={
          <span>
            We&apos;ve used a bunch of different technologies over the years. If
            you&apos;re looking for an expert in one of these, we&apos;re
            available for hire!
          </span>
        }
      >
        <div className="space-y-16">
          <ToolsSection title="Languages">
            <Tool title="Ruby">
              We&apos;ve written more Ruby than is probably healthy, and we have
              commits landed in pretty much every major Ruby project.
            </Tool>
            <Tool title="TypeScript">Projects include this very website!</Tool>
            <Tool title="Golang">
              A microservice a day keeps the doctor very very busy.
            </Tool>
            <Tool title="Objective-C">
              We&apos;ve written a few iOS apps, some of which even had manual
              memory management. Also I once re-implemented the ObjC funtime.
              There was not much fun in that, and even less profit.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Frameworks">
            <Tool title="Rails">
              Large Rails apps, such as the one that serves rails itself (aka{' '}
              <Link href="https://rubygems.org">rubygems.org</Link>)
            </Tool>
            <Tool title="React">
              You guessed it, this website is built with React too.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Tools">
            <Tool title="PostgreSQL">
              Gotta store the data somewhere, right?
            </Tool>
            <Tool title="Bazel">
              Once had commits in something like 8 consecutive releases. Still a
              maintainer of some core rulesets.
            </Tool>
            <Tool title="Docker">
              I mean, who doesn&apos;t use Docker these days?
            </Tool>
            <Tool title="Kubernetes">
              We&apos;ve been using Kubernetes since before it was cool. Because
              it still isn&apos;t cool, it&apos;s just trendy.
            </Tool>
            <Tool title="GitHub Actions">
              I like writing CI pipelines in YAML, said no one ever. (OK, maybe
              we did say that once or twice. But only because we had been
              writing Groovy for Jenkins before that.)
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
