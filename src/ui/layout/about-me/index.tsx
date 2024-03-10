import Bio from '@/ui/components/bio';
import Job from '@/ui/components/job';
import Portrait from '@/ui/components/portrait';

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Job />
      <Portrait />
      <Bio />
    </div>
  );
}
