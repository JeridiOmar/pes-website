import React from 'react'
import {css, jsx} from '@emotion/core'
import Jump from "react-reveal/Jump";
import banner from '../pictures/activities/banner-activities.webp'

import zhd from '../pictures/activities/zhd.webp'
import yfc from '../pictures/activities/yfc.webp'
import LatestActivities from "../LatestActivities";
import rip from '../pictures/activities/recitup.webp'
import pam from '../pictures/activities/pam.webp'
import sc from '../pictures/activities/sc.webp'
import rflc from '../pictures/activities/rftlc.webp'
import sc2 from '../pictures/activities/sc2.webp'
import sc3 from '../pictures/activities/sc3.webp'
import wip from '../pictures/activities/wip.webp'
import gm from "../pictures/activities/gm.webp"
import recycle from "../pictures/activities/recycle.webp"
import qhse from "../pictures/activities/qhse.webp"
import publicSpeaking from "../pictures/activities/public.webp"
import qualityManagement from "../pictures/activities/quality-management-workshop.jpg"
import yfc2021s1 from "../pictures/activities/yfc2021-1.jpg"
import yfc2021s2 from "../pictures/activities/yfc2021-2.jpg"
import yfc2021s3 from "../pictures/activities/yfc2021-3.jpg"
import yfc2021s4 from "../pictures/activities/yfc2021-4.jpg"
import workshop2021iso50001 from "../pictures/activities/workshops2021-iso50001.jpg"
import sortie2021steg from "../pictures/activities/sorties2021-1.jpg"
import zhd2021 from "../pictures/activities/zhd2021.jpg"
import pesday2021 from "../pictures/activities/pesday2021.jpg"
import wip2021 from "../pictures/activities/wip2021.png"
import rec2021 from "../pictures/activities/rec2021-1.png"
import summerGathering from "../pictures/activities/summer-gathering2021.jpg"
import Activity from "../Activity";
import CarouselItem from "./CarouselItem";
import BigArticle from "./BigArticle";
import SmallArticle from "./SmallArticle";
import '../styles/bootstrap.min.css'
import ActivityLatest from "./ActivityLatest";

