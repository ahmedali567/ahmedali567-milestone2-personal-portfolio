import React from 'react'


const Skills = () => {
  return (
    <div className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="fade-down"><h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
        <p className='text-orange-400 pt-2'>I have a solid foundation in web developement, specialization in HTML,CSS and Javascript.My experience extends to using frameworks like react and next.js to create dynamic and user friendly application.</p></div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2>Typescript</h2>
            <h2>React.js</h2>
            <h2>Next.js</h2></div>
            <div className='space-y-2'>
              <h2>Figma</h2>
            <h2>Tailwind.css</h2>
            <h2>Node.js</h2></div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Skills
