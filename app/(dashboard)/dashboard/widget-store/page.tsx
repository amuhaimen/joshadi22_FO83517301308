import Adobe_XD from '@/public/widgetIcons/Adobe XD.svg'
import Azure_DevOps from '@/public/widgetIcons/Azure_DevOps.svg'
import Bitbucket from '@/public/widgetIcons/Bitbucket.svg'
import Figma from '@/public/widgetIcons/Figma.svg'
import GitHub from '@/public/widgetIcons/Github.svg'
import GitLab from '@/public/widgetIcons/GitLab.svg'
import GoogleCloud from '@/public/widgetIcons/GoogleCloud.svg'
import Kubernetes from '@/public/widgetIcons/Kubernetes.svg'
import Penpot from '@/public/widgetIcons/Penpot.svg'
import Postman from '@/public/widgetIcons/Postman.svg'
import Sketch from '@/public/widgetIcons/Sketch.svg'
import Swagger from '@/public/widgetIcons/Swagger.svg'
import SectionHeaderWidget from '../../_components/reusable/SectionHeaderWidget'
import WidgetCard from '../../_components/reusable/WidgetCard'

const widgetPageData = [
    {
        logo: Adobe_XD,
        widgetTitle: 'Adobe XD',
        details: `Design Ul prototypes & headerf to devs.`,
        rating: '3.3',
        installs: '111K',

    },
    {
        logo: Figma,
        widgetTitle: 'Figma',
        details: `Design and prototype user interfaces`,
        rating: '3..3',
        installs: '1r1K',

    },
    {
        logo: Sketch,
        widgetTitle: 'Sketch',
        details: `Design and prototype user interfaces`,
        rating: '3.3',
        installs: '111K',

    },
    {
        logo: GitLab,
        widgetTitle: 'GitLab',
        details: `Open-source Git repository manager`,
        rating: '3.3',
        installs: '111K',

    },
    {
        logo: GitHub,
        widgetTitle: 'GitHub',
        details: `Development platform and code host`,
        rating: '3.3',
        installs: '115K',

    },
    {
        logo: Kubernetes,
        widgetTitle: 'Kubernetes',
        details: `Idanage snde nanagele containers`,
        rating: '4.3',
        installs: '111K',

    },
    {
        logo: Penpot,
        widgetTitle: 'Penpot',
        details: `Open-source design and prototyping tool`,
        rating: '3.3',
        installs: '111K',

    },
    {
        logo: Bitbucket,
        widgetTitle: 'Bitbucker',
        details: `Git colfemanagement for enterp-tset`,
        rating: '3.4',
        installs: '511K',

    },
    {
        logo: Postman,
        widgetTitle: 'Postman',
        details: `API design isting, and moritoring`,
        rating: '3.9',
        installs: '611K',

    },
    {
        logo: Swagger,
        widgetTitle: 'Swagger IJI',
        details: `Visudles and interact with API resources`,
        rating: '4.6',
        installs: '11K',

    },
    {
        logo: Azure_DevOps,
        widgetTitle: 'Azure DevOps',
        details: `Design Ul prototypes & headerf to devs.`,
        rating: '4.3',
        installs: '131K',

    },

    {
        logo: GoogleCloud,
        widgetTitle: 'Google Cloud',
        details: `Manage Google Cloud resources`,
        rating: '3.3',
        installs: '31K',

    },
]
const page = () => {


    return (
        <div  >
            <SectionHeaderWidget title={'Widget Store'} breadcrumb={''} addWidget={true} viewAll={false} />
            <div className='mt-8  bg-[#161716] rounded-2xl p-6 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 items-center  gap-6 w-full mx-auto '>
              {widgetPageData.map((item,index)=>(
                <WidgetCard
                    key={index}
                    logo={item.logo}
                    widgetTitle={item.widgetTitle}
                    details={item.details}
                    rating={item.rating}
                    installs={item.installs}
                />
              ))}
            </div>
        </div>
    )
}

export default page
