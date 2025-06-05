export function BannerSection({ title }) {
  return (
    <>
      <section id="sm-bg-text-sec" className="sm-bg-text-sec" style={{ backgroundImage: "url('https://trionn.com/_next/static/media/lion.2b10529a.webp')" }}>
        <div className="overlay"></div>
        <div className="text-cont">
          <h2 className="title-3 text-center">{title}</h2>
        </div>
      </section>
    </>
  );
}
