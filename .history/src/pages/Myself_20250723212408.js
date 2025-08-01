import { myInfo,myWorkSkill,myLicense } from "../data/MyInform"
import profile from "../data/증명사진.jpg";
export default function MySelf(){

    return(
        <div className="A4 rec">
            <div className="title">Introduce</div>
            <div className="container content">
                <div className="contentTitle">인 적 사 항</div>
                <div className="container">
                <div className="myimg">
                     <img src={profile}alt="프로필 사진" className="myimg" />
                </div>
                    <div className="context">
                        <p><strong>· 이름 : </strong>{myInfo.name}</p>
                        <p><strong>· 이메일 : </strong> {myInfo.email}</p>
                        <p><strong>· 연락처 : </strong>{myInfo.phone}</p>
                        <div className="line"/>
                        <p><strong>· 대학교 : </strong>{myInfo.collage} ({myInfo.collageMajor})</p>
                        <p><strong>· 고등학교 : </strong>{myInfo.highSchool} ({myInfo.highScMajor})</p>
                    </div>
                </div>
            </div>


        </div>
    )
}