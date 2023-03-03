import React from 'react'
import BackToTop from './BackToTop'

/**
 * Wrapper.tsx
 * -------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------
 */

type WrapperProps = {
  children?: React.ReactNode,
  styles?: React.CSSProperties,
}

export const Wrapper = ({ children, styles }: WrapperProps) => {
  return (
    <section style={styles}>
      {children}
      <BackToTop />
    </section>
  )
}

export default Wrapper;