/** @jsx jsx */
const Activities = () => {
    const bannerStyle = css`
    &{
       background-image: url(${banner});
        height: 100vh;
        background-attachment: fixed;
        background-size:cover;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: space-around; 
        //clip-path: polygon(0 0, 100% 0, 100% 88%, 57% 100%, 0 86%);
  }
  @media(max-width: 750px){
    &{
        //clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 93%, 55% 100%, 0 92%) !important;
    }
  }
   
      
  `;
    const headerStyle = css`
     & h1{ 
     font-size: 100px;
    font-family: railway sans-serif;
    margin: 10px 0;
    /*background:linear-gradient(94deg, rgba(83,141,34,1) 0%, rgba(94,142,86,0.0984768907563025) 88%, rgba(214,214,214,1) 99%);*/
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
   color: #f2e8cf;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
    }
    @media(max-width: 750px){
       & h1{ 
        font-size: 60px;
        
    }
  `;
    const carouselStyle = css`
    &{
      margin-top: 30px;
      margin-bottom: 30px;
    }
    & img{
      height: 400px;
      border-radius: 15px;
      object-fit:cover;
    }
    & h3 {
      font-weight: 700!important;
      font-size: 34px;
    }
     @media(max-width: 750px){
        & img {
          height: 250px!important;
        }
        & p{
          font-size: 10px;
        }
     }
  `;
    const upcommingStyle = css`
    & h2{
        display: inline-block;
        margin: 0 0 25px 25px;
        color: #272727;
        font-family: 'Heebo', 'Arial';
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -1.66px;
        text-transform: capitalize;
        transition: 0.2s;
    }
     & .card{
         border: hidden!important;     
   
    }
    & .card-img-top{
      border-radius: 10px;
      transition: 0.3s!important;
     
    }
    & .card-img-top:hover,& .right-article-img:hover{
        top: 5px!important;
        filter: brightness(80%)!important;
        transition: 0.3s!important;
        transform: scale(1.05);
    }
    & .card-text1{
      color:#909090!important;
    }
    & .card-title{
        color: #272727;
        font-weight: 700;
    }
    & .card-meta{
        margin-bottom: 8px;
        font-size: 14px;
        color: #afafaf;
    }
    & .card-meta .author {
        margin-right: 4px;
    }
    & .min-read {
        margin-left: 7px;
        border-left: 1px solid rgba(211, 211, 211, 0.63);
        padding-left: 10px;
    }
    & .card-bigger-img{
        position: relative;
        top: 0;
        max-height: 359px;
        object-fit: cover;
        border-radius: 7px;
    }
    
    & .upcomming .card-img-top{
    height: 213px!important;
    object-fit: cover;
}
//  & .latest-left-bigger img{
//    height: 167px;
//    width: 240px;
//}
   & .right-article-img{
      max-width: 100%;
      border-radius: 7px;
      transition: 0.3s!important;
   }
   & .latest-left-bigger .row{
   margin-bottom: 13px;
   }
   & .card-body{
      padding-left: 3px!important;
   }
   @media(max-width: 750px){
      & .card-bigger-img{
        height: 216px;
    }
   }
`;
    const latest = [
        {
            title: "Summer gathering",
            picture: summerGathering,
            description: [
                {
                    text: "This event marks the end of the year for all of our members, as such to remember the memories this year left us, we, the members of IEEE PES INSAT SBC got together to bid farewell to this year and enjoy each others’ company."
                },

            ],
            date: {
                day: "22",
                month: "06",
                year: "2021"
            },
        },
        {
            title: "REC' IT UP infosession",
            picture: rec2021,
            description: [
                {
                    text: "The committe of Rec’IT UP introduced the event for the prospect participants to join the event: The first edition of Rec’it up and its success, the program, the mentors and the training sessions, the participation fee (40 dt/ team), the date, the location (Agil Corporate University), the protocols and he awards (1st team 2000 dt, 2nd team 1000 dt, 3rd team 500dt)"
                },

            ],
            date: {
                day: "14",
                month: "06",
                year: "2021"
            },
        },
        {
            title: "WOMEN IN POWER 2.0",
            picture: wip2021,
            description: [
                {
                    text: "WIP 2.0 is the second edition of this event that took place on February the 20th 2019. Women In Power is a collaboration between IEEE PES SB Chapter and IEEE Women In Engineering Affinity group. This event is a conference where multiple successful women in multiple domains get to share their stories to inspire young women and guide them through the choices they should make during their careers. Each guest of honor shared her story, her education, the choices she made to reach where she is now."
                },
                {
                    text: "Ms. Lajnef Dorra was the first to share her story. She is a Chemical engineer who graduated from INSAT that is passionate about nuclear science. She is the head of service in the Tunisian Company of Electricity and Gas who worked on a feasibility for the first NPP in Tunisia. Her many choices shaped the women she is today. After working and reaching her dream job, Ms. Dorra got married and is raising her child. This did not stop her from pursuing her career as she is now taking a break from work that she wouldn’t call a break, and went back to studying in order to deepen her knowledge in the nuclear domain. One of the things that she said “what matters in idea is not its difficulty or how it’s so different from other ideas. The importance of an idea is how much you believe in it”. She also advised the attendees to hone their skills especially learning new languages such as German."
                },
                {
                    text: "Our second speaker was Asma Chatti the founder of her own cosmetic products company Passiflora. She was an industrial chemical engineer who started her career in the field of research and development before establishing her own promising business. As someone who believes in the importance of natural sources of products, she made her own line of bio skin care products. She started it all by her passion for research and giving out a lot of time to her idea. Her patience was her main virtue as she didn’t give up on her project by building it up bit by bit."
                },
                {
                    text: "Our third speaker was Ms.Kilani Olfa, founder of Kyto-Prod. Kyto-Prod uses a bio technology making products from Chitosan which is a type of biomass extracted from crab and shrimp waste. This molecule is an anti-oxidant, antibacterial and grease sensor among other functions. Ms. Kilani was actually a professor during fifteen years after the completion of her studies. After getting sick, she felt that if she were to survive, she would like to change her life and start her own project. After getting better, she started participating in multiple innovation competitions, she managed to build her own network and finally her idea came to life. Her company contains many branches as each branch works on a single product like soap, cosmetics or disinfectant. She advises young students to acknowledge their strengths and weaknesses and work on them. She also advises students not to limit their lives to their studies and work on their own skills such as the power of convincing others through networking. She also advised us to be active in civil society."
                },
                {
                    text: "The fourth and last speaker was Rania Toukebri, an instrumentation and industrial maintenance INSAT alumni. She is an Aerospace engineer specialized satellite and telescope architecture development. In 2018, she was classified as one of the top 10 aero engineers under 30 in Africa. She peaked in her career mostly thanks to her education. After getting her engineering diploma from INSAT, MS. Rania persued a masters degree in Embedded Systems in France. She then pursued a master’s degree in software development in space development. She then worked on a project of conception implementing a telecommunication protocol. Afterwards she pursued a master’s degree in computer science and cryptography in Stanford University. Afterwards, she got a license in strategies and space laws in Magnum University in Canada as well as techniques, ad legal strategies, as she was aiming to start her own startup. She is now working in telecommunication and cyber security protocols between satellites and the ground station using quantum physics. she also became a mentor in UNOOSA or the united nations office for outer space affairs. Her advice to us was to always keep up with the news by reading local and international newsletters. Also, it is very important to get to know professionals in the field. She also spoke about the racism, misogynist and stereotyping she went through and told all of us to expect it and not to let it stop our ambitions."
                }
            ],
            date: {
                day: "20",
                month: "05",
                year: "2021"
            },
        },
        {
            title: "IEEE PES Day 2021 in collaboration with IEEE PES FST SBC and IEEE PES ENIT SBC",
            picture: pesday2021,
            description: [
                {
                    text: "In celebration of PES day in its fourth edition, IEEE PES INSAT Chapter collaborated with IEEE PES ENIT SBC and IEEE PES FST SBC. This theme that was chosen this year was “clean energy revolution”. Due to the circumstances, the event took place virtually. Mr. Khalil Ben Salah was IEEE PES INSAT SBC’s ambassador in this event."
                },
                {
                    text: "On the 1st day (17th of April), three workshops took place under the theme renewable energies. The first one was “an intro to renewable energies and why they matter” by Ms. Fatma Jelili. The second one was “the challenges that face renewable nergues and their implementation” by Mr. Thamer Belgacem. The third one was “potential solutions” by Mr. Sakreddine Manai."
                },
                {
                    text: "On the 2nd day (the 24th of April), one  workshop took place under the theme nuclear energies. “Nuclear energy: is it clean is it worth the risk” by MR. Taher Hamida."
                },
                {
                    text: "On the 3rd day (the 25th of April), one workshop took place. “clean energies in the world of business and entrepneurship” by MR. Ahmed Hamouda"
                }
            ],
            date: {
                day: "25",
                month: "04",
                year: "2021"
            },
        },
        {
            title: "Zero Hunger Day 2021",
            picture: zhd2021,
            description: [
                {
                    text: "Due to the current circumstances, methods to celebrate ZHD were very limited. Nonetheless, as it is one of IEEE PES INSAT SBC humanitarian actions, the members saw it imperative to celebrate it. By limiting the number of people involved, IEEE PES INSAT SBC was able to celebrate this event in Ramadan by providing supper for a few families in need."
                },

            ],
            date: {
                day: "23",
                month: "04",
                year: "2021"
            },
        },
        {
            title: "STEG Khelidia training center industrial visit",
            picture: sortie2021steg,
            description: [
                {
                    text: "This industrial visit was held in STEG Khelidia training center where a limited number of IEEE PES got to look around this training visit and got to know better about this company."
                },
                {
                    text: "This training center was in fact made for the new recruits of STEG in order to improve their skills and knowledge within their own working place. It contains 15 teaching rooms, 18 laboratories and studios, 2 rooms dedicated to computer science, three networks of wires for electric distribution, a nurse room,etc"
                },
                {
                    text: "The IEEE PES members got to see around this center and the staff showed them the facility’s different electric wirings and the different networks enabling the production and distribution of electricity all over the facility."
                },


            ],
            date: {
                day: "07",
                month: "04",
                year: "2021"
            },
        },
        {
            title: "Youth For Change 4.0 4th and last destination",
            picture: yfc2021s4,
            description: [
                {
                    text: "This activity marks the 4th step in the Youth for Change event. It took place on the 14th  of March, 2021 in Ras Jebel  Middle school, Bizerte. Youth for change is an initiative to introduce the upcoming generation to sustainable and clean energy sources. As we know, energy use is very common and important in day to day life. The most common energy sources being fossil energies, cause pollution and are running out. As sustainable and clean sources alternatives exist, it is very important to educate tomorrow’s generations about their use."
                },
                {
                    text: "Opening ceremony: The project manager Farah Gharbi announces the beginning of the event. The participants are then divided into three groups."
                },
                {
                    text: "Training sessions: The goal of this event is to introduce the children to the concepts of the different energy types, a bit about the history behind them and their methods of use and more in simple terms. As such three types of energy are taught to these children. Biomass is the animal or plant matter that can be transformed into energy. Wind energy is the energy generated by using a wind turbine. Solar energy is where using solar panels, sun rays can be transformed into electric power."
                },
                {
                    text: "Competition: The children are devised in groups of four or five. The competition has three rounds using a points system. Each group answers a question in each round. The questions asked are chosen through the number the kids choose. The winners are chosen as the group that has the most points."
                },
                {
                    text: "The winners of the event are announced. \"Black and White\" get the chance to compete at the finals in INSAT."
                }
            ],
            date: {
                day: "14",
                month: "03",
                year: "2021"
            },
        },
        {
            title: "Workshop ISO 50001",
            picture: workshop2021iso50001,
            description: [
                {
                    text: "This workshop was presented by Mr. Mehdi Zribi, systems management manager in a company named SOTUVER, an independent trainer and a third party auditor.  This training allows the trainees to get completely acquainted with each part of the norm ISO 50001."
                },
                {
                    text: "ISO 50001 is a norm that presents the requirements necessary to obtain a more efficient energy management in a company. Through the use of the data available, a company can understand and better make decisions on their energy use. ISO 50001 highlights what makes a difference in energy management in order to choose the optimal system for energy use."
                },
                {
                    text: "The trainer began by introducing the different requirements necessary to obtain the certification ISO 50001, be it the basic requirements for every norm or those specific to ISO 50001. Afterwards, the trainer focused on how to audit for ISO 50001. The first element of this part was how to interpret the requirements of ISO 50001 within said company to audit. He then moved on to explain how to manage and lead the audit team throughout the whole process. Later on, he tried to highlight what kind of tests and question you may encounter while auditing for ISO 50001, by providing the trainees with different realistic situations. He then explained how this energy norm could be fulfilled while fulfilling other norms. The training session ended when the trainer encouraged the trainees to aim to become a lead auditor level by presenting the different advantages to it."
                },
                {
                    text: "At the end of this training session, the trainees were exhausted but quite satisfied by all the new knowledge they had gained."
                },

            ],
            date: {
                day: "06",
                month: "03",
                year: "2021"
            },
        },
        {
            title: "Youth For Change: 3rd destination",
            picture: yfc2021s3,
            description: [
                {
                    text: "This activity marks the third step in the Youth for Change event. It took place on the 28th  of February, 2021 in Mdjez el Bab Middle school, Beja. Youth for change is an initiative to introduce the upcoming generation to sustainable and clean energy sources. As we know, energy use is very common and important in day to day life. The most common energy sources being fossil energies, cause pollution and are running out. As sustainable and clean sources alternatives exist, it is very important to educate tomorrow’s generations about their use."
                },
                {
                    text: "Opening ceremony: The project manager Farah Gharbi announces the beginning of the event. The participants are then divided into three groups."
                },
                {
                    text: "Training sessions: The goal of this event is to introduce the children to the concepts of the different energy types, a bit about the history behind them and their methods of use and more in simple terms. As such three types of energy are taught to these children. Biomass is the animal or plant matter that can be transformed into energy. Wind energy is the energy generated by using a wind turbine. Solar energy is where using solar panels, sun rays can be transformed into electric power."
                },
                {
                    text: "Competition: The children are devised in groups of four or five. The competition has three rounds using a points system. Each group answers a question in each round. The questions asked are chosen through the number the kids choose. The winners are chosen as the group that has the most points."
                },
                {
                    text: "Closing ceremony: The winners of the event are announced. “Five ladies” get the chance to compete at the finals in INSAT."
                }
            ],
            date: {
                day: "28",
                month: "02",
                year: "2021"
            },
        },
        {
            title: "Youth For Change: 2nd destination",
            picture: yfc2021s2,
            description: [
                {
                    text: "This activity marks the second step in the Youth for Change event. It took place on the 21st of February, 2021 in Dar Fadhal Middle school, Tunis. Youth for change is an initiative to introduce the upcoming generation to sustainable and clean energy sources. As we know, energy use is very common and important in day to day life. The most common energy sources being fossil energies, cause pollution and are running out. As sustainable and clean sources alternatives exist, it is very important to educate tomorrow’s generations about their use."
                },
                {
                    text: "Opening ceremony: The project manager Farah Gharbi announces the beginning of the event. The participants are then divided into three groups."
                },
                {
                    text: "Training sessions: The goal of this event is to introduce the children to the concepts of the different energy types, a bit about the history behind them and their methods of use and more in simple terms. As such three types of energy are taught to these children. Biomass is the animal or plant matter that can be transformed into energy. Wind energy is the energy generated by using a wind turbine. Solar energy is where using solar panels, sun rays can be transformed into electric power."
                },
                {
                    text: "Competition: The children are devised in groups of four or five. The competition has three rounds using a points system. Each group answers a question in each round. The questions asked are chosen through the number the kids choose. The winners are chosen as the group that has the most points."
                },
                {
                    text: "Closing ceremony: The winners of the event are announced. The winners of the event are announced. “Five stars” get the chance to compete at the finals in INSAT."
                }
            ],
            date: {
                day: "21",
                month: "02",
                year: "2021"
            },
        },
        {
            title: "YFC 4.0 1st destination",
            picture: yfc2021s1,
            description: [
                {
                    text: "This activity marks the first step in the Youth for Change event. It took place on the 24th of December, 2020 in L’Aouina 1 Middle school, Tunis. Youth for change is an initiative to introduce the upcoming generation to sustainable and clean energy sources. As we know, energy use is very common and important in day to day life. The most common energy sources being fossil energies, cause pollution and are running out. As sustainable and clean sources alternatives exist, it is very important to educate tomorrow’s generations about their use."
                },
                {
                    text: "Opening ceremony: The project manager Farah Gharbi announces the beginning of the event. The participants are then divided into three groups"
                },
            ],
            date: {
                day: "16",
                month: "01",
                year: "2021"
            },
        },
        {
            title: "Quality Management System” workshop",
            picture: qualityManagement,
            description: [
                {
                    text: "This workshop was presented by Mr. Anis Guerfi, a lead auditor ISO 9001:2015, and an engineer in plastics.  This training aims to make the participants aware of the issues of quality and the advantages of setting up a quality management system (QMS)."
                },
                {
                    text: "A quality management system is a method used by a company or an organization. It is in fact internal rules composed of policies, processes and procedures that are documented. It explains the way an organization creates and delivers products and services to the clients in a way that ensures maximum customer satisfaction through the high quality of the goods delivered. ISI 9001:2005 is the most implemented and recognized QMS."
                },
                {
                    text: "The trainer explained the notion of a norm. A norm is a set of rules applied in certain domain to uphold a characteristic of a product. During this training session, the trainer explained the basics of a quality norm. For instance, the methods used to identify the causes of decreased quality. Among these, we can mention the Ishikawa method or the 6Ms method. Afterwards, the trainer gave examples of the existing quality norms, how to distinguish them and the differences between them.\n"
                },
                {
                    text: "The trainees showed great interest in the teachings of Mr. Anis Guerfi. As such, it was an interactive training session where most of the trainees kept on asking questions to which Mr. Guerfi gladly answered."
                }
            ],
            date: {
                day: "17",
                month: "02",
                year: "2021"
            },
        },
        {
            title: "IEEE PES Tunisia General Meeting",
            picture: gm,
            description: [
                {
                    text: "In partnership with Orange and IEEE PES Tunisia Section, the IEEE PES General Meeting took place on Saturday, December the 5th, 2020 at 12:00 am and ended Sunday, December the 6th, 2020 at 06:00 pm. As the winning chapter, IEEE PES INSAT Student Branch Chapter had the honor to organize the congress this year. During this two-day congress, four workshops, two conferences and a 24h challenge took place. The theme for this event was Energy Transition, the global energy sector’s shift from fossil-based systems of energy production and consumption to no CO2 emission energy. The participants joined the workshops and conferences to better learn about the subject in order to compete in the 24-hour challenge."
                },
                {
                    text: "On the first day of the event (5th of December, 2020), the opening ceremony took place at 02:00.pm during with the competition was announced. At 02:30 pm, Mr. Mongi Marzoug, Mr. Frank Lambert and Mr. Mohamed Zmerli held a conference. From 04:15 pm to 06:00 pm., two workshops took place: Project management by Mr. Mahdi Mkaouer and Design thinking by ms.Fatma Choura. After a short break the third workshop “Photovoltaic solar energy” was taught by Mr. Walid Hassen. The last event that took place during the first day was IEEE PES TUNISIA SECTION ASSEMBLY. This event was held separately with our partner PES TUNISIA Section: during this event each chapter presented their own chapter in hopes of winning the best PES Student Branch Chapter in Tunisia. Another presentation took place, where Chapters attempted to win the right to organizing the best PES Tunisia General Meeting."
                },
                {
                    text: "On the second day, the first event was the fourth and last workshop “pitching” by Mr. Wissem Hamzaoui, at 10:00 Am. Then, at 114:45 AM, the second conference “Energy 4.0: Effect on the oil and Gas Sector” was held by Mr. Kamel Bennaceur. At 02:00 pm, the pitching of the challenge began. \n" +
                        "The closing ceremony was where the winners were announced.\n" +
                        "Winners 24h challenge:\n" +
                        "Most feasible project winner: Brighter team\n" +
                        "Winner of Y7p/member: Elite Squad\n" +
                        "Winners best chapter:\n" +
                        "INSAT PES Student Branch Chapter: 1st place\n" +
                        "ENIS PES Student Branch Chapter: 2nd place\n" +
                        "ESPRIT PES Student Branch Chapter: 3rd place\n" +
                        "Winner of the organization of the next General Meeting: ENET’COM Student Branch Chapter."
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },
        },
        {
            title: "Workshop: Introduction to QHSE",
            picture: qhse,
            description:
                [
                    {

                        text: "This workshop was presented by Ms. Rihab a university teacher and a trainer and expert in QHSE. As one of the most \n" +
                            "prominent management systems, QHSE or quality, health, security and \n" +
                            "environmental management is a mandatory tool that most engineers must \n" +
                            "possess.."
                    },
                    {
                        text: "QHSE stands for Quality, Health, Security and Environment. As the name indicates, a QHSE Management System aims to achieve optimal results in these criteria. It is a tool to direct, manage and develop an organization. The goal of a \n" +
                            "QHSE Management System is to make sure that an organization complies with \n" +
                            "regulations and legislation in the aforementioned fields."
                    },
                    {
                        text: "The trainer delved deep into QHSE by explaining all four of Quality, Health, Security and Environment norms. She then proceeded to enumerate the \n" +
                            "different benefits it has and their impact on the different impact on the organization following this tool’s guidelines. She also mentioned the different standards making an organization more trustworthy and less prone to legal \n" +
                            "issues."
                    },
                    {
                        text: "The trainees appreciated the work of Ms. Rihab Righi, which made them more interested in pursuing more knowledge in this subject"
                    }

                ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },
        },
        {
            title: "Workshop: how recycling saves energy",
            picture: recycle,
            description: [
                {
                    text: "This workshop was presented by Mr. Anis Guerfi, an engineer and an expert in plastics. The trainer guided the participants through the basics of recycling and explained why it is important to do."
                },
                {
                    text: "Wasted material and energy sources are some of our world’s biggest problems. To begin with, the waste’s amount is increasing in a way that wastelands are unable to contain and in a way that is intoxicating Earth. Then, we can’t deny the problem presented in the scarcity of energy and inability to produce more through fuel. That’s why recycling is important as it solves a percentage of \n" +
                        "these problems."
                },
                {
                    text: "First, Mr. Anis Guerfi explained the types of plastics, how to identify them and their characteristics. He explained how some plastics can get recycled upto 9 times while some can’t be recycled according to their type and how many times they’ve been recycled already. He also explained how recycling can be a source of energy as the materials you use are reused rather than consuming more polymeric material. Later on, our trainer emphasized the importance of our behavior in regards to our excessive use of plastics. He presented alternatives to using plastics such as using a fabric bag that you can use over \n" +
                        "and over again."
                },
                {
                    text: "The attendees were very pleased with this workshop as they showed great interest in the subject and had many questions to ask. Mr. Anis was very accommodating as he answered the questions in details and made sure everyone understood it clearly. The participants were very active, but two of them were very outstanding. That’s why they won a free pass to our next workshop."
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },


        },
        {
            title: "Workshop: public speaking",
            picture: publicSpeaking,
            description: [
                {
                    text: "This workshop was presented by Asma Selmi, a professional soft skills coach. The trainer helped the attendees through the basis of public speaking to \n" +
                        "overcome their stage fright and give their best performance."
                },
                {
                    text: "One of the most important stages of a project or an event is its introduction and the first impression it makes. As such, the announcer’s duty is to nail the presentation. This process is not easy as it is necessary to monitor every word and every move down to the slightest details."
                },
                {
                    text: "The first thing the trainer did was take in the demeanor of the attendees, in order to better understand them and point out the changes they must make. Then, she went through the whole process of communication and the \n" +
                        "techniques of public speaking. Afterwards, she gave examples to better\n" +
                        "understand prior information. Finally, a simulation of different situations took place, to practice what’s been learned."
                },
                {
                    text: "The attendees were very pleased with this workshop as they have gained a new perspective. As the feedback was positive and the interest picked in the first place, there may be a second workshop with Ms. Asma Selmi."
                }

            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },

        },
        {
            title: "boost your career summer school 3.0",
            picture: sc,
            description: [
                {
                    text: "This workshop was presented by AI developer advocate and teacher, Mr. Elyes Manai. The trainer dived into the secrets of the professional world to prepare the attendees for the future of their career."
                },
                {
                    text: "Through his own experience, the trainer went through the fundamental knowledge that each and every aspiring beginner professional should have, the way one should act when faced with all kinds of situations and the mindset one \n" +
                        "must have."
                },
                {
                    text: "In more details, the trainer went over hardships anyone can encounter when climbing up the stairs to success. He explained that being dishonorable and \n" +
                        "using underhanded ways will only lead to a downfall. He went over the stories of people who managed to achieve the greatest success when it was expected that they fail. The trainer then went to explain the ways of the business world to get the attenddes ready to face the professional world."
                },
                {
                    text: "The feedback we got from attendees was stupefying. There were no complains whatsoever. As a matter of fact, it seemed that they enjoyed his company for the questions kept coming even after the workshop ended and Mr. Elyes Manai didn’t fail to answer the questions to their satisfaction. This was probably due to the trainer’s amazing ability to integrate people and his humor. Following this positive feedback, the chapter is considering asking Mr. Elyes to present again, as the number was small because of the precautions taken."
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },
        },
        {
            title: "IEEE Summer school 3.0: Energy transition workshop",
            picture: sc2,
            description: [
                {
                    text: "This workshop was presented by Mr. Samer Zwaydeh, an independent internationally recognized energy expert and lecturer at Al Hussein Technical University with twenty-six years of management experience around the world. This certified carbon reduction manager introduced energy transition from its concept to its real life application."
                },
                {
                    text: "Energy transition is oriented towards the use of renewable energy in place of fossil energy to minimize the emission of dioxide carbon and hopefully eliminating it completely towards the end of the century. Energy transition aims to limit climate change through the disposal of carbon emitters."
                },
                {
                    text: "In more details, Mr. Samer Zwaydeh explained the methods used in providing renewable energy such as solar energy. The trainer went as far as to provide examples different examples of the application of energy transition in real life and in the current crisis the world is suffering from: corona."
                },
                {
                    text: "The workshop picked the attention of most of the attendees as the trainer introduced energy transition through the current situation by explaining this concept use. This workshop proved that energy transition is an important carbon-neutral strategy that we should aim to use in life."
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },
        },
        {
            title: "Zero Hunger Day 2019",
            picture: zhd,
            description: [
                {
                    text: "On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day (Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES WiP, IEEE and PES volunteers made food donation based on food donations campaigns with main focus on 17 UN Sustainable Development goals(2030)."
                },
                {
                    text: "For our chapter , we made a food donation campaign in our unit and we were glad to host our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the IEEE day and PES zero hunger day at the same Time . The meeting was not only about delivering the food donations that we collected but also it was a chance to exchange goals and values of both organizations."
                },
                {
                    text: "Everyone was really satisfied with this ZHD first edition so we promised more impactful editions in the future."
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },
        },


    ];
    const upcommpingEvents = [
        {
            title: "Recycle for the life CYCLE",
            picture: rflc,
            description: [
                {
                    text: 'In collaboration with “Emel Tounes“ association, we will be collecting plastic caps in a box that will be prepared by the PES chapter and\n' +
                        'located in the club room to be accessible to anyone willing to help.\n' +
                        'All the collected caps will be recycled and transformed to a wheelchair that will be given to a handicap person.\n' +
                        'This action is a volunteering and an environmental protection one because plastic is a material that Earth cannot digest.'
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },

        },
        {
            title: "Youth for CHANGE",
            picture: yfc,
            description: [
                {
                    text: "YFC consists of school visits in different regions of Tunisia where PES members will help students develop a better understanding of renewable energy."
                },
                {
                    text: "The team will organize a range of training courses and workshops in order to hopefully help nurture a whole generation and ignite a spark of passion in their spirit. PES members will also organize a competition between the participants at the end of the day in every visit to nominate the winning team. \n" +
                        "From every school, we will have a winning team, we will give them an idea about a project that they should realize."
                },
                {
                    text: "The final will be in INSAT, all the teams will pitch their fresh ideas and there will be awards to encourage and to show them that we do believe that young people will make this world better."
                },

            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },

        },
        {
            title: "REC\'IT UP 3.0 ",
            picture: rip,
            description: [
                {
                    text: "The first ever ‘REC'It Up’ 24-hours challenge was organized by IEEE Power & Energy Society Chapter INSAT Student Branch."
                },
                {
                    text: "Renewable Energies Challenge “REC iT Up” is an entrepreneurship challenge in which IEEE members participated. In the beginning, the participants attended technical and soft skills training. The participants were divided into teams. They were then required to follow the instructions of the jury to represent their renewable energy related projects.  At the end of the challenge, the jury nominated the winning team based on its project’s innovation, feasibility and business plan."
                },
                {
                    text: "This challenge was open to all the IEEE members from all Student Branches in Tunisia which gave them an opportunity to network with fellow IEEE members from other student branches in Tunisia."
                }
            ],
            date: {
                day: "15",
                month: "01",
                year: "2021"
            },

        },
    ];
    return (
        <div>
            <div css={bannerStyle}>
                <div className="overlay"></div>
                <Jump forever duration={1500}>
                    <div css={headerStyle}>
                        <h1>Activities</h1>
                    </div>
                </Jump>
            </div>
            <div className="container" style={{'marginBottom': ' 50px'}}>
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"
                             css={carouselStyle}>
                            <div className="carousel-inner">

                                <CarouselItem title={'Zero Hunger Day'} picture={zhd} classAct={'carousel-item active'}
                                              text={'On September 25th 2019, IEEE PES celebrated the 1st IEEE PES Zero Hunger Day (Global) when ambassadors, PES SB chapters, PES Section chapters, PES YP, PES WiP, IEEE and PES volunteers  made food donation based on food donations campaigns with main focus on 17 UN Sustainable Development goals(2030).. For our chapter , we made a food donation campaign in our unit and we were glad to host our collaborator NGO Rotaract Tunis Hope Rotaract Tunis Hope in our SB local to celebrate the IEEE day and PES zero hunger day at the same Time . The meeting was not only about delivering the food donations that we collected but also it was a chance to exchange goals and values of both organizations. Everyone was really satisfied with this ZHD first edition so we  promised more impactful editions in the future.'}/>
                                <CarouselItem title={'Youth For Change'} picture={yfc} classAct={'carousel-item'}
                                              text={'Youth for change is an initiative that was first held in 2017 by PES volunteer members. This event’s goal is educating the younger generations about renewable energies in Tunisia as an investment for the future of our country and our planet as a whole. To achieve our goal, PES INSAT volunteers visit preparatory schools in many regions of TUNISIA and provide training sessions in the field of energy, for example how we produce electricity by using the solar energy, wind power, piezoelectric materials and hydro power. After this process, students are divided into teams in order to complete a challenge and the finals is held annually at our institute . Applying what they learnt and working in teams ,young students attempt to solve real-world challenges by conceiving projects related to renewable energies then their projects is put to the test as each team pitches their project idea in front of a global audience of their peers and a panel of judges.'}/>
                                <CarouselItem title={'Rec it UP'} picture={rip} classAct={'carousel-item'}
                                              text={"The first ever ‘REC iT Up’ 24-hours challenge was organized by IEEE Power & Energy Society Chapter INSAT Student Branch.\n" +
                                              "Renewable Energies Challenge “REC iT Up” is an entrepreneurship challenge in which IEEE members participated. In the beginning, the participants attended technical and soft skills training. The participants were divided into teams. They were then required to follow the instructions of the jury to represent their renewable energy related projects.  At the end of the challenge, the jury nominated the winning team based on its project’s innovation, feasibility and business plan. This challenge was open to all the IEEE members from all Student Branches in Tunisia which gave them an opportunity to network with fellow IEEE members from other student branches in Tunisia."}/>

                                <CarouselItem title={'Women in POWER'} picture={wip} classAct={'carousel-item'}
                                              text={'The first edition of WOMEN in POWER was organized by IEEE PES INSAT Student Chapter in collaboration with IEEE WIE INSAT Student Affinity Group. This event takes up a whole day where conferences, success stories of women of women in the field of power and energy. We dedicate this day to appreciate , celebrate and empower women in the field of energy.\n' +
                                              'The first edition took place on the 20th of February 2019. The conference had six speakers (Mrs Kaouther Lihidheb ,Mrs Nedra Mtimet ,Mrs Tesnime Ben Dekhil,Mrs Nourane Bouadjila ,Mrs Soumaya Alouane and Mrs Awatef Siala). This much-anticipated event portrayed female energy experts who left their fingerprint in the energy domain. This conference both covered the most pressing and controversial issues in the energy sector and tackled the most interesting and updated topics such as Energy efficiency, Renewable energy in Tunisia, Oil exploration and production in Tunisia and also Environmental and social safeguards of energy projects.  The success of this event was enormous as both attendees and students were able to socialize and share expertise.'}/>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/*upcomming events*/}
                <div className={'events'} css={upcommingStyle}>
                    <div className="container">
                        <div className="row ">
                            <h2>upcoming events</h2>
                            <div className="row upcomming">
                                {upcommpingEvents.map(
                                    ({title, picture, description, date}, index) => <Activity title={title}
                                                                                              description={description}
                                                                                              picture={picture}
                                                                                              date={date}
                                                                                              key={index}/>)}


                            </div>
                            <h2>Latest activities</h2>
                            <div className="row latest">
                                <div className="col-12 col-md-6">
                                    <BigArticle title={latest[0].title} text={latest[0].description}
                                                picture={latest[0].picture} date={latest[0].date}/>

                                </div>

                                <div className="col-12 col-md-6 latest-left-bigger ">
                                    {latest.slice(1, 4).map(
                                        ({title, picture, description, date}, index) => <SmallArticle title={title}
                                                                                                      text={description}
                                                                                                      picture={picture}
                                                                                                      date={date}
                                                                                                      key={index}/>
                                    )}


                                </div>
                            </div>
                            <div className="row">
                                {latest.slice(4, latest.length).map(
                                    ({title, description, picture, date}, index) => {
                                        // if (index > 3) {
                                        return (
                                            <ActivityLatest title={title}
                                                            description={description}
                                                            picture={picture}
                                                            date={date}
                                                            key={index}/>
                                        )


                                    }
                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Activities;

