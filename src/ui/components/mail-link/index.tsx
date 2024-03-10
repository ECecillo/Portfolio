'use client';

function MailLink({ className = '' }: { className?: string }) {
  const mail = 'ececillo@proton.me';
  return (
    <a className={className} href={`mailto:${mail}`}>
      {mail.toLocaleUpperCase()}
    </a>
  );
}

export default MailLink;
