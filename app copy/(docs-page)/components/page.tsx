'use client';
import Link from 'next/link';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import preview from '@/assets/preview';
const appsDesign = [
  {
    id: 'navbar',
    url: '/components/navbar',
    name: 'navbar',
    imgSrc: preview.navbar,
  },
  {
    id: 'hero',
    url: '/components/hero',
    name: 'Hero Section',
    imgSrc: preview.hero,
  },
  {
    id: 'bentogrid',
    url: '/components/bentogrid',
    name: 'bentogrid',
    imgSrc: preview.bentogrid,
  },
  {
    id: 'cards',
    url: '/components/card',
    name: 'Cards',
    imgSrc: preview.card,
  },
  {
    id: 'form',
    url: '/components/form',
    name: 'form',
    imgSrc: preview.form,
  },
  {
    id: 'footer',
    url: '/components/footers',
    name: 'footer',
    imgSrc: preview.footer,
  },

];

export default function Home() {
  return (
    <>
      <div className='pt-20 pb-5 min-h-[90vh]'>
        <h1
          className={'sm:text-3xl text-2xl font-semibold tracking-tight pb-1'}
        >
          Components
        </h1>

        <p className='md:text-lg text-sm text-muted-foreground lg:w-[80%]'>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. 
        </p>
        <>
          <div className='grid md:grid-cols-3 grid-cols-2 gap-6 py-4'>
            {appsDesign.map((component, index) => {
              return (
                <>
                  <Link
                    href={component?.url}
                    className='border p-2    transition-all rounded-lg'
                  >
                    <>
                      <AspectRatio.Root ratio={16 / 9}>
                        <Image
                          src={component.imgSrc}
                          alt='hero-sec'
                          width={100}
                          height={100}
                          className='w-full h-full   rounded-md'
                        />
                      </AspectRatio.Root>
                    </>
                    <div className='sm:py-2 py-1 sm:px-4 px-2'>
                      <h1 className='2xl:text-xl xl:text-xl md:text-lg text-sm font-medium leading-[140%] capitalize'>
                        {component.name}
                      </h1>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </>
      </div>
    </>
  );
}
