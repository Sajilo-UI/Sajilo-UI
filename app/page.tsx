import Header from '@/components/website/header';
import HeroSec from '@/components/website/hero-sec';
import Footer from '@/components/website/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative'>
        <HeroSec />
      </main>
      <Footer/>
      
     
    </>
  );
}
