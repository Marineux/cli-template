import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Card, { PropsCard } from 'src/components/Card';

const Home: NextPage<PropsCard> = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const photo: string =
    'https://cdn.statically.io/gh/Marineux/faker-data/main/assets/anim.jpg';
  return (
    <div className='px-8'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen flex-1 flex flex-col justify-center items-center py-16'>
        <h1 className='text-7xl'>
          Welcome to{' '}
          <a
            href='https://nextjs.org'
            className='text-[#0070f3] hover:underline'>
            Next.js!
          </a>
        </h1>

        <p className='my-12 text-2xl'>
          Get started by editing{' '}
          <code className='bg-gray-700 p-1 rounded-lg text-lg'>
            pages/index.tsx
          </code>
        </p>

        <div className='cursor-pointer'>
          <Link href='/waifu'>
            <Image src={photo} alt='anim' width={80} height={80} />
          </Link>
        </div>

        <div className='flex items-center justify-center flex-wrap max-w-4xl'>
          {data?.map((item: PropsCard, i:number) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </main>

      <footer className='text-center py-8 text-gray-600 italic'>
        <a
          href='https://github.com/Marineux'
          target='_blank'
          rel='noopener noreferrer'>
          By Marineux
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://my-json-server.typicode.com/Marineux/faker-data/data'
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
