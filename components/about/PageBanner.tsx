import Image from "next/image"

export function PageBanner() {
  return (
    <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-foreground py-20">
      {/* Background banner image */}
      <Image
        src="/Kabaddi_2014_Banner_1.jpg"
        alt="Kabaddi Films banner"
        fill
        className="object-cover opacity-30"
        priority
        sizes="100vw"
      />

      {/* Transparent camera decoration */}
      <Image
        src="/vintage_camera.png"
        alt=""
        width={320}
        height={320}
        className="absolute right-8 bottom-0 hidden opacity-10 lg:block"
        aria-hidden
      />

      <div className="relative z-10 container">
        <span className="label text-primary">Who We Are</span>
        <h1 className="mt-3 max-w-2xl text-background">
          More Than a Banner — A Movement in Nepalese Cinema
        </h1>
        <p className="lead mt-4 max-w-xl text-white/70">
          Kabaddi Films pioneers Organic Cinema rooted in
          Limbu&nbsp;/&nbsp;Yakthung heritage and the raw beauty of Nepal&apos;s
          eastern hills.
        </p>
      </div>
    </section>
  )
}
