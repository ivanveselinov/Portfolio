import React from 'react'
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function ContainerTech() {

    const Icons="w-16 h-16 rounded-2xl"
    const IconsContainer="w-full h-20 justify-between pt-14 flex"
    const Skills="lg:text-xl p-5 text-center sm: text-xs dark:text-white"

    return (
      <Fade duration={3000}>
        <div>
            <div className="w-full h-[1300px]">  
                <div className="w-3/4 min-h-screen m-auto mt-10 p-2">
                <div className="text-center text-2xl mt-5 mb-5 dark:text-white"><CloudDoneIcon sx ={{ fontSize: 40 }} className='mb-3'/>&nbsp;Technical Skills</div>
                <div className="w-3/4 h-full m-auto mb-5 border-t">
                <p className={`${Skills} lg:text-2xl `}><strong>Front-end:</strong> React.js, Express.js, Next.js, Vue.js, JavaScript, Jquery, Underscore, HTML, CSS, Bootstrap, Tailwind.</p>
                <p className={Skills}><strong>Backend:</strong> Ruby on Rails, Node.js, Python, Express.js, AWS Services,</p>
                <p className={Skills}>API integration & Axios requests, Selenium Test Automation. </p>
                <p className={Skills}><strong>Database:</strong> MongoDB, Firebase, PostgreSQL, SQLite, Power BI.</p>
                <p className={`${Skills}`}><strong>Deployments:</strong> GitHub, Heroku, Firebase, Vercel, Netlify, Jenkins, OpenShift.</p>
                <p className={`${Skills} `}><strong>DevOps:</strong> MySQL, Bash Scripting, AWS Beckup, AWS WAF Protection.</p>
                <p className={`${Skills} `}>Docker, Nexus, OWASP ZAP, Postman API, Regular Expressions.</p>
                <p className={`${Skills} border-b`}><strong>DevTools:</strong> Atlassians, Jama, OpsHub, SOX, Enterprise Architect.</p>
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

                <Zoom duration={2300}>
                <div className={IconsContainer}>
                    <p className={`${Icons} bg-nodejs`}></p>
                    <p className={`${Icons} bg-tailwind`}></p>
                    <p className={`${Icons} bg-bootstrap`}></p>
                    <p className={`${Icons} bg-postgresql`}></p>
                    <p className={`${Icons} bg-firebase `}></p>
                    <p className={`${Icons} bg-mongodb`}></p>
                    </div>
                </Zoom>

                <Zoom duration={2600}>
                <div className={IconsContainer}>
                    <p className={`${Icons} bg-next`}></p>
                    <p className={`${Icons} bg-redux`}></p>
                    <p className={`${Icons} bg-netlify`}></p>
                    <p className={`${Icons} bg-aws`}></p>
                    <p className={`${Icons} bg-git `}></p>
                    <p className={`${Icons} bg-github`}></p>
                    </div>
                </Zoom>

                <Zoom duration={2900}>
                <div className={IconsContainer}>
                    <p className={`${Icons} bg-bash`}></p>
                    <p className={`${Icons} bg-waf`}></p>
                    <p className={`${Icons} bg-mysql`}></p>
                    <p className={`${Icons} bg-docker`}></p>
                    <p className={`${Icons} bg-beckup`}></p>
                    <p className={`${Icons} bg-zap`}></p>
                    </div>
                </Zoom>

                <Zoom duration={3200}>
                <div className={IconsContainer}>
                    <p className={`${Icons} bg-python`}></p>
                    <p className={`${Icons} bg-jama`}></p>
                    <p className={`${Icons} bg-atlassians`}></p>
                    <p className={`${Icons} bg-sox`}></p>
                    <p className={`${Icons} bg-opshub`}></p>
                    <p className={`${Icons} bg-ea`}></p>
                    </div>
                </Zoom>

                <Zoom duration={3500}>
                <div className={IconsContainer}>
                    <p className={`${Icons} bg-testautomation`}></p>
                    <p className={`${Icons} bg-selenium`}></p>
                    <p className={`${Icons} bg-openshift`}></p>
                    <p className={`${Icons} bg-nexus`}></p>
                    <p className={`${Icons} bg-jenkins`}></p>
                    <p className={`${Icons} bg-powerBi`}></p>
                    </div>
                </Zoom>

                
                </div>

            </div>
        </div>
      </Fade>
    )
}

export default ContainerTech
