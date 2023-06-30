import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx, { ClassValue } from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: ClassValue
  href: string
  children?: React.ReactNode
  icon: React.ComponentType<React.ComponentProps<'svg'>>
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nerdsniped LLC</title>
        <meta
          name="description"
          content="Nerdsniped LLC is a small software consultancy based in Oakland, CA, featuring work by Samuel Giddins."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 sm:max-w-lg lg:max-w-none">
              <Image
                src="https://imgs.xkcd.com/comics/nerd_sniping.png"
                width={740}
                height={371}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-auto -rotate-6 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              We&apos;re Nerdsniped LLC, a small software consultancy based in
              Oakland, CA.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                We specialize in doing stuff with computers. Some days, that
                means building web apps. Other days, it means taming behemoth
                build systems. Bring us an interesting problem, and we&apos;ll
                be nerdsniped into solving it (there might also be paperwork and
                a direct deposit involved, who can say).
              </p>
              <p>
                We&apos;re currently available for new projects. If you&apos;d
                like to work with us, please{' '}
                <Link
                  href="mailto:segiddins@nerdsniped.llc"
                  className="font-medium text-teal-500 transition hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-500"
                >
                  get in touch
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/nerdsniped"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/company/nerdsniped-llc/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:segiddins@nerdsniped.llc"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                segiddins@nerdsniped.llc
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
