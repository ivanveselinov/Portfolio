import React from 'react'
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function ContainerTech() {

    const Icons="w-16 h-16 rounded-2xl"
    const IconsContainer="w-full h-20  justify-between flex "
    const Skills="lg:text-xl p-5 text-center sm: text-xs"

    return (
      <Fade duration={3000}>
        <div>
            <div className="w-full h-screen">  
                <div className="w-3/4 h-screen m-auto mt-10 p-2 ">
                <div className="text-center text-2xl mt-5 mb-5 "><CloudDoneIcon sx ={{ fontSize: 40 }} className='mb-3'/>&nbsp;Technical Skills</div>
                <div className="w-3/4 h-80 m-auto mb-5 border-t">
                <p className={`${Skills} lg:text-2xl `}>Front-end: React.js, Vue.js, JavaScript, Jquery, Underscore, HTML, CSS, Bootstrap, Tailwind. </p>
                <p className={Skills}>Backend: Ruby on Rails, Node.js, API integration & Axios requests. </p>
                <p className={Skills}>Database: MongoDB, Firebase, PostgreSQL, SQLite.</p>
                <p className={`${Skills} border-b`}>Deployments: GitHub, Heroku, Firebase, Vercel.</p>
                </div>

                <Zoom duration={2000}>
                <div className={IconsContainer}>  {/* Icons experience bar */}
                    <p className={`${Icons} bg-react`}></p> 
                    <p className={`${Icons} bg-vue`}></p>
                    <p className={`${Icons} bg-rubyRails`}></p>
                    <p className={`${Icons} bg-javascript`}></p>
                    <p className={`${Icons} bg-jquery`}></p>
                    <p className={`${Icons} bg-ruby`}></p>
                </div>
                </Zoom>

                <Zoom duration={2000}>
                <div className={IconsContainer}>
                    <p className={`${Icons} bg-nodejs`}></p>
                    <p className={`${Icons} bg-tailwind`}></p>
                    <p className={`${Icons} bg-bootstrap`}></p>
                    <p className={`${Icons} bg-postgresql`}></p>
                    <p className={`${Icons} bg-firebase `}></p>
                    <p className={`${Icons} bg-mongodb`}></p>
                    </div>
                </Zoom>
                
                </div>
            </div>
        </div>
      </Fade>
    )
}

export default ContainerTech
