import React from 'react'
import CloudDoneIcon from '@mui/icons-material/CloudDone';

function ContainerTech() {

    const Icons="w-16 h-16 rounded-2xl"
    const IconsContainer="w-full h-20  justify-between flex "
    const Skills="lg:text-xl p-5 text-center sm: text-xs"

    return (

        <div>
            <div className="w-full h-screen">  
                <div className="w-3/4 h-screen m-auto mt-10 p-2 ">
                <div className="text-center text-2xl mt-5 mb-5 "><CloudDoneIcon sx ={{ fontSize: 40 }}/>&nbsp;Technical Skills</div>
                <div className="w-3/4 h-80 m-auto mb-5 border-t">
                <p className={`${Skills} lg:text-2xl `}>REACT.JS, Vue.js, Ruby on Rails, Node.js, JavaScript, Jquerry, Underscore. </p>
                <p className={Skills}>HTML, CSS, Bootstrap, Tailwind. </p>
                <p className={Skills}>Mongodb, Firebase, Postgresql, SQLite, API integration & Axios requests.</p>
                <p className={`${Skills} border-b`}>Deployments: GitHub, Heroky, Firebase, Vercel</p>
                </div>

                <div className={IconsContainer}>  {/* Icons experience bar */}
                    <p className={`${Icons} bg-react`}></p> 
                    <p className={`${Icons} bg-vue`}></p>
                    <p className={`${Icons} bg-rubyRails`}></p>
                    <p className={`${Icons} bg-javascript`}></p>
                    <p className={`${Icons} bg-jquery`}></p>
                    <p className={`${Icons} bg-ruby`}></p>
                </div>
                
                <div className={IconsContainer}>
                    <p className={`${Icons} bg-nodejs`}></p>
                    <p className={`${Icons} bg-tailwind`}></p>
                    <p className={`${Icons} bg-bootstrap`}></p>
                    <p className={`${Icons} bg-postgresql`}></p>
                    <p className={`${Icons} bg-firebase `}></p>
                    <p className={`${Icons} bg-mongodb`}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContainerTech
