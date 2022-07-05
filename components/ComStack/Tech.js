const Tech = ({ stack }) => {
  return (
    <div className="flex justify-between w-fit sm:w-full lg:px-5 2xl:px-8">
      {stack.map(({ name, icon }, i) => (
        <article className="flex flex-col items-center justify-center p-2 select-none" key={i}>
          <div className="text-3xl">{icon}</div>
          <p>{name}</p>
        </article>
      ))}
    </div>
  )
}

export default Tech
