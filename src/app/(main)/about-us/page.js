import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import About from '@/components/about-us/About'
import Service from '@/components/about-us/Service'
import Testimonials from '@/components/about-us/Testimonials'
import Facts from '@/components/about-us/Facts'
import Team from '@/components/about-us/Team'


const Page = () => {
    return (
        <>
            <Breadcrumb title={"About Us"} />
            <About />
            <Service />
            <Testimonials />
            <Facts />
            <Team />
        </>
    )
}

export default Page;
