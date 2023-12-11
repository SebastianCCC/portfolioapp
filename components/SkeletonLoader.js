function SkeletonLoader({ loaded, children, backgroundImage, projectColor }) {
  return (
    <>
      {!loaded ? (
        <div className="bg-secondary/50 dark:bg-sec_tertiary z-10 w-full h-full">
          <div className="w-4/5 h-4 bg-white dark:bg-additional absolute bottom-5 z-10 rounded-md mx-4" />
          <div className="w-3/5 h-4 bg-white dark:bg-additional absolute bottom-14 z-10 rounded-md mx-4" />
        </div>
      ) : (
        <div
          className="relative z-10 w-full h-full border rounded-md"
          style={{ borderColor: projectColor }}
        >
          <div
            className="w-full h-full opacity-40"
            style={{
              backgroundImage: `linear-gradient(to top, ${projectColor} 5%, rgba(0,0,0,0) 95%)`,
            }}
          />
          <div>{children}</div>
        </div>
      )}
      <div className="select-none pointer-events-none">{backgroundImage}</div>
    </>
  )
}

export default SkeletonLoader
