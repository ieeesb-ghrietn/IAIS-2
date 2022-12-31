import Maqam from "../../images/shapes/bridge.png";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import SectionTitle from "../../components/shared/SectionTitle";
import Image from "next/image";
import vivekkapur from "../../images/teams/vivekkapur.jpg";
import smitanirkhi from "../../images/teams/smitanirkhi.jpg";
import tabassumkhan from "../../images/teams/tabassumkhan.jpg";
import shardachabbria from "../../images/teams/shardachabbria.jpg";
import Ravindranath from "../../images/teams/ravindranath.jpg";
import Linkedin from "../../images/teams/linkedin.png";
import Link from "jquery.js";
import { useEffect } from "react";
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
      
      {/*Added code*/}

      <section class="u-align-center u-clearfix u-white u-section-1" id="carousel_4665">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-custom-font u-font-montserrat u-text u-text-body-color u-text-default u-text-1">Our Mentors</h2>
        <div class="u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-container-style u-list-item u-repeater-item u-white u-list-item-1">
              <div class="u-container-layout u-similar-container u-container-layout-1">
                <Image alt="" class="u-expanded-width u-image u-image-default u-image-1" data-image-width="626" data-image-height="417" src={vivekkapur}/>
                <div class="u-align-center u-container-style u-group u-white u-group-1">
                  <div class="u-container-layout u-container-layout-2">
                    <h4 class="u-text u-text-2">Dr. Vivek Kapur</h4>
                    <h6 class="u-text u-text-3">Director(GHRIETN)</h6>
                  </div>
                </div><span class="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-1"><Image src={Linkedin} alt=""/></span>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item u-video-cover u-white">
              <div class="u-container-layout u-similar-container u-container-layout-3">
                <Image alt="" class="u-expanded-width u-image u-image-default u-image-2" data-image-width="626" data-image-height="417" src={smitanirkhi}/>
                <div class="u-align-center u-container-style u-group u-white u-group-2">
                  <div class="u-container-layout u-container-layout-4">
                    <h4 class="u-text u-text-4">Dr.Smita Nirkhi</h4>
                    <h6 class="u-text u-text-5">HOD AI</h6>
                  </div>
                </div><span class="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-2"><Image src={Linkedin} alt=""/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-white u-section-2" id="carousel_809d">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h2 class="u-custom-font u-font-montserrat u-text u-text-body-color u-text-default u-text-1">Coordinators</h2>
        <div class="u-expanded-width u-list u-list-1">
          <div class="u-repeater u-repeater-1">
            <div class="u-container-style u-list-item u-repeater-item u-white u-list-item-1">
              <div class="u-container-layout u-similar-container u-container-layout-1">
                <Image alt="" class="u-expanded-width u-image u-image-default u-image-1" data-image-width="626" data-image-height="417" src={tabassumkhan}/>
                <div class="u-align-center u-container-style u-group u-white u-group-1">
                  <div class="u-container-layout u-container-layout-2">
                    <h4 class="u-text u-text-2">Prof. Tabassum Khan</h4>
                    <h6 class="u-text u-text-3">Coordinator</h6>
                  </div>
                </div><span class="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-1"><Image src={Linkedin} alt=""/></span>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item u-video-cover u-white">
              <div class="u-container-layout u-similar-container u-container-layout-3">
                <Image alt="" class="u-expanded-width u-image u-image-default u-image-2" data-image-width="626" data-image-height="417" src={shardachabbria}/>
                <div class="u-align-center u-container-style u-group u-white u-group-2">
                  <div class="u-container-layout u-container-layout-4">
                    <h4 class="u-text u-text-4">Dr. Sharda Chabbria</h4>
                    <h6 class="u-text u-text-5">Co-Coordinator</h6>
                  </div>
                </div><span class="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-2"><Image src={Linkedin} alt=""/></span>
              </div>
            </div>
            <div class="u-container-style u-list-item u-repeater-item u-video-cover u-white">
              <div class="u-container-layout u-similar-container u-container-layout-5">
                <Image alt="" class="u-expanded-width u-image u-image-default u-image-3" data-image-width="626" data-image-height="417" src={Ravindranath}/>
                <div class="u-align-center u-container-style u-group u-white u-group-3">
                  <div class="u-container-layout u-container-layout-6">
                    <h4 class="u-text u-text-6">Mr. Ravindranath Sawane</h4>
                    <h6 class="u-text u-text-7">Student Coordinator</h6>
                  </div>
                </div><span class="u-file-icon u-icon u-icon-circle u-palette-1-base u-text-white u-icon-3"><Image src={Linkedin} alt=""/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
			  </section>

    )
}
export default Committee;