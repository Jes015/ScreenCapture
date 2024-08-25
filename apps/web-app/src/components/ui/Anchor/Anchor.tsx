import { type FC } from '@/models'
import clsx from 'clsx'
import { type AnchorHTMLAttributes } from 'react'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> { }

export const Anchor: FC<AnchorProps> = ({ className, ...props }) => {
  return (
    <a
      className='text-neutral-200 hover:text-blue-500 duration-100'
      rel='noopener noreferrer'
      {...props}
    />
  )
}
