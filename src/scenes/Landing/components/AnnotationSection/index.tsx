import React from "react";
import "./AnnotationSection.sass";

export default function Index() {
    return (
        <div className='sceneTwo'>
            <div className='blockTwo'>
                <div className='annotation'>
                    <div className="internalAnnotation">
                        <div className='annotationText'>
                            <h1 className='annotationHeading'>Why Noni, not others</h1>
                            <p className='initialText'>There are many reasons to prefer Noni over other <br/> newsletters, and it’s impossible to list all of them. But <br/> for now, these four are enough to convince you:</p>
                        </div>
                        <div className='annotationList'>
                            <h2 className='annotationListText'>Make Your Inbox Healthy</h2>
                            <img src='/gallery/line.svg'/>
                            <h2 className='annotationListText'>Written By The Greatest Of All</h2>
                            <img src='/gallery/line.svg'/>
                            <h2 className='annotationListText'>Unique and exclusive gift in every email</h2>
                        </div>
                    </div>
                    <p className='endText'>We sent unique and exlusive gift to each and every <br/> subscriber of Noni, no strings attached.</p>
                </div>
                <img src='/gallery/man.svg' alt=''/>
            </div>
            <div className='medium'>
                <h1 className='mediumHeading'>Still not in, look at these issues</h1>
                <p className='mediumText'>We release a new issue every week, some of them are emotional while other are inspiring. If <br/> you want to get a taste of our newsletter, you can read our these previous issue.</p>
            </div>
            <div className='illustrations'>
                <div className='illustrationsWrapper'>
                    <div className='illustrationsOne'>
                        <img src="/gallery/D.svg"/> <div className='buttonPosition'> <div className='buttonIllustrations'> <p className='buttonIllustrationsText'>Design</p> </div>  </div>
                        <h2 className='IllustrationsHeading'>Why Design is the key to Winning <br/> the Presidential Election</h2>
                    </div>
                    <p className='illustrationsLink'>Read Now </p>
                </div>
                <div className='illustrationsWrapper'>
                    <div className='illustrationsOne'>
                        <img src="/gallery/D.svg"/> <div className='buttonPosition'> <div className='buttonIllustrations'> <p className='buttonIllustrationsText'>Creativity</p> </div>  </div>
                        <h2 className='IllustrationsHeading'>How Creativity Can Keep You <br/> Out of Trouble</h2>
                    </div>
                    <p className='illustrationsLink'>Read Now </p>
                </div>
                <div className='illustrationsWrapper'>
                    <div className='illustrationsOne'>
                        <img src="/gallery/D.svg"/> <div className='buttonPosition'> <div className='buttonIllustrations'> <p className='buttonIllustrationsText'>Emotional</p> </div>  </div>
                        <h2 className='IllustrationsHeading'>11 BS Facts About Emotional <br/> Everyone Thinks Are True
                             </h2>
                    </div>
                    <p className='illustrationsLink'>Read Now </p>
                </div>
            </div>
        </div>
    )
}