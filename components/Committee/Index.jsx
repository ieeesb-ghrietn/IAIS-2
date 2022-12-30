import Maqam from "../../images/shapes/bridge.png";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import SectionTitle from "../../components/shared/SectionTitle";
import Image from "next/image";

const Committee = () =>{
    
    return (
        <section id='committee' className="relative section-container">
            <div className="mb-12 lg:mb-0">
        <SectionTitle title={"Committee Members"} /> 
      </div>

      <div className="visible absolute sm:bottom-0 sm:right-0 sm:w-[45px] md:top-0 md:right-0 md:w-[55px] md:h-[55px] lg:top-1/4 lg:right-[50px] lg:top-[50px] lg:w-[100px] 2xl:w-[150px] 2xl:h-[120px] z-25 ">
        <Image src={Maqam} alt="maqam" layout="fill" />
      </div>

      <div className="absolute sm:w-[40px] sm:h-[2rem] md:top-1/4 md:w-[55px] md:h-[55px] lg:left-[10px] lg:top-1/4 lg:w-[82px] lg:h-[82px] z-25  ">
        <Image src={globe} alt="globetop" layout="fill" />
      </div>

      <div className="absolute right-1/4 sm:bottom-0 sm:w-[10px] sm:h-[12px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px] lg:right-0 lg:bottom-0 z-25 ">
        <Image src={globe} alt="globebottom" layout="fill" />
      </div>

      <div className="hidden lg:block absolute  lg:w-[40px] bottom-[2rem] right-0 lg:bottom-0 lg:right-1/2">
        <Image src={computer} alt="computer" />
      </div>

      <div className="absolute sm:bottom-0 sm:right-0 sm:w-[45px] md:right-1/2 lg:w-[40px] top-[2rem] right-0 lg:bottom-0 lg:right-1/2">
        <Image src={atom} alt="atomtop" />
      </div>

      <div className="hidden lg:block absolute bottom-[4rem] left-0 lg:bottom-10 lg:right-1/4 lg:w-[80px] 2xl:w-[150px]">
        <Image src={atom} alt="atombotton" />
      </div>
      

<div class="wrapper">
    <h1>Our Team</h1>
    <div class="our_team">
        <div class="team_member">
          <div class="member_img">
             <Image src="https://i.imgur.com/2Necikc.png" alt="our_team"/>
            <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>john wright</h3>
          <span>CEO</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
        </div>
        <div class="team_member">
           <div class="member_img">
             <Image src="https://i.imgur.com/JzUIF4o.png" alt="our_team"/>
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>barbara mori</h3>
          <span>Accountant</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>
        <div class="team_member">
           <div class="member_img">
             <Image src="https://i.imgur.com/Ctwf8HA.png" alt="our_team"/>
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>harry dickens</h3>
          <span>Product Manager</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>
        <div class="team_member">
           <div class="member_img">
             <Image src="https://i.imgur.com/A1Fjq0d.png" alt="our_team"/>
             <div class="social_media">
               <div class="facebook item"><i class="fab fa-facebook-f"></i></div>
               <div class="twitter item"><i class="fab fa-twitter"></i></div>
               <div class="instagram item"><i class="fab fa-instagram"></i></div>
             </div>
          </div>
          <h3>sammy louise</h3>
          <span>product analyst</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione perspiciatis, error deleniti quaerat beatae doloribus incidunt excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus cumque.</p>
      </div>  
    </div>
</div>
 
        </section>

    )
}
export default Committee;