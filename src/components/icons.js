import githubIcon from '../assets/icons/github-sign.png'
import linkedinIcon from '../assets/icons/linkedin-logo.png'
import emailIcon from '../assets/icons/apple.png'
import phoneIcon from '../assets/icons/viber.png'

function SocialIcons() {
  return (
    <div className="absolute top-0 right-0 m-4 flex space-x-4">
        <img src={githubIcon} alt="github" className="w-10 h-10" />
        <img src={linkedinIcon} alt="linkedin" className="w-10 h-10" />
        <img src={emailIcon} alt="email" className="w-10 h-10" />
        <img src={phoneIcon} alt="phone" className="w-10 h-10" />
    </div>
  )
}

export default SocialIcons;
