const Tech = ({ stack }) => {
  return (
    <div className="flex justify-around w-fit sm:w-full">
      {stack.map(({ name, icon }, i) => (
        <article
          className="flex flex-col items-center justify-center p-2 select-none scale-75 xl:scale-[.8] dark:text-sec_addition text-tertiary"
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
