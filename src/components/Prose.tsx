import clsx, { ClassValue } from 'clsx'

export function Prose({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: ClassValue
}) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
  )
}
