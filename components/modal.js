import { use, useState } from "react"
import Image from "next/image"
import chijiokeImg from '../assets/1.jpg'
import olumideImg from '../assets/2.jpg'
import aishaImg  from '../assets/3.jpg'
import ifeomaImg from '../assets/4.jpg'
import emekaImg from '../assets/5.jpg'

const Modal = (props) => {
    if(!props.show) {
        return null
    }
    const [name, setName] = useState()
    
    if(props.num == 5) {
        setName(emeka)
    }
    // console.log(num)
    const chijioke = {
        name: "Chijioke Okonkwo",
        dept: "Civil Engineering",
        age: "22 years old",
        quote: "chijioke quote",
        campaignQuote: 'I stand before you, Chijioke Okonkwo, a Civil Engineering student, ready to embark on a journey to enhance our university experience as the potential Student Union President. My vision is encapsulated in the phrase "Building Bridges for a United Campus." In my pursuit of this vision, I aim to establish a centralized communication hub that ensures information flows seamlessly, reaching every student promptly. I envision fostering collaboration between departments, breaking down silos to create a more integrated academic and extracurricular environment. My commitment extends to advocating for improved campus facilities, enhanced student services, and bolstered security. Together, lets construct a campus where unity and inclusivity are the cornerstones of our shared experience. Vote for me, Chijioke Okonkwo, your bridge to a united JIT University!',
        img: chijiokeImg
    }
    const aisha = {
        name: "Aisha Mohammed",
        dept: "Fisheries and Aquaculture",
        age: "19 years old",
        quote: "aisha quote",
        campaignQuote: 'Aisha Mohammed, a devoted Fisheries and Aquaculture student, seeks your support as I articulate my manifesto under the banner "Nurturing a Campus, Cultivating Success." In the realm of fisheries, careful nurturing is essential, and I apply this philosophy to my vision for JIT University. I propose the introduction of mentorship programs and support networks to ensure that every student feels nurtured and supported throughout their academic journey. Additionally, my vision includes promoting cultural exchange programs to celebrate the diversity within our university community. Let us cultivate success together at JIT University, where every student has the opportunity to grow and flourish. Vote for Aisha Mohammed, nurturing a campus, cultivating success!'
    }
    const olumide = {
        name: "Olumide Adeyemi",
        dept: "Architecture",
        age: "21 years old",
        quote: "olumide quote",
        campaignQuote: 'I, Olumide Adeyemi, an Architecture student, aspire to be your Student Union President with the pledge to design a vision for a dynamic campus. In the world of architecture, spaces are not merely physical; they are experiences that shape community life. My manifesto is grounded in the idea of creating innovative spaces that inspire creativity and collaboration. Sustainability is at the forefront of my vision, and I am committed to implementing eco-friendly practices across campus. As your president, I will ensure that every departments unique needs are considered, fostering a sense of representation and inclusivity. Lets design a vibrant future together. Vote for Olumide Adeyemi, designing a dynamic tomorrow for JIT University!',
        img: olumideImg
    }
    const ifeoma = {
        name: "Ifeoma Onyekachi",
        dept: "Software Engineering",
        age: "19 years old",
        quote: "ifeoma quote",
        campaignQuote: 'I, Ifeoma Onyekachi, a Software Engineering student, humbly stand before you as a candidate for Student Union President. In the era of technology, my manifesto is encapsulated in the phrase "Coding the Future Together." I envision a tech-driven campus, where the integration of technology enhances academic processes and positions JIT as a forward-thinking institution. As your president, I will organize coding workshops and seminars, empowering students with essential digital skills. My commitment extends to advocating for online services to make administrative processes more efficient. Let\'s code the future of JIT University together, where technology is a tool for empowerment and progress. Vote for Ifeoma Onyekachi, coding the future together!',
        img: ifeomaImg
    }
    const emeka = {
        name: "Emeka Nwanchukwu",
        dept: "Industrial Design",
        age: "19 years old",
        quote: "emeka quote",
        campaignQuote: 'I Emeka Nwachukwu, an Industrial Design student, seeks your support as I present my manifesto under the theme "Crafting a Vision, Shaping a Future." Industrial design is about shaping the future through creativity and innovation, and this philosophy extends to my vision for JIT University. I propose the establishment of an innovation hub, transcending academic boundaries and promoting collaboration. My commitment includes introducing skill development programs and workshops to enhance practical skills, preparing students for the challenges of the real world. Let us craft a vision that embraces the creativity inherent in each student, shaping a future where innovation thrives. Vote for Emeka Nwachukwu, crafting a vision, shaping a future!',
        img: emekaImg
    }
    return (
        <div className="backdrop-blur-sm fixed top-0  right-0 left-0 bottom-0 bg-black bg-opacity-70  px-10" >
            <div className="">
                <p onClick={props.onClose}className="font-bold text-2xl text-orange-500 p-3 text-right cursor-pointer">CLOSE</p>
                <div className="bg-white text-center p-3 pt-7">
                    <p className="text-2xl font-bold text-center">Vote {
                       props.name==5 ? 
                       emeka.name : 
                       props.name==4 ? 
                       ifeoma.name: 
                       props.name==3 ? 
                       olumide.name:
                       props.name==2 ? 
                       aisha.name: chijioke.name}</p>
                    <p>FOR</p>
                    <p>PRESIDENT STUDENT UNION</p>
                    <p className="text-2xl font-bold text-orange-500 mt-2">Manifesto!</p>
                    <p className="text-left py-3 border border-orange-500 mt-3 px-6">{props.name==5 ? 
                       emeka.campaignQuote : 
                       props.name==4 ? 
                       ifeoma.campaignQuote: 
                       props.name==3 ? 
                       olumide.campaignQuote:
                       props.name==2 ? 
                       aisha.campaignQuote: chijioke.campaignQuote}</p>
                </div>
            </div>
        </div>
    )
}
export default Modal;