import React from 'react'
import styles from '../../../Styles/Styles'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={`relative min-h-[80vh] 800px:min-h-[90vh] w-full bg-no-repeat ${styles.noramlFlex}`} style={
        { backgroundImage:"url(https://anvileight.com/static/images/theshelf.png)",        backgroundSize: "100% auto",
        backgroundPosition: "center center"

        }
    }>
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
            <h1 className={`text-[35px] leading-[1.2] 800px:w-[60px] text-[#3d3a3a] font-[600] capitalize`}>Best Collections For <br />Your Styles</h1>
<p className='pt-5 text-[16px] font-[Poppins] font-[400 text-[#000000ba]'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias alias doloremque vero maiores sunt nulla enim rerum, sed omnis, dolorum non porro <br/> Nostrum dolorem necessitatibus voluptas adipisci iure deleniti sapiente?
</p>
<Link to="/products" className='inline-block'>
    <div className={`${styles.button}mt-5` }>

        <span className='text-[#fff] font-[Poppins] text-[18px]'>
            Shop Now

        </span>
    </div>
</Link>
        </div>

    </div>
  )
}

export default Hero