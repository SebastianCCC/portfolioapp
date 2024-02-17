type SkeletonLoaderProps = {
  loaded: boolean
  children: React.ReactNode
  backgroundImage: React.ReactNode
  projectColor: string
  collapsed: boolean
}

function SkeletonLoader({
  loaded,
  children,
  backgroundImage,
  projectColor,
  collapsed,
}: SkeletonLoaderProps) {
  return (
    <>
      {!loaded ? (
        <div className='bg-secondary/50 dark:bg-sec_tertiary z-10 w-full h-full'>
          <div className='w-4/5 h-4 bg-white dark:bg-additional absolute bottom-5 z-10 rounded-md mx-4' />
          <div className='w-3/5 h-4 bg-white dark:bg-additional absolute bottom-14 z-10 rounded-md mx-4' />
        </div>
      ) : (
        <div className='relative z-10 w-full h-full dark:border-tertiary/75 border-secondary/70 border rounded-md'>
          <div
            className={`w-full h-full rounded-md ${
              collapsed ? 'opacity-80 xSmall:opacity-40' : 'opacity-40'
            }`}
            style={{
              backgroundImage: `linear-gradient(to top, ${projectColor} 5%, rgba(0,0,0,0) 95%)`,
            }}
          />
          <div>{children}</div>
        </div>
      )}
      <div className='select-none pointer-events-none'>{backgroundImage}</div>
    </>
  )
}

export default SkeletonLoader
