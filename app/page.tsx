import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FOOTER_LINKS, NAV_LINKS, Routes, SPECIALITIES, STATS } from "@/content/shared";
import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ganesh Valves',
  description: 'Ganesh Valve Products are the leading Manufacturer & Supplier of Stainless Steel 3 Way Barstock Ball Valve in Ahmedabad, Wholesale IC Three Piece Ball Valve, Cast Iron Gate Valve trader in Gujarat India.',
  keywords: 'stainless steel 3 way barstock ball valve manufacturer in ahmedabad, ic three piece ball valve producer, cast iron gate valve manufacturer in gujarat, wholesale screwed end ball valve supplier india, carbon steel swing check valve manufacturing company gujarat india',
  openGraph: {
    title:  'Ganesh Valves',
    description: 'Ganesh Valve Products are the leading Manufacturer & Supplier of Stainless Steel 3 Way Barstock Ball Valve in Ahmedabad, Wholesale IC Three Piece Ball Valve, Cast Iron Gate Valve trader in Gujarat India.',
    url: 'https://ganeshvalves.com',
    type: 'website',
  },
}

export default function Home() {
  return (
    <VStack className={clsx(inter.className, "bg-slate-100")}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <main>
        <HomeHero />
        <Clients />
        <PageContainer className="drop-shadow-2xl">
          <Introduce />
          <Specialities />
        </PageContainer>
      </main>

      {/* FOOTER */}
      <Footer />
    </VStack>
  );
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ------------------------------------------------- HOME COMPOENTS ----- START
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

const HomeHero: React.FC = () => (
  <PageContainer>
    <Section>
      <HStack className="items-stretch justify-center">
        <div className="h-96 my-20 md:w-1/2 flex flex-col items-start justify-center">
          <p className="pl-6 text-black/50 font-bold uppercase">
            we help you to
          </p>
          <h1 className="border-l-4 border-red-800 pl-4 text-8xl text-black/[0.85] font-black">
            CONTROL
            <br />
            THE FLOW
          </h1>
          <br/>
          <HStack className="pl-5">
<input className="w-64 border px-2 text-xs" placeholder="Enter email here"/>
          <Button className="drop-shadow-md hover:drop-shadow-2xl transition-all duration-500">
          Get Quote{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Button>
          </HStack>
        </div>
        <div className="md:w-1/2">
          <iframe
            src="https://my.spline.design/untitled-1054cea4b1f96f01251eb70be782e725/"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </HStack>
    </Section>
  </PageContainer>
);

const Clients = () => (
  <PageContainer>
    <Section>
      <HStack className="justify-around pt-32 pb-20 opacity-50 grayscale">
        <Image
          className="w-32"
          alt="vercel"
          src="/img/reliance_1.svg"
          width={300}
          height={200}
        />
        <Image
          className="w-32"
          alt="vercel"
          src="/img/bajaj_1.svg"
          width={300}
          height={200}
        />
        <Image
          className="w-32"
          alt="vercel"
          src="/img/tata_1.svg"
          width={300}
          height={200}
        />
        <Image
          className="w-32"
          alt="vercel"
          src="/img/adani_1.svg"
          width={300}
          height={200}
        />
      </HStack>
    </Section>
  </PageContainer>
);

const Introduce = () => (
  <VStack className="bg-white p-20">
    <HStack className="gap-x-20 pb-20 border-b">
      <Image
        className="w-96 h-96 object-cover flex-grow-1 flex-shrink-0 border p-4"
        alt="work"
        width={1065}
        height={1331}
        src="/img/industry_1.avif"
      />
      <VStack className="justify-between">
        <VStack>
          <H2 className="px-4 border-l-4 border-red-800 font-medium">
            Ganesh Valve Products is one of the most popular names in the market
            of Ahmedabad.
          </H2>
          <br />
          <Para className="text-black/50">
            We are serving as a commendable valve manufacturer and supplier in
            the market. We offer a wide assortment of valves such as ball valve,
            globe valve, butterfly valve, needle valve, gland cock valve, non
            return valve, gate valve, carbon steel swing check valve, and many
            more. The valves that we offer are manufactured using the most
            advanced tools and technology. These valves are widely known for
            their superb quality, great strength, fine make and long service
            life. Our valves find their various applications in different
            industries. <br />
            <br />
            Moreover, our expertise in offering cast iron T type strainer and
            cast iron Y type strainer has allowed us to gain a decent clientele
            in Ahmedabad. We are providing our valves in different sizes and
            specifications. You can connect with us now by dialing our numbers.
          </Para>
        </VStack>
        <HStack className="justify-between">
          {STATS.map((props, i) => (
            <Stat key={i} {...props} />
          ))}
        </HStack>
      </VStack>
    </HStack>
  </VStack>
);

const Specialities = () => (
  <VStack className="bg-white px-20 gap-y-8">
    <H2 className="px-4 border-l-4 border-red-800 font-medium">
      Our Specialities
    </H2>
    <HStack className="justify-between pb-20 gap-y-8 gap-x-12">
      {SPECIALITIES.map((props, i) => (
        <Speciality key={i} {...props} />
      ))}
    </HStack>
  </VStack>
);



// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// --------------------------------------------------- HOME COMPOENTS ----- END
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ---------------------------------------------- SHARED COMPONENTS ----- START
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

const Logo = () => (
  <div className="flex flex-row items-center">
    <Image
      className="hue-rotate-[290deg] contrast-200"
      src="/logo.png"
      width={48}
      height={48}
      alt="logo"
    />
    <span className="font-bold text-red-800 leading-4">
      GANESH
      <br />
      VALVES
    </span>
  </div>
);

const Stat: React.FC<any> = ({ value, title }) => (
  <VStack className="gap-y-2">
    <H2 className="text-6xl">{value}</H2>
    <Para className="text-black/50">{title}</Para>
  </VStack>
);

const Speciality: React.FC<any> = ({ title, desc }) => (
  <VStack className="gap-y-2 p-4 border w-full">
    <H2 className="text-xl font-medium">{title}</H2>
    <Para className="text-black/50">{desc}</Para>
  </VStack>
);

const Button: React.FC<any> = ({ className, ...rest }) => (
  <button
    className={clsx(
      "bg-red-800 h-8 px-3 uppercase text-white text-xs font-bold flex flex-row items-center justify-center",
      className
    )}
    {...rest}
  />
);

const Header = () => (
  <div className="bg-white/75 backdrop-blur-md border-b sticky top-0 z-50">
    <PageContainer>
      <header className="h-20 w-full flex flex-row items-center justify-between">
        <Logo />
        <HStack className="hidden md:flex h-full">
          {NAV_LINKS.map((o) => (
            <Link
              className="px-8 text-xs font-bold text-black/[0.60] hover:text-black h-full flex items-center justify-center"
              key={o.href}
              href={o.href}
            >
              {o.label.toUpperCase()}
            </Link>
          ))}
        </HStack>
        <Button className="drop-shadow-md hover:drop-shadow-2xl transition-all duration-500">
          Contact Sales{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Button>
      </header>
    </PageContainer>
  </div>
);

const PageContainer: React.FC<any> = ({ className, ...rest }) => (
  <div
    className={clsx("max-w-[80rem] w-full px-4 m-auto", className)}
    {...rest}
  />
);

const ZStack: React.FC<any> = ({ list = [] }) => (
  <div className="grid grid-rows-1 grid-cols-1 w-full">
    {list.map(({ zIndex, view }: any) => (
      <div
        key={zIndex}
        className={`col-start-1 row-start-1 col-end-1 row-end-1 ${zIndex}`}
      >
        {view}
      </div>
    ))}
  </div>
);

const HStack: React.FC<any> = ({ className, ...rest }) => (
  <div {...rest} className={`flex flex-row ${className}`} />
);

const VStack: React.FC<any> = ({ className, ...rest }) => (
  <div {...rest} className={`flex flex-col ${className}`} />
);

const Guides = () => (
  <HStack className="w-full h-full justify-between">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="w-[1px] h-full bg-slate-200" />
    ))}
  </HStack>
);

