import Image from "next/image";

const HeroSection = () => {
  const images = "/team_2081.jpeg";

  return (
    <div className='relative w-full mb-4'>
      <section className='relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh]'>
        <Image
          src={images}
          alt='Hero Image'
          fill
          style={{
            objectFit: "cover",
            objectPosition: "50% 30%",
          }}
          sizes='100vw'
          priority
          className='w-full'
        />
      </section>
      {/* Wave overlay */}
      <div className='absolute -bottom-4  left-0 right-0 w-full overflow-hidden'>
        <svg
          className='w-full h-16 sm:h-20 md:h-24 lg:h-32'
          preserveAspectRatio='none'
          viewBox='0 0 1440 320'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            transform: "scale(1.1)",
            position: "relative",
            left: "-5%",
            width: "110%",
          }}
        >
          <path
            fill='white'
            d='M0,160L24,165.3C48,171,96,181,144,165.3C192,149,240,107,288,96C336,85,384,107,432,144C480,181,528,235,576,234.7C624,235,672,181,720,170.7C768,160,816,192,864,192C912,192,960,160,1008,144C1056,128,1104,128,1152,149.3C1200,171,1248,213,1296,213.3C1344,213,1392,171,1416,149.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z'
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
