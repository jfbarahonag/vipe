import React from 'react'

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
    </section>
  )
}

export default Wrapper;