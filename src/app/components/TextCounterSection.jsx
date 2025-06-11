import Link from "next/link";
export function TextCounterSection({ text, paragraph, btn_text, btn_link }) {
  return (
    <>
      <section className="sm-center-text-sec">
        <div className="container">
          <div className="text-center">
            <p className="text-3" dangerouslySetInnerHTML={{ __html: text }} />
            <p dangerouslySetInnerHTML={{ __html: paragraph }} />

            {btn_link ? (
              <div className="btn">
                <Link href={btn_link}>{btn_text}</Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
}
