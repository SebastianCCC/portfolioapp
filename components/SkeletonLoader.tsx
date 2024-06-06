type SkeletonLoaderProps = {
  loaded: boolean
  children: React.ReactNode
  backgroundImage: React.ReactNode
  projectColor: string
}

function SkeletonLoader({ loaded, children, backgroundImage, projectColor }: SkeletonLoaderProps) {
  return (
    <>
      {!loaded ? (
        <div className='z-10 h-full w-full bg-secondary/50 dark:bg-sec_tertiary'>
          <div className='absolute bottom-5 z-10 mx-4 h-4 w-4/5 rounded-md bg-white dark:bg-additional' />
          <div className='absolute bottom-14 z-10 mx-4 h-4 w-3/5 rounded-md bg-white dark:bg-additional' />
        </div>
      ) : (
        <div className='relative z-10 h-full w-full rounded-md'>
          <div
            className='h-full w-full rounded-md opacity-40'
            style={{
              backgroundImage: `linear-gradient(to top, ${projectColor} 5%, rgba(0,0,0,0) 95%)`,
            }}
          />
          <div>{children}</div>
        </div>
      )}
      <div className='pointer-events-none select-none'>{backgroundImage}</div>
    </>
  )
}

export default SkeletonLoader
