import { cn } from '../../lib/utils'

interface WordmarkProps {
  className?: string
}

export const Wordmark = ({ className }: WordmarkProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 2250 2250"
      className={cn(className)}
    >
      <circle cx="1125" cy="1125" r="916.858" fill="#09090b"></circle>
      <text
        x="359.316"
        y="1507.9"
        fill="#fafafa"
        fontFamily='"PPNeueWorld-ExtendedRegular","PP Neue World"'
        fontSize="1666.67"
        fontStretch="expanded"
      >
        J
      </text>
      <text
        x="955.563"
        y="1769.42"
        fill="#fafafa"
        fontFamily='"PPNeueWorld-ExtendedRegular","PP Neue World"'
        fontSize="1666.67"
        fontStretch="expanded"
      >
        S
      </text>
    </svg>
  )
}
