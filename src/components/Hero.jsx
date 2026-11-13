import heroBg from '../../assets/hero/me hero.png'

export const Hero = () => {

  return (

    <section
      id='Home'
      className='flex min-h-screen items-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      <div className='flex flex-col px-6 text-left mt-60 md:mt-70 md:px-20'>
        <h1 className='text-5xl font-bold text-[#C6FFA0] md:text-8xl'>
          Genevieve
        </h1>
        <h1 className='text-4xl font-bold text-[#FFFCF0] md:text-7xl'>
          Rodriguez
        </h1>

      </div>
    </section>

  )
}