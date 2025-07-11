import Image from "next/image";

export function SocialSection() {
  return (
    <>
      <section className="social-sec">
        <a className="social-item" target="_blank" href="https://www.linkedin.com/company/dotoli-digital/">
          <p>Linkedin</p>
          <Image src="/images/linkedin.svg" alt="" width={64} height={64} />
        </a>
        <a className="social-item" target="_blank" href="https://www.instagram.com/dotolidigital/">
          <p>Instagram</p>
          <Image src="/images/instagram.svg" alt="" width={64} height={64} />
        </a>

        <a className="social-item" target="_blank" href="">
          <p>YouTube </p>
          <Image src="/images/youtube1.svg" alt="" width={64} height={64} />
        </a>

        <a className="social-item" target="_blank" href="https://www.facebook.com/profile.php?id=61578050977417">
          <p>Facebook</p>
          <Image src="/images/facebook.svg" alt="" width={64} height={64} />
        </a>
      </section>
    </>
  );
}
