import Divider from '../divider';

export default function Bio() {
  // const lang = props.language;

  // Get the good translation for the text and return the object that match the language.
  // const info_object = lang === 'fr' ? Personnal_Info.fr : Personnal_Info.en;

  return (
    <div className="w-3/4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          Salut 👋! <br />
          Moi c&apos;est Enzo 😃
        </h2>
        <Divider />
        <section className="text-xl">
          <p>
            <p>
              <br />
              Passionné par les nouvelles Technologies et la création
              d&rsquo;Application depuis mon adolescence. <br />
              <br />
              Aujourd&rsquo;hui, je code en C++, React/Nextjs et Javascript des
              projets en équipes ou en solo que je poste sur Github. <br />
              <br />
            </p>
          </p>
        </section>
        <Divider />
        <section>
          <p>
            41 Vieille Route, <br />
            Chaponost 69630 <br />
            +33 6 81 24 51 27 <br />
            enzo.cecillon@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
