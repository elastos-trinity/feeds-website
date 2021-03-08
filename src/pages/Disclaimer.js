import React from "react"
import FeedsCard from "../components/FeedsCard";
import CodeIcon from "@material-ui/icons/Code";


const cardInfos = [
    {
        id: "Disclaimer",
        avatarimg: <CodeIcon />,
        title: `Feeds dApp Disclaimer`,
        username: `@Feeds-dev`,
        descrs: [`Feeds is owned and operated by Trinity Tech Co., Ltd. and its affiliates (“Trinity”, “we”, or “us”), and you agree to abide by the specific terms for the Feeds application below (collectively our “Terms”).️`,
        'By using our Feeds application, its content, and services (the “App”), you agree to be solely responsible for your use of the App and any content you post and provide, including compliance with applicable laws, rules, and regulations. You should only post and provide content that you are comfortable sharing with others. You must be at least 13 years old to use the App or no longer considered to be a minor in your jurisdiction (ie. state, providence or country).  We do not endorse, support, represent or guarantee the completeness, truthfulness, accuracy, or reliability of any content on the App. You hereby acknowledge that you may be exposed to harmful, inaccurate or inappropriate content while using the App.',
        ],
    }
];

export default function Disclaimer() {

    return (
        <div>
            {cardInfos.map((cardInfo, index) => (
                <div data-aos="fade-up" data-aos-duration="1000">
                    <FeedsCard
                        key={index}
                        id={cardInfo.id}
                        avatarimg={cardInfo.avatarimg}
                        title={cardInfo.title}
                        username={cardInfo.username}
                        descrs={cardInfo.descrs}
                    />
                </div>
            ))}
        </div>
    );
}
