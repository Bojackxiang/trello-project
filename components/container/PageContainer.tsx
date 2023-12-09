import React from 'react'

const PageContainer = ({children}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

export default PageContainer
