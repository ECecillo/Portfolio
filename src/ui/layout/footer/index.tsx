import MailLink from '@/ui/components/mail-link';
import SocialList from '@/ui/components/socials';

function Footer() {
  return (
    <div className="space-y-8">
      <MailLink className="transition ease-linear delay-100 hover:text-[#ab3e16]" />
      <section className="text-center">
        <p>Enzo CECILLON ©{new Date().getFullYear()}</p>
      </section>
      <div className="flex flex-row justify-evenly">
        <SocialList />
      </div>
    </div>
  );
}

export default Footer;
