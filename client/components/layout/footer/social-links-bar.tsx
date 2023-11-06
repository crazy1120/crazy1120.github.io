import Link from "next/link";

interface SocialLinkProps {
  url: string;
  name: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ url, name }) => (
  <li>
    <Link href={url}>
      <i className={`text-2xl leading-6 fab fa-${name}`}></i>
    </Link>
  </li>
);

const SocialLinksBar: React.FC = () => (
  <ul className="inline-flex items-center gap-6">
    <SocialLink
      url={"https://www.facebook.com/myfirst.tech"}
      name={"facebook"}
    />
    <SocialLink
      url={"https://www.instagram.com/myfirst.tech/"}
      name={"instagram"}
    />
    <SocialLink
      url={"https://www.youtube.com/c/myFirstTech"}
      name={"youtube"}
    />
    <SocialLink
      url={"https://www.tiktok.com/@myfirst.tech.my"}
      name={"tiktok"}
    />
    <SocialLink
      url={"https://www.linkedin.com/company/myfirst/"}
      name={"linkedin"}
    />

    <SocialLink
      url={"https://twitter.com/myFirstKidsTech"}
      name={"square-x-twitter"}
    />
  </ul>
);

export default SocialLinksBar;
