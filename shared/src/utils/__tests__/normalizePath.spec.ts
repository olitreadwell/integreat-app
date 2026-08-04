import normalizePath from '../normalizePath.ts'

describe('normalizePath', () => {
  it('should collapse duplicate slashes, strip a trailing slash and lowercase the path', () => {
    expect(normalizePath('/Some//Path/To/Thing/')).toBe('/some/path/to/thing')
  })

  it('should decode URI-encoded characters', () => {
    expect(normalizePath('/M%C3%BCnchen')).toBe('/münchen')
  })

  it('should return the not-found route when the path is not a valid URI component', () => {
    expect(normalizePath('/%')).toBe('not-found')
  })
})
