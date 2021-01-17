import React from "react";
import {css, jsx} from "@emotion/core";

import test from './pictures/test.png'
import test2 from './pictures/test2.png'
import omar from './pictures/team-members/OmarJridi.webp'
import emna from './pictures/team-members/EmnaBargui.webp'
import yessine from './pictures/team-members/YassineAyadi.webp'
import nour from './pictures/team-members/NourBelgaied.webp'
import iheb from './pictures/team-members/IhebDriouech.webp'
import zeineb from './pictures/team-members/ZeinebNefzi.webp'
import abir from './pictures/team-members/AbirSlimene.webp'
import kmar from './pictures/team-members/KmarMhiri.webp'
import TeamMember from "./TeamMember";


/** @jsx jsx */
const Team = () => {
    const poste = css`
      & h5{
    color: #7cac3f!important;
    }
      `;
    return (
        <div className="team">
            <div className="team-header">
                <h3 className="text-center">Our Team</h3>
            </div>
            <div className="container" css={poste}>
                <div className="row justify-content-center text-center  ">
                    <TeamMember memberName={'Emna bargui'} memberPic={emna} memberPoste={'ChairWomen'} animation={"flip-left"}
                                fb={'https://www.facebook.com/profile.php?id=100008786117588'}
                                li={'https://www.linkedin.com/in/emna-bargui-000049157'}
                                text={'Emna is an industrial chemistry engineering student with a great passion for management studies.\n' +
                                'The word she\'d use to describe herself is \'\' ambitious\'\' l. She likes to seek out opportunities and challenges cause she\'s never comfortable with settling.'}/>
                    <TeamMember memberName={'Iheb Driouech'} memberPic={iheb} memberPoste={'Vice chair'} animation={"flip-left"}
                                fb={'https://www.facebook.com/iheb.driouech'}
                                li={'https://www.linkedin.com/in/iheb-driouech/'}
                                text={'Iheb is an industrial chemistry engineering student. He is very resourceful and ambitious. He finds solutions, gets creative and solves problems.\n' +
                                'He likes networking and he is always ready to help others and encourage them to reach their targets.'}/>
                    <TeamMember memberName={'Kmar mhiri'} memberPic={kmar} memberPoste={'General secretary'} animation={"flip-left"}
                                fb={'https://www.facebook.com/kmar.mhiri.3/'}
                                li={'https://www.linkedin.com/in/kmar-m-hiri-360b3b196/'}
                                text={'Kmar M\'hiri is a\n' +
                                'She is passionate about\n' +
                                'She is attentive and diplomatic person that allowed her to become the greatest general secretary.\n' +
                                'She always keeps goals in mind and determine to reach them.'}/>

                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center text-center ">
                    <TeamMember memberName={'Nour belgaid'} memberPic={nour} memberPoste={'HR manager'} animation={"flip-right"}
                                fb={'https://www.facebook.com/nour.belgaied.39'}
                                li={'https://www.linkedin.com/in/belgaied-nour-6a85491a0/'}
                                text={'Nour is an industrial chemistry engineering student.\n' +
                                'She is a dedicated and tenacious person.\n' +
                                'She likes to make people feel comfortable in her presence, she always makes sure people have the right informations and she is certainly a people-person.'}/>
                    <TeamMember memberName={'Abir slimene'} memberPic={abir} memberPoste={'Treasurer'} animation={"flip-right"}
                                fb={'https://www.facebook.com/slimene.abir0'}
                                li={'https://www.linkedin.com/in/slimene-abir-2312641b4'}
                                text={'Abir is an industrial biology engineering student.\n' +
                                'She is passionate about challenges and she is a resourceful person.\n' +
                                'She is a great negociator who knows how to handle money and finances and she likes to collaborate with others.'}/>
                    <TeamMember memberName={'zeineb nefzi '} memberPic={zeineb} memberPoste={'Training manager'} animation={"flip-right"}
                                fb={'https://www.facebook.com/profile.php?id=100019001957890'}
                                li={'https://www.linkedin.com/in/zeineb-nefzi-8263b419a/'}
                                text={'zayneb is an industrial chemistry engineering student.\n' +
                                'She is passionate about artificial intelligence and analytical softwares.\n' +
                                'She is an ambitious and enthusiastic person. She loves taking risks cause it always push her to the limits and challenge her.\n' +
                                'Kmar M\'hiri is a'}/>
                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center text-center ">
                    <TeamMember memberName={'Yassine ayadi'} memberPic={yessine} memberPoste={'media and communication manager'} animation={"flip-left"}
                                fb={'https://www.facebook.com/yassine.ayadi.33'}
                                li={'https://www.linkedin.com/in/yassine-ayadi-68aa551a0'}
                                text={'Yassine is a skillful and committed....\n' +
                                'He has great passion for photography and graphical design.\n' +
                                'He always seeks creativity and he aims to set the bar high.'}/>
                    <TeamMember memberName={'Omar jridi'} memberPic={omar} memberPoste={'WebMaster'} animation={"flip-left"}
                                fb={'https://www.facebook.com/amrouch.jridi/'}
                                li={'https://www.linkedin.com/in/omar-jridi-3a985b1b2/'}
                                text={'Omar is a talented and reliable software engineering student.\n' +
                                'He is passionate about his studies , he enjoys working as a part of a team and always comes out with new ideas.'}/>

                </div>

            </div>
        </div>
    )
};
export default Team;
