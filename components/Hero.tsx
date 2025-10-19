import Image from 'next/image'

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-yankees-blue to-maastricht-blue text-white py-20">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[500px]">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-baby-powder mb-6">
              Counterforce-One
            </h1>
            <h2 className="text-2xl font-light mb-6 text-slate-gray">
              Community Resilience to Health Misinformation among Gay, Bisexual, and Other Men who have Sex with Men (gbMSM) Using Reddit
            </h2>
            <p className="text-xl text-baby-powder leading-relaxed">
              A computational machine learning and network analysis project, powered by Counter-force-one, analyzing how online communities
              respond to health misinformation in LGBTQ+ digital spaces.
            </p>
          </div>

          {/* Right Column - Logo */}
          <div className="flex items-stretch justify-center lg:justify-end">
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src="/counterforce_logo4_dark_bg.png"
                alt="Counterforce-One Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
