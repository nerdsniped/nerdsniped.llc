import Head from 'next/head'
import Image, { ImageProps } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoRubyGems from '@/images/logos/rubygems.svg'
import logoBundler from '@/images/logos/bundler.svg'
import logoCocoaPods from '@/images/logos/cocoapods.svg'
import logoCashApp from '@/images/logos/cashapp.svg'
import logoSquare from '@/images/logos/square.svg'
import logoBazel from '@/images/logos/bazel.svg'
import logoMicroplane from '@/images/logos/control-knobs-svgrepo-com.svg'
import { JSX, SVGProps } from 'react'

const projects: {
  name: string
  description: React.ReactNode
  link: { href: string; label: string }
  logo?: ImageProps['src']
}[] = [
  {
    name: 'RubyGems',
    description:
      'Library packaging and distribution for Ruby.\nAlso, the Ruby community’s gem hosting service.',
    link: { href: 'https://rubygems.org', label: 'rubygems.org' },
    logo: logoRubyGems,
  },
  {
    name: 'Microplane',
    description: (
      <span>
        The control plane for <code>localhost</code>.
      </span>
    ),
    link: { href: 'https://microplane.dev', label: 'microplane.dev' },
    logo: logoMicroplane,
  },
  {
    name: 'Bundler',
    description: 'The best way to manage a Ruby application’s gems.',
    link: { href: 'https://bundler.io', label: 'bundler.io' },
    logo: logoBundler,
  },
  {
    name: 'CocoaPods',
    description:
      'A dependency manager for Swift and Objective-C Cocoa projects.',
    link: { href: 'https://cocoapods.org', label: 'cocoapods.org' },
    logo: logoCocoaPods,
  },
  {
    name: 'Cash App',
    description:
      'Do more with your money.\nDid underwriting for the Borrow product.',
    link: { href: 'https://cash.app', label: 'cash.app' },
    logo: logoCashApp,
  },
  {
    name: 'Square',
    description:
      'Power your entire business.\nLed the iOS Mobile Developer Experience team.',
    link: { href: 'https://squareup.com', label: 'squareup.com' },
    logo: logoSquare,
  },
  {
    name: 'Bazel iOS',
    description: 'Bazel rules to make building iOS apps at scale possible.',
    link: {
      href: 'https://github.com/bazel-ios',
      label: 'github.com/bazel-ios',
    },
    logo: logoBazel,
  },
]

function LinkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Nerdsniped LLC</title>
        <meta
          name="description"
          content="Projects that the Nerdsniped team have worked on."
        />
      </Head>
      <SimpleLayout
        title="Stuff the Nerdsniped team have worked on."
        intro={
          <span>
            Over the years, we&apos;ve worked on a lot of projects. Here are
            some of the ones you might be familiar with.
            <br />
            Yes, we&apos;re shocked at how many things we&apos;ve worked on too.
          </span>
        }
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt=""
                    className="h-8 w-8"
                    width={32}
                    height={32}
                    unoptimized
                  />
                )}
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <div className="flex-1" />
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