const Section: React.FC<any> = ({ ...rest }) => (
  <ZStack
    list={[
      { zIndex: "z-0", view: <Guides /> },
      { zIndex: "z-10", view: <div {...rest} /> },
    ]}
  />
);

const H1: React.FC<any> = ({ className, ...rest }) => (
  <h1 className={twMerge(clsx("text-3xl", className))} {...rest} />
);

const H2: React.FC<any> = ({ className, ...rest }) => (
  <h2 className={twMerge(clsx("text-2xl", className))} {...rest} />
);

const H3: React.FC<any> = ({ className, ...rest }) => (
  <h3 className={twMerge(clsx("text-xl", className))} {...rest} />
);

const H4: React.FC<any> = ({ className, ...rest }) => (
  <h4 className={twMerge(clsx("text-lg", className))} {...rest} />
);

const H5: React.FC<any> = ({ className, ...rest }) => (
  <h5 className={twMerge(clsx("text-md", className))} {...rest} />
);

const H6: React.FC<any> = ({ className, ...rest }) => (
  <h6 className={twMerge(clsx("text-sm", className))} {...rest} />
);

const Para: React.FC<any> = ({ className, ...rest }) => (
  <p className={twMerge(clsx("text-xs", className))} {...rest} />
);

const FooterLinks = () => (
  <HStack className="flex-grow justify-around">
    {[Routes.Products, Routes.Company, Routes.Resources, Routes.Social].map(
      (o: Routes) => (
        <VStack key={o}>
          <Link href={o}>
            <H6 className="text-black/[0.60] hover:text-black font-bold uppercase text-xs mb-2">
              {o.slice(1)}
            </H6>
          </Link>
          {FOOTER_LINKS[o].map((l: any) => (
            <Link className="py-1" href={l.href} key={l.href}>
              <Para className="text-black/[0.60] hover:text-black">
                {l.label}
              </Para>
            </Link>
          ))}
        </VStack>
      )
    )}
  </HStack>
);

const Footer = () => (
  <>
    <PageContainer>
      <Section>
        <VStack className="p-20 items-center justify-center">
          <H2 className="text-xs font-bold uppercase text-red-800">Let&apos;s work together</H2>
          <br/>
          <Para className="text-black/50 text-center">We are provide valves in different sizes and specifications.
          <br/>You can connect with us now by contacting us.</Para>
          <br/>
          <Button className="drop-shadow-md hover:drop-shadow-2xl transition-all duration-500">
          Contact Sales{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-3 h-3 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Button>
        </VStack>
        </Section>
    </PageContainer>
    <div className="bg-white border-t">
      <PageContainer>
        <footer>
          <VStack>
            <HStack className="justify-between pt-10 pb-6">
              <VStack className="w-full md:w-96 max-w-96">
                <Logo />
              </VStack>
              <FooterLinks />
            </HStack>
            <HStack className="h-20 border-t items-center justify-between">
              <p className="text-xs">
                ©2023 Ganesh Valves, All Rights Reserved
              </p>
              <p className="text-xs flex flex-row">
                Made by &nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-red-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                    clipRule="evenodd"
                  />
                  <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                  <path
                    fillRule="evenodd"
                    d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
                &nbsp; in Ahmedabad
              </p>
            </HStack>
          </VStack>
        </footer>
      </PageContainer>
    </div>
  </>
);

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ------------------------------------------------ SHARED COMPONENTS ----- END
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
