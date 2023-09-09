const Tech = ({ stack }) => {
  return (
    <div className="flex justify-between w-fit sm:w-full lg:px-3 2xl:px-7">
      {stack.map(({ name, icon }, i) => (
        <article
          className="flex flex-col items-center justify-center p-2 select-none scale-75 xl:scale-90 dark:text-sec_addition text-tertiary"
          key={i}
        >
          <div className="text-lg">{icon}</div>
          <p>{name}</p>
        </article>
      ))}
    </div>
  )
}

export default Tech
