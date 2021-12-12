export const shortcuts = [
  {
    tag: 'inline text-pink-800 text-xl font-semibold mr-4',
  },
]

const mediaWidths = {
  xxl: 1535,
  xl: 1279,
  lg: 1023,
  md: 767,
  sm: 639,
}

export const variants = [
  // hover:
  (matcher: string) => {
    if (!matcher.startsWith('hover:')) { return matcher }
    return {
      // slice `hover:` prefix and passed to the next variants and rules
      matcher: matcher.slice(6),
      selector: (s: string) => `${s}:hover`,
    }
  },
  // screens:
  (matcher: string) => {
    const screenPrefixMatcher = /^(sm|md|lg|xl|2xl):(.*)/
    const regexRes = matcher.match(screenPrefixMatcher)
    if (!regexRes) { return matcher }

    const [, screenPrefix, ...selector] = regexRes
    const mediaWidth = mediaWidths[screenPrefix as (keyof typeof mediaWidths)]
    return {
      // slice `hover:` prefix and passed to the next variants and rules
      matcher: selector,
      selector: (s: string) => `@media max-width(${mediaWidth}px) { ${s} }`,
    }
  },
]
