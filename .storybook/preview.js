import Globalstyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <Globalstyles />
      <Story />
    </>
  )
]